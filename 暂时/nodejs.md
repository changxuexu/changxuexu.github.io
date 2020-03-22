#上线与配置（11）
<pre>
	
</pre>

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
		
		
		//下一步 4-7 ~ 4-12 （6）===========
		
		
		
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





