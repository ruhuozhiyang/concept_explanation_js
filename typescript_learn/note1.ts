interface User {
	name: string;
	age: number;
}
function logUser(u: User) {
  console.log(`${u.name}, ${u.age}`);
}
const user = {
	name: 'cry',
	age: 13
};
logUser(user);

// ===============Class类声明及使用=================

class Student {
	name: string;
	age: number;
	grade: string;
	studentId: number;

	constructor(name: string, age: number, grade: string, studentId: number) {
		this.name = name;
		this.age = age;
		this.grade = grade;
		this.studentId = studentId;
	}

	toString() {
		console.log('我叫' + this.name + '学号是' + this.studentId + '今年' + this.age + '岁' + '读' + this.grade);
	}
}
const oneStudent = new Student('cry', 21, '初三', 243543);
oneStudent.toString();

// =============any类型===============
let name: any;
// name = 12; //仍能运行，只是会提示错误
name = 'cry';
console.log(name);

// ============复合类型声明=================
type WindowStates = "open" | "closed" | "minimized";
let one: WindowStates;
one = 'minimized';
console.log(typeof one);

type ObjectArray = Array<{name: string}>;
let objectArray : ObjectArray;
objectArray = [{name: 'cry'}];



// ==============参数为复合类型==========
function getLength(param: string | string[]) {
	if (Array.isArray(param)) {
		console.log('类型为数组');
	} else {
		console.log('类型为字符串');
	}
	console.log(typeof param + '长度为:' + param.length);
}
getLength('adsc');// 4
getLength(['a', 'b', 'ads']); // 3

//表明这个文件是个module.如果不写，该文件中的变量就是全局变量可能会污染全局。
export {};