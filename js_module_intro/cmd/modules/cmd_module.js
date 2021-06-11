// 定义CMD 模块

define(function(require, exports) {
    let module_name = 'cmd模块成员变量';
    let getModuleName = function() {
        return module_name;
    };
    let dependencyModule = require('./cmd_dependency'); // 什么时候需要 什么时候才引用。
    exports.getModuleName = getModuleName;
    exports.getDependencyModule = dependencyModule.getModuleName;
});