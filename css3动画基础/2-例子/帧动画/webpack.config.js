var path = require('path');
var version = require('./package.json').version;
var webpack = require('webpack');

module.exports = {
	entry: {
		animation: './src/animation.js' //入口文件
	},
	output: {
		path: __dirname + '/build', //输出目录 ，__dirname代表当前目录
		filename: '[name].js',      //输出文件名 [name]表示entry中的入口文件名animation
		library: 'animation',       //注册window.animation全局属性
		libraryTarget: 'umd',       //模块化输出filename文件
		publicPath: '/assets/'
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	},
	plugins: [
		new webpack.DefinePlugin({
			__VERSION__: JSON.stringify(version)
		})
	]
};