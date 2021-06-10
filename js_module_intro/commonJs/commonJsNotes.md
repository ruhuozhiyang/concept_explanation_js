* CommonJS是后端NodeJS的模块化规范。
* 所以用的module.exports/require()只有在node环境下执行才不会报错。
***
* 在node中，所有的代码处在当前的module中，所以仅仅申明一个let变量，只是当前module的变量，并不是全局的。
* 对于CommonJs模块的引用使用全局方法require()就可以了。注意这个全局方法是node中的方法，它不是window下面的。
* 所以如果你没做任何处理想直接在html里用肯定就是不行的。
* 而如果你是在另一个js文件中引用(例如test.js)，并在终端执行node test.js是可以的。