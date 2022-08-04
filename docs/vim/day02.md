
# 掌握⾏相关的命令
## 移动

移动到当前行首：

- `0`
- `^` 不是 blank 字符 （不含空格回车）
  - 改键
  - H



移动到当前行尾：

- `$`
- `g_` 不是 blank 字符 （不含空格回车）
  - 改键
  - L


改键

```json
    "vim.normalModeKeyBindings": [
      // 行首
      {
        "before":["H"],
        "after":["^"]
      },
      // 行尾
      {
        "before":["L"],
        "after":["g","_"]
      },
    ]
```



## 插入

- 光标前插入：`i`

- 在当前行前插入： `I`

- 光标后插入：`a`

- 在当前行后插入： `A`

- 回车并插入：`o`

- 上方回车并插入：`O`


## 命令

- 复制当前行： `yy`

- S粘贴：`p`

- 删除整行：`dd`