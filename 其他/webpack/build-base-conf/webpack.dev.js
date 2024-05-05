const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { smart } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')
module.exports = smart(webpackCommonConf, {
    mode:'development', //模式(development/production)，development模式下代码不会压缩
    module:{
        rules:[
            // 表现：直接引入图片url
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:'file-loader'
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            // 自定义全局变量，调用方式： window.ENV = 'development'
            ENV:JSON.stringify('development')
        })
    ],
    devServer:{
        port:8080,
        progress:true, //显示打包的进度条
        contentBase:distPath, //当前启动服务的根目录
        open:true, //自动打开浏览器
        compress:true, //启动gzip压缩
        // 设置代理
        proxy:{
            //将本地 /api/xxx代理到 localhost:3000/ api/xxx
            '/api':'http://localhost:3000',

            //将本地 /api2/xxx代理到 localhost:3000/ xxx
            '/api2':{
                target:'http://localhost:3000',
                pathRewrite:{
                    '/api2':''
                }
            }
        }
    }
})