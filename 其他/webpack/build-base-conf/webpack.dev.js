const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
// const { smart } = require('webpack-merge') //webpack4
const { merge } = require('webpack-merge') //webpack5
const { srcPath, distPath } = require('./paths')
module.exports = merge(webpackCommonConf, {
    mode:'development', //模式(development/production)，development模式下代码不会压缩
    devtool: 'cheap-module-source-map',  // 或者 'eval-source-map' 对于更快的源码映射体验
    module:{
        rules:[
            // 表现：直接引入图片url
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:'file-loader'
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
        new webpack.DefinePlugin({
            // 自定义全局变量，调用方式： window.ENV = 'development'
            ENV:JSON.stringify('development')
        })
    ],
    // webpack 5 (https://webpack.js.org/configuration/dev-server/#devserverproxy)
    devServer:{
        port:3000,
        // open:true, //自动打开浏览器
        compress:true, //启动gzip压缩
        client: {
            progress:true, //显示打包的进度条
        },
        static:{
            directory:distPath //当前启动服务的根目录
        },
        proxy:[
            //将本地/api/xxx代理到 localhost:3000/api/xxx
            {
                context: ['/api'],
                target:'http://localhost:3000',
                secure: false,
                changeOrigin: true
            },
            // 将本地 /api2/xxx代理到 localhost:3000/xxx
            {
                context: ['/api2'],
                target:'http://localhost:3000',
                secure: false,
                changeOrigin: true,
                pathRewrite: { '^/api2': '' },
            }
        ]
    }
    /* 
    // webpack 4
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
    */
})