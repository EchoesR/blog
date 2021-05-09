(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{512:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("完成了网络请求和响应，如果响应头中"),a("code",[t._v("Content-Type")]),t._v("的值是"),a("code",[t._v("text/html")]),t._v("，那么接下来就是浏览器的"),a("code",[t._v("解析")]),t._v("和"),a("code",[t._v("渲染")]),t._v("工作了。")]),t._v(" "),a("p",[t._v("首先来介绍解析部分，主要分为以下几个步骤:")]),t._v(" "),a("ul",[a("li",[t._v("构建 "),a("code",[t._v("DOM")]),t._v("树")]),t._v(" "),a("li",[a("code",[t._v("样式")]),t._v("计算")]),t._v(" "),a("li",[t._v("生成"),a("code",[t._v("布局树")]),t._v("("),a("code",[t._v("Layout Tree")]),t._v(")")])]),t._v(" "),a("h2",{attrs:{id:"构建-dom-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建-dom-树"}},[t._v("#")]),t._v(" 构建 DOM 树")]),t._v(" "),a("p",[t._v("由于浏览器无法直接理解"),a("code",[t._v("HTML字符串")]),t._v("，因此将这一系列的字节流转换为一种有意义并且方便操作的数据结构，这种数据结构就是"),a("code",[t._v("DOM树")]),t._v("。"),a("code",[t._v("DOM树")]),t._v("本质上是一个以"),a("code",[t._v("document")]),t._v("为根节点的多叉树。")]),t._v(" "),a("p",[t._v("那通过什么样的方式来进行解析呢？")]),t._v(" "),a("h3",{attrs:{id:"html文法的本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html文法的本质"}},[t._v("#")]),t._v(" HTML文法的本质")]),t._v(" "),a("p",[t._v("首先，我们应该清楚把握一点: HTML 的文法并不是"),a("code",[t._v("上下文无关文法")]),t._v("。")]),t._v(" "),a("p",[t._v("这里，有必要讨论一下什么是"),a("code",[t._v("上下文无关文法")]),t._v("。")]),t._v(" "),a("p",[t._v("在计算机科学的"),a("strong",[t._v("编译原理")]),t._v("学科中，有非常明确的定义:")]),t._v(" "),a("blockquote",[a("p",[t._v("若一个形式文法G = (N, Σ, P, S) 的产生式规则都取如下的形式：V->w，则叫上下文无关语法。其中 V∈N ，w∈(N∪Σ)* 。")])]),t._v(" "),a("p",[t._v("其中把 G = (N, Σ, P, S) 中各个参量的意义解释一下:")]),t._v(" "),a("ol",[a("li",[t._v("N 是"),a("strong",[t._v("非终结符")]),t._v("(顾名思义，就是说最后一个符号不是它, 下面同理)集合。")]),t._v(" "),a("li",[t._v("Σ 是"),a("strong",[t._v("终结符")]),t._v("集合。")]),t._v(" "),a("li",[t._v("P 是开始符，它必须属于 N ，也就是非终结符。")]),t._v(" "),a("li",[t._v("S 就是不同的产生式的集合。如 S -> aSb 等等。")])]),t._v(" "),a("p",[t._v("通俗一点讲，"),a("code",[t._v("上下文无关的文法")]),t._v("就是说这个文法中所有产生式的左边都是一个非终结符。")]),t._v(" "),a("p",[t._v("看到这里，如果还有一点懵圈，我举个例子你就明白了。")]),t._v(" "),a("p",[t._v("比如:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("A -> B\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这个文法中，每个产生式左边都会有一个非终结符，这就是"),a("code",[t._v("上下文无关的文法")]),t._v("。在这种情况下，"),a("code",[t._v("xBy")]),t._v("一定是可以规约出"),a("code",[t._v("xAy")]),t._v("的。")]),t._v(" "),a("p",[t._v("我们下面看看看一个反例：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("aA -> B\nAa -> B\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("这种情况就是不是"),a("code",[t._v("上下文无关的文法")]),t._v("，当遇到"),a("code",[t._v("B")]),t._v("的时候，我们不知道到底能不能规约出"),a("code",[t._v("A")]),t._v("，取决于左边或者右边是否有"),a("code",[t._v("a")]),t._v("存在，也就是说和上下文有关。")]),t._v(" "),a("p",[t._v("关于它为什么是"),a("code",[t._v("非上下文无关文法")]),t._v("，首先需要让大家注意的是，规范的 HTML 语法，是符合"),a("code",[t._v("上下文无关文法")]),t._v("的，能够体现它"),a("code",[t._v("非上下文无关")]),t._v("的是"),a("strong",[t._v("不标准的语法")]),t._v("。在此我仅举一个反例即可证明。")]),t._v(" "),a("p",[t._v("比如解析器扫描到"),a("code",[t._v("form")]),t._v("标签的时候，"),a("strong",[t._v("上下文无关文法")]),t._v("的处理方式是直接创建对应 form 的 DOM 对象，而真实的 HTML5 场景中却不是这样，解析器会查看 "),a("code",[t._v("form")]),t._v(" 的上下文，如果这个 "),a("code",[t._v("form")]),t._v(" 标签的父标签也是 "),a("code",[t._v("form")]),t._v(", 那么"),a("strong",[t._v("直接跳过")]),t._v("当前的 "),a("code",[t._v("form")]),t._v(" 标签，否则才创建 DOM 对象。")]),t._v(" "),a("p",[t._v("常规的编程语言都是"),a("strong",[t._v("上下文无关")]),t._v("的，而HTML却相反，也正是它"),a("strong",[t._v("非上下文无关")]),t._v("的特性，决定了"),a("code",[t._v("HTML Parser")]),t._v("并不能使用常规编程语言的解析器来完成，需要另辟蹊径。")]),t._v(" "),a("h3",{attrs:{id:"解析算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析算法"}},[t._v("#")]),t._v(" 解析算法")]),t._v(" "),a("p",[t._v("HTML5 "),a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/parsing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范"),a("OutboundLink")],1),t._v("详细地介绍了解析算法。这个算法分为两个阶段:")]),t._v(" "),a("ol",[a("li",[t._v("标记化。")]),t._v(" "),a("li",[t._v("建树。")])]),t._v(" "),a("p",[t._v("对应的两个过程就是"),a("strong",[t._v("词法分析")]),t._v("和"),a("strong",[t._v("语法分析")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"标记化算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记化算法"}},[t._v("#")]),t._v(" 标记化算法")]),t._v(" "),a("p",[t._v("这个算法输入为"),a("code",[t._v("HTML文本")]),t._v("，输出为"),a("code",[t._v("HTML标记")]),t._v("，也成为"),a("strong",[t._v("标记生成器")]),t._v("。其中运用"),a("strong",[t._v("有限自动状态机")]),t._v("来完成。即在当当前状态下，接收一个或多个字符，就会更新到下一个状态。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Hello sanyuan\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("通过一个简单的例子来演示一下"),a("code",[t._v("标记化")]),t._v("的过程。")]),t._v(" "),a("p",[t._v("遇到"),a("code",[t._v("<")]),t._v(", 状态为"),a("strong",[t._v("标记打开")]),t._v("。")]),t._v(" "),a("p",[t._v("接收"),a("code",[t._v("[a-z]")]),t._v("的字符，会进入"),a("strong",[t._v("标记名称状态")]),t._v("。")]),t._v(" "),a("p",[t._v("这个状态一直保持，直到遇到"),a("code",[t._v(">")]),t._v("，表示标记名称记录完成，这时候变为"),a("strong",[t._v("数据状态")]),t._v("。")]),t._v(" "),a("p",[t._v("接下来遇到"),a("code",[t._v("body")]),t._v("标签做同样的处理。")]),t._v(" "),a("p",[t._v("这个时候"),a("code",[t._v("html")]),t._v("和"),a("code",[t._v("body")]),t._v("的标记都记录好了。")]),t._v(" "),a("p",[t._v("现在来到<body>中的>，进入"),a("strong",[t._v("数据状态")]),t._v("，之后保持这样状态接收后面的字符"),a("strong",[t._v("hello sanyuan")]),t._v("。")]),t._v(" "),a("p",[t._v("接着接收 </body> 中的"),a("code",[t._v("<")]),t._v("，回到"),a("strong",[t._v("标记打开")]),t._v(", 接收下一个"),a("code",[t._v("/")]),t._v("后，这时候会创建一个"),a("code",[t._v("end tag")]),t._v("的token。")]),t._v(" "),a("p",[t._v("随后进入"),a("strong",[t._v("标记名称状态")]),t._v(", 遇到"),a("code",[t._v(">")]),t._v("回到"),a("strong",[t._v("数据状态")]),t._v("。")]),t._v(" "),a("p",[t._v("接着以同样的样式处理 </body>。")]),t._v(" "),a("h4",{attrs:{id:"建树算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建树算法"}},[t._v("#")]),t._v(" 建树算法")]),t._v(" "),a("p",[t._v("之前提到过，DOM 树是一个以"),a("code",[t._v("document")]),t._v("为根节点的多叉树。因此解析器首先会创建一个"),a("code",[t._v("document")]),t._v("对象。标记生成器会把每个标记的信息发送给"),a("strong",[t._v("建树器")]),t._v("。"),a("strong",[t._v("建树器")]),t._v("接收到相应的标记时，会"),a("strong",[t._v("创建对应的 DOM 对象")]),t._v("。创建这个"),a("code",[t._v("DOM对象")]),t._v("后会做两件事情:")]),t._v(" "),a("ol",[a("li",[t._v("将"),a("code",[t._v("DOM对象")]),t._v("加入 DOM 树中。")]),t._v(" "),a("li",[t._v("将对应标记压入存放开放(与"),a("code",[t._v("闭合标签")]),t._v("意思对应)元素的栈中。")])]),t._v(" "),a("p",[t._v("还是拿下面这个例子说:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Hello sanyuan\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("首先，状态为"),a("strong",[t._v("初始化状态")]),t._v("。")]),t._v(" "),a("p",[t._v("接收到标记生成器传来的"),a("code",[t._v("html")]),t._v("标签，这时候状态变为"),a("strong",[t._v("before html状态")]),t._v("。同时创建一个"),a("code",[t._v("HTMLHtmlElement")]),t._v("的 DOM 元素, 将其加到"),a("code",[t._v("document")]),t._v("根对象上，并进行压栈操作。")]),t._v(" "),a("p",[t._v("接着状态自动变为"),a("strong",[t._v("before head")]),t._v(", 此时从标记生成器那边传来"),a("code",[t._v("body")]),t._v("，表示并没有"),a("code",[t._v("head")]),t._v(", 这时候"),a("strong",[t._v("建树器")]),t._v("会自动创建一个"),a("strong",[t._v("HTMLHeadElement")]),t._v("并将其加入到"),a("code",[t._v("DOM树")]),t._v("中。")]),t._v(" "),a("p",[t._v("现在进入到"),a("strong",[t._v("in head")]),t._v("状态, 然后直接跳到"),a("strong",[t._v("after head")]),t._v("。")]),t._v(" "),a("p",[t._v("现在"),a("strong",[t._v("标记生成器")]),t._v("传来了"),a("code",[t._v("body")]),t._v("标记，创建"),a("strong",[t._v("HTMLBodyElement")]),t._v(", 插入到"),a("code",[t._v("DOM")]),t._v("树中，同时压入开放标记栈。")]),t._v(" "),a("p",[t._v("接着状态变为"),a("strong",[t._v("in body")]),t._v("，然后来接收后面一系列的字符: "),a("strong",[t._v("Hello sanyuan")]),t._v("。接收到第一个字符的时候，会创建一个"),a("strong",[t._v("Text")]),t._v("节点并把字符插入其中，然后把"),a("strong",[t._v("Text")]),t._v("节点插入到 DOM 树中"),a("code",[t._v("body元素")]),t._v("的下面。随着不断接收后面的字符，这些字符会附在"),a("strong",[t._v("Text")]),t._v("节点上。")]),t._v(" "),a("p",[t._v("现在，"),a("strong",[t._v("标记生成器")]),t._v("传过来一个"),a("code",[t._v("body")]),t._v("的结束标记，进入到"),a("strong",[t._v("after body")]),t._v("状态。")]),t._v(" "),a("p",[a("strong",[t._v("标记生成器")]),t._v("最后传过来一个"),a("code",[t._v("html")]),t._v("的结束标记, 进入到"),a("strong",[t._v("after after body")]),t._v("的状态，表示解析过程到此结束。")]),t._v(" "),a("h4",{attrs:{id:"容错机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容错机制"}},[t._v("#")]),t._v(" 容错机制")]),t._v(" "),a("p",[t._v("讲到"),a("code",[t._v("HTML5")]),t._v("规范，就不得不说它强大的"),a("strong",[t._v("宽容策略")]),t._v(", 容错能力非常强，虽然大家褒贬不一，不过我想作为一名资深的前端工程师，有必要知道"),a("code",[t._v("HTML Parser")]),t._v("在容错方面做了哪些事情。")]),t._v(" "),a("p",[t._v("接下来是 WebKit 中一些经典的容错示例，发现有其他的也欢迎来补充。")]),t._v(" "),a("ol",[a("li",[t._v("使用</br>而不是<br>")])]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("if (t->isCloseTag(brTag) && m_document->inCompatMode()) {\n  reportError(MalformedBRError);\n  t->beginTag = true;\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("全部换为<br>的形式。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("表格离散")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("inner table"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("outer table"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[a("code",[t._v("WebKit")]),t._v("会自动转换为:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("outer table"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("inner table"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("表单元素嵌套")])]),t._v(" "),a("p",[t._v("这时候直接忽略里面的"),a("code",[t._v("form")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"样式计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式计算"}},[t._v("#")]),t._v(" 样式计算")]),t._v(" "),a("p",[t._v("关于CSS样式，它的来源一般是三种:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("link标签引用")])]),t._v(" "),a("li",[a("strong",[t._v("style标签中的样式")])]),t._v(" "),a("li",[a("strong",[t._v("元素的内嵌style属性")])])]),t._v(" "),a("h3",{attrs:{id:"格式化样式表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化样式表"}},[t._v("#")]),t._v(" 格式化样式表")]),t._v(" "),a("p",[t._v("首先，浏览器是无法直接识别 CSS 样式文本的，因此渲染引擎接收到 CSS 文本之后第一件事情就是将其转化为一个结构化的对象，即styleSheets。")]),t._v(" "),a("p",[t._v("这个格式化的过程过于复杂，而且对于不同的浏览器会有不同的优化策略，这里就不展开了。")]),t._v(" "),a("p",[t._v("在浏览器控制台能够通过"),a("code",[t._v("document.styleSheets")]),t._v("来查看这个最终的结构。当然，这个结构包含了以上三种CSS来源，为后面的样式操作提供了基础。")]),t._v(" "),a("h3",{attrs:{id:"标准化样式属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准化样式属性"}},[t._v("#")]),t._v(" 标准化样式属性")]),t._v(" "),a("p",[t._v("有一些 CSS 样式的数值并不容易被渲染引擎所理解，因此需要在计算样式之前将它们标准化，如"),a("code",[t._v("em")]),t._v("->"),a("code",[t._v("px")]),t._v(","),a("code",[t._v("red")]),t._v("->"),a("code",[t._v("#ff0000")]),t._v(","),a("code",[t._v("bold")]),t._v("->"),a("code",[t._v("700")]),t._v("等等。")]),t._v(" "),a("h3",{attrs:{id:"计算每个节点的具体样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算每个节点的具体样式"}},[t._v("#")]),t._v(" 计算每个节点的具体样式")]),t._v(" "),a("p",[t._v("样式已经被"),a("code",[t._v("格式化")]),t._v("和"),a("code",[t._v("标准化")]),t._v(",接下来就可以计算每个节点的具体样式信息了。")]),t._v(" "),a("p",[t._v("其实计算的方式也并不复杂，主要就是两个规则: "),a("strong",[t._v("继承")]),t._v("和"),a("strong",[t._v("层叠")]),t._v("。")]),t._v(" "),a("p",[t._v("每个子节点都会默认继承父节点的样式属性，如果父节点中没有找到，就会采用浏览器默认样式，也叫"),a("code",[t._v("UserAgent样式")]),t._v("。这就是继承规则，非常容易理解。")]),t._v(" "),a("p",[t._v("然后是层叠规则，CSS 最大的特点在于它的层叠性，也就是最终的样式取决于各个属性共同作用的效果，甚至有很多诡异的层叠现象，看过《CSS世界》的同学应该对此深有体会，具体的层叠规则属于深入 CSS 语言的范畴，这里就不过多介绍了。")]),t._v(" "),a("p",[t._v("不过值得注意的是，在计算完样式之后，所有的样式值会被挂在到"),a("code",[t._v("window.computedStyle")]),t._v("当中，也就是可以通过JS来获取计算后的样式，非常方便。")]),t._v(" "),a("h2",{attrs:{id:"生成布局树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成布局树"}},[t._v("#")]),t._v(" 生成布局树")]),t._v(" "),a("p",[t._v("现在已经生成了"),a("code",[t._v("DOM树")]),t._v("和"),a("code",[t._v("DOM样式")]),t._v("，接下来要做的就是通过浏览器的布局系统"),a("code",[t._v("确定元素的位置")]),t._v("，也就是要生成一棵"),a("code",[t._v("布局树")]),t._v("(Layout Tree)。")]),t._v(" "),a("p",[t._v("布局树生成的大致工作如下:")]),t._v(" "),a("ol",[a("li",[t._v("遍历生成的 DOM 树节点，并把他们添加到"),a("code",[t._v("布局树中")]),t._v("。")]),t._v(" "),a("li",[t._v("计算布局树节点的坐标位置。")])]),t._v(" "),a("p",[t._v("值得注意的是，这棵布局树值包含可见元素，对于 "),a("code",[t._v("head")]),t._v("标签和设置了"),a("code",[t._v("display: none")]),t._v("的元素，将不会被放入其中。")]),t._v(" "),a("p",[t._v("有人说首先会生成"),a("code",[t._v("Render Tree")]),t._v("，也就是渲染树，其实这还是 16 年之前的事情，现在 Chrome 团队已经做了大量的重构，已经没有生成"),a("code",[t._v("Render Tree")]),t._v("的过程了。而布局树的信息已经非常完善，完全拥有"),a("code",[t._v("Render Tree")]),t._v("的功能。")]),t._v(" "),a("p",[t._v("之所以不讲布局的细节，是因为它过于复杂，一一介绍会显得文章过于臃肿，不过大部分情况下我们只需要知道它所做的工作"),a("strong",[t._v("是什么")]),t._v("即可，如果想深入其中的原理，知道它是"),a("strong",[t._v("如何来做的")]),t._v("，我强烈推荐你去读一读人人FED团队的文章"),a("a",{attrs:{href:"https://www.rrfed.com/2017/02/26/chrome-layout/",target:"_blank",rel:"noopener noreferrer"}},[t._v("从Chrome源码看浏览器如何layout布局"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("梳理一下这一节的主要脉络:")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/week10/3.jpg"),alt:"project"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);