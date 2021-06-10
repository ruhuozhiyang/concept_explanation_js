// 在node中，所有的代码处在当前的module中，所以仅仅申明一个let变量，只是当前module的变量，并不是全局的。
let prop = '当前module的变量';//其他的js模块访问不到。
global.props = '全局变量';//通过global声明的变量是全局变量，其他的js模块可以访问。

module.exports = {
    sum: function(x, y) {
        return x + y;
    },
};
module.exports.multi = function(x, y) {
    return x*y;
};