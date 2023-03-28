# 掌握窗口的管理

## 默认

### 新建窗口

`C-w v` 左右

`C-w s` 上下

### 关闭窗口

`C-w+c`

### 窗口切换

`C-w hjkl`

`C-w w`

### 只保留当前窗口，关闭其他窗口

`C-w o`

## 改建扩展

### 新建窗口

`ctrl+\` 左右

`alt+ctrl+\` 上下

```
这个需要配置

>split editor up    设置按钮

```

mac

`command+\`

`command+ctrl+\`

### 关闭窗口

`ctrl+w`

`ctrl+k+w`

mac
`command+w`

`command+k+w`

### 窗口切换

`shift+方向键`

```
>keybindings.json
```

```
  {
    "key": "shift+left",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "h"]
    }
  },
  {
    "key": "shift+right",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "l"]
    }
  },
  {
    "key": "shift+down",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "j"]
    }
  },
  {
    "key": "shift+up",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "k"]
    }
  },
```

`shift+ctrl+hjkl` 没改建的话
