// nav
module.exports = [
  { text: '首页', link: '/' },
  { text: '简历', link: '/resume/' },
  {
    text: '计算机',
    link: '/compute/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    
  },
  {
    text: '前端',
    link: '/web/',
    items: [
      { text: 'HTML', link: '/web/html/' },
      { text: 'CSS', link: '/web/css/' },
      { text: 'JS', link: '/web/js/' },
      { text: 'VUE', link: '/web/vue/' },
    ],
  },
  {
    text: '笔记',
    link: '/note/',
    items: [
      { text: '技术文档', link: '/note/tec/' },
      { text: 'GitHub技巧', link: '/note/github/' },
      { text: 'Nodejs', link: '/note/node/' },
      { text: '学习笔记', link: '/note/study/' },
    ],
  },
  {
    text: "神级网站",
    link: '/web/collect/'
  }
]
