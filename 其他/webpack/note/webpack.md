# webpack
# 待处理
```
vite babel
	https://www.cnblogs.com/sirpho/articles/17508431.html

css分离与压缩
	https://www.cnblogs.com/mengfangui/p/10131303.html
	
	webpack5 optimize-css-assets-webpack-plugin:
	https://www.jianshu.com/p/e79b8581eaae

TerserWebpackPlugin
	https://blog.csdn.net/lbPro0412/article/details/135968231
	https://blog.csdn.net/weixin_49428989/article/details/137139130
	
```
# 概述
```
webpack 已是前端打包构建的不二选择；
成熟的工具，重点在于配置和使用，原理并不高优。

webpack大纲
	1.基本配置
		安装配置
		dev-server
		解析ES6
		解析样式
		解析图片文件
		常见 loader 和 plugin
		
	2.高级配置
		多入口
		抽离和压缩 css
		抽离公共代码
		懒加载
		处理 React 和 vue
		
	3.优化打包效率
		优化babel-loader
		IgnorePlugin
		noParse
		happyPack
		ParatelUglifyPlugin
		自动刷新
		热更新
		DIlPlugin
		
	4.优化产出代码
		使用生产环境
		小图片 base64 编码
		bundle 加 hash
		使用CDN
		提取公共改代码
		懒加载
		scope hosting
		
	5.构建流程概述
		
	6.babel
		polyfil
		runtime
	
常见问题：	
	为何需要webpack和babel?
		ES6 模块化，浏览器暂不支持
    	ES6 语法，浏览器并不完全支持
    	压缩代码，整合代码，以让网页加载更快
    	
    前端代码为何要进行构建和打包 ?
    module chunk bundle 分别什么意思，有何区别?
    loader 和 plugin 的区别 ?
    webpack 如何实现懒加载 ?
    webpack 常见性能优化?
    babel-runtime和babel-polyfill 的区别?
```

# webpack4与webpack5对比
```
webpack4 升级 webpack5 以及周边插件后，代码需要做出的调整:
	1.package.json 的dev-server 命令改了"dev":"webpack serve --config build/webpack.dev.js"
		webpack5："dev": "webpack serve --config build/webpack.dev.js"
		webpack4："dev": "webpack-dev-server --config build/webpack.dev.js"

	2.升级新版本 const { merge } = require('webpack-merge')
		webpack5：const { merge } = require('webpack-merge')
		webpack4：const { smart } = require('webpack-merge')

	3.升级新版本 const { CleanWebpackPlugin } = require('clean-webpack-plugin')
		webpack5：const { CleanWebpackPlugin } = require('clean-webpack-plugin')
		webpack4：const CleanWebpackPlugin = require('clean-webpack-plugin')

	4.module.rules 中 loader:['xxx-loader'] 换成 use:['xxx-loader']
		webpack5：use: ['xxx-loader']
		webpack4：loader: ['xxx-loader']
		
	5.filename :'bundle.[contenthash:8].js' 其中 h 小写，不能大写
		webpack5：filename: 'bundle.[contenthash:8].js'
		webpack4：filename: 'bundle.[contentHash:8].js'
```

# 基本配置

```
1.拆分配置 和 merge：相对于开发环境和生产环境中的有些配置不一样
2.启动本地服务
3.处理 ES6
4.处理样式
	postcss-loader 样式兼容
	autoprefixer 前缀
5.处理图片
6.模块化: webpack包含这个功能
```


# 高级配置

## 多入口
```

```

## 抽离和压缩 css
```

```

## 抽离公共代码
```

```

## 懒加载
```

```

## 处理 React 和 vue
```

```

#
```

```


#
```

```


#
```

```


#
```

```


#
```

```


#
```

```


#
```

```


# babel
```
用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
```

## 环境搭建和基本配置
```
1.新建package.json
	{
		"dependencies": {
			"@babel/polyfill": "7.7.0",
			"@babel/runtime": "7.7.5",
		},
		"devDependencies": {
			"@babel/cli": "7.7.5",
			"@babel/core": "7.7.5",
			"@babel/preset-env": "7.7.5",
			"@babel/plugin-transform-runtime": "7.7.5"
		}
	}

2.新建.babelrc文件及配置
	babel其实就是创建流程的一个工具，实际上语法转换工作还是由presets、plugins来完成的；
	presets 的字面意思就是预设，就是把常用的plugins打包，重新取一个名字，简化一下plugins配置(不然一堆)；
	而plugins用于自己扩展一些特殊的功能
	{
		"presets": [
			[
				"@babel/preset-env"
			]
		],
		"plugins": [

		]
	}


3.运行
	npx babel src/index.js
	
	假设index.js文件内容为
		const sum = (a,b) => a + b;
		Promise.resolve(100).then(data => data);
		[10, 20, 30].includes(20)
	
	编译后的文件为：
		可以看出语法都相应的转化成了ES5语法
		var sum = function sum(a, b) {
		  return a + b;
		};
		Promise.resolve(100).then(function (data) {
		  return data;
		});
		[10, 20, 30].includes(20);
```

## babel-polyfill
```
1.babel本身只转化语法，但对于新的api(如includes、Promise)babel无法处理，因此就需要babel-polyfill来兼容es新的api。
2.Polyfill 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能。
3.core-js : 
	所有es6、es7等新语法向后兼容的一个集合
	https://github.com/zloirock/core-js
4.regenerator
	core-js 不支持 es6 generator 函数语法，因此还需要regenerator库
5.babel-polyfill 就是core-js和regenerator 两者功能的集合


基础案例：
	./index.js
		import '@babel/polyfill'
		const sum = (a,b) => a + b;
		Promise.resolve(100).then(data=> data);
		[10, 20, 30].includes(20)
	
	编译后的文件为：
		require("@babel/polyfill"); // 给新的es6等 api 提供兼容代码
		var sum = function sum(a, b) {
		  return a + b;
		};
		Promise.resolve(100).then(function (data) {
		  return data;
		});
		[10, 20, 30].includes(20);

	以上案例存在问题：
		@babel/polyfill 文件较大，当只需要一部分功能(如api：Promise、includes)，无需全部引入，就需要配置按需引入。
	
		具体操作
			(1).babelrc配置
				{
				  "presets": [
					[
					  "@babel/preset-env",
					  {
						// @babel/preset-env 的参数
						"useBuiltIns":"usage", //按需引入
						"corejs":3 // 版本
					  }
					]
				  ],
				  "plugins": [

				  ]
				}
			
			(2)./index.js
				// 注意此时没有引入@babel/polyfill依赖
				const sum = (a,b) => a + b;
				Promise.resolve(100).then(data=> data);
				[10, 20, 30].includes(20)
			
			(3)运行 npx babel src/index.js
				编译后的文件为：
					require("core-js/modules/es.array.includes.js");
					require("core-js/modules/es.object.to-string.js");
					require("core-js/modules/es.promise.js");
					var sum = function sum(a, b) {
					  return a + b;
					};
					Promise.resolve(100).then(function (data) {
					  return data;
					});
					[10, 20, 30].includes(20);
				
				此时可以看到@babel/polyfill中兼容的api按需引入
			
注意：
	Babel 7.4 之后弃用 babel-polyfill
	推荐直接使用 core-js和 regenerator	

```

## babel-runtime
```
以上案例存在问题：
	会污染全局环境
		window.Promise = function(){  }
		Array.prototype.includes = function(){  }
	如果做一个独立的web系统，则无碍
	如果做一个第三方lib，则会有问题
	
基础案例
	(1)安装依赖
		"@babel/runtime": "7.7.5",
		"@babel/plugin-transform-runtime": "7.7.5",

	(2).babelrc配置
		{
		  "presets": [
				[
					"@babel/preset-env",
					{
					"useBuiltIns":"usage",
					"corejs":3
					}
				]
		  ],
		  "plugins": [
				[
					"@babel/plugin-transform-runtime",
					{
						"absoluteRuntime": false,
						"corejs":3,
						"helpers":true,
						"regenerator": true,
						"useESModules": false
					}
				]
		  ]
		}

	(3)./index.js
		// 注意此时没有引入@babel/polyfill依赖
		const sum = (a,b) => a + b;
		Promise.resolve(100).then(data=> data);
		[10, 20, 30].includes(20)
			
	(4)运行 npx babel src/index.js
		编译后的文件为：
			var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault.js");
			require("core-js/modules/es.object.to-string.js");
			require("core-js/modules/es.promise.js");
			var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes.js"));
			var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise.js"));
			var _context;
			var sum = function sum(a, b) {
			  return a + b;
			};
			_promise["default"].resolve(100).then(function (data) {
			  return data;
			});
			(0, _includes["default"])(_context = [10, 20, 30]).call(_context, 20);

		可以看出新的api转化为了 _promise、_includes ；不会与原生api冲突
```
