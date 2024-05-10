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
	
配置案例参考
	文档和demo：https://github.com/ltadpoles

实战：
	看一看 `vue` 或者 `react` 中的 `webpack` 配置，进行模仿
```

# webpack
# 概述和大纲
```
webpack是什么，它能做什么？
	`webpack` 是一个现代 `JavaScript` 应用程序的静态模块打包器`module bundler`，将项目当作一个整体，通过一个给定的的主文件，`webpack`将从这个文件开始找到你的项目的所有依赖文件，使用 `loaders` 处理它们，最后打包成一个或多个浏览器可识别的 `js` 文件。
	当 `webpack` 处理应用程序时，它会在内部构建一个 依赖图(`dependency graph`)，此依赖图会映射项目所需的每个模块，并生成一个或多个 `bundle`。
	webpack 已是前端打包构建的不二选择；成熟的工具，重点在于配置和使用，原理并不高优。

webpack与grunt、gulp的对比
	(1)三者都是前端构建工具
	(2)`grunt` 和 `gulp` 是基于任务和流的。
		找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个 `web` 的构建流程
	(3)`webpack` 是基于入口的。
		`webpack` 会自动地递归解析入口所需要加载的所有资源文件，然后用不同的` Loader` 来处理不同的文件，用 `Plugin` 来扩展 `webpack` 功能
	(4)`webpack` 与前者最大的不同就是支持代码分割，模块化（AMD,CommonJ,ES2015），全局分析
	(5)参考：
		https://www.zhihu.com/question/37020798
		https://webpack.docschina.org/concepts/why-webpack/
		
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
		
	3.优化打包效率 (性能优化)
		优化babel-loader
		IgnorePlugin
		noParse
		happyPack
		ParatelUglifyPlugin
		自动刷新
		热更新
		DIlPlugin
		
	4.优化产出代码 (性能优化)
		小图片 base64 编码
		bundle 加 hash
		懒加载
		提取公共改代码
		IgnorePlugin
		使用CDN加速
		使用生产环境(production)
		scope hosting
		
	5.构建流程概述
		
	6.babel
		polyfil
		runtime
	
	7.SourceMap

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
webpack的基础配置核心有四个：
	(1)entry 入口
		指示 `webpack` 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始。
		进入入口起点后，`webpack` 会找出有哪些模块和库是入口起点（直接和间接）依赖的，【默认值】是 `./src/index.js`。
		
    (2)output 输出
    	告诉 `webpack` 在哪里输出它所创建的 `bundle`，以及如何命名这些文件。
    	主要输出文件的【默认值】是 `./dist/main.js`，其他生成文件默认放置在 `./dist` 文件夹中。
    	
    (3)loader 
    	`webpack` 只能理解 `JavaScript` 和 `JSON` 文件;
    	`loader` 让 `webpack` 能够去处理其他类型的文件(非 `JavaScript` 文件)，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中;
    	通俗理解：loader就是【作为模块的解析规则】而存在;
    	在 `module.rules` 中配置，类型为数组。
    	
    (4)plugin 插件
    	`loader` 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务;
    	插件的范围包括：打包优化，资源管理，注入环境变量;
    	通俗理解：扩展 `webpack` 的功能，让 `webpack` 具有更多的灵活性;
    	在 `plugins` 中单独配置。类型为数组，每一项是一个 `plugin` 的实例，参数都通过构造函数传入。
    
    (5)模式
		通过选择 `development` 或 `production` 之中的一个，来设置 `mode` 参数，你可以启用相应模式下的 `webpack` 内置的优化
		module.exports = {
  			mode: 'production'
		}

以上基础概念小伙伴们记住就好，知道每个属性是做什么。下面，让我们按以下步骤依次进行实际操作：
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
		mini-css-extract-plugin     (webpack > 4)
		extract-text-webpack-plugin (webpack < 4)

	css压缩
		css-minimizer-webpack-plugin (webpack = 5)
		optimize-css-assets-webpack-plugin (webpack = 4)
	
	js压缩
		terser-webpack-plugin

具体配置见配置文件
	const MiniCssExtractPlugin = require('mini-css-extract-plugin')
	
	module:{
		rules:[
			// 抽离css
			// 修改style-loader 为 MiniCssExtractPlugin.loader
			{
				test:/\.css$/,
				use:[MiniCssExtractPlugin.loader, 'css-loader' , 'postcss-loader']
			},
		]
	}
	
	plugins:[
		// 抽离css文件
        new MiniCssExtractPlugin({
            filename:'css/main.[contenthash:8].css'  // 打包文件名称
            //ignoreOrder: false // 移除警告
        })
	]
	
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

参考：
	https://webpack.docschina.org/plugins/split-chunks-plugin/

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
			
		// 缓存分组：可以对不同的文件做不同的处理
		cacheGroups:{
			// 第三方模块
			vendor:{
				name:'vendor', //chunk名称
				priority:1,    //优先级权限更高，优先抽离，重要!!!
				test: /node_modules/, //通过条件找到要提取的文件：匹配任何包含 node_modules 路径的模块
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

说明：
	Webapck < 4.x 使用 `CommonsChunkPlugin` 去做分离
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

优化babel-loader
IgnorePlugin
noParse
happyPack
ParatelUglifyPlugin
自动刷新
热更新
DIlPlugin
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

注意：
	1.可以在控制台定义变量或者模版中(<input type="text" placeholder="输入值测试是刷新还是热更新">)，刷新后是否能获取变量值；如果能不能获取，状态就丢失了
	2.自动刷新、热更新 都是用于开发环境下

【自动刷新】配置
	注意：一般情况下配置了devServer:{ hot: true }，webpack-dev-server 会自动开启刷新浏览器，因此通常自动刷新不需要配置！！！
	module.exports = {
    // 开启监听，默认为false
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
	前提：需要下载`webpack-dev-server`依赖,它能够快速开发应用程序，我们可以在其中启动本地服务、设置基础页面、端口号、是否打开浏览器、是否启用热更新等一系列功能
	
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
					a.html模板文件默认也不支持HMR，直接在入口文件将html文件引入就可以了。
					b.样式文件可以直接使用HMR功能，因为style-loader内部实现了module.hot.accept的支持;
					c.js文件不可以，需要使用module.hot.accept()函数指定热更新监听模块范围，不在此范围的修改都是自动刷新；
						// 开启热更新之后的代码逻辑
						// module.hot 是否开启热更新
						if(module.hot){
								// 使用module.hot.accept()函数指定热更新监听模块，不在此范围的修改都是自动刷新
								module.hot.accept(['./math'], () => {
										const sumRes = sum(10, 20)
										console.log('sumRes in hot', sumRes)
								})
						}
						// 关闭指定子模块的HMR
						// module.hot.decline('./replace.js')
						
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

# 优化产出代码
```
小图片 base64 编码

bundle 加 hash 
	给打包出来的文件名添加哈希，实现浏览器缓存文件
	
懒加载
	按照路由拆分代码，实现按需加载，提取公共代码
	
提取公共改代码

IgnorePlugin
	
使用CDN加速 
	在构建过程中，将引用的静态资源路径修改为 `CDN` 上对应的路径
	
使用生产环境(production) 
	删除死代码 `Tree Shaking。将代码中永远不会走到的片段删除掉
	压缩代码。删除多余的代码、注释、简化代码的写法等等方式
	
scope hosting
```

## 使用生产环境(production)

```

```

## scope hosting

```

```


#
```

```


#
```

```


#  webpack的构建流程是什么？
```
1. 初始化参数：从配置文件和 `Shell` 语句中读取与合并参数，得出最终的参数
2. 开始编译：用上一步得到的参数初始化 `Compiler` 对象，加载所有配置的插件，执行对象的 `run` 方法开始执行编译
3. 确定入口：根据配置中的 `entry` 找出所有的入口文件
4. 编译模块：从入口文件出发，调用所有配置的 `Loader` 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
5. 完成模块编译：在经过第4步使用 `Loader` 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 `Chunk`，再把每个 `Chunk` 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

	在以上过程中，`Webpack` 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 `Webpack` 提供的 `API` 改变 `Webpack` 的运行结果
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

# 常见问题

**前端代码为何要进行构建和打包 ?**
```
代码层面：
	体积更小(Tree-Shaking、压缩、合并)，让网页加载更快
	编译高级语言或语法(TS，ES6+，模块化，scss)
	兼容性和错误检查(Polyfill、postcss、eslint)

项目流程层面：
	统一、高效的开发环境
	统一的构建流程和产出标准
	集成公司构建规范(提测、上线等)
	
babel 和 webpack 的区别？
	babel-JS 新语法编译工具，不关心模块化
	webpack-打包构建工具，是多个loader plugin 的集合
```

**module chunk bundle 分别什么意思，有何区别?**
```
module
	是开发中的单个模块,各个源码文件，webpack 中一切皆模块；

chunk
	指webpack在进行模块的依赖分析的时候，代码分割出来的代码块;
	多模块合并成的，如 entry、import() 、splitChunk

bundle
	是由webpack打包出来的文件,最终的输出文件
```

**loader 和 plugin 的区别 ?**
```
Loaders
	模块转换器;
	是用来告诉webpack如何转化处理某一类型的文件，并且引入到打包出的文件中；如less->css
	参考：https://www.webpackjs,com/loaders

Plugin
	扩展插件;
	是用来自定义webpack打包过程的方式，一个插件是含有apply方法的一个对象，通过这个方法可以参与到整个webpack打包的各个生命周期流程;如HtmlWebpackPlugin。
	参考：https://www.webpackjs.com/plugins
```

**有哪些常见的Loader？他们是解决什么问题的**
```
`css-loader`：加载 `CSS`，支持模块化、压缩、文件导入等特性
`style-loader`：把 `CSS` 代码注入到 `JavaScript 中`，通过 `DOM` 操作去加载 `CSS`
`slint-loader`：通过 `SLint` 检查 `JavaScript` 代码
`babel-loader`：把 `ES6` 转换成 `ES5`
`file-loader`：把文件输出到一个文件夹中，在代码中通过相对 `URL` 去引用输出的文件
`url-loader`：和 `file-loader` 类似，但是能在文件很小的情况下以 `base64` 的方式把文件内容注入到代码中去
```

**为何 Proxy 不能被 Polyfill ?**
```
如 Class 可以用 function 模拟
如 Promise 可以用 callback 来模拟
但 Proxy的功能用 Object.defineProperty 无法模拟
```

**webpack 如何实现懒加载 ?**
```
import()
结合 Vue React 异步组件
结合 Vue-router React-router 异步加载路由
```

**webpack 常见性能优化?**
```
目的：
	体积更小
	合理分包，不重复加载
	速度更快、内存使用更少

解决：
	优化打包效率
	优化产出代码
```

**babel-runtime和babel-polyfill 的区别?**
```

```

**webpack-dev-server 和 http服务器 如nginx有什么区别**
```
webpack-dev-server是用【内存】来存储webpack开发环境下的打包文件，并且可以使用模块热更新，他比传统的http服务对开发更加简单高效。
```

**什么是模块热更新？**
```
模块热更新是webpack的一个功能，他可以使得代码修改过后不用刷新浏览器就可以更新，是高级版的自动刷新浏览器。
```

**什么是Tree-shaking? css可以Tree-shaking吗？**
```
Tree-shaking是指在打包中去除那些引入了，但是在代码中没有被用到的那些死代码。
在webpack中Tree-shaking是通过uglifyJSPlugin来Tree-shaking JS。css需要使用
Purify-CSS
```

**什么是长缓存？在webpack中如何做到长缓存优化?**
```
浏览器在用户访问页面的时候，为了加快加载速度，会对用户访问的静态资源进行存储，但是每一次代码升级或者是更新，都需要浏览器去下载新的代码，最方便和简单的更新方式就是引入新的文件名称。在webpack中可以在output给输出的文件指定chunkhash,并且分离经常更新的代码和框架代码。通过NamedModulesPlugin或是
HashedModuleIdsPlugin使再次打包文件名不变。
```

**是否写过Loader和Plugin？描述一下编写loader或plugin的思路**

```
	编写 `Loader` 时要遵循单一原则，每个 `Loader` 只做一种"转义"工作。 每个 `Loader` 的拿到的是源文件内容`（source）`，可以通过返回值的方式将处理后的内容输出，也可以调用 `this.callback()` 方法，将内容返回给 `webpack` 。 还可以通过 `this.async() `生成一个 `callback` 函数，再用这个 `callback`` 将处理后的内容输出出去。
	相对于 `Loader` 而言，`Plugin` 的编写就灵活了许多。 `webpack` 在运行的生命周期中会广播出许多事件，`Plugin` 可以监听这些事件，在合适的时机通过 `Webpack` 提供的 `API` 改变输出结果
```
