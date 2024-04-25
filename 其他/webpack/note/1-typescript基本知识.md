
		
===============
文档：
	蚂蚁部落 : https://www.softwhy.com/article-10155-1.html
	https://www.runoob.com/manual/gitbook/TypeScript/_book/doc/handbook/Basic%20Types.html
	
===============
#1.初识TypeScript
<pre>
  ts与javascript对比特性，主要表现为以下几点：
		1.ts是一个应用程序级的js开发语言，适合开发大型应用
		2.ts是js的超集，可以编译成原生的javascript。即始于javascript,终于javascript.
		3.ts跨浏览器、跨操作系统、跨主机且开源。由于最后他编译成了js,因此只要能运行js的地方，都可以运行我们写的程序，设置成node.js里面
    4.ts可以重用javascript代码,调用流行的javascript库
    5.ts提供了类、模块和接口，易于构建组件和维护
</pre>

#2.开发环境的安装
<pre>
	1.安装node.js
	
	2.安装TypeScript包
		npm install typescript -g
		tsc --version
	
	3.编写HelloWorld程序
		<1>初始化项目：在项目文件夹使用npm init -y来初始化项目，生成package.json文件。
		
		<2>创建tsconfig.json文件，在终端中输入tsc --init：它是一个TypeScript项目的配置文件，可以通过读取它来设置TypeScript编译器的编译参数。
		
		<3>安装@types/node,使用npm install @types/node --dev-save进行安装。这个主要是解决模块的声明文件问题。
		
		<4>编写HelloWorld.ts文件，然后进行保存。
			var a:string = "HelloWorld"
			console.log(a)
		
		<5>在Vscode编辑器菜单《==》终端-运行生成任务(ctrl+shift+b)，然后选择tsc：构建-tsconfig.json，这时候就会生成一个helloWorld.js文件
			命令执行：
				tsc HelloWorld.ts
				tsc HelloWorld.ts --strictNullChecks
		
		<6>在终端中输入node helloWorld.js就可以看到结果了
</pre>

#3.变量类型
<pre>
  

  (b)any:任意类型,在程序中不断变化的类型
		场景：不确定变量类型,等于对变量类型语法不进行检查,跟原生的没啥区别
			对于使用一些第三方库场景可以用到
			
		var t:any = 10
		t = 'typescript'
		t = true
		console.log(t)

		var list:any[] = [1,'hello',true]

  (c)数组 - 引用类型
		1.声明数组方式
			let arr2:Array<数据类型>  
			注意：指定数据类型的数组只能存储同一类型的数组元素

		2.数组赋值
			<1>字面量赋值
				let list:number[] = [1,2,3]
				//数组泛型方式
				let arr1:Array<number> = [1, 2, 3, 4, 5]
				let arr2:Array<string>  = ['jspang','技术胖','金三胖']
				let arr3:Array<boolean> = [ true,false,false]

			<2>构造函数赋值
				let arr1:Array<number>  = [1, 2, 3, 4, 5]
				let arr2:Array<string>  = new Array('jspang','技术胖','金三胖')
				let arr3:Array<boolean> = new Array(true,false,false)

			<3>元祖：特殊的数组
				注意：元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
				//声明一个元祖类型
				  let x:[string,number]
				  
				//正确的初始化
				  x = ['hello',10]
				  
				//错误的初始化方
				  x = [10,'hello']
				  
	(d)never
		function error(message:string):never{
			throw new Error(message)
		}
	
	(e)object
		declare function create(o:object | null):void
		create(o:{a:1})
	
	(f)类型断言：很肯定的知道是哪种类型语言
		let someValue:any = 'this is a string'
		
		//强制转换方式
		let strlength1:number = (<string>someValue).length
		//类型断言
		let strlength2:number = (someValue as string).length
	
	
  3.字符串 - 引用类型
    let str: string = '一条小河'
    //注意：引用类型的字符串为大写
    let str_String: String = new String('www.baidu.com')
    console.log("str=", str)
    console.log('str_String=', str_String)
    console.log("str_len=", str.length)
    console.log('str_String_len=', str_String.length)

    //字符串的常用方法：
    查找：str.indexOf() | str.lastIndexOf()
    截取：str.substring()
    替换：str.replace(subStr,newstr) 

  4.日期对象 - 引用类型
    //不带参数
    let d: Date = new Date()
    console.log("不带参数 d=", d)
    //时间戳
    let d2: Date = new Date(1000)
    console.log("时间戳 d2=", d2)
    //日期字符串
    let d3: Date = new Date("2020/01/18 09:59:00")
    console.log("日期字符串 d3=", d3)
    //年月日时分秒
    let d4: Date = new Date(year, month, day, hours, minutes, seconds, ms)

  5.正则表达式 - 引用类型
    《a》正则表达式创建方式
        a.构造函数法
            let reg:RegExp = new RegExp("字符串描述", "修饰符")
            修饰符：
              g:全局修饰符
              i:忽略大小写
              m:多行模式
            
            let reg:RegExp = new RegExp("changxue", "gi")

        b.字面量
            let reg:RegExp = /changxue/gi

    《b》正则的一些方法运用跟原生的正则差不多
</pre>

#4.typescript函数
<pre>
  《2》函数形参
      1.可选参数：可传可不传的参数;在定义函数的时候通过?标注
        function serch(age: number, stature?: string): string {
          if (stature != undefined) {
            return '找到了' + age + '岁且' + stature + '的小姐姐'
          } else {
            return '找到了' + age + '岁的小姐姐'
          }
        }
        var age: number = 16
        var result: string = serch(age, '大长腿')
        console.log(result)
      
      2.默认参数
        function serch(age: number, stature: string = "大长腿"): string {
          if (stature != undefined) {
            return '找到了' + age + '岁且' + stature + '的小姐姐'
          } else {
            return '找到了' + age + '岁的小姐姐'
          }
        }
        var age: number = 16
        var result: string = serch(age) //age与stature调换顺序，默认参数如果在前面定义的话，可以使用undefined作为初始值
        console.log(result)
      
      3.剩余参数：就是一个数组,传递几个实参过来都可以直接存在形参的数组中
        function serch(...need: string[]): string {
          let yy: string = '找到了'
          for (let i = 0; i < need.length; i++) {
            yy = yy + need[i]
            if (i < need.length) { yy = yy + '、' }
          }
          yy = yy + '的小姐姐'
          return yy
        }

        var result: string = serch('22岁', '大长腿', '瓜子脸', '水蛇腰')
        console.log(result)
</pre>

#5.面向对象编程（抽象层次、维护性、复用性）
<pre>
  《1》类的声明和使用
      class cutegirl {
        //字段
        name: string;
        age: number;
        //构造函数
        constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
        }
        //方法
        say():string {
          return `${this.name}小姐姐${this.age}岁`
        }
      }
      let jiejie: cutegirl = new cutegirl('范冰冰', 18)
      console.log(jiejie)
      console.log(jiejie.say());

  《2》修饰符
       访问修饰符：public、protected、private
       public    : 公有修饰符，可以在 = 类内或者类外 = 使用public修饰的属性或者行为,默认修饰符
       protected : 受保护的修饰符，可以 = 本类和子类中 = 使用protected修饰的属性和行为
       private   : 私有修饰符，只可以在 = 类内 = 使用private修饰的属性和行为
			 
       readonly  : 只读属性修饰符，必须在生命时或者构造函数里被初始化
			 
			 static    : 定义静态成员,这些成员直接属于类本身,不需要实例调用
			 
			 abstract  ：用于定义抽象类和在抽象类内部定义抽象方法

      《a》例子：
            class cutegril {
              public sex: string;
              protected name: string;
              private age: number;
              public constructor(sex: string, name: string, age: number) {
                this.sex = sex
                this.name = name
                this.age = age
              }
            }
            var jiejie: cutegril = new cutegril('男', '小明', 22);
            console.log(jiejie.sex);
            console.log(jiejie.name); //报错

			《b》readonly:只读属性
						class Man {
							public readonly sex: string = '男'
						}
						var man:Man = new Man();
						man.sex = '女'
						
			《c》static 静态成员
						class Antzone {
							public static webName: string;
							public constructor(webName: string) { Antzone.webName = webName; }
							public show(age: number) {
								console.log(`${Antzone.webName} 成立 ${age}年了.`);
							}
						}
						let antzone=new Antzone("许多");
						Antzone.webName="许三";
					
			《d》abstract抽象类
						1.抽象类作为其它派生类的基类使用 一般不会直接被实例化;不同于接口,抽象类可以包含成员的实现细节
						2.抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
							abstract class AbAntzone {
								abstract do(): void;
								constructor(public webName: string) {
								}
								show(): void {
									console.log('许多');
								}
							}
							
							class Antzone extends AbAntzone{
								constructor() {
									super('许多');
								}  
								do():void{
									console.log("继承的抽象方法");
								}
							}
							let antzone=new Antzone();
							antzone.do();
							antzone.show();
				
  
  《3》继承和重用
      继承：允许我们创建一个类（子类）,从已有的类（父类）上继承所有的属性和方法,子类可以新建父类中没有的属性和方法
      注意：typeScript不支持多重继承

      class cutegril {
        public sex: string;
        protected name: string;
        private age: number;
        public constructor(sex: string, name: string, age: number) {
          this.sex = sex
          this.name = name
          this.age = age
        }
      }

      class daughter extends cutegril {
        // protected name: string;
        // public constructor(name: string) {
        //   this.name = super.name;
        // }
      }

      var test: daughter = new daughter('女儿')
      console.log(test);
   
	《4》类存取器
			let passcode = 'secret passcode'
			class Employee{
				private _fullName:string
				get fullName():string {
					return this._fullName
				}
				set fullName(newName:string){
					if(passcode && passcode === 'secret passcode'){
						this._fullName = newName
					}else{
						console.log('Error:Unauthorized')
					}
				}
			}
			let employee = new Employee()
			employee.fullName = 'Bob Smith'
			if(employee.fullName){
				console.log(employee.fullName)
			}
			
			//tsc index.ts --target es5
  《4》接口
      接口interface：用来定义一个不包含数据和逻辑代码但用来签名定义了行为的抽象类型
      interface IPerson {
        firstName: 	string
        lastName: 	string
        maiBaoBao ?: Boolean //可选属性，注意书写形式
				readonly x: number   //只读属性
		//数组定义？
        sayHi: () => string
      }
      var customer: IPerson = {
        firstName: "Tom",
        lastName: "Hanks",
        sayHi: (): string => { return "Hi there" }
      }
      console.log("Customer 对象：")
      console.log(customer.firstName)
      console.log(customer.lastName)
      console.log(customer.sayHi())

      var employee: IPerson = {
        firstName: "Jim",
        lastName: "Blakes",
        sayHi: (): string => { return "Hello!!!" }
      }
      console.log("Employee 对象：")
      console.log(employee.firstName)
      console.log(employee.lastName)
      console.log(employee.sayHi())
	  
	  函数接口声明
		interface SearchFunc{
			(source:string,subString:string):boolean
		}
		let mySearch:SearchFunc
		mySearch = function(src:string,sub:string):boolean{
			let result = src.search(sub)
			return result > -1
		}
	 
	接口与类例子：
		interface ClockInterface{
			currentTime:Date
			setTime(d:Date)
		}
		class Clock implements ClockInterface{
			currentTime:Date
			constructor(h:number,m:number){
				
			}
			setTime(d:Date){
				this.currentTime = d
			}
		}

  《5》命名空间
      命名空间（内部模块）：定义标识符的可见范围
      语法格式：
        namespace SomeNameSpaceName { 
          export interface ISomeInterfaceName {  }  
          export class SomeClassName {  }  
        }

      外部调用：
        SomeNameSpaceName.SomeClassName

      namespace shuaiGe {
        export class Dehua {
          public name: string = '刘德华'
          talk() { return '我是帅哥刘德华' }
        }
      }
      namespace bajie {
        export class Dehua {
          public name: string = '马德华'
          talk() { return '我是二师兄马德华' }
        }
      }
      let dehua1: shuaiGe.Dehua = new shuaiGe.Dehua()
      let dehua2: shuaiGe.Dehua = new bajie.Dehua()
      console.log(dehua1.talk())
      console.log(dehua2.talk())
</pre>



#接口
	例子：
		function test(obj: { webName: string }) {
			console.log(obj.webName);
		}
		let myObj = { webName: "许三"};
		test(myObj)
		
	作用：
		1.规定数据应该所具有的结构
		2.为类型命名和为你的代码或第三方代码定义契约
			(a)普通对象类型接口：
				interface Itest {
					webName: string;
					readonly rea: string; 	//只读属性
					age?:number; 					 //可选属性
				}
				function func(obj: Itest) {
					console.log(obj.webName);
				}
				let myObj = {webName:"许三", age: 5};
				func(myObj);
				
				//设置数组为只读，那么它的所有写方法都会失效
				let ro: ReadonlyArray<number>=[1,2,3,5];
			
			(b)函数类型接口：
				interface Ifunc {
					(str: string): boolean;
				}
				//函数的参数名不需要与接口里定义的名字相匹配，只需要类型相同即可
				let func:Ifunc=function(antStr:string){
					return true;
				}
			
			(c)可索引类型接口
					interface IArray {
						[index: number]: string;
					}
					 
					let arr: IArray= ["蚂蚁部落", "青岛市南区"];
					let ant: string = arr[0];
					
					？？？
					
			(d)类实现接口
					因为接口是描述数据的结构的，所以实现接口的类没必要实现接口中的成员。
					interface Itest {
						webName: string;
						show(address: string);
					}
					class Antzone implements Itest {
						webName: "蚂蚁部落";
						show(address: string) { }
						age: 4;
						constructor() { }
					}
					
					例子2：
					interface ClockConstructor {
						new (hour: number, minute: number): ClockInterface;
					}
					interface ClockInterface {
						tick();
					}

					function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
						return new ctor(hour, minute);
					}

					class DigitalClock implements ClockInterface {
						constructor(h: number, m: number) { }
						tick() {
								console.log("beep beep");
						}
					}
					class AnalogClock implements ClockInterface {
						constructor(h: number, m: number) { }
						tick() {
								console.log("tick tock");
						}
					}

					let digital = createClock(DigitalClock, 12, 17);
					let analog = createClock(AnalogClock, 7, 32);

			(e)继承接口
					1.接口之间也可以继承，使用extends关键字即可实现
					2.通过继承，可以将一个接口成员复制到另一个接口
						interface IWebName {
							webName: string;
						}
							
						interface IAge {
							age: number;
						}
							
						interface IAntzone extends IWebName ,IAge{
							address:string;
						}
							
						let antzone = <IAntzone>{};
						antzone.webName = "蚂蚁部落";
						antzone.age = 5;
						antzone.address = "青岛市南区";
					
			(f)混合类型接口
					有时希望一个对象同时具有上面提到多种类型，比如一个对象可以当做函数使用，同时又具有属性和方法。
					interface Counter {
						(start: number): string;
						interval: number;
						reset(): void;
					}
					声明一个接口，如果只有(start: number): string一个成员，那么这个接口就是函数接口，同时还具有其他两个成员，可以用来描述对象的属性和方法，这样就构成了一个混合接口
					function getCounter(): Counter {
						let counter = <Counter>function (start: number) { };
						counter.interval = 123;
						counter.reset = function () { };
						return counter;
					}
					let c = getCounter();
					c(10);
					c.reset();
					c.interval = 5.0;
					
					
					
			(g)接口继承类
				规则：
					1.继承类的成员，但不包括其实现。
					2.继承到类的private和protected成员（接口类型只能被这个类或其子类所实现）
						class ClassA {
							private privateA: any;
						}
							
						interface Itest extends ClassA {
							test(): void;
						}

						
#泛型
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
	
	1.交叉类型
		将现有的多种类型叠加到一起成为一种类型（T & U）
		function extend<T, U>(first: T, second: U): T & U {
			let result = <T & U>{};
			for (let id in first) {
				(<any>result)[id] = first[id];
			}
			for (let id in second) {
				if (!result.hasOwnProperty(id)) {
					(<any>result)[id] = (<any>second)[id];
				}
			}
			return result;
		}
	
	2.联合类型
		定义：表示一个值可以是几种数据类型中的某一种。
		形式：类型之间使用竖线"|"分隔
					let val:number | string;
		注意：
			如果一个值是联合类型，那么只能访问联合类型的共有成员
			class Bird {
				leg = 2;
				color = "white";
				fly() { // code }
			}
			class Insect {
				leg = 8;
				color = "black";
				eat() { // code }
			}
			function antzone(): Bird | Insect {
				return new Bird();
			}
			let ant = antzone();
			ant.color;
			ant.leg;
			ant.eat()	// 报错,只能访问共有成员
		
	3.类型保护
		解决问题：如果一个值是联合类型，那么只能访问联合类型的共有成员
		if ((<Bird>ant).fly) {
			(<Bird>ant).fly();
		} else if ((<Insect>ant).eat) {
			(<Insect>ant).eat();
		}
	
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
		
		(2)typeof类型保护
				function ant(param: string | number) {
					if (typeof param === "number") {
						console.log(param + 5);
					}
					if (typeof param === "string") {
						console.log(param + "许三");
					}
				}
		
		(3)instanceof类型保护
				interface Padder {
					getPaddingString(): string
				}
				class SpaceRepeatingPadder implements Padder {
					constructor(private numSpaces: number) { }
					getPaddingString() {
						return Array(this.numSpaces + 1).join(" ");
					}
				}
				class StringPadder implements Padder {
					constructor(private value: string) { }
					getPaddingString() {
						return this.value;
					}
				}

				function getRandomPadder() {
					return Math.random() < 0.5 ?
						new SpaceRepeatingPadder(4) :
						new StringPadder("  ");
				}

				// 类型为SpaceRepeatingPadder | StringPadder
				let padder: Padder = getRandomPadder();

				if (padder instanceof SpaceRepeatingPadder) {
					padder; // 类型细化为'SpaceRepeatingPadder'
				}
				if (padder instanceof StringPadder) {
					padder; // 类型细化为'StringPadder'
				}
		
		(4)switch case类型保护
				interface Square {
					kind: "square";
					size: number;
				}
				interface Rectangle {
					kind: "rectangle";
					width: number;
					height: number;
				}
				interface Circle {
					kind: "circle";
					radius: number;
				}
				type Shape = Square | Rectangle | Circle;

				function area(shape: Shape) {
					switch (shape.kind) {
						case "square": return shape.size * shape.size;
						case "rectangle": return shape.height * shape.width;
						case "circle": return Math.PI * shape.radius ** 2;
					}
				}


