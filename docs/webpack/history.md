---
title: 模块化的演进
date: 2021-03-18
---

## 以文件划分

基于文件划分的方式是 Web 最原始的模块系统。将每个功能及其数据放在不同的 JS 文件，并约定每个文件是一个独立的模块。使用哪个模块就将其引入到当前页面，一个`script`标签对应一个模块，然后直接调用模块中的成员。

- 文件结构

```
└─ stage-1

    ├── module-a.js

    ├── module-b.js

    └── index.html

```

- JS 模块

```js
// module-a.js

function foo() {
  console.log("moduleA#foo");
}
// module-b.js

var data = "something";
```

- 在页面中引入模块

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="UTF-8" />

    <title>Stage 1</title>
  </head>

  <body>
    <script src="module-a.js"></script>

    <script src="module-b.js"></script>

    <script>
      // 直接使用全局成员

      foo(); // 可能存在命名冲突
      console.log(data);

      data = "other"; // 数据可能会被修改
    </script>
  </body>
</html>
```

:::warning
模块直接在全局工作，模块成员污染全局作用域；</br>
没有私有空间，模块内的成员都可以在模块外部被访问或者修改；</br>
难以分辨每个成员所属的模块，对后期维护增加难度；</br>
容易产生命名冲突，很难分辨每个成员所属的模块；</br>
无法管理模块与模块之间的依赖关系。
:::

## 增加命名空间

直接引入模块会产生很多问题，最明显的就是不能区分成员所属的模块。自然地，就想到了
把模块成员封装到一个全局对象中，约定每个模块只暴露一个全局对象。这就好像为模块内的成员添加了“命名空间”。

- JS 模块

```js
// module-a.js
window.moduleA = {
  method1: function() {
    console.log("moduleA#method1");
  },
};

// module-b.js
window.moduleB = {
  data: 'something'
  method1: function () {
    console.log('moduleB#method1')
  }
}
```

- 引入模块

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="UTF-8" />

    <title>Stage 2</title>
  </head>

  <body>
    <script src="module-a.js"></script>

    <script src="module-b.js"></script>

    <script>
      moduleA.method1();
      moduleB.method1();
      // 模块成员依然可以被修改
      moduleB.data = "foo";
    </script>
  </body>
</html>
```

:::warning
显然，这种方式虽然解决了命名冲突的麻烦，其他问题仍然存在。
:::

## IIFE

模块仍然可以被修改，究其本质还是因为没有私有空间。JavaScript 中使用立即执行函数表达式(Immediately-Invoked Function Expression)为模块提供私有空间。
将每个模块成员都放在一个立即执行函数所形成的私有作用域中，对于需要暴露给外部的成员，通过挂到全局对象上的方式实现。

- 被立即执行函数包裹的 JS 模块

```js
// module-a.js

(function() {
  var name = "module-a";

  function method1() {
    console.log(name + "#method1");
  }

  window.moduleA = {
    method1: method1,
  };
})();
```

```js
// module-b.js

(function() {
  var name = "module-b";

  function method1() {
    console.log(name + "#method1");
  }

  window.moduleB = {
    method1: method1,
  };
})();
```

![模块中的成员无法被修改](https://cdn.jsdelivr.net/gh/xunlu1998/blogImg/img/20210322132307.png)

这种方式带来了私有成员的概念，私有成员`name`只能在模块成员内通过(./closure.md)[闭包]的形式访问，这在解决命名污染的同时，也解决了模块中成员被修改的问题。
