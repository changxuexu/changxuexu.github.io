var path = require('path')

var webpack = require('webpack')

module.exports = {
  //相对配置文件路径
  entry: {
    pageA: './src/pageA.js',
    pageB: './src/pageB.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/', //页面引入资源路径配置
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
  },
  optimization: {
    // 打包公共代码
    splitChunks: {
      cacheGroups: {
        // 注意: priority属性
        // 其次: 打包业务中公共代码
        common: {
          name: "common",
          chunks: "all",
          minSize: 1,
          priority: 0
        },
        // 首先: 打包node_modules中的文件
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 10
        }
        //第三方库与webpack打包文件分开
      }
    }
  },
  plugins: []
}