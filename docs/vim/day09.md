# 想去哪⾥就去哪⾥

## `vim-easymotion`

### 基于单词来匹配

比较常用的指令

`<leader><leader> w`

`<leader><leader> b`

`<leader><leader> e`

`<leader><leader> ge`



### 基于单词的前后匹配

可以匹配 `开头` 、`结尾` 、`大小写` 、 `_` 、 `#`

可以匹配所有按键，缺点是看起来密密麻麻的

`<leader><leader> l` 往下匹配

`<leader><leader> h` 往上匹配



### 基于行来跳转

`<leader><leader> j` 

`<leader><leader> k` 



### 匹配所有

`<leader><leader> <leader> j` 全部显示



### `<leader>`  是反斜杠 \ 的意思
配置

```js
"vim.easymotion": true,
"vim.leader": "<Space>",
```



## `vim-sneak`

与 `f` 功能搜索优点类似，只不过是 `f` 搜索到是基于行内跳转。

而 `sneak` 能够全局跳转

`sneak` 是两个字符的跳转

开启 `sneak`

```js
"vim.sneak": true,
```

开启后

按 `s` 来进行搜索，`； ` 搜索下一个， `，` 搜索上一个

按 `S` 来进行向上搜索。



因为 `f` 与 `s` 的搜索重复，做一些合并。

同时节约一次按键，回车键不用按了，而 `f` 搜索功能是需要按下回车键

配置修改

```js
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before":["f"],
    "after":["s"]
  },
  {
    "before":["F"],
    "after":["S"]
  },
  {
    "before":["s"],
    "after":["c","l"]
  },
  {
    "before":["S"],
    "after":["^","C"]
  },
],
```

可视化模式的配置
```js
"vim.visualModeKeyBindingsNonRecursive": [
  {
    "before":["f"],
    "after":["s"]
  },
  {
    "before":["F"],
    "after":["S"]
  },
],
```

合并键位
```js
"vim.operatorPendingModeKeyBindingsNonRecursive": [
  {
    "before":["f"],
    "after":["z"]
  },
  {
    "before":["F"],
    "after":["Z"]
  },
],
```