// Type Aliases
type widge = {
	cName:string,
	eName?: string
};

interface action {
	dance() :void;
}

class AnimalsAction implements action {
	dance() {
		console.log('动物跳舞');
	}
}

class MerchanicsAction implements action {

	whereFrom: string;
	material: string;

	dance() {
		console.log('机器跳舞');
	}
}

class Robot extends MerchanicsAction{
	id: number | string; // union types
	backPack: widge[];
	name: string;
	constructor(name: string) {
		super();
		this.id = '';
		this.name = name;
		this.backPack = new Array<widge>();
	}
	setId(id: number | string): void {
		this.id = id;
		console.log(`设置机器人编号为${this.id}`);
	}
	setWhereFrom(country: string) {
		this.whereFrom = country;
	}
	say(): void {
		console.log(`你好，我是编号为${this.id}的机器人，名字${this.name}，来自${this.whereFrom}`);
	}
	addPack(thing: widge): void {
		this.backPack.push(thing);
		console.log(`将${thing.cName}加入背包`);
	};
	showPack(): string {
		let result = '';
		this.backPack.forEach((item, index) => {
			let eName1 = item.eName || 'nothing';
			let cName1 = item.cName || '无';
			result = result + '物品' + index + ':' + cName1 + '(英文名:' + eName1 + ')';
		});
		return `背包里有物品如下:${result}`;
	};
}
// interface Person {
// 	readonly name: string; //只读属性,（除了能在构造函数里面写入值）。
// }
// function excuteReadOnly(onePerson: Person) {
// 	// onePerson.name = 'xiaoyi';//报错 不能写入，只能读
// 	console.log(onePerson.name); //cry
// }
// let onePerson : Person = { name: 'cry' };
// excuteReadOnly(onePerson);

const x = 'hello' as any as number;
const y = 'world' as string;

const oneRobot = new Robot('siri');
oneRobot.setId(1);
oneRobot.setId('20200603');
oneRobot.setWhereFrom('中国');
oneRobot.say();
oneRobot.addPack({ cName: '刷子' });
oneRobot.addPack({ cName: '帽子', eName: 'hat' });
console.log(oneRobot.showPack());
oneRobot.dance();
console.log('==========');
let oneAction: action;
oneAction = new AnimalsAction();
oneAction.dance();
oneAction = new MerchanicsAction();
oneAction.dance();
console.log(typeof x);
export {};