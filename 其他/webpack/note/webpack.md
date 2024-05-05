# webpack
# 待处理
```
https://www.cnblogs.com/sirpho/articles/17508431.html

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

webpack4 升级 webpack5 以及周边插件后，代码需要做出的调整:
    1.package.json 的dev-server 命令改了"dev":"webpack serve --config build/webpack.dev.js"
    2.升级新版本 const { merge } = require('webpack-merge')
    3.升级新版本 const { CleanWebpackPlugin } = require('clean-webpack-plugin')
    4.module.rules 中 loader:['xxx-loader'] 换成 use:['xxx-loader']
    5.filename :'bundle.[contenthash:8].js' 其中 h 小写，不能大写
```

# 基本配置

```
拆分配置 和 merge：相对于开发环境和生产环境中的有些配置不一样
启动本地服务
处理 ES6
处理样式
	postcss-loader 样式兼容
	autoprefixer 前缀
处理图片
模块化
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


#
```

```


#
```

```
