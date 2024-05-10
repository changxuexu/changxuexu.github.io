const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths')
module.exports = {
    // 文件入口
    entry:path.join(srcPath,'index'), 
    /* 
    // 配置多入口
    entry:{
        index:path.join(srcPath,'index.js'),
        other:path.join(srcPath,'other.js')
    }, 
    */
    /* 
        关于模块的加载相关，我们就定义在module.loaders中；
        这里通过正则表达式去匹配不同后缀的文件名，然后给它们定义不同的加载器。
    */
    module:{
        rules:[
            // babel-loader 将es6以上语法向下兼容
            {
                test:/\.js$/,
                // loader:['babel-loader'], //webpack4
                // use:['babel-loader'], //webpack5
                use:['babel-loader?cacheDirectory'], //?cacheDirectory表示开启缓存
                include:srcPath, // 明确范围
                exclude:/node_modules/  //排除范围：不处理该文件夹下的js文件
            }
        ]
    },
    plugins:[
        // html-webpack-plugin 解析html插件，将打包后的js自动引入模板文件
        new HtmlWebpackPlugin({
            template:path.join(srcPath, 'index.html'), // 使用的模板
            filename:'index.html' //产出的文件名
        })

        /* 
        // 多入口-生成 index.html-访问()
        new HtmlWebpackPlugin({
            template:path.join(srcPath, 'index.html'), // 使用的模板
            filename:'index.html', //产出的文件名
            // chunks 表示该页面要引用哪些 chunk(即entry入口中的index、other)
            // chunks:['index'] //只引用entry入口的index.js
            chunks:['index', 'vendor', 'common'] // 要考虑代码分割
        }),
        // 多入口-生成 other.html-访问()
        new HtmlWebpackPlugin({
            template:path.join(srcPath, 'other.html'), // 使用的模板
            filename:'other.html', //产出的文件名
            // chunks 表示该页面要引用哪些 chunk(即entry入口中的index、other)
            // chunks:['other'] //只引用entry入口的other.js
            chunks:['other', 'vendor', 'common'] // 要考虑代码分割
        }) 
        */
    ]
}