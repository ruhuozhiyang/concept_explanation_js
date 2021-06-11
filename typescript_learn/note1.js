"use strict";
function logUser(u) {
    console.log(u.name + ", " + u.age);
}
var user = {
    name: 'cry',
    age: 13
};
logUser(user);
// ===============Class类声明及使用=================
var Student = (function () {
    function Student(name, age, grade, studentId) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.studentId = studentId;
    }
    Student.prototype.toString = function () {
        console.log('我叫' + this.name + '学号是' + this.studentId + '今年' + this.age + '岁' + '读' + this.grade);
    };
    return Student;
}());
var oneStudent = new Student('cry', 21, '初三', 243543);
oneStudent.toString();
// =============any类型===============
var name;
// name = 12; //仍能运行，只是会提示错误
name = 'cry';
console.log(name);
var one;
one = 'minimized';
console.log(typeof one);
var objectArray;
objectArray = [{ name: 'cry' }];
// ==============参数为复合类型==========
function getLength(param) {
    if (Array.isArray(param)) {
        console.log('类型为数组');
    }
    else {
        console.log('类型为字符串');
    }
    console.log(typeof param + '长度为:' + param.length);
}
getLength('adsc'); // 4
getLength(['a', 'b', 'ads']); // 3
//表明这个文件是个module.如果不写，该文件中的变量就是全局变量可能会污染全局。
