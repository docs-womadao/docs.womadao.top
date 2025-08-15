const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const { Client } = require('ssh2');
const crypto = require('crypto');
const { S3Client, PutObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3');

// Configuration
const config = {
  localDir: path.resolve(__dirname, '../../build'),
  archiveFileName: 'build.tar.gz',
  
  // Remote server configuration
  remoteHost: process.env.HOSTNAME,
  remotePort: 22,
  remoteUsername: process.env.USERNAME,
  remotePassword: process.env.PASSWD,
  remoteDir: process.env.REMOTE_DIR,
  cleanup: true,
  
  // R2 configuration
  r2Domain: process.env.R2DOMAIN,
  r2Config: {
    region: "auto",
    endpoint: process.env.ENDPOINT,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
    bucket: process.env.R2_BUCKET
  }
};

// Create tar.gz archive
async function createTarGz() {
  return new Promise((resolve, reject) => {
    try {
      const outputPath = path.resolve(__dirname, config.archiveFileName);
      console.log(`Creating archive from: ${config.localDir}`);
      
      const output = fs.createWriteStream(outputPath);
      const archive = archiver('tar', {
        gzip: true,
        gzipOptions: { level: 6 }
      });

      output.on('close', () => {
        console.log(`Archive created. Size: ${archive.pointer()} bytes`);
        resolve(outputPath);
      });

      archive.on('error', (err) => {
        console.error('Archive error:', err);
        reject(err);
      });

      archive.pipe(output);

      if (!fs.existsSync(config.localDir)) {
        throw new Error(`Source directory not found: ${config.localDir}`);
      }

      archive.directory(config.localDir, false);
      archive.finalize();
    } catch (err) {
      reject(err);
    }
  });
}

// Calculate MD5 hash of a file
function calculateFileMD5(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('md5');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (data) => hash.update(data));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', (err) => reject(err));
  });
}

// Upload to R2 without ContentMD5 header
async function uploadToR2(archiveFilePath) {
  const client = new S3Client(config.r2Config);
  const fileContent = fs.readFileSync(archiveFilePath);
  
  // Calculate local MD5 for later verification
  const localMD5 = await calculateFileMD5(archiveFilePath);
  console.log(`Local file MD5: ${localMD5}`);
  
  const command = new PutObjectCommand({
    Bucket: config.r2Config.bucket,
    Key: config.archiveFileName,
    Body: fileContent
    // Removed ContentMD5 as it causes issues with R2
  });

  await client.send(command);
  console.log('File uploaded to R2 successfully');
  return localMD5;
}

// Get R2 object MD5 hash from ETag
async function getR2ObjectMD5() {
  const client = new S3Client(config.r2Config);
  const command = new HeadObjectCommand({
    Bucket: config.r2Config.bucket,
    Key: config.archiveFileName
  });

  const response = await client.send(command);
  // ETag is usually the MD5 hash (wrapped in quotes)
  return response.ETag.replace(/"/g, '');
}

// Remote server operations
async function remoteDownloadAndExtract(expectedMD5) {
  return new Promise((resolve, reject) => {
    const conn = new Client();
    
    conn.on('ready', () => {
      console.log('SSH connection established');
      
      // Generate a temporary path on remote server
      const remoteArchivePath = path.posix.join(config.remoteDir, config.archiveFileName);
      const tempDownloadPath = path.posix.join(config.remoteDir, `temp_${config.archiveFileName}`);
      
      // Commands to execute on remote server
      const downloadUrl = `${config.r2Domain}/${config.archiveFileName}`;
      
      const commands = [
        // Download from R2
        `echo "Downloading from R2..."`,
        `wget -q -O ${tempDownloadPath} "${downloadUrl}"`,
        
        // Verify MD5 hash
        `echo "Verifying MD5 hash..."`,
        `remote_md5=$(md5sum ${tempDownloadPath} | awk '{print $1}')`,
        `if [ "$remote_md5" != "${expectedMD5}" ]; then`,
        `  echo "MD5 mismatch! Expected: ${expectedMD5}, Got: $remote_md5"`,
        `  rm -f ${tempDownloadPath}`,
        `  exit 1`,
        `fi`,
        
        // Move to final location if MD5 matches
        `mv ${tempDownloadPath} ${remoteArchivePath}`,
        
        // Extract
        `echo "Extracting archive..."`,
        `tar -xzvf ${remoteArchivePath} -C ${config.remoteDir}`,
        
        // Cleanup if configured
        config.cleanup ? `rm -f ${remoteArchivePath}` : 'true',
        `echo "Operation completed successfully"`
      ].join('\n');
      
      console.log('Executing remote commands...');
      conn.exec(commands, (err, stream) => {
        if (err) {
          reject(err);
          return;
        }

        stream.on('data', (data) => {
          console.log('REMOTE:', data.toString());
        });

        stream.on('close', (code, signal) => {
          if (code === 0) {
            console.log('Remote operations completed successfully');
            resolve();
          } else {
            reject(new Error(`Remote operations failed with code ${code}`));
          }
          conn.end();
        });

        stream.stderr.on('data', (data) => {
          console.error('Remote error:', data.toString());
        });
      });
    }).connect({
      host: config.remoteHost,
      port: config.remotePort,
      username: config.remoteUsername,
      password: config.remotePassword,
    });
  });
}

// Main function
async function main() {
  try {
    console.log('Starting process...');
    
    // Step 1: Create archive
    const archiveFilePath = await createTarGz();
    console.log('Archive created at:', archiveFilePath);
    
    // Step 2: Upload to R2 and get MD5
    const localMD5 = await uploadToR2(archiveFilePath);
    
    // Step 3: Verify R2 object MD5 matches local
    const remoteMD5 = await getR2ObjectMD5();
    console.log(`R2 object MD5: ${remoteMD5}`);
    
    if (localMD5 !== remoteMD5) {
      throw new Error(`MD5 hash mismatch! Local: ${localMD5}, R2: ${remoteMD5}`);
    }
    
    // Step 4: Remote server operations
    await remoteDownloadAndExtract(localMD5);
    
    // Cleanup local archive
    fs.unlinkSync(archiveFilePath);
    console.log('Local archive removed');
    
    console.log('Process completed successfully!');
  } catch (error) {
    console.error('Process failed:', error);
    process.exit(1);
  }
}

main().catch(console.error);