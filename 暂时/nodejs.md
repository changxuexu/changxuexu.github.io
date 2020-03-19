#nodejs项目（3-8章节）
<pre>
(1)项目介绍
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

(2)接口开发
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
				
				get请求例子 - 试验
			
		c.nodejs处理post请求
			1.post请求，即客户端要向服务器端传递数据，如新建博客
			2.通过post data 传递数据
			3.浏览器无法直接模拟，需要手写js或者使用postman 
				1.postman chrome crx 安装
				2.浏览器打开：chrome://apps
			
			post请求例子 - 试验
				req.on('data',calback)//数据一块块处理
				
			
			
(3)		
	
	//下一步4-4 ~ 4-12
		
		
		
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
</pre>





