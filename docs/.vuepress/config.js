module.exports = {
  lang: 'zh-CN',
  base: '/books/',
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
  },
}
