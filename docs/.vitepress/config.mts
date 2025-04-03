import type { DefaultTheme, HeadConfig } from 'vitepress'
import { defineConfig } from 'vitepress'

import pkg from '../../package.json' with { type: 'json' }

const sharedThemeConfig = {
  socialLinks: [
    { icon: 'rss', link: 'https://www.zla.pub' },
    { icon: 'github', link: 'https://github.com/ZL-Asica/SuzuBlog' },
  ],
  search: {
    provider: 'local' as const,
  },
  footer: {
    message: {
      zh: '此文档基于 CC BY 4.0 进行授权',
      en: 'This docs Licensed under CC BY 4.0',
    },
    copyright: {
      zh: '©️ 2024-Present <a href="https://www.zla.pub" target="_blank">ZL Asica</a> 版权所有',
      en: 'Copyright ©️ 2024-Present <a href="https://www.zla.pub" target="_blank">ZL Asica</a>',
    },
  },
  editLink: {
    patter: 'https://github.com/ZL-Asica/docs-SuzuBlog/edit/main/docs/:path',
  },
}

const sharedHeadConfig = {
  zh: [
    ['meta', { name: 'description', content: 'SuzuBlog 的文档站点' }],
    ['meta', { name: 'keywords', content: 'SuzuBlog, 文档, VuePress, Next.js' }],
    ['meta', { property: 'og:description', content: 'SuzuBlog 的文档站点' }],
  ] as HeadConfig[],
  en: [
    ['meta', { name: 'description', content: 'SuzuBlog Docs' }],
    ['meta', { name: 'keywords', content: 'SuzuBlog, Docs, VuePress, Next.js' }],
    ['meta', { property: 'og:description', content: 'SuzuBlog Docs' }],
  ] as HeadConfig[],
}

const sharedNavConfig = {
  zh: [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide' },
    {
      text: `v${pkg.version}`,
      items: [
        { text: '版本发布', link: 'https://github.com/ZL-Asica/SuzuBlog/releases' },
        { text: '参与贡献', link: 'https://github.com/ZL-Asica/SuzuBlog/blob/main/CONTRIBUTING.md' },
      ],
    },
  ] as DefaultTheme.NavItem[],
  en: [
    { text: 'Home', link: '/en/' },
    { text: 'Guide', link: '/en/guide' },
    {
      text: `v${pkg.version}`,
      items: [
        { text: 'Releases', link: 'https://github.com/ZL-Asica/SuzuBlog/releases' },
        { text: 'Contribution', link: 'https://github.com/ZL-Asica/SuzuBlog/blob/main/CONTRIBUTING.md' },
      ],
    },
  ] as DefaultTheme.NavItem[],
}

const sharedSidebarConfig = {
  zh: [
    {
      items: [
        { text: '快速开始', link: '/guide/' },
        { text: '本地开发', link: '/guide/dev' },
        { text: '常见问题', link: '/guide/faq' },
      ],
    },
    {
      text: '配置文件',
      items: [{ text: 'config.yml', link: '/guide/config' }],
    },
    {
      text: '文章及页面',
      items: [
        { text: '博客文章配置', link: '/guide/posts/' },
        { text: 'Markdown 语法支持', link: '/guide/posts/grammar' },
        { text: '_pages', link: '/guide/posts/pages' },
        { text: '友情链接', link: '/guide/posts/friends' },
      ],
    },
    { items: [{ text: '参与贡献', link: '/guide/contribution' }] },
  ],
  en: [
    {
      items: [
        { text: 'Quick Start', link: '/en/guide/' },
        { text: 'Local Development', link: '/en/guide/dev' },
        { text: 'FAQ', link: '/en/guide/faq' },
      ],
    },
    {
      text: 'Config Files',
      items: [{ text: 'config.yml', link: '/en/guide/config' }],
    },
    {
      text: 'Posts & Pages',
      items: [
        { text: 'Blog Posts Settings', link: '/en/guide/posts/' },
        { text: 'Markdown Grammar', link: '/en/guide/posts/grammar' },
        { text: '_pages', link: '/en/guide/posts/pages' },
        { text: 'Friends', link: '/en/guide/posts/friends' },
      ],
    },
    { items: [{ text: 'Contribution', link: '/en/guide/contribution' }] },
  ],
}

export default defineConfig({
  title: 'SuzuBlog Docs',
  head: [
    ['meta', { name: 'author', content: 'ZL Asica' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { property: 'og:title', content: 'SuzuBlog Docs' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://suzu.zla.app' }],
    ['meta', { property: 'og:image', content: 'https://suzu.zla.app/apple-touch-icon.png' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      head: sharedHeadConfig.zh,
      themeConfig: {
        nav: sharedNavConfig.zh,
        sidebar: sharedSidebarConfig.zh,
        socialLinks: sharedThemeConfig.socialLinks,
        search: sharedThemeConfig.search,
        footer: {
          message: sharedThemeConfig.footer.message.zh,
          copyright: sharedThemeConfig.footer.copyright.zh,
        },
        editLink: {
          text: '在 GitHub 上编辑此页',
          pattern: sharedThemeConfig.editLink.patter,
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: sharedNavConfig.en,
        sidebar: sharedSidebarConfig.en,
        socialLinks: sharedThemeConfig.socialLinks,
        search: sharedThemeConfig.search,
        footer: {
          message: sharedThemeConfig.footer.message.en,
          copyright: sharedThemeConfig.footer.copyright.en,
        },
        editLink: {
          pattern: sharedThemeConfig.editLink.patter,
        },
      },
    },
  },
  sitemap: {
    hostname: 'https://suzu.zla.app',
    lastmodDateOnly: true,
  },
  lastUpdated: true,
})
