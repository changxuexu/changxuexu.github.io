var path = require('path')
var webpack = require('webpack')

module.exports = {
  //相对配置文件路径
  entry: {
    pageA: './src/pageA.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    //页面引入资源路径配置
    publicPath: './dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}