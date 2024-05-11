const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
// const { smart } = require('webpack-merge') //webpack4
const { merge } = require('webpack-merge') //webpack5
const { srcPath, distPath } = require('./paths')
module.exports = merge(webpackCommonConf, {
    mode:'development', //模式(development/production)，development模式下代码不会压缩
    module:{
        rules:[
            // Loader 可以在 require() 引用模块的时候添加，如require('style-loader!css-loader!./style.css');
            // {
            //     test:/\.css$/,
            //     // loader的执行顺序事：从后往前
            //     loader:['style-loader','css-loader']
            // },
            {
                test:/\.css$/,
                // loader的执行顺序事：从后往前
                // 表现：样式直接使用style标签插入到页面中
                // loader:['style-loader', 'css-loader', 'postcss-loader'] //webpack4
                use:['style-loader', 'css-loader' , 'postcss-loader'] //webpack5
            },
            {
                test:/\.less$/,
                // pnpm install less-loader less --save-dev 
                // pnpm install sass-loader node-sass --save-dev
                // 增加 'less-loader' 注意顺序
                // loader:['style-loader', 'css-loader', 'less-loader'] //webpack4
                use:['style-loader', 'css-loader' , 'postcss-loader', 'less-loader'] //webpack5
            },
            // 表现：直接引入图片url
            // {
            //     test:/\.(png|jpg|jpeg|gif|bmp)$/,
            //     use:'file-loader'
            // },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[contenthash:5][ext]",
                            //将图片打包到dist/images/
                            outputPath: 'images/', //打包输出
                            publicPath:'images/',  //访问
                            // 由于webpack5弃用了file-loader,因此必须写esModule: false、type:'javascript/auto'才会起作用，不然css中图片资源不显示
                            esModule: false
                        }
                    },
                ],
                type:'javascript/auto'
            },
            // webpack5推荐 type: 'asset/resource' 方式
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/i, // 匹配图片文件类型
            //     type: 'asset', // 使用 asset/resource 类型处理资源,这会将文件发送到输出目录并导出一个 URL。
            //     generator: { // 控制输出文件的路径和命名
            //         filename: 'images/[name].[contenthash:5][ext]', // 输出目录及文件命名规则
            //     },
            //     // 可选，进一步控制如何处理资源 需要type:'asset'才生效
            //     parser: { 
            //       dataUrlCondition: {
            //         maxSize: 5*1024, // 小于此阈值的图片会被内联为data URL，默认是8kb
            //       }
            //     }
            // },
            {
                test:/\.(svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[contenthash:5][ext]",
                            //将图片打包到dist/images/
                            outputPath: 'css/font/', //打包输出
                            publicPath:'css/font/',  //访问
                            // 由于webpack5弃用了file-loader,因此必须写esModule: false、type:'javascript/auto'才会起作用，不然css中图片资源不显示
                            esModule: false
                        }
                    },
                ],
                type:'javascript/auto'
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            // 自定义全局变量，调用方式： window.ENV = 'development'
            ENV:JSON.stringify('development')
        }),

        // 添加热更新插件
        // new webpack.HotModuleReplacementPlugin(), 
    ],
    // webpack 5 (https://webpack.js.org/configuration/dev-server/#devserverproxy)
    devServer:{
        hot: true, // 启用模块热更新

        // open:true, //自动打开浏览器
        compress:true, //启动gzip压缩
        client: {
            progress:true, //显示打包的进度条
        },
        static:{
            directory:distPath //当前启动服务的根目录
        },

        
        port:3000, //本地服务器端口号
        // 代理设置: 解决跨域问题
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
                target:'http://localhost:3000', //目标代理
                changeOrigin: true, //改变源到url
                secure: false, // 是否接受运行在 HTTPS 上
                pathRewrite: { '^/api2': '' }, //重写路径
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