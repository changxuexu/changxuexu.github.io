泛型
1.泛型类型

	泛型特点：
		1.和普通函数的区别是，在函数签名声明的前面加上泛型类型参数<T>
			function identity<T>(arg: T): T { return arg }
			let myIdentity: <T>(arg: T) => T = identity; //返回值也是T类型
	
		2.使用带有调用签名的对象字面量来定义泛型函数
			function identity<T>(arg: T): T { return arg}
			let myIdentity: {<T>(arg: T): T} = identity;

2.泛型接口和泛型类
	泛型接口:
		interface GenericIdentityFn<T> {
			(arg: T): T;
		}
		function identity<T>(arg: T): T { return arg}
		//使用时指定类型
		let myIdentity: GenericIdentityFn<number> = identity;
		
	泛型类:
		class Obj<T> {
			webName: T;
		}
		let obj = new Obj<string>();
		obj.webName = "许三";
		
3.泛型约束
	function identity<T>(arg: T): T {
		console.log(arg.length); 
		return arg;
	}
	泛型可以传递多种类型，不一定具有length属性
	
	interface Lengthwise {
		length: number;
	}
	function identity<T extends Lengthwise>(arg: T): T {
		console.log(arg.length); 
		return arg;
	}
	identity(5)					//5是number类型，不具有length属性
	identity(arg:{length:1})
	identity("许三")		//字符串具有length属性
	使用extends对泛型添加约束，所以函数传递的参数也是有限制的，必须具有length属性
	
	声明一个类型参数，且它被另一个类型参数所约束:
		function create<T>(c: {new(): T; }): T {
			return new c();
		}
		
	用属性名从对象里获取这个属性，要确保这个属性存在于对象obj上，因此需要在这两个类型之间使用约束
	在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型
	

	使用原型属性推断并约束构造函数与类实例的关系:
		class BeeKeeper {
				hasMask: boolean;
		}
			
		class ZooKeeper {
				nametag: string;
		}
			
		class Animal {
				numLegs: number;
		}
			
		class Bee extends Animal {
				keeper: BeeKeeper;
		}
			
		class Lion extends Animal {
				keeper: ZooKeeper;
		}
		
		//创建构造器 - 工厂函数
		function createInstance<A extends Animal>(c: new () => A): A {
				return new c();
		}
			
		createInstance(Lion).keeper.nametag;  // typechecks!
		createInstance(Bee).keeper.hasMask;   // typechecks!

		
#高级类型
	1.交叉类型：多重类型交叉一起成为一种类型
	2.联合类型
	3.类型保护
	4.可为null类型
	5.字符串字面量类型
		let str:"许三";  // str是"许三"类型，且赋值为许三
	
	6.type类型别名
		解决问题：有些类型名字比较长或者难以记忆，重新命名是一个较好的解决方案
			interface T1 {
				a: boolean;
				b: string;
			}
			interface T2 {
				a: boolean;
				b: number;
			}
			type T = T1 & T2;
	
	7.类型推断
		如果在tsconfig.json文件中设置strictNullChecks为true,那么推断类型就变为联合类型。
		let antzone = function (webName: string, age: number): string {
			return webName + "已经成立" + age + "年了";
		}
		
		let antzone:(webName: string, age: number) => string = function (name, webAge) {
			return name + "已经成立" + webAge + "年了";
		}
	
	<8>declare用法
		1.declare可以向TypeScript域中引入一个变量，在编写代码的时候就能够实现智能提示的功能
		2.d.ts文件内定义
			declare function func(str: string): string
	
	<9>keyof T用法 - 索引类型查询操作符
		https://www.softwhy.com/article-9152-1.html
		
		a.假设T是一个类型，那么keyof T产生的类型是T的属性名称字符串字面量类型构成的联合类型
			即T是数据类型，并非数据本身
			interface Itest{
				webName:string;
				age:number;
				address:string
			}
			// type ant = "webName" | "age" | "address"
			type ant=keyof Itest;
			
		b.如果T是一个带有字符串索引签名的类型，那么keyof T是string类型，并且T[string]为索引签名的类型
			interface Map<T> {
				[key: string]: T;
			}
			let keys: keyof Map<number>;				//string
			let value: Map<number>['antzone'];	//number
			特别说明:T[U]是索引访问操作符;U是一个属性名称。

	
		
	3.类型保护
	
	
		(1)自定义的类型保护
			形式上是一些表达式，它们会检查以确保在某域里的类型
			要定义一个类型保护，只要定义一个函数，它的返回值是一个类型谓词
			let ant = antzone();
			/* 
				parameterName is Type
				parameterName 必须是当前函数签名里的一个参数名
			*/
			function isBird(ant: Bird | Insect): ant is Bird {
				return (<Bird>ant).fly !== undefined;
			}
			if (isBird(ant)) {
				ant.fly();
			} else {
				ant.eat();
			}
		


