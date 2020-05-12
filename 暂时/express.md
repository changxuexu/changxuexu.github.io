====================================
<pre>
express博客项目
	1.初始化项目，之前的部分代码可以复用
	2.开发路由，并实现登录
	3.记录日志

初始化环境
	1.安装插件 mysql xss
	2.mysql controller resModel 相关代码可以服用
	3.初始化路由

登录
	1.使用 express-session 和 connect-redis,简单方便
	2.req.session 保存登录信息，登录校验做成 express 中间件
	
	登录 express-session :
		/app.js
			const session = require('express-session')
			// 在使用路由之前
			app.use(session({
				secret:'WJiol_#23123_',
				cookie:{
					path:'/', //默认配置
					httpOnly:true, //默认配置
					maxAge:24*60*60*1000
				}
			}))
	
		/routes/user.js - 测试
			router.get('/session-test',(req,res,next) => {
				const session = req.session
				if(session.viewNum == null){
					session.viewNum = 0
				}
				session.viewNum++
				res.json({
					viewNum:session.viewNum
				})
			})
		
		登录流程的实现：
			1-登录.png
			2-登录测试.png
		
	登录信息存储到redis上
		npm install redis connect-redis --save 
		
		/db/redis.js
		
		/app.js
			const RedisStore = require('connect-redis')(session)
			//session之前引用
			const redisClient = request('./db/redis')
			const sessionStore = new RedisStore({
				client:redisClient
			})
			
			app.use(session({
				secret:'WJiol_#23123_',
				cookie:{
					path:'/', //默认配置
					httpOnly:true, //默认配置
					maxAge:24*60*60*1000
				},
				//增加一行
				store:sessionStore 
			}))
			
			//测试验证登录-看视屏（9-10）
			
		//登录中间件
			/middleware/loginCheck.js
			const { ErrorModel } = require('../model/resModel')
			module.exports = (req,res,next) => {
				if(req.session.username){
					next()
					return 
				}
				res.json(
					new ErrorModel('未登录')
				)
			}
	
	
	
	开发路由
		（视屏9-11）
		
====================================
(1)express介绍
		官网：https://www.expressjs.com.cn/
		<1>、express时node.js最常用的web server框架
		<2>、express下载安装和使用，express中间件机制
		<3>、开发接口，连接数据库，实现登录，日志记录
		<4>、分析express中间件原理
	
	
(2)安装（使用脚手架express-generator）
		npm install express-generator -g
		express --version //监测版本是否安装成功
		express express-test //生成项目
		npm install & npm start //安装并运行
						
						
(3)初始化代码介绍，处理路由
		各个插件的作用
		思考各个插件的实现原理
		处理get请求和post请求
		

(4)中间件机制
		中间件是一个可访问请求对象（req）和响应对象（res）的函数，
		在 Express 应用的请求-响应循环里，下一个内联的中间件通常用变量 next 表示。
		
		中间件结构：
			app.use（[path]，function）
				path：是路由的url，默认参数‘/'，意义是路由到这个路径时使用这个中间件
				function：中间件函数 function(request,response,next)
									Next()：使用下一个中间件；
									如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。
									使用可选则挂载路径，可在应用级别或路由级别装载中间件。
									可装载一系列中间件函数，在挂载点创建一个中间件系统栈。
			
			中间件的分类：
				1、应用级中间件
				2、路由级中间件
				3、错误处理中间件
				4、内置中间件
				5、第三方中间件
			
			对中间件的理解：
				1、封装了一些处理一个完整事件的功能函数。
				2、非内置的中间件需要通过安装后，require到文件就可以运行。
				3、封装了一些或许复杂但肯定是通用的功能
				
				中间件其是一个函数，在响应发送之前对请求进行一些操作
					function middleware(req,res,next){
						// 做该干的事
						// 做完后调用下一个函数，表示函数数组中的下一个函数
						next();
					}
					函数数组：
						1.express内部维护一个函数数组：表示在发出响应之前要执行的所有函数，也就是中间件数组
						2.使用app.use(fn)后，传进来的fn就会被扔到这个数组里，执行完毕后调用next()方法执行函数数组里的下一个函数，如果没有调用next()的话，就不会调用下一个函数了，也就是说调用就会被终止
						
			
			express 托管静态文件
				express.static(root, [options])
				
				1.将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问
					app.use(express.static(path.join(__dirname, 'public')))
					http://localhost:1000/stylesheets/style.css
					
				2.使用多个静态资源目录
					app.use(express.static('public'))
					app.use(express.static('files'))
				
				3.为文件创建虚拟路径前缀（文件系统中不存在该路径）
					app.use('/static', express.static(path.join(__dirname, 'public')))
					http://localhost:1000/static/stylesheets/style.css


			如何设置一个错误处理器中间件？
				app.use(function (err, req, res, next) {
					console.error(err.stack)
					res.status(500).send('Something broke!')
				})
			
			
(5)express简单中间件实现：
	app.use用来注册中间件
	遇到http请求，根据path 和 method判断触发哪些
	实现next机制，即上一个通过next触发下一个
	
	/like-express文件
		const http = require('http')
		const slice = Array.prototype.slice

		class LikeExpress {
				constructor() {
						// 存放中间件的列表
						this.routes = {
								all: [],   // app.use(...)
								get: [],   // app.get(...)
								post: []   // app.post(...)
						}
				}

				register(path) {
						const info = {}
						if (typeof path === 'string') {
								info.path = path
								// 从第二个参数开始，转换为数组，存入 stack
								info.stack = slice.call(arguments, 1)
						} else {
								info.path = '/'
								// 从第一个参数开始，转换为数组，存入 stack
								info.stack = slice.call(arguments, 0)
						}
						return info
				}

				use() {
						const info = this.register.apply(this, arguments)
						this.routes.all.push(info)
				}

				get() {
						const info = this.register.apply(this, arguments)
						this.routes.get.push(info)
				}

				post() {
						const info = this.register.apply(this, arguments)
						this.routes.post.push(info)
				}

				match(method, url) {
						let stack = []
						if (url === '/favicon.ico') {
								return stack
						}

						// 获取 routes
						let curRoutes = []
						curRoutes = curRoutes.concat(this.routes.all)
						curRoutes = curRoutes.concat(this.routes[method])

						curRoutes.forEach(routeInfo => {
								if (url.indexOf(routeInfo.path) === 0) {
										// url === '/api/get-cookie' 且 routeInfo.path === '/'
										// url === '/api/get-cookie' 且 routeInfo.path === '/api'
										// url === '/api/get-cookie' 且 routeInfo.path === '/api/get-cookie'
										stack = stack.concat(routeInfo.stack)
								}
						})
						return stack
				}

				// 核心的 next 机制
				handle(req, res, stack) {
						const next = () => {
								// 拿到第一个匹配的中间件
								const middleware = stack.shift()
								if (middleware) {
										// 执行中间件函数
										middleware(req, res, next)
								}
						}
						next()
				}

				callback() {
						return (req, res) => {
								res.json = (data) => {
										res.setHeader('Content-type', 'application/json')
										res.end(
												JSON.stringify(data)
										)
								}
								const url = req.url
								const method = req.method.toLowerCase()
								//中间件哪些需要访问，哪些不能放问
								const resultList = this.match(method, url)
								this.handle(req, res, resultList)
						}
				}

				listen(...args) {
						const server = http.createServer(this.callback())
						server.listen(...args)
				}
		}

		// 工厂函数
		module.exports = () => {
				return new LikeExpress()
		}
	
		/test.js文件
		const express = require('./like-express')

		// 本次 http 请求的实例
		const app = express()

		app.use((req, res, next) => {
				console.log('请求开始...', req.method, req.url)
				next()
		})

		app.use((req, res, next) => {
				// 假设在处理 cookie
				console.log('处理 cookie ...')
				req.cookie = {
						userId: 'abc123'
				}
				next()
		})

		app.use('/api', (req, res, next) => {
				console.log('处理 /api 路由')
				next()
		})

		app.get('/api', (req, res, next) => {
				console.log('get /api 路由')
				next()
		})

		// 模拟登录验证
		function loginCheck(req, res, next) {
				setTimeout(() => {
						console.log('模拟登陆成功')
						next()
				})
		}

		app.get('/api/get-cookie', loginCheck, (req, res, next) => {
				console.log('get /api/get-cookie')
				res.json({
						errno: 0,
						data: req.cookie
				})
		})

		app.listen(8000, () => {
				console.log('server is running on port 8000')
		})

	</pre>