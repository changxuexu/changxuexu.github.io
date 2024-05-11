const path = require('path')
const webpack = require('webpack')
// const { smart } = require('webpack-merge') //webpack4
const { merge } = require('webpack-merge') //webpack5
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js')
const { srcPath, distPath } = require('./paths')
const { library } = require('webpack')
module.exports = merge(webpackCommonConf, {
    mode:'production', //production下代码会压缩
    devtool: 'source-map',  //压缩代码与源码对应对应关系，便于bug调试！！
    /* 
        当需要打包出一个第三方包是，如何操作？
        output:{
            // lib的文件名
            filename:'lodash.js',
            // 输出lib到dist目录下
            path:distPath,
            // lib的全局变量名，如window.lodash
            library:'lodash'
        }
    */
    output:{
        // 打包代码时，加上。若文件有所改动contentHash就会变，生成的文件名也会变化
        // filename:'bundle.[contentHash:8].js', // webpack4-H大小写
        filename:'bundle.[contenthash:8].js', // webpack5
        // filename:'[name].[contenthash:8].js', // 多入口。name指定分离出来包的chunk名称, 表示entry入口中的index、other,若没指定,则默认为main
        path:distPath,
        // publicPath:'http://cdn.abc.com' //修改所有静态文件url，CDN优化需求
    },
    module:{
        rules:[
            // url-loader` 和 `file-loader` 的功能相类似，不过在文件大小（单位 byte）低于指定的限制时，可以返回一个 `DataURL`，可以这样设置
            // 表现：查看图片资源路径是base64还是url形式
            // 图片-考虑base64编码的情况
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            name: "[name].[contenthash:5][ext]",
                            // 小于 5kb 的图片用 base64 格式产出
                            // 否则，依然延用 file-loader 的形式，产出url格式
                            limit:5*1024,
                            // 打包到 images 目录下, 若配置'/images/'图片引入会出现“//”
                            outputPath:'images/',
                            publicPath:'images/',
                            // 设置图片的 cdn 地址(也可以统一在外面的 output 中设置)
                            // publicPath:'http://cdn.abc.com',
                            // 由于webpack5弃用了url-loader,因此必须写esModule: false、type:'javascript/auto'才会起作用，不然css中图片资源不显示
                            esModule: false
                        }
                    }
                ],
                type:'javascript/auto'
            },
            // 字体
            {
                test:/\.(svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[contenthash:5][ext]",
                            limit: 1000,
                            //将图片打包到dist/images/
                            outputPath: 'css/font/', //打包输出
                            publicPath:'css/font/',  //访问
                            // 由于webpack5弃用了file-loader,因此必须写esModule: false、type:'javascript/auto'才会起作用，不然css中图片资源不显示
                            esModule: false
                        }
                    },
                ],
                type:'javascript/auto'
            },
            // 抽离css
            {
                test:/\.css$/,
                // loader的执行顺序事：从后往前
                // 注意这里不再是style-loader在页面中通过style标签加载形式，而目的是抽离css
                use:[MiniCssExtractPlugin.loader, 'css-loader' , 'postcss-loader']
            },
            // 抽离less
            {
                test:/\.less$/,
                // 注意这里不再是style-loader在页面中通过style标签加载形式，而目的是抽离css
                // 增加 'less-loader' 注意顺序
                use:[MiniCssExtractPlugin.loader, 'css-loader',  'postcss-loader' , 'less-loader'] //webpack5
            }
        ]
    },
    plugins:[
        // 每次在打包之前会默认清空 output.path 文件夹(默认 `dist` 文件夹)
        new CleanWebpackPlugin(), 
        
        // 定义环境变量
        new webpack.DefinePlugin({
            ENV:JSON.stringify('production') // 使用 window.ENV = 'production'
        }),

        // 抽离css文件
        new MiniCssExtractPlugin({
            filename:'css/main.[contenthash:8].css' // 打包文件名称
            // ignoreOrder: false // 移除警告
        }),

        // 作用：告诉webpack忽略特定的模块或模块模式，这些模块将不会被打包到输出结果中。
        // 如：忽略moment下的node_modules/moment/locale目录
        // new webpack.IgnorePlugin(/\.\/locale/,/moment/) //webpack4
        new webpack.IgnorePlugin({
            // resourceRegExp（必须）一个正则表达式，用于匹配需要被忽略模块的资源路径
            resourceRegExp: /^\.\/locale$/,
            // 另一个正则表达式，用于进一步限制忽略规则的应用范围。只有当模块的上下文（请求该模块的父模块所在目录）也匹配此正则表达式时，才会应用忽略规则。如果不提供，默认为() => true，意味着忽略规则将应用于所有上下文。
            contextRegExp: /moment$/
        })
    ],
    optimization:{
        // 压缩
        minimizer:[
            // 压缩js
            new TerserJSPlugin({}),
            // 压缩css
            new CssMinimizerPlugin()
        ],

        // 分割代码块
        splitChunks:{
            /* 
                取值：
                    initial 入口chunk,对于异步导入的文件不处理
                    async   异步chunk,只对异步导入的文件处理
                    all     全部chunk
            */
            chunks:'all',
            
            // 缓存分组：可以对不同的文件做不同的处理
            cacheGroups:{
                // 第三方模块
                vendor:{
                    name:'vendor', //chunk名称
                    priority:1,    //优先级权限更高，优先抽离，重要!!!
                    test: /node_modules/, //通过条件找到要提取的文件：匹配任何包含 node_modules 路径的模块
                    minSize:0,     //大小限制
                    minChunks:1    //最少复用过几次
                },

                // 公共的模块
                common:{
                    name:'common', //chunk名称
                    priority:0,    //优先级
                    minSize:0,     //公共模块的大小限制
                    minChunks:2    //公共模块最少复用过几次,此处表示将两个或两个以上的 initial chunk 中相同的模块分离出来
                }
            }
        }

    }
})