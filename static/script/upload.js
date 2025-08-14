const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const { Client } = require('ssh2');

// 配置参数 - 确保所有路径都正确定义
const config = {
	// 本地目录配置
	localDir: path.resolve(__dirname, '../../build'), // 使用绝对路径
	archiveFileName: 'build.tar.gz', // 明确的文件名
	
	// 远程服务器配置
	remoteHost: env.HOSTNAME,
	remotePort: 22,
	remoteUsername: env.USERNAME,
	remotePassword: env.PASSWD,
	remoteDir: env.REMOTE_DIR,
	cleanup: true
};

// 1. 打包目录为tar.gz文件（包含所有文件和子目录）
function createTarGz() {
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
  
        // 关键修改：添加整个目录内容（包括文件和子目录）
        archive.directory(config.localDir, false); // 第二个参数false表示保留目录结构
  
        archive.finalize();
      } catch (err) {
        reject(err);
      }
    });
}


// 2. 通过SFTP上传到远程服务器并解压
function uploadAndExtract(archiveFilePath) {
  return new Promise((resolve, reject) => {
    const conn = new Client();
    const remoteArchivePath = path.posix.join(config.remoteDir, config.archiveFileName);
    
    conn.on('ready', () => {
      console.log('SSH connection established');
      
      conn.sftp((err, sftp) => {
        if (err) {
          reject(err);
          return;
        }

        console.log('Starting file upload...');
        const readStream = fs.createReadStream(archiveFilePath);
        const writeStream = sftp.createWriteStream(remoteArchivePath);

        writeStream.on('close', () => {
          console.log(`File uploaded to ${remoteArchivePath}`);
          
          console.log('Starting extraction on remote server...');
          conn.exec(`tar -xzvf ${remoteArchivePath} -C ${config.remoteDir}`, (err, stream) => {
            if (err) {
              reject(err);
              return;
            }

            stream.on('data', (data) => {
              console.log('REMOTE:', data.toString());
            });

            stream.on('close', (code, signal) => {
              if (code === 0) {
                console.log('Extraction completed');
                
                if (config.cleanup) {
                  sftp.unlink(remoteArchivePath, (err) => {
                    if (err) {
                      console.warn(`Could not delete remote archive: ${err.message}`);
                    } else {
                      console.log('Remote archive removed');
                    }
                    conn.end();
                    resolve();
                  });
                } else {
                  conn.end();
                  resolve();
                }
              } else {
                conn.end();
                reject(new Error(`Extraction failed with code ${code}`));
              }
            });

            stream.stderr.on('data', (data) => {
              console.error('Remote error:', data.toString());
            });
          });
        });

        writeStream.on('error', (err) => {
          conn.end();
          reject(err);
        });

        readStream.pipe(writeStream);
      });
    }).connect({
      host: config.remoteHost,
      port: config.remotePort,
      username: config.remoteUsername,
      password: config.remotePassword,
      // privateKey: config.privateKey
    });
  });
}

// 主函数
async function main() {
try {
    console.log('Starting process...');
    const archiveFilePath = await createTarGz();
    console.log('Archive created at:', archiveFilePath);
    await uploadAndExtract(archiveFilePath);
    console.log('Process completed successfully!');
    fs.unlinkSync(archiveFilePath);
    console.log('Local archive removed');
    } catch (error) {
        console.error('Process failed:', error);
        process.exit(1);
    }
}

main().catch(console.error);