# 调用 vscode 的命令

## 格式化文档

`<Leader>+f+d` 格式化文档 `shift+alt+f`

## 重命名

`<Leader>+r+n` 重命名 `f2`

## 折叠代码

`<Leader>+[`

```
  "vim.normalModeKeyBindingsNonRecursive": [
    // 格式化文档
    {
      "before": ["<leader>", "f", "d"],
      "commands": ["editor.action.formatDocument"]
    },
    // 重命名
    {
      "before": ["<leader>", "r", "n"],
      "commands": ["editor.action.rename"]
    },
    // 折叠
    {
      "before": ["<leader>", "["],
      "command": [
        {
          "command": "editor.fold"
        },
        {
          "command": "vim.remap",
          "args": {
            "after": ["$", "%"]
          }
        }
      ]
    },
  ]

```
