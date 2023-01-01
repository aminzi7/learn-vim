# 在 vim 中活下去
## vim模式

这里先学两个模式：`normal` 模式、`insert` 模式 

### normal 模式

是使用 `h` 左 ，`j` 下， `k` 上，`l` 右 来进行移动的

### insert 模式

是平时的输入法输入文字

退出insert模式 `esc`  或者 `ctrl + [`


### 使用 `vim 插件` vscode 中改键

`esc` 这个按键比较远，所以可以改键。（看你的需求）


vscode 环境, `ctrl shift p` 打开 `settings`

```json
"vim.insertModeKeyBindings": [
    {
        "before": ["j", "j"],
        "after": ["<Esc>"]
    },

],
```

### 在 `vim` 终端退出

- 保存并退出 `:wq`

- 强制退出，不保存 `:q!`


## 使用软件改建

`Ctrl` 和 `caps` 调换位置

- 修改后退出 insert 模式 `caps + [` 

- 使用：[powertoys](https://docs.microsoft.com/zh-cn/windows/powertoys/keyboard-manager )
- 安装：[github - powertoys](https://github.com/microsoft/PowerToys)

## win
- window 环境下 `crtl` + `[` 没反应


```json
"vim.useCtrlKeys":"true"
```