# 在 vim 中活下去
## vim模式

这里先学两个模式：`normal` 模式、`insert` 模式 

### normal 模式

是使用 `h` 左 ，`j` 下， `k` 上，`l` 右 来进行移动的

### insert 模式

是平时的输入法输入文字
- `i` 光标前插入
- `a` 光标后插入

退出insert模式 
- `esc`  
-  `ctrl + [` 建议这个，手部移动范围小


### 使用 `vim 插件` vscode 中改键

`esc` 这个按键比较远，所以可以改键。（看你的需求）


vscode 编辑器, `ctrl shift p` 打开 `open user settings.json`

```json
"vim.insertModeKeyBindings": [
    // 修改推出 insert 模式
    {
        "before": ["j", "j"], // 或者 j k
        "after": ["<Esc>"]
    },

],
```

### 在 `vim` 终端退出

- `:wq` 保存并退出

- `:q!` 强制退出，不保存


## 使用软件改建

`Ctrl` 和 `caps` 调换位置

- 修改后退出 insert 模式 `caps + [` 

- 使用：[powertoys](https://docs.microsoft.com/zh-cn/windows/powertoys/keyboard-manager )
- 安装：[github - powertoys](https://github.com/microsoft/PowerToys)

## 配置快速移动
mac
- https://github.com/VSCodeVim/Vim#mac
```
$ defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false              # For VS Code
$ defaults write com.microsoft.VSCodeInsiders ApplePressAndHoldEnabled -bool false      # For VS Code Insider
$ defaults write com.visualstudio.code.oss ApplePressAndHoldEnabled -bool false         # For VS Codium
$ defaults write com.microsoft.VSCodeExploration ApplePressAndHoldEnabled -bool false   # For VS Codium Exploration users
$ defaults delete -g ApplePressAndHoldEnabled                                           # If necessary, reset global default
```
打开键盘

![mac键盘](/public/mac_jianpan.png)

## win
- window 环境下 `crtl` + `[` 没反应


```json
"vim.useCtrlKeys":"true"
```