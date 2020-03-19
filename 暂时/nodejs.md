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


#nodejs项目（3-8章节）
<pre>
(1)项目介绍
	a.目标
		开发一个博客系统,具有博客的基本功能
		只开发server端，不关心前端
		
	b.需求
		
	c.技术方案
	 
</pre>


