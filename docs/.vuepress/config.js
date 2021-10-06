module.exports = {
  lang: 'zh-CN',
  // title: '你好， VuePress ！',
  // description: '这是我的第一个 VuePress 站点',
  markdown: {
    toc: {
      level: [4],
      anchor: true,
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
