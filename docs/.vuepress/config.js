module.exports = {
  title: '@oyw',
  lang: 'zh-CN',
  base: '/books/',
  head: [
    ['link', { rel: 'icon', href: 'https://cn.vuejs.org/images/logo.svg' }],
  ],
  markdown: {
    toc: {
      level: [4],
    },
    extractHeaders: {
      level: [3, 4, 5],
    },
  },
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    lastUpdated: true,
    sidebarDepth: 3,
    navbar: [
      {
        text: 'home',
        link: '/',
      },
    ],
  },
}
