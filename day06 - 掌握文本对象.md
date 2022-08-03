# 掌握文本对象
练习

```js
  function setName(_name,age) {
    name = _name

    const cxr = `cxr`
    const cxr = ""
    const cxr = ''
  }

  obj["name"]

  this is a juzi.
  this is a juzi!
  this is a juzi?


  <div>s is a test for t</div>
```

- `i` 选则的范围是 内部

- `a` 选则的范围是 外部

## 文本对象

- `w`：一个单词

- `()` 或者 `b`：选则一对括号

- `[]`：

- `{}` 或者 `B`：选则一对 {}

- `<>`：选则一对标签

- `t`：选取标签内容

- `''`：

- `""`：

- `：

- `s`：选取一个句子，只有当后面 `.`    `!`     `?` 才是一个句子

- `p`：选取一个段落空格为一个段落


## 操作
- `operator` + `范围` + `文本对象`

- `可视化`  +  `范围` + `文本对象`


## 组合

### 基于参数的选则

- `vim-textobj-arguments` 默认开启

- `ia`：不包含分隔符，就是逗号

- `aa`：包含分隔符，就是逗号



### 基于全部文本的选则


- `ie`：删除当前⽂本所有内容，后面会有空格


- `ae`：删除当前⽂本所有内容



