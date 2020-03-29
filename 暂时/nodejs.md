#使用Koa2重构博客项目（10章节）
<pre>
	
</pre>

#使用express重构博客项目（9章节）
<pre>
	
</pre>

#nodejs项目（3-8章节）
<pre>
##(1)博客项目-node纯原生开发项目介绍
	a.目标
		开发一个博客系统,具有博客的基本功能
		只开发server端，不关心前端
		
	b.需求
		首页，作者主页，博客详情页
		登录页
		管理中心，新建页，编辑页
		
		需求一定要明确，需求指导开发
		不要纠结于简单的页面样式，并不影响server端的复杂度
		
	c.技术方案
		1.数据如何存储
			博客 、用户
		2.如何与前端对接，即接口设计
			【描述】							【接口】				【方法】  【URL参数】   		【备注】
			获取博客列表					/api/blog/list 		get			author、keywords		
			获取一篇博客的内容		/api/blog/detail  get				id
			新增一篇博客					/api/blog/new     post
			更新一篇博客					/api/blog/update  post			id
			删除一篇博客					/api/blog/del			post			id
			登录 									/api/blog/login		post

##(2)博客项目-接口开发
	1.http请求概述：
		DNS解析，建立TCP连接，发送http请求 - 浏览器
		server接收到http请求，处理，并返回 - 服务器端
		客户端接收到返回数据，处理数据（如渲染页面，执行js）
	
	2.nodejs处理http请求简单介绍
		get请求 和 querystring
		post请求 和 postdata
		路由
		
		a.简单例子
			const http = require('http')
			//req:客户端发送数据，res服务器端返回数据
			const server = http.createServer((req, res) => {
				res.end('hello world');
			})
			server.listen(8000)
			console.log('浏览器访问', 'http://localhost:8000/')
		
		b.nodejs处理get请求
			1.get请求，即客户端要向server端获取数据，如查询博客列表
			2.通过querystring来传递数据，如a.html?a=100&b=200
			3.浏览器直接访问，就发送get请求
			
				const http = require('http')
				const querystring = require('querystring')
				const server = http.createServer((req, res) => {
					console.log("method=", req.method) //get
					console.log("url=", req.url) //url
					const url = req.url //url
					req.query = querystring.parse(url.split('?')[1])
					res.end(JSON.stringify(req.query));
				})
				server.listen(8000)
				console.log('浏览器访问', 'http://localhost:8000/')
			
		c.nodejs处理post请求
			1.post请求，即客户端要向服务器端传递数据，如新建博客
			2.通过post data 传递数据
			3.浏览器无法直接模拟，需要手写js或者使用postman 来校验post例子demo
				1.postman chrome crx 安装
				2.浏览器打开：chrome://apps
			
				const http = require('http')
				const server = http.createServer((req, res) => {
					console.log("method=", req.method);
					console.log('content-type=', req.headers['content-type']);
					//接收数据(数据是以一块块接收)
					let postData = ''
					req.on('data', chunk => {
						postData += chunk.toString()
					})
					req.on('end', () => {
						console.log("postData=", postData)
						//在这里返回，因为是异步
						res.end('hello world')
					})
				})
				server.listen(8000)
		
	3.搭建开发环境
		1.从0开始搭建,不适用任何框架
		
		2.使用nodemon检测文件变化，自动重启node
			//安装nodemon
				cnpm install -g nodemon 					//全局安装
				nodemon -v 												//查看版本检测是否安装成功
				cnpm install nodemon --save-dev   //项目安装
				
			//启动node文件
				nodemon ./bin/www.js
			
		3.使用cross-env设置环境变量，兼容mac linux 和 windows
			//安装cross-env
				cnpm install cross-env --save-dev
				
			//设置环境变量
				"scripts": {
					"dev": "cross-env MODE_ENV=dev nodemon ./bin/www.js",
					"prd": "cross-env MODE_ENV=production nodemon ./bin/www.js"
				}
				
			//调用环境变量	
				process.env.MODE_ENV //dev/production
				
	4.开发接口-路由
		初始化路由：根据之前技术方案的设计，做出路由
		返回假数据：将路由和数据处理分离，以符合设计原则
		基本例子：1-开发基本接口思想demo
	
	5.开发博客列表路由
		框架的基本思想总结？
		
	6.开发博客详情路由
	
		
		promise介绍-文件操作
	
	7.post接口数据处理（postData数据）
		app.js  ===  手动处理postData
			
	8.新建和更新博客路由
	
	9.删除博客路由与更新博客路由
	
		
		
	//下一步 4-11 ~ 4-12 （6）===========
	
		
		mysql
		登录
		
		
##(3)博客项目-数据存储
	1.mysql介绍
		mysql是企业内最常用的存储工具，一般都有专人运维
		mysql是社区内最常用的存储工具，有问题随时可查
		mysql本身是一个复杂的数据库软件，本课程只讲基本使用
		web server 中最流行的关系型数据库
		官网可免费下载，用于学习
		
	2.mysql安装
		执行安装，过程中需要输入root用户名的密码，要记住这个密码
		安装mysql客户端操作工具（Navicat、SQLyog）
	
	3.操作数据库
		a.建库 (myblog)
		
		b.建表
			见图表结构，创建users、blogs表
			（1）创建users表
					基本users表数据：
						id		username		password		realname
						1			zhangsan		123					张三
						2			lisi				123					李四
					
					创建users表
						column		datatype		pk主键		nn不为空		AI自动增加		Default
						id					int					Y						Y						Y
						username	varchar(20)								Y	
						password	varchar(20)								Y	
						realname	varchar(20)								Y	
			
			（2）创建blogs表
					基本blogs表数据：
						id		title		content		 createtime			 author
						1			标题1		 内容1		1584871316188		zhangsan
						2			标题2		 内容2		1584871316188			lisi
					
					创建blogs表:
						column			datatype			pk主键		nn不为空		AI自动增加		Default
						id						int						Y						Y						Y
						title				varchar(50)									Y
						content			 longtext										Y
						createtime	 bigint(20)									Y
						author			varchar(20)									Y
						
				
		c.表操作
			增、删、改、查
			使用sql语句
		
	4.nodejs操作数据库
		a.安装mysql
			npm i mysql --registry=https://registry.npm.taobao.org
			
			https://github.com/zhongkai/wxtodo-client/master
		b.例子：
		
		
	//下一步5-5 ~ 5-10
		5
		
##(4)博客项目-登录

##(5)博客项目-日志

##(6)博客项目-安全

</pre>


#nodejs的用途
<pre>
 1.nodejs一个javascript的运行环境
 2.运行在服务器端，作为web server
 3.运行在本地，作为打包、构建工具
 注意：
		理解服务端工具：mysql redis nginx等
		学会服务器端开发的思想与前端开发的区别
</pre>

#nodejs 介绍
<pre>
1.下载&安装
	a.普通方式
		访问官网http://nodejs.cn下载并安装
		打开命令行，运行node -v和npm -v测试
		
	b.方式二：使用NVM（nodejs版本管理工具,可切换多个nodejs版本）
		NVM的安装方式：
			苹果电脑：
				安装brew:https://brew.sh
				使用brew,使用brew install nvm
			windows:
				github中搜索nvm-windows,有下载地址
				下载完成傻瓜式安装
				
		NVM的使用方式
			nvm list 												//查看当前所有的node版本
			nvm install v10.13.0 					  //安装指定的版本
			nvm use --delete-prefix 10.13.0 //切换到指定的版本
			
2.nodejs和前端javascript的区别

	nodejs中文文档: http://nodejs.cn/api/
	
	nodejs = ECMAScript + nodejs API 两者结合
	
	vscode debugge调试：
		
	
3.server开发和前端开发的区别
	a.服务稳定性
		server端可能会遭受各种恶意攻击和误操作
		单个客户端可以意外挂掉，但是服务器端不能
		解决：使用PM2做进程守候（即服务器端挂掉会进行自动重启）
	
	b.考虑内存和CPU(优化，扩展)
		客户端独占一个浏览器，内存和CPU都不是问题
		server端要承载很多请求，CPU和内存都是稀缺资源
		解决：使用stream写日志去优化，使用redis存session扩展
		
	c.日志记录
		前端也会参与写日志，但只是日志的发起方，不关心后续
		server端要记录日志、存储日志、分析日志,前端不关心
	
	d.安全
		server端要随时准备接收各种恶意攻击，前端则少很多
		如：越权操作，数据库攻击等
		例子：登录验证，预防xss攻击和sql注入
		
	e.集群和服务拆分
		产品发展速度快，流量可能会迅速增加
		如何通过扩展机器和服务拆分来承载大流量
		本课程虽然是但机器开发，但是从设计上支持服务拆分

4.大纲
	a.课程准备
		nodejs 介绍
		服务器特点
		案例分析和设计
		
	b.原生代码
		api和数据存储
		登录和redis
		安全和日志
	
	c.使用框架
		express 和 koa2 
		中间件和插件
		中间件原理
	
	d.线上环境
		PM2介绍和配置
		PM2多进程模型
		服务器运维
</pre>

#上线与配置（11）
<pre>
##线上环境要求
	1.服务器稳定性
	2.充分利用服务器硬件资源，以便提高性能
	3.线上日志记录

##PM2特点
	1.进程守护，系统崩溃自动重启
		node app.js 和 nodemon app.js，进程崩溃则不能访问
		pm2遇到进程崩溃，会自动重启（写例子测试）
		
	2.启动多进程，充分利用CPU和内存
	
	3.自带日志记录功能

##PM2介绍
	1.下载安装
		npm install pm2 -g
		pm2 -v
		
	2.基本使用
		//启动应用
		pm2 start app.js
		
		启动参数说明：
			--watch：						监听应用目录的变化，一旦发生变化，自动重启。如果要精确监听、不见听的目录，最好通过配置文件。
			-i --instances：		启用多少个实例，可用于负载均衡。如果-i 0或者-i max，则根据当前机器核数确定实例数目。
			--ignore-watch：		排除监听的目录/文件，可以是特定的文件名，也可以是正则。比如--ignore-watch="test node_modules "some scripts""
			-n --name：					应用的名称。查看应用信息的时候可以用到。
			-o --output <path>：标准输出日志文件的路径。
			-e --error <path>：	错误输出日志文件的路径。
			--interpreter <interpreter>：the interpreter pm2 should use for executing app (bash, python...)。比如你用的coffee script来编写应用。

			eg: pm2 start api.js -i 4 	#后台运行pm2，启动4个app.js 

		//重启
			pm2 restart app_name|app_id
		
		//查看进程状态
			pm2 list
		
		//查看基本信息
			pm2 info app_name|app_id
		
		//查看进程日志打印
			pm2 log app_name|app_id
			pm2 logs //所有进程日志
				
			
		
		//监视进程cpu与内存信息
			pm2 monit app_name|app_id
		
		//产生init脚本保持进程活着
			pm2 startup

		//停止
			1.停止特定的应用。可以先通过pm2 list获取应用的名字（--name指定的）或者进程id。
				pm2 stop app_name|app_id
			
			2.停止所有应用
				pm2 stop all
			
		//删除
			1.杀死特定的进程。可以先通过pm2 list获取应用的名字（--name指定的）或者进程id。
				pm2 delete app_name|app_id
				
			2.杀死所有进程
				pm2 delete all
				
		//0秒停机重载进程 (用于 NETWORKED 进程)
			pm2 reload all
			
		//更新pm2
			pm2 save 		#记得保存进程状态
			npm install pm2 -g
			pm2 update
			
		//运行健壮的 computer API endpoint (http://localhost:9615)
			pm2 web

			
##PM2配置
	1.新建PM2配置文件（包括进程数量，日子文件目录等）
		项目根目录下创建
			pm2.config.json //pm2配置文件
			logs/err.log  	//存储错误日志，console.error()的内容
			logs/out.log 		//输出基本日志，console.log()的内容
				
			pm2.config.json文件
				(进程数量，日志文件目录等)
				{
					"apps":{
						"name":"pm2-test-server",
						"script":"app.js" //启动文件
						//监听应用目录的变化，一旦发生变化，自动重启
						"watch":true, 
						//不需要监听
						"ignore_watch":{
							"node_modules",
							"logs"
						},
						//设置多进程
						"instances":4, 
						//日志输出对应的文件
						"error_file":"logs/err.log",
						"out_file":"logs/out.log",
						//日志产生的时间戳
						"log_date_format":"YYYY-MM-DD HH:mm:ss"
					}
				}
			
	2.修改PM2启动命令，重启
		pm2 start pm2.config.json
		
	3.访问server，检查日志文件的内容（日志记录是否生效）

##PM2配置
	1.为何使用多进程
		单个进程的内存是受限的
		内存：无法充分利用机器全部内存
		CPU: 无法充分利用多核cpu的优势
		
	2.多进程和redis
		多进程之间，内存无法共享
		多进程访问一个redis，实现数据共享
	
	
</pre>





