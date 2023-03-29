# 删除函数

`%` 当光标放在 `(` 中会基于 `(` 来匹配

```
 function xx (){}
```

## vim-indent-object

基于缩进来选中

注意：光标放在函数体

`<operator>ii` 根据缩进选中函数体

`<operator>ai` 根据缩进选中函数，带 `{}` 选不中

`<operator>aI` 根据缩进选中函数，带 `{}` 能选中

```
"vim.operatorPendingModeKeyBindings"

    {
      "before": ["a", "i"],
      "affect": ["a", "I"]
    }


  "vim.visualModeKeyBindings"
    {
      "before": ["a", "i"],
      "after": ["a", "I"]
    }
```

## V$%d

光标放在函数身上

```

  "vim.normalModeKeyBindings"
    {
      "before": ["<leader>", "d", "f"],
      "after": ["V", "$", "%", "d"]
    },
    {
      "before": ["<leader>", "d", "d","f"],
      "after": ["V", "$", "%", "$", "%", "d"]
    }
```
