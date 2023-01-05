const { title, description } = require('../../package')
const sidebar = [
  ['/', 'HOME'],
  {
    title: 'BOT',
    path: '/bot/',
    sidebarDepth: 1,
    children: [
      ['あくまのめだま'],
      'ボット設置のガイドライン',
      '稼働中のボット一覧',
    ]
  },
]

module.exports = {
  title: title,
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  themeConfig: {
    search: false,
    sidebar: sidebar,
  },
  plugins: [],
}

