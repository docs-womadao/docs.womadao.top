import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const math = require('remark-math');
const katex = require('rehype-katex');

const config: Config = {
  title: '沃玛岛帮助文档',
  tagline: 'A docs website of WarmaChannelsServer',
  url: 'https://docs.warma.fans',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'docsWomadao', // Usually your GitHub org/user name.
  projectName: 'DocsOfWMD', // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/docs-womadao/docs.womadao.top',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/docs-womadao/docs.womadao.top',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["zh", "en"],
        indexDocs: true,
        indexBlog: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: 'blog'
      }),
    ],
  ],

  themeConfig: {
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
          label: '沃玛岛服务器帮助文档',
        },
        {to: '/blog', label: '相关教程', position: 'left'},
        {
          href: 'https://skin.warma.fans',
          label: '沃玛岛皮肤站',
          position: 'right',
        },
        {
          href: 'https://github.com/docs-womadao/docs.womadao.top',
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
              label: '沃玛岛服务器官网',
              href: 'http://mc.warma.fans',
            },
            {
              label: 'fanbook频道入口',
              href: 'https://in.fanbook.cn/47BB6FmH',
            },
            {
              label: '沃玛频道QQ群',
              href: 'http://warma.fans',
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
