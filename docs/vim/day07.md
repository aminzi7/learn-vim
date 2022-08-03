# 在单⽂件中移动的更快

## 滚动

一屏

`ctrl-f(forward)`：向下滚动一屏

`ctrl-b(backward)`：向上滚动一屏



半屏

`ctrl-d`：下

`ctrl-u`：上



一行

`ctrl-e`：下

`ctrl-y`：上



配置

```json
"vim.visualModeKeyBindings": [
      {
        "before":["J"],
        "after":["5","j"]
      },
      {
        "before":["K"],
        "after":["5","k"]
      },
    ],
"vim.normalModeKeyBindings": [

      {
        "before":["J"],
        "after":["5","j"]
      },
      {
        "before":["K"],
        "after":["5","k"]
      },
    ],
```



## 操作

`zz`：把光标放在屏幕中间

`zt(top)`：把光标置于屏幕顶部附近

`zb(bottom)`：置于屏幕底部



`gg`：跳到⽂件⾸

`G`：跳到⽂件尾



跳到指定⾏

`行数 + gg`：

`行数 + G`
