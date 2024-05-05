const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths')
module.exports = {
    entry:path.join(srcPath,'index'), // 文件入口
    module:{
        rules:[
            // babel-loader 将es6以上语法向下兼容
            {
                test:/\.js$/,
                loader:['babel-loader'],
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
                loader:['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test:/\.less$/,
                // 增加 'less-loader' 注意顺序
                loader:['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins:[
        // html-webpack-plugin 解析html插件，将打包后的js自动引入模板文件
        new HtmlWebpackPlugin({
            template:path.join(srcPath, 'index.html'), // 使用的模板
            filename:'index.html' //产出的文件名
        })
    ]
}