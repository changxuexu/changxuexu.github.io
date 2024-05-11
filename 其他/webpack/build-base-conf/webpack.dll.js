const path = require('path')
const webpack = require('webpack')
const { srcPath, distPath } = require('./paths')
module.exports = {
  mode:'development',
  entry:{
    // 把vue相关模块的放到一个单独的动态链接库
    vue:['vue','vue-router']
  },
  output:{
    // 输出动态链接库文件存放位置
    path:distPath,
    // 输出动态链接库文件名称
    filename:'[name].dll.js',
    // 存放动态链接库的全局变量名称，加上_dll_是为了防止全局污染
    library:'_dll_[name]'
  },
  plugins:[
    new webpack.DllPlugin({
      // 动态链接库的全局变量名称,需要和output。library中保持一致
      name:'_dll_[name]',
      path:path.join(distPath,'[name].manifest.json')
    })
  ]
}