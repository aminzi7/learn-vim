const commonPath = "/vim";

export default [
  {
    text: "Vim",
    items: [
      // { text: 'Index', link: '/vim/' }, // /guide/index.md
      {
        text: "在 vim 中活下去",
        link: `${commonPath}/day01`,
      },
      { text: "掌握⾏相关的命令", link: `${commonPath}/day02` },
      { text: "掌握 vim 的语法", link: `${commonPath}/day03` },
      { text: "更有效率的处理单字符", link: `${commonPath}/day04` },
      { text: "掌握可视化模式", link: `${commonPath}/day05` },
      { text: "掌握文本对象", link: `${commonPath}/day06` },
      { text: "在单⽂件中移动的更快", link: `${commonPath}/day07` },
      { text: "掌握搜索", link: `${commonPath}/day08` },
      { text: "想去哪⾥就去哪⾥", link: `${commonPath}/day09` },
      { text: "数字和点", link: `${commonPath}/day10` },
      { text: "多文件之间跳转", link: `${commonPath}/day11` },
      { text: "处理包裹字符的符号", link: `${commonPath}/day12` },
      { text: "替换字符", link: `${commonPath}/day13` },
      { text: "掌握悬浮显示&大小写&注释", link: `${commonPath}/day14` },
    ],
  },
];
