# 在 vim 中活下去

## vim模式

normal 模式
- 命令模式

insert 模式
- 平时的打字输入

## 操作

基本移动： `h`左 ，`j`下， `k` 上，`l`  右

## 退出 insert 模式

`esc`  或者 `ctrl + [`

## 改键

`esc`：不方便退出 insert 模式，改为 `j j` 方便操作

vscode 环境

```json
    "vim.insertModeKeyBindings": [
      {
      "before": ["j", "j"],
      "after": ["<Esc>"]
      },
      
    ],
```

`Ctrl` 和 `caps` 调换位置

- 修改后退出 insert 模式骚操作 `caps + [` 


vscode 环境

```json
    "vim.insertModeKeyBindings": [
      {
      "before": ["j", "j"],
      "after": ["<Esc>"]
      },
      
    ],
```

`Ctrl` 和 `caps` 调换位置

- 修改后退出 insert 模式骚操作 `caps + [` 

## window问题

- window 环境下 vsCode `crtl` + `[` 没反应

```json
"vim.useCtrlKeys":"true"
```

