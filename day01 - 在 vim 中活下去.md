# 在 vim 中活下去
## vim模式

normal 模式

- 命令模式



insert 模式 

- 平时的打字输入

## 操作

- 基本移动： `h`左 ，`j`下， `k` 上，`l`  右



### 在终端退出

- 保存并退出：`:wq`

- 强制退出，不保存：`:q!`



### 退出insert模式

- `esc`  或者 `ctrl + [`



### 改键S

`esc`  s

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


```JSON
"vim.useCtrlKeys":"true"
```