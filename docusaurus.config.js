// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Womadao Docs',
  tagline: 'A docs website of Womadao',
  url: 'https://docs.twiyin0.cn',
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        indexDocs: true,
        indexBlog: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: 'blog',
        translations: {
            "search_placeholder": "搜索",
            "see_all_results": "查看所有结果",
            "no_results": "没有结果。",
            "search_results_for": "搜索结果\"{{ keyword }}\" ",
            "search_the_documentation": "搜索文档",
            "count_documents_found": "{{ count }} 个文档找到",
            "count_documents_found_plural": " {{ count }} 个文件找到",
            "no_documents_were_found": "没有找到文件"
        }
      },
    ],
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
            label: '沃玛岛帮助文档',
          },
          {to: '/blog', label: '相关教程', position: 'left'},
          {
            href: 'https://skin.warma.ren',
            label: '沃玛人皮肤站',
            position: 'right',
          },
          {
            href: 'https://github.com/Twiyin0',
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
                label: '沃玛岛官网',
                href: 'https://womadao.top',
              },
              {
                label: 'QQ群',
                href: 'https://jq.qq.com/?_wv=1027&k=jUYsLhWD',
              }
            ],
          },
          {
            title: '更多信息',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Twiyin0',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Twiyin0, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
