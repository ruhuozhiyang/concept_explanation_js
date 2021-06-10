//定义AMD模块

define(['./amd_dependency.js'], function(dAlias) {
  let module_name = 'amd 模块定义';
	let amd_sum = function (x, y) {
		return x + y;
	};
	let amd_multi = function (x, y) {
		return x * y;
	};
	let getModuleName = function () {
		return module_name;
	};
	let getDependencyName = function () {
		return dAlias.getModuleName();
	};
	return {
		amd_multi: amd_multi,
		amd_sum: amd_sum,
		getModuleName: getModuleName,
		getDependencyName: getDependencyName
	};
});