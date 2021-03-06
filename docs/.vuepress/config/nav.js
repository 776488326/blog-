// nav
module.exports = [
  { text: '首页', 
    link: '/' 
  },
  { text: '简历', 
    link: '/resume/' 
  },
  {
    text: '计算机',
    link: '/compute/',
    items: [
      {text: "Http",link: "/compute/http/"},
      {text: "DateStruct",link: "/compute/ds/"},
      {text: "OperatingSystem",link: "/compute/os/"},
    ]
  },
  {
    text: '前端',
    link: '/web/',
    items: [
      { text: 'Html', link: '/web/html/' },
      { text: 'Css', link: '/web/css/' },
      { text: 'JavaScript', link: '/web/js/' },
      { text: 'TypeScript', link: '/web/ts/' },
      { text: 'Vue2', link: '/web/vue2/' },
      { text: 'Vue3', link: '/web/vue3/' },
      { text: 'Webpack', link: '/web/webpack/' },
      { text: 'Vite', link: '/web/vite/' },
      { text: 'Reg', link: '/web/reg/' },
    ],
  },
  {
    text: '后端',
    link: '/node/',
    items: [
      { text: 'Node', link: '/node/node/' },
      { text: 'MongoDB', link: '/node/mongodb/' },
      { text: 'Koa', link: '/node/koa/' },
      { text: 'Any', link: '/node/any/' },
    ],
  },
  {
    text: "收藏夹",
    link: '/collect/',
    items: [
      { text: "Website", link: "/collect/website/"},
      { text: "headCoding", link: "/collect/code/"},
    ]
  }
]
