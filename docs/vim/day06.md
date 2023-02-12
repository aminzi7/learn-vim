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

// 判断句子
this is a juzi.
this is a juzi!
this is a juzi?


<div>s is a test for t</div>
```

- `i` 选则的范围是 内部

- `a` 选则的范围是 外部

举例，选中括号里面的值
- `vi(`

- `va(`

## 文本对象

- `w` 选择一个单词
  - `viw` 选中当前单词
  - `vaw` 选中当先单词外，还选中空格
    - 空格分情bb
    - `let num= 0` 得到 ` num` 前面有空格
    - `let num = 0` 得到 `num ` 后面面有空格

- `()` 或者 `b`(b比较方便)：选则一对括号

- `[]`

- `{}` 或者 `B`(B比较方便)：选则一对 {}

- `<>` 选则一对标签

- `t` 选取标签内容

- `''` 一对'

- `""` 一对 "

- ` 一对 

- `s` (不常用)选取一个句子，只有当后面 `.`    `!`     `?` 才是一个句子

- `p` (不常用)选取一个段落空格为一个段落


## 操作
- 操作`operator` 【c,d,v】 + `范围` + `文本对象`

- `可视化`  +  `范围` + `文本对象`


## 组合

### 基于参数的选则

- `vim-textobj-arguments` 默认开启

- `ia` 不包含分隔符，就是逗号

- `aa` 包含分隔符，就是逗号



### 基于全部文本的选则


- `ie` 删除当前⽂本所有内容，后面会有空格


- `ae` 删除当前⽂本所有内容



