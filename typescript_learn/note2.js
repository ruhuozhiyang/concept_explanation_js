"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AnimalsAction = (function () {
    function AnimalsAction() {
    }
    AnimalsAction.prototype.dance = function () {
        console.log('动物跳舞');
    };
    return AnimalsAction;
}());
var MerchanicsAction = (function () {
    function MerchanicsAction() {
    }
    MerchanicsAction.prototype.dance = function () {
        console.log('机器跳舞');
    };
    return MerchanicsAction;
}());
var Robot = (function (_super) {
    __extends(Robot, _super);
    function Robot(name) {
        _super.call(this);
        this.id = '';
        this.name = name;
        this.backPack = new Array();
    }
    Robot.prototype.setId = function (id) {
        this.id = id;
        console.log("\u8BBE\u7F6E\u673A\u5668\u4EBA\u7F16\u53F7\u4E3A" + this.id);
    };
    Robot.prototype.setWhereFrom = function (country) {
        this.whereFrom = country;
    };
    Robot.prototype.say = function () {
        console.log("\u4F60\u597D\uFF0C\u6211\u662F\u7F16\u53F7\u4E3A" + this.id + "\u7684\u673A\u5668\u4EBA\uFF0C\u540D\u5B57" + this.name + "\uFF0C\u6765\u81EA" + this.whereFrom);
    };
    Robot.prototype.addPack = function (thing) {
        this.backPack.push(thing);
        console.log("\u5C06" + thing.cName + "\u52A0\u5165\u80CC\u5305");
    };
    ;
    Robot.prototype.showPack = function () {
        var result = '';
        this.backPack.forEach(function (item, index) {
            var eName1 = item.eName || 'nothing';
            var cName1 = item.cName || '无';
            result = result + '物品' + index + ':' + cName1 + '(英文名:' + eName1 + ')';
        });
        return "\u80CC\u5305\u91CC\u6709\u7269\u54C1\u5982\u4E0B:" + result;
    };
    ;
    return Robot;
}(MerchanicsAction));
// interface Person {
// 	readonly name: string; //只读属性,（除了能在构造函数里面写入值）。
// }
// function excuteReadOnly(onePerson: Person) {
// 	// onePerson.name = 'xiaoyi';//报错 不能写入，只能读
// 	console.log(onePerson.name); //cry
// }
// let onePerson : Person = { name: 'cry' };
// excuteReadOnly(onePerson);
var x = 'hello';
var y = 'world';
var oneRobot = new Robot('siri');
oneRobot.setId(1);
oneRobot.setId('20200603');
oneRobot.setWhereFrom('中国');
oneRobot.say();
oneRobot.addPack({ cName: '刷子' });
oneRobot.addPack({ cName: '帽子', eName: 'hat' });
console.log(oneRobot.showPack());
oneRobot.dance();
console.log('==========');
var oneAction;
oneAction = new AnimalsAction();
oneAction.dance();
oneAction = new MerchanicsAction();
oneAction.dance();
console.log(typeof x);
