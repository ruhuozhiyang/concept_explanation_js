define(function(require, exports) {
    let module_name = '被依赖的cmd模块'
    let getModuleName = function () {
        return module_name;
    };
    exports.getModuleName = getModuleName;
});