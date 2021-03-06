### JavaScript 是大家所了解的语言名称，但是这个语言名称是商标（ Oracle 公司注册的商标）。因此，JavaScript 的正式名称是 ECMAScript 。1996年11月，JavaScript 的创造者网景公司将 JS 提交给国际化标准组织 ECMA（European computer manufactures association，欧洲计算机制造联合会），希望这种语言能够成为国际标准，随后 ECMA 发布了规定浏览器脚本语言的标准，即 ECMAScript。这也有利于这门语言的开放和中立。
***
### ES6， 全称 ECMAScript 6.0 ，是 JavaScript 的下一个版本标准，2015.06 发版。ES6 主要是为了解决 ES5 的先天不足，比如 JavaScript 里并没有类的概念，但是目前浏览器的 JavaScript 是 ES5 版本，大多数高版本的浏览器也支持 ES6，不过只实现了 ES6 的部分特性和功能。
***
### 早些时候，JavaScript一直没有模块（module）体系，这导致无法将一个大程序拆分成互相依赖的小文件。其他语言都有这项功能，比如 Ruby 的require、Python 的import，甚至就连 CSS 都有@import，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。
***
* 在CommonJS/AMD/CMD/ES6出来之前，模块化的实现主要有三种方法，参考**original_module**文件。
* 但是上面提到的模块化存在以下这些问题：
> 1、html不但要引入自己需要的js文件，还需要引入js文件需要的js文件。如：a.html需要使用 b.js的代码，而由于b.js中使用了c.js里的代码。所以，在a.html中必须引入b.js和c.js。
> 这是JavaScript语言先天性的缺陷----js文件没法引入js文件。其它编程语言（java，c#，c/c++）就不存在这个问题。    

> 2、引入js文件的顺序问题以及异步加载问题。

***
***
* CommonJS规范是后端NodeJs模块化解决方案。
* AMD/CMD是浏览器端模块化第三方解决方案。

