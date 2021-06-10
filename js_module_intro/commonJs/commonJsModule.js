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