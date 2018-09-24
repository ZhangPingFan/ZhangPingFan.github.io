(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{165:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("这几天想给个人主页加点东西丰富内容，想来在如今成熟的软硬件条件下，现代浏览器对WebGL的支持已经十分完善，所以寻思不如来点3d效果，也借此机会对ThreeJs有个大体的了解。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("我们知道，WebGL相当于OpenGL的Web版，借助其提供的"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Api"),a("OutboundLink")],1),t._v("，我们能够在浏览器环境上充分利用硬件加速来渲染3D场景和模型。然而这些Api对一般Web开发人员来说门槛较高，于是three.js应运而生，这是一个基于WebGL封装的轻量易用的第三方js库。")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("官方地址："),a("a",{attrs:{href:"https://threejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://threejs.org/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("github："),a("a",{attrs:{href:"https://github.com/mrdoob/three.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mrdoob/three.js"),a("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("首先访问three.js的github地址，看到其说明中给了一个简单示例，我们把这段代码放到html中，并且引入three.js")]),t._v(" "),t._m(5),a("p",[t._v("然后用浏览器打开看看，可以看到一个旋转的正方形，环境就这么跑起来了。")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("我们再来看看示例的这段js代码做了什么，简单归纳如下：")]),t._v(" "),t._m(7),a("p",[t._v("于是这里涉及几个概念：")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("关于摄像机投影，有以下两种：")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("再看看另外几个概念：")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("......")]),t._v(" "),a("p",[t._v("上面这段纯属瞎掰，用函数来表示葫芦也并非容易，所以这里暂且略过，我们还是直接从网上找个模型来用吧，来看看怎么导入")]),t._v(" "),t._m(20),t._m(21),t._m(22),t._v(" "),a("p",[t._v("然后就是参考前面官方demo的三板斧")]),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("详细代码可以参考我放到github上的"),a("a",{attrs:{href:"https://github.com/ZhangPingFan/html5-examples/tree/master/threejs/hulu",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),a("OutboundLink")],1),t._v("，这里不再详述")]),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("最后一步，来告诉葫芦要怎么动，就让它绕着一根轴旋转吧")]),t._v(" "),t._m(25),a("p",[t._v("好了，现在可以大喊一声Action")]),t._v(" "),a("p",[t._v("把html和其他资源文件放到服务器上后打开即可看到最终效果。")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("对于three.js，本人也是初学者，文章如有纰漏之处，还请多多包涵～")]),t._v(" "),a("Gitalk")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"threejs初探"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threejs初探","aria-hidden":"true"}},[this._v("#")]),this._v(" ThreeJs初探")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("本文将简单介绍three.js的使用，希望尽量用精简的文字帮助大家快速入门。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"threejs介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threejs介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" ThreeJs介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"开始上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始上手","aria-hidden":"true"}},[this._v("#")]),this._v(" 开始上手")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"官方demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官方demo","aria-hidden":"true"}},[this._v("#")]),this._v(" 官方demo")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width,initial-scale=1"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("three demo"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://threejs.org/build/three.min.js"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" camera"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scene"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" renderer"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" geometry"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" material"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mesh"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("init")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("animate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("init")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        camera "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PerspectiveCamera")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("70")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.01")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        camera"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        scene "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scene")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        geometry "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BoxGeometry")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0.2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        material "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MeshNormalMaterial")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        mesh "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mesh")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("geometry"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" material"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        scene"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mesh"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        renderer "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebGLRenderer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            antialias"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        renderer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setSize")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("renderer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domElement"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("animate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animate"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        mesh"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.01")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        mesh"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.02")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        renderer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"了解概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#了解概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 了解概念")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("Camera --\x3e Scene --\x3e Renderer --\x3e render\n              add │            │\n                 Mesh          │\n                  │ Animation ─┘\n        Geometry ─┤\n                  │\n        Material ─┘\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("场景(Scene)")]),t._v("：所有物体的容器，即我们构建的三维世界")]),t._v(" "),a("li",[a("strong",[t._v("摄像机(Camera)")]),t._v("：观察场景的视角，决定3D场景如何投影到画布上")]),t._v(" "),a("li",[a("strong",[t._v("渲染器(Renderer)")]),t._v("：将场景以摄像机投影视角绘制到画布")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("正交投影：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1444794-71391f0b7a5e52a0.png",alt:"正交投影"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("透视投影：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1444794-3d7bda8ab09d5bf8.png",alt:"透视投影"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("各位可以把自己想象成一名"),s("strong",[this._v("摄影师")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("代码中的"),s("strong",[this._v("PerspectiveCamera")]),this._v("就是透视投影，该方法的四个参数分别为视野角度、宽高比、摄像机允许观察的最近距离、摄像机允许观察的最远距离")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("网格(Mesh)")]),t._v("：计算机世界中弧线是由大量线段连接而成，三维模型也类似，普遍做法是用三角形组成的网格来描述，这就是Mesh模型")]),t._v(" "),a("li",[a("strong",[t._v("形状(Geometry)")]),t._v("：构成模型的形状，threejs提供了盒子(Box)、圆形(Circle)、圆柱体(Cylinder)、球体(Sphere)等基本形状")]),t._v(" "),a("li",[a("strong",[t._v("材质(Material)")]),t._v("：模型表面的材质，包括网格深度材质(MeshDepthMaterial)、网格非发光材质(MeshLambertMaterial)等")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"入门实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入门实践","aria-hidden":"true"}},[this._v("#")]),this._v(" 入门实践")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现在来试下用three.js来构建一个运动的"),s("strong",[this._v("葫芦")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"创建物体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建物体","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建物体")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们知道葫芦可以看成是一个"),s("strong",[this._v("轴对称图形")]),this._v("，于是注意到three.js提供了LatheGeometry（车床模型），它可以用来生成 "),s("strong",[this._v("甜甜圈，管道，花瓶")]),this._v(" 等围绕Y轴旋转的模型，那么接下来看看怎么用数学函数来表示葫芦的轮廓")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 引入objloader.js --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./js/OBJLoader.js"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//加载obj文件")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" loader "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OBJLoader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nloader"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("load")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("// obj文件URL")]),t._v("\n\t"),a("span",{attrs:{class:"token string"}},[t._v("'./hulu.obj'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("// 文件加载完成")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("/* 省略部分代码 */")]),t._v("\n\t\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'object即加载得到的Object3D实例'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("// 文件加载中")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loaded "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("total "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'% loaded'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("// 加载出错")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'An error happened'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"构造场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造场景","aria-hidden":"true"}},[this._v("#")]),this._v(" 构造场景")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建场景")]),this._v(" "),s("li",[this._v("摆放摄像机")]),this._v(" "),s("li",[this._v("摆放物体")]),this._v(" "),s("li",[this._v("准备灯光")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"创建动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建动画","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建动画")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("animate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mesh"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animate"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" axis "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\taxis"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("normalize")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("// 绕Y轴旋转")]),t._v("\n\t\tmesh"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("rotateOnAxis")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("axis"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("0.01")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\trenderer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[this._v("#")]),this._v(" 小结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("3D是个博大精深的课题，除了计算机，还涉及"),s("strong",[this._v("数学、图形学")]),this._v("等多门学科，所以本文也仅做简单介绍，希望能帮助前端开发者有个入门的了解")])}],!1,null,null,null);e.options.__file="threejs.md";s.default=e.exports}}]);