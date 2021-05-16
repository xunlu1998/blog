(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{516:function(a,t,s){"use strict";s.r(t);var e=s(6),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("这不就是最原始的 Web 引入 JavaScript 代码吗，只不过是以不同文件保存不同的功能代码和相关状态数据，这也能叫模块化。")]),a._v(" "),s("h1",{attrs:{id:"早期的模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#早期的模块化"}},[a._v("#")]),a._v(" 早期的模块化")]),a._v(" "),s("h2",{attrs:{id:"stage1-文件划分方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stage1-文件划分方式"}},[a._v("#")]),a._v(" Stage1 文件划分方式")]),a._v(" "),s("p",[a._v("问题也很多")]),a._v(" "),s("ul",[s("li",[a._v("模块直接在全局工作，大量模块成员污染全局作用域；")]),a._v(" "),s("li",[a._v("没有私有空间，所有模块内的成员都可以在模块外部被访问或者修改；")]),a._v(" "),s("li",[a._v("一旦模块增多，容易产生命名冲突；")]),a._v(" "),s("li",[a._v("无法管理模块与模块之间的依赖关系；")]),a._v(" "),s("li",[a._v("在维护的过程中也很难分辨每个成员所属的模块。")])]),a._v(" "),s("h2",{attrs:{id:"stage2-命名空间方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stage2-命名空间方式"}},[a._v("#")]),a._v(" Stage2 命名空间方式")]),a._v(" "),s("p",[a._v("后来，我们约定每个模块只暴露一个全局对象，所有模块成员都挂载到这个全局对象中，具体做法是在第一阶段的基础上，通过将每个模块“包裹”为一个全局对象的形式实现，这种方式就好像是为模块内的成员添加了“命名空间”，所以我们又称之为命名空间方式。这种命名空间的方式只是解决了命名冲突的问题，但是其它问题依旧存在。")]),a._v(" "),s("h2",{attrs:{id:"stage3-iife"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stage3-iife"}},[a._v("#")]),a._v(" Stage3 IIFE")]),a._v(" "),s("p",[a._v("使用立即执行函数表达式（IIFE，Immediately-Invoked Function Expression）为模块提供私有空间。具体做法是将每个模块成员都放在一个立即执行函数所形成的私有作用域中，对于需要暴露给外部的成员，通过挂到全局对象上的方式实现。")]),a._v(" "),s("p",[a._v("这种方式带来了私有成员的概念，私有成员只能在模块成员内通过"),s("a",{attrs:{href:""}},[a._v("闭包")]),a._v("的形式访问，这就解决了前面所提到的全局作用域污染和命名冲突的问题。")]),a._v(" "),s("h2",{attrs:{id:"stage4-iife-依赖参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stage4-iife-依赖参数"}},[a._v("#")]),a._v(" Stage4 IIFE 依赖参数")]),a._v(" "),s("p",[a._v("在 IIFE 的基础之上，我们还可以利用 IIFE 参数作为依赖声明使用，这使得每一个模块之间的依赖关系变得更加明显。")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"module-a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("method1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"#method1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"body"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("animate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" margin"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"200px"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("moduleA "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    method1"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" method1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("jQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 通过参数明显表明这个模块的依赖")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h2",{attrs:{id:"不可避免的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不可避免的问题"}},[a._v("#")]),a._v(" 不可避免的问题")]),a._v(" "),s("p",[a._v("以上只是模块化的约定，并不是行业规范，没有统一的实现标准所以不同开发者的实现会有细微的差别。")]),a._v(" "),s("p",[a._v("另外最明显的问题就是：模块的加载。在这几种方式中虽然都解决了模块代码的组织问题，但模块加载的问题却被忽略了，我们都是通过 "),s("code",[a._v("script")]),a._v(" 标签的方式直接在页面中引入的这些模块，这意味着模块的加载并不受代码的控制，时间久了维护起来会十分麻烦。")]),a._v(" "),s("p",[a._v("更为理想的方式应该是在页面中引入一个 JS 入口文件，其余用到的模块可以通过代码控制，按需加载进来。")]),a._v(" "),s("h1",{attrs:{id:"模块化规范的出现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化规范的出现"}},[a._v("#")]),a._v(" 模块化规范的出现")]),a._v(" "),s("p",[s("code",[a._v("CommonJS")]),a._v("是 Node.js 中遵循的模块规范，该规范约定，一个文件就是一个模块，每个模块都有单独的作用域，通过 module.exports 导出成员，再通过 require 函数载入模块。但是如果我们想要在浏览器端直接使用这个规范，那就会出现一些新的问题。")]),a._v(" "),s("p",[a._v("CommonJS 约定的是以同步的方式加载模块，Node.js 执行机制是在启动时加载模块，执行过程中只是使用模块，所以这种方式不会有问题。但是如果要在浏览器端使用同步的加载模式，就会引起大量的同步模式请求，导致应用运行效率低下。所以在早期制定前端模块化标准时，并没有直接选择 CommonJS 规范，而是专门为浏览器端重新设计了一个规范，叫做 AMD （ Asynchronous Module Definition） 规范，即异步模块定义规范。同期还推出了一个非常出名的库，叫做 Require.js，它除了实现了 AMD 模块化规范，本身也是一个非常强大的模块加载器。")]),a._v(" "),s("p",[a._v("Require.js 还提供了一个 require() 函数用于自动加载模块，用法与 define() 函数类似，区别在于 require() 只能用来载入模块，而 define() 还可以定义模块。当 Require.js 需要加载一个模块时，内部就会自动创建 script 标签去请求并执行相应模块的代码。")]),a._v(" "),s("h2",{attrs:{id:"es-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es-modules"}},[a._v("#")]),a._v(" ES Modules")]),a._v(" "),s("p",[a._v("CommonJS 属于内置模块系统，所以在 Node.js 环境中使用时不存在环境支持问题，只需要直接遵循标准使用 require 和 module 即可。")]),a._v(" "),s("p",[a._v("但是对于 ES Modules 规范来说，情况会相对复杂一些。我们知道 ES Modules 是 ECMAScript 2015（ES6）中才定义的模块系统，也就是说它是近几年才制定的标准，所以肯定会存在环境兼容的问题。在这个标准刚推出的时候，几乎所有主流的浏览器都不支持。但是随着 Webpack 等一系列打包工具的流行，这一规范才开始逐渐被普及。")]),a._v(" "),s("p",[a._v("经过 5 年的迭代， ES Modules 已发展成为现今最主流的前端模块化标准。相比于 AMD 这种社区提出的开发规范，ES Modules 是在语言层面实现的模块化，因此它的标准更为完善也更为合理。而且目前绝大多数浏览器都已经开始能够原生支持 ES Modules 这个特性了，所以说在未来几年，它还会有更好的发展，短期内应该不会有新的轮子出现了。")]),a._v(" "),s("p",[a._v("综上所述，如何在不同的环境中去更好的使用 ES Modules 显得尤为重要。")]),a._v(" "),s("h1",{attrs:{id:"模块打包工具的出现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块打包工具的出现"}},[a._v("#")]),a._v(" 模块打包工具的出现")]),a._v(" "),s("p",[a._v("模块化可以帮助我们更好地解决复杂应用开发过程中的代码组织问题，但是随着模块化思想的引入，我们的前端应用又会产生了一些新的问题，比如：")]),a._v(" "),s("ul",[s("li",[a._v("首先，我们所使用的 ES Modules 模块系统本身就存在环境兼容问题。尽管现如今主流浏览器的最新版本都支持这一特性，但是目前还无法保证用户的浏览器使用情况。所以我们还需要解决兼容问题。")]),a._v(" "),s("li",[a._v("其次，模块化的方式划分出来的模块文件过多，而前端应用又运行在浏览器中，每一个文件都需要单独从服务器请求回来。零散的模块文件必然会导致浏览器的频繁发送网络请求，影响应用的工作效率。")]),a._v(" "),s("li",[a._v("最后，谈一下在实现 JS 模块化的基础上的发散。随着应用日益复杂，在前端应用开发过程中不仅仅只有 JavaScript 代码需要模块化，HTML 和 CSS 这些资源文件也会面临需要被模块化的问题。而且从宏观角度来看，这些文件也都应该看作前端应用中的一个模块，只不过这些模块的种类和用途跟 JavaScript 不同。")])]),a._v(" "),s("p",[a._v("第一，它需要具备编译代码的能力，也就是将我们开发阶段编写的那些包含新特性的代码转换为能够兼容大多数环境的代码，解决我们所面临的环境兼容问题。第二，能够将散落的模块再打包到一起，这样就解决了浏览器频繁请求模块文件的问题。这里需要注意，只是在开发阶段才需要模块化的文件划分，因为它能够帮我们更好地组织代码，到了实际运行阶段，这种划分就没有必要了。第三，它需要支持不同种类的前端模块类型，也就是说可以将开发过程中涉及的样式、图片、字体等所有资源文件都作为模块使用，这样我们就拥有了一个统一的模块化方案，所有资源文件的加载都可以通过代码控制，与业务代码统一维护，更为合理。")]),a._v(" "),s("p",[a._v("Webpack 发展到今天，它的功能已经非常强大了，但依然改变不了它是一个模块化解决方案的初衷。你可以看到， Webpack 官方的 Slogan 仍然是：A bundler for javascript and friends（一个 JavaScript 和周边的打包工具）。\n从另外一个角度来看，Webpack 从一个“打包工具”，发展成现在开发者眼中对整个前端项目的“构建系统”，表面上似乎只是称呼发生了变化，但是这背后却透露出来一个信号："),s("strong",[a._v("模块化思想是非常伟大的，伟大到可以帮你“统治”前端整个项目。这也足以见得模块化思想背后还有很多值得我们思考的内容。")])]),a._v(" "),s("p",[a._v("Webpack 以模块化思想为核心，帮助开发者更好的管理整个前端工程。")]),a._v(" "),s("h2",{attrs:{id:"webpack-运行机制与核心工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-运行机制与核心工作原理"}},[a._v("#")]),a._v(" Webpack 运行机制与核心工作原理")]),a._v(" "),s("ul",[s("li",[a._v("通过 Loader 处理特殊类型资源的加载，例如加载样式、图片；")]),a._v(" "),s("li",[a._v("通过 Plugin 实现各种自动化的构建任务，例如自动压缩、自动发布。")])]),a._v(" "),s("p",[a._v("整个打包过程中，Loader 机制起了很重要的作用，因为如果没有 Loader 的话，Webpack 就无法实现各种各样类型的资源文件加载，那 Webpack 也就只能算是一个用来合并 JS 模块代码的工具了。至于自定义插件机制，它并不会影响 Webpack 的核心工作过程，只是 Webpack 为了提供一个强大的扩展能力，它为整个工作过程的每个环节都预制了一个"),s("code",[a._v("hook")]),a._v("，也就是说我们可以通过插件往 Webpack 工作过程的任意环节植入一些自定义的任务，从而扩展 Webpack 打包功能以外的能力。")]),a._v(" "),s("p",[a._v("具体来看打包的过程，Webpack 启动后，会根据我们的配置，找到项目中的某个指定文件（一般这个文件都会是一个 JS 文件）作为入口。然后顺着入口文件中的代码，根据代码中出现的 import（ES Modules）或者是 require（CommonJS）之类的语句，解析推断出来这个文件所依赖的资源模块，然后再分别去解析每个资源模块的依赖，周而复始，最后形成整个项目中所有用到的文件之间的依赖关系树，有了这个依赖关系树过后， Webpack 会遍历（递归）这个依赖树，找到每个节点对应的资源文件，然后根据配置选项中的 Loader 配置，交给对应的 Loader 去加载这个模块，最后将加载的结果放入 bundle.js（打包结果）中，从而实现整个项目的打包。对于依赖模块中无法通过 JavaScript 代码表示的资源模块，例如图片或字体文件，一般的 Loader 会将它们单独作为资源文件拷贝到输出目录中，然后将这个资源文件所对应的访问路径作为这个模块的导出成员暴露给外部。")]),a._v(" "),s("h3",{attrs:{id:"关键环节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关键环节"}},[a._v("#")]),a._v(" 关键环节")]),a._v(" "),s("p",[a._v("这里我们先提炼出 Webpack 核心工作过程中的关键环节，明确“查阅”源码的思路：")]),a._v(" "),s("ol",[s("li",[a._v("Webpack CLI 启动打包流程；")]),a._v(" "),s("li",[a._v("载入 Webpack 核心模块，创建 Compiler 对象；")]),a._v(" "),s("li",[a._v("使用 Compiler 对象开始编译整个项目；")]),a._v(" "),s("li",[a._v("从入口文件开始，解析模块依赖，形成依赖关系树；")]),a._v(" "),s("li",[a._v("递归依赖树，将每个模块交给对应的 Loader 处理；")]),a._v(" "),s("li",[a._v("合并 Loader 处理完的结果，将打包结果输出到 dist 目录。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);