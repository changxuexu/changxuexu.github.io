# webpack
# 待处理
```
vite babel
	https://www.cnblogs.com/sirpho/articles/17508431.html

TerserWebpackPlugin
	https://blog.csdn.net/lbPro0412/article/details/135968231
	https://blog.csdn.net/weixin_49428989/article/details/137139130

参考
	https://blog.csdn.net/Maui1027/article/details/126350281
		options: { importLoaders: 1, esModule: true,},
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
		module-各个源码文件，webpack 中一切皆模块；
		chunk-多模块合并成的，如 entry、import() 、splitChunk
		bundle-最终的输出文件

	loader 和 plugin 的区别 ?
	webpack 如何实现懒加载 ?
	webpack 常见性能优化?
	babel-runtime和babel-polyfill 的区别?
```

# webpack4与webpack5对比
```
webpack4 升级 webpack5 以及周边插件后，代码需要做出的调整:
	1.package.json 的dev-server 命令改了"dev":"webpack serve --config build/webpack.dev.js"
		webpack5：
			package.json 
				"dev": "webpack serve --config build/webpack.dev.js"

			配置
				// webpack 5 (https://webpack.js.org/configuration/dev-server/#devserverproxy)
				devServer:{
						port:3000,
						// open:true, //自动打开浏览器
						compress:true, //启动gzip压缩
						client: {
								progress:true, //显示打包的进度条
						},
						static:{
								directory:distPath //当前启动服务的根目录
						},
						proxy:[
								//将本地/api/xxx代理到 localhost:3000/api/xxx
								{
										context: ['/api'],
										target:'http://localhost:3000',
										secure: false,
										changeOrigin: true
								},
								// 将本地 /api2/xxx代理到 localhost:3000/xxx
								{
										context: ['/api2'],
										target:'http://localhost:3000',
										secure: false,
										changeOrigin: true,
										pathRewrite: { '^/api2': '' },
								}
						]
				}
				
		webpack4：
			package.json 
				"dev": "webpack-dev-server --config build/webpack.dev.js"
			配置：
				devServer:{
					port:8080,
					progress:true, //显示打包的进度条
					contentBase:distPath, //当前启动服务的根目录
					open:true, //自动打开浏览器
					compress:true, //启动gzip压缩
					// 设置代理
					proxy:{
							//将本地 /api/xxx代理到 localhost:3000/ api/xxx
							'/api':'http://localhost:3000',

							//将本地 /api2/xxx代理到 localhost:3000/ xxx
							'/api2':{
									target:'http://localhost:3000',
									pathRewrite:{
											'/api2':''
									}
							}
					}
				}

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
	
	6.压缩css依赖optimize-css-assets-webpack-plugin 调整为 css-minimizer-webpack-plugin

```

# 基本配置
```
1.拆分配置 和 merge：相对于开发环境和生产环境中的有些配置不一样

2.启动本地服务
	参考webpack-dev-server依赖
	https://webpack.js.org/configuration/dev-server/#devserverproxy

3.处理 ES6
	参照babel章节

4.处理样式
	关于样式兼容
		npm install --save-dev postcss-loader postcss
		postcss的配置文件postcss.config.js
			webpack4:
				module.exports = {
					plugins: [
						// 前缀自动补全依赖autoprefixer需下载
						// https://github.com/postcss/autoprefixer
						require('autoprefixer') 
					]
				}
			
			webpack5:
				module.exports = {
					plugins:[
							[
								'postcss-preset-env',
								{
									// 其他选项
									browsers: 'last 2 versions'   
								}
							]
					]
				}

5.处理图片

6.模块化: webpack包含这个功能
```


# 高级配置

## 多入口
```
(1)单页面应用(SPA-Single-page Application) 
	特点：功能较多，一个页面展示不完；以操作为主，非展示为主；适合一个综合 Web 应用
	场景：大型后台管理系统(如阿里云的 console)，知识库(如语雀、石墨文档),复杂的 WebApp(如外卖H5)

(2)多页面应用(MPA-Multi-page Application) 
	特点：功能较少，一个页面展示的完；以展示为主，操作较少；适合一个孤立的页面
	场景：如分享页面

(3)默认情况下，Vue React 都是 SPA

(4)实现：多页面应用对应webpack的多入口配置
./webpack.common.js 
	module.exports = {
		entry:{
			index:path.join(srcPath,'index.js'),
			other:path.join(srcPath,'other.js')
    },
		// ...
		plugins:[
			// 多入口-生成 index.html-访问()
			new HtmlWebpackPlugin({
				template:path.join(srcPath, 'index.html'), // 使用的模板
				filename:'index.html', //产出的文件名
				// chunks 表示该页面要引用哪些 chunk(即entry入口中的index、other)
				chunks:['index'] //只引用entry入口的index.js
			}),
			// 多入口-生成 other.html-访问()
			new HtmlWebpackPlugin({
				template:path.join(srcPath, 'other.html'), // 使用的模板
				filename:'other.html', //产出的文件名
				// chunks 表示该页面要引用哪些 chunk(即entry入口中的index、other)
				chunks:['other'] //只引用entry入口的other.js
			})
    ]
	}

./webpack.prod.js
	module.exports = merge(webpackCommonConf, {
    mode:'production', //production下代码会压缩
    output:{
			filename:'[name].[contenthash:8].js', // 多入口,name表示entry入口中的index、other
    }
		// ...
	})
```

## 抽离和压缩 css
```
场景：
	生产环境下抽离和压缩 css

依赖：
	css抽离
		mini-css-extract-plugin
		extract-text-webpack-plugin(webpack < 4)

	css压缩
		css-minimizer-webpack-plugin (webpack = 5)
		optimize-css-assets-webpack-plugin (webpack = 4)
	
	js压缩
		terser-webpack-plugin

具体配置见配置文件
	module:{
		rules:[
			// 抽离css
			{
				test:/\.css$/,
				use:[MiniCssExtractPlugin.loader, 'css-loader' , 'postcss-loader']
			},
		]
	}
	optimization:{
		// 压缩
		minimizer:[
			// 压缩js
			new TerserJSPlugin({}),
			// 压缩css
			new CssMinimizerPlugin()
		],
	}

	查看打包后的css是否抽离和压缩
```

## 抽离公共代码
```
将第三方模块或者共用的模块进行抽离出来，减小代码体积
// 分割代码块
optimization:{
	splitChunks:{
		/* 
			取值：
				initial 入口chunk,对于异步导入的文件不处理
				async   异步chunk,只对异步导入的文件处理
				all     全部chunk
		*/
		chunks:'all',
			
		// 缓存分组
		cacheGroups:{
			// 第三方模块
			vendor:{
				name:'vendor', //chunk名称
				priority:1,    //优先级权限更高，优先抽离，重要!!!
				test: /node_modules/, //匹配任何包含 node_modules 路径的模块
				minSize:0,     //大小限制
				minChunks:1    //最少复用过几次
			},

			// 公共的模块
			common:{
				name:'common', //chunk名称
				priority:0,    //优先级
				minSize:0,     //公共模块的大小限制
				minChunks:2    //公共模块最少复用过几次,此处表示将两个或两个以上的 initial chunk 中相同的模块分离出来
			}
		}
	}
}

表现：
	将第三方模块或者共用的模块进行抽离出来打包成单独文件，需要时引入即可

```

## 懒加载
```
异步加载js，用到的时候才去加载；
webpack自身支持这个功能，无需配置

案例：
	./dynamic-data.js
		export default {
			message:'this is dynamic data'
		}

	./index.js
		setTimeout(()=>{
			import('./dynamic-data.js').then(res=>{
				console.log(res.default.message);
			})
		},1000)

	表现：
		开发环境：用到的时候才去加载
		生产环境：单独打包出一个chunk文件，用到的时候才去加载

```

## 处理 React 和 vue
```

```

# 优化打包(构建)效率
```
优化打包构建速度：开发体验和效率
优化产出代码：产品性能
```

## 优化babel-loader
```
场景：es6转化成es5比较耗时

解决：
	需要缓存优化，同时明确转化范围

配置
	rules:[
		// babel-loader 将es6以上语法向下兼容
		{
				test:/\.js$/,
				// loader:['babel-loader'], //webpack4
				// use:['babel-loader'], //webpack5
				use:['babel-loader?cacheDirectory'], //?cacheDirectory表示开启缓存，对于没有修改的代码不需要重新编译
				include:srcPath, // 明确范围
				exclude:/node_modules/  //排除范围：不处理该文件夹下的js文件
		}
	]
```

## IgnorePlugin
```
场景：
	import moment from 'moment'
	默认会引入所有语言 JS 代码，代码过大
	如何只引入中文?

解决：
	避免引入无用模块

案例
	./index.js
		// IgnorePlugin 优化
		import moment from 'moment'
		import 'moment/locale/zh-cn' //手动引入中文语言包!!!!!
		moment.locale('zh-cn') //设置语言为中文
		console.log('locale=',moment.locale());
		console.log('date=',moment().format('ll'));

	配置：
		plugins:[
			// 作用：告诉webpack忽略特定的模块或模块模式，这些模块将不会被打包到输出结果中。
			// 如：忽略moment下的node_modules/moment/locale目录
			// new webpack.IgnorePlugin(/\.\/locale/,/moment/) //webpack4
			new webpack.IgnorePlugin({
				// resourceRegExp（必须）一个正则表达式，用于匹配需要被忽略模块的资源路径
				resourceRegExp: /^\.\/locale$/,
				// 另一个正则表达式，用于进一步限制忽略规则的应用范围。只有当模块的上下文（请求该模块的父模块所在目录）也匹配此正则表达式时，才会应用忽略规则。如果不提供，默认为() => true，意味着忽略规则将应用于所有上下文。
				contextRegExp: /moment$/
			})
		]

	表现：
		配置设置前后，打包体积对比以及警告提示
```

## noParse
```
解决：
	避免重复打包

配置：
	module.exports = {
		module:{
			// 独立完整的(如react.min.js)文件就没必要采用模块化
			// 忽略对(如react.min.js)文件的递归解析处理
			noParse:[/react\.min\.js$/]
		}
	}

与IgnorePlugin对比
	IgnorePlugin 直接不引入，代码中没有
	noParse 引入，但不打包

```

## 自动刷新、热更新
```
1.自动刷新
	整个网页全部刷新，速度较慢，状态会丢失；
	修改一个模块，全部模块就会全部重新加载。

2.热更新
	新代码生效，网页不刷新，状态不丢失；
	一个模块发生变化，只会重新打包这一个模块，而不是打包所有模块，极大的提升了构建速度。

自动刷新、热更新 都是用于开发环境下

【自动刷新】配置
	module.exports = {
    // 开启监听，默认为false
    // 注意：开启监听之后(true)，webpack-dev-server 会自动开启刷新浏览器！！！
    watch:true,
    // 监听配置
    watchOptions:{
        ignored:/node_modules/, //忽略
        // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
        aggregateTimeout:380,   //默认为300ms
        // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的
        poll:1000 //默认每隔1000毫秒询问一次
    }
	}

【热更新】配置
	module.exports = {
		plugins:[
			// 添加热更新插件(webpack4可无需配置)
      new webpack.HotModuleReplacementPlugin()
		],
		devServer:{
			hot: true, // 启用热更新
		}
	}

	热更新
		优点：
			主要是通过以下几种方式，来显著加快开发速度:
				保留在完全重新加载页面期间丢失的应用程序状态
				只更新变更内容，以节省主贵的开发时间
				在源代码中 css/js 产生修改时，会立刻在浏览器中进行更新，这几平相当于在浏览器 devtools 直接更改样式:
					样式文件可以直接使用HMR功能，因为style-loader内部实现了module.hot.accept的支持;
					js文件不可以，需要配置module.hot.accept  配置请看入口js文件;
					html模板文件默认也不支持HMR，直接在入口文件将html文件引入就可以了
	
		缺点：
			要在代码里注册热更新的范围，增加代码量。所以除非代码太庞大，更新速度很慢，一般开启热更新反而会增加开发开销。

```

## happyPack
```
开启多进程，打包更快

```

## ParatelUglifyPlugin
```
开启多进程，进行代码压缩

```

## DIlPlugin
```
场景：
	前端框架如 vue React，体积大，构建慢
	较稳定，不常升级版本
	同一个版本只构建一次即可，不用每次都重新构建

解决：
	动态链接库插件；
	用于开发环境下

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
	
	说明：
		@babel/cli 
			从终端运行 Babel，命令行对 js 文件进行换码的工具

		@babel/core
			Babel 的核心，包含各个核心的 API，供 Babel 插件和打包工具使用
			
		@babel/preset-env 
			包含的插件支持所有最新的JS特性(ES2015,ES2016等,不包含stage阶段);
			用于处理语法层：
				let、const、class、箭头函数等，这些需要在构建时进行转译，是指在语法层面上的转译，比如class...将来会被转译成var function...；
			配置：
				建立.babelrc文件或者babelconfig.js文件，添加以下代码，babel会自动寻找这个文件；
				只对我们所使用的并且目标浏览器中缺失的功能进行代码转换和加载 polyfill。
			其他：
				如果你用 Vue ，presets 一般是 @vue/app，这个是把 在@babel/preset-env 包含的 plugins 上又加了很多自己定义的 plugins。
				所有的 Vue CLI 应用都使用 @vue/babel-preset-app，它包含了 babel-preset-env、JSX 支持以及为最小化包体积优化过的配置。
				@vue/babel-preset-app已经默认配置了@babel/plugin-transform-runtime。
			
		@babel/polyfill 
			来模拟所有新的 JavaScript 功能;
			用于处理Api层：Promise、includes、map等，这些是在全局或者Object、Array等的原型上新增的方法，它们可以由相应es5的方式重新定义babel对这两个分类的转译的做法肯定是不一样的，我们也需要给出相应的配置
			通俗理解：垫平不同浏览器或者不同环境下的差异，让新的内置函数、实例方法等在低版本浏览器中也可以使用。
			
		@babel/plugin-transform-runtime
			该插件会开启对 Babel 注入的辅助函数，同时解决全局污染

		@babel/runtime
			@babel/runtime中含有辅助函数
	

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
5.babel-polyfill 就是core-js和regenerator 两者功能的集合。如果安装了 @babel/polyfill 不用在额外安装 core-js@2


基础案例：
	./index.js
		import '@babel/polyfill'    //全部引入
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
								// 按需引入
								/*
									useBuiltIns取值: 
										false:不对polyfills做任何操作；
										entry: 根据target中浏览器版本的支持，将polyfills拆分引入，仅引入有浏览器不支持的polyfill；
										usage(新)：检测代码中ES6/7/8等的使用情况，仅仅加载代码中用到的polyfills(按需引入)
								*/
								"useBuiltIns":"usage", 
								
								/*
									版本: 取值为2(默认)和3，只在useBuiltIns: "entry | usage"时有效。
									注意：需要安装对应的 core-js 依赖版本；
									问题：
										Can't resolve 'core-js/modules/es.promise.js'Can't resolve 'core-js/modules/es.promise.js'
										解决：pnpm install core-js@3
								*/
								"corejs":3,
								
								// 支持的浏览器
								//"targets": ">0.2%, not dead, Firefox >= 52, IE >= 8",
								
								//"amd"、"umd"、 "systemjs"、 "commonjs" 、"cjs" 、"auto" (默认)、false。
								 modules:auto
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
				
				虽然看起来Promise还是没有转译，但是我们引入的 polyfill 中已经包含了对Promise的定义，所以这时候代码便可以在低版本浏览器中运行了。
				此时可以看到@babel/polyfill中兼容的api按需引入
			
注意：
	Babel 7.4 之后弃用 babel-polyfill
	推荐直接使用 core-js和 regenerator	

```

## babel-runtime
```
以上案例存在问题：
	可以看出preset-env在处理例如Promise这种的api时，只是引入了core-js中的相关的js库，这些库重新定义了Promise，然后将其挂载到了全局。
	这里的问题就是：必然会造成全局变量污染，同理其他的例如Array.from等会修改这些全局对象的原型prototype，这也会造成全局对象的污染。
	
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
					// 将core-js交给transform-runtime处理
					// transform-runtime是利用plugin自动识别并替换代码中的新特性，检测到需要哪个就用哪个
					"@babel/plugin-transform-runtime",
					{
						/*
							取值：true| false(默认) 
							当 absoluteRuntime 设置为 false（默认值）时，Babel 会生成【相对路径】来导入 @babel/runtime 中的辅助函数。
							当将其设置为 true 时，Babel 会生成【绝对路径】来导入 @babel/runtime。
						*/
						"absoluteRuntime": false,
						
						/*
							取值：2 | 3 | false(默认)。
							指向选项的值为数字，即选择哪个版本的@babel-runtime-corejs:
							配置corejs为3，需要预先安装@babel/runtime-corejs3
							配置corejs为2，需要预先安装@babel/runtime-corejs2
							配置corejs为false，需要预先安装@babel/runtime
							
							注意：根据配置需要安装对应的依赖；
								不然报错Can't resolve '@babel/runtime-corejs3/core-js-stable/set-timeout'；、
								解决 pnpm install @babel/runtime-corejs3
						*/
						"corejs":3,
						
						/*
							取值：true(默认) | false
							从 @babel/runtime-corejs/helpers 模块中引入 helper。代替内联 helper。
						*/
						"helpers":true,
						
						/*
							取值：true(默认) | false
							切换是否将generator函数转换为使用不污染全局作用的regenerator运行时。
						*/
						"regenerator": true,
						
						/*
							取值：true| false(默认) 
							当 useESModules 设置为 true 时，Babel 将会生成 import 语句来导入 @babel/runtime 中的模块，这适用于那些支持 ES 模块的环境，比如在现代浏览器或配置为使用 ES 模块的打包工具（如 Webpack 通过 type: 'module' 配置）中。
							如果设置为 false（默认值），Babel 则会生成 CommonJS 风格的 require 语句来导入这些功能。这适用于 Node.js 环境或其他不完全支持 ES 模块的环境。
						*/
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

# SourceMap
```
https://blog.csdn.net/stand_forever/article/details/132712478
```
