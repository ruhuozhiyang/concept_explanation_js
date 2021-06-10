define([], function() {
    let module_name = '被依赖的AMD模块';
    let getModuleName = function () {
        return module_name;
    };
    return {
        getModuleName: getModuleName
    };
});