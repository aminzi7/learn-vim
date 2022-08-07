const commonPath = '/vim'

export default [
  {
    text: 'Vim',
    items: [
      // { text: 'Index', link: '/vim/' }, // /guide/index.md
      {
        text: '在 vim 中活下去',
        link: `${commonPath}/day01`
      },
      { text: '掌握⾏相关的命令', link: `${commonPath}/day02` },
      { text: '掌握 vim 的语法', link: `${commonPath}/day03` },
      { text: '更有效率的处理单字符', link: `${commonPath}/day04` },
      { text: '掌握可视化模式', link: `${commonPath}/day05` },
      { text: '掌握文本对象', link: `${commonPath}/day06` },
      { text: '在单⽂件中移动的更快', link: `${commonPath}/day07` },
      { text: '掌握搜索', link: `${commonPath}/day08` },
      { text: '想去哪⾥就去哪⾥', link: `${commonPath}/day09` }
    ]
  }
]
