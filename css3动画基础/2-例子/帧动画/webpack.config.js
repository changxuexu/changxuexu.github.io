var path = require('path');
var version = require('./package.json').version;
var webpack = require('webpack');

module.exports = {
	entry: {
		animation: './src/animation.js' //入口文件
	},
	// 打包的总出口配置
	output: {
		//输出目录 ，__dirname代表当前目录，打包出来的所有文件在硬盘中的存储位置，是一个绝对路径
		path: __dirname + '/build', 

		/* 
			打包之后静态资源(html/css/js/图片)的根目录,案例中放在 build 文件夹下的 static 文件夹中
			应该以 ‘/’ 结尾，而 其他 loader或插件的配置 不要以‘/’开头 
		*/
		// publicPath: '/build/static/'
		
		/* 
			输出文件名和文件存放位置， [name]表示entry中的入口文件名animation
			如 filename: 'js/[name].js' 表示/build/static/js/animation.js
		*/
		filename: '[name].js', 
		
		//注册window.animation全局属性
		library: 'animation',  
		//模块化输出filename文件     
		libraryTarget: 'umd',       
		
	},
	
	// https://www.jianshu.com/p/e3cdbea88780
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	},
	plugins: [
		// 在编译时可以配置的全局常量,可以在webpack打包范围内任意javascript环境内访问 https://www.jianshu.com/p/fa1b71ceda77
		new webpack.DefinePlugin({
			__VERSION__: JSON.stringify(version)
		})
	]
};

/* 
	webpack-dev-server配置项中的publicPath
		在本地开发阶段，会使用devServer启动一个本地服务器并自动打包，我们就可以用 host name 在浏览器访问页面。
		webpack-dev-server 打包的内容是放在虚拟内存中的，这里也可以配置 publicPath 属性，指定 “打包后的资源在内存中存放的位置”。
		
		假设host name：localhost:8888，打包输出 bundle.js 到内存中
			publicPath：’/’ ，访问虚拟资源： localhost:8888/bundle.js
			publicPath：’/dist/’ ，访问虚拟资源： localhost:8888/dist/bundle.js
*/