// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '沃频服务器帮助文档',
  tagline: 'A docs website of WarmaChannelsServer',
  url: 'https://docs.warma.fans',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'Github/Twiyin0', // Usually your GitHub org/user name.
  projectName: 'DocsOfWMD', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Twiyin0/docs.womadao.top',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Twiyin0/docs.womadao.top',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    // ... Your other themes.
    
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '首页',
        logo: {
          alt: '首页',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '沃玛频道帮助文档',
          },
          {to: '/blog', label: '相关教程', position: 'left'},
          {
            href: 'https://skin.warma.fans',
            label: '沃玛频道皮肤站',
            position: 'right',
          },
          {
            href: 'https://github.com/Twiyin0/docs.womadao.top',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '帮助文档首页',
                to: '/docs/intro',
              },
              {
                label: '教程',
                to: '/blog',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '沃玛频道服务器官网',
                href: 'http://mc.warma.fans',
              },
              {
                label: 'fanbook频道入口',
                href: 'https://in.fanbook.cn/47BB6FmH',
              },
              {
                label: 'QQ频道入口',
                href: 'http://warma.fans',
              },
              {
                label: '沃玛频道QQ群',
                href: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ZmjywsoV8pAeY5KLY1UT3WCTuBt8h36e&authKey=jgq1UHXQ3gUum4b1iLVQ%2F8y3EPWmsoGcfRXOBG7CBuojq2I0CjXMck2KHK5zoaKD&noverify=0&group_code=425996382',
              },

            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: '沃玛频道官网',
                href: 'https://www.warma.fans',
              },
              {
                label: '音铃的博客',
                href: 'https://blog.twiyin0.cn',
              },
              {
                label: 'vlssu公益服',
                href: 'https://vlssu.cn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Twiyin0, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
