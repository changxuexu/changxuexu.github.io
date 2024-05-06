const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths')
module.exports = {
    entry:path.join(srcPath,'index'), // 文件入口
    /* entry:{
        index:path.join(srcPath,'index.js'),
        other:path.join(srcPath,'other.js')
    }, */
    module:{
        rules:[
            // babel-loader 将es6以上语法向下兼容
            {
                test:/\.js$/,
                // loader:['babel-loader'], //webpack4
                use:['babel-loader'], //webpack5
                include:srcPath,
                exclude:/node_modules/
            },
            // {
            //     test:/\.css$/,
            //     // loader的执行顺序事：从后往前
            //     loader:['style-loader','css-loader']
            // },
            {
                test:/\.css$/,
                // loader的执行顺序事：从后往前
                // loader:['style-loader', 'css-loader', 'postcss-loader'] //webpack4
                use:['style-loader', 'css-loader' , 'postcss-loader'] //webpack5
            },
            {
                test:/\.less$/,
                // 增加 'less-loader' 注意顺序
                // loader:['style-loader', 'css-loader', 'less-loader'] //webpack4
                use:['style-loader', 'css-loader' , 'postcss-loader', 'less-loader'] //webpack5
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
            chunks:['index'] //只引用entry入口的index.js
        }),
        // 多入口-生成 other.html-访问()
        new HtmlWebpackPlugin({
            template:path.join(srcPath, 'other.html'), // 使用的模板
            filename:'other.html', //产出的文件名
            // chunks 表示该页面要引用哪些 chunk(即entry入口中的index、other)
            chunks:['other'] //只引用entry入口的other.js
        }) 
        */
    ]
}