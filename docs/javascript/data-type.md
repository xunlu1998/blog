---
title: 数据类型
date: 2021-04-07
---

JavaScript 属于动态类型（dynamically typed），变量不会在定义后被限制为某一数据类型。

## Number

表示整数和浮点数，包括 `Infinity` 和 `NaN`。其中 `NaN` 是粘性的，如果数学表达式中有一个 `NaN`，会被传播到最终结果。

## BigInt

JavaScript 的 Number 类型无法表示<code>-（2<sup>53</sup>-1）</code>到<code>2<sup>53</sup>-1</code>范围之外的值，BigInt 就是用来解决这个局限性。

## String

1.  "" 双引号
2.  '' 单引号
3.  `` 反引号

<code>``</code>是<strong>功能扩展</strong>，允许使用<code>\${}</code>语法进行变量或表达式的拼接。It is useful at sometimes.

## Boolean

只有两个值：`true`和`false`。

## Null

只有一个值：`null`。表示无、空或值未知的特殊值。<strong>并不表示
对不存在的 `object` 的引用或者 `null` 指针。</strong>

## Undefined

表示变量未被赋值。

声明一个变量但未被赋值，变量值就是`undefined`。注意区别`not defined`和`undefined`，前者是 error，后者是值。

```js
alert(age); // age not defined
let age;
alert(age); // undefined
```

可以显示将`undefined`赋值给变量，但并不推荐这样做。通常，使用 `null` 将一个“空”或者“未知”的值写入变量中，而 `undefined` 则保留作为未进行初始化的事物的默认初始值。

## Object

`object` 类型是一个特殊的类型。

其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。相反，`object` 则用于储存数据集合和更复杂的实体。

## Symbol

## typeof 运算符

介绍完 JavaScript 的数据类型，有必要学习下`typeof`运算符，它支持两种语法：

1. 运算符：`typeof x`
2. 函数：`typeof(x)`
   一些 :chestnut: ：

```js
typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert; // "function"  (3)
```

对于最后 2 个结果有必要解释一下：

1. `typeof null` 的结果是 "object"。这是官方承认的 `typeof` 的行为上的错误，这个问题来自于 JavaScript 语言的早期，并为了兼容性而保留了下来。`null` 绝对不是一个 `object`。原因在于早期对`Object`对象的判断标准。
2. `typeof alert` 的结果是 "function"，因为 `alert` 在 JavaScript 语言中是一个函数。在 JavaScript 语言中没有一个特别的 “function” 类型。函数隶属于 `object` 类型。但是 `typeof` 会对函数区分对待，并返回 "function"。这也是来自于 JavaScript 语言早期的问题。从技术上讲，这种行为是不正确的，但在实际编程中却非常方便。
