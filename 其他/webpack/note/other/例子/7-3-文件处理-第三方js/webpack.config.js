var path = require('path')
var webpack = require('webpack')

module.exports = {
  //相对配置文件路径
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    //页面引入资源路径配置
    publicPath: './dist/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {}
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-sprites')({
                  spritePath: 'dist/images/'
                }),
                require('postcss-cssnext')()
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     outputPath: 'images/'
          //   }
          // }
          {
            loader: 'url-loader',
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 1000,
              outputPath: 'images/'
            }
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                require("imagemin-pngquant")({
                  quality: [0.3, 0.8]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 1000,
              outputPath: 'font/'
            }
          }
        ]
      },
      // {
      //   test: path.resolve(__dirname, "./src/app.js"),
      //   use: [
      //     {
      //       loader: "imports-loader",
      //       options: {
      //         // $: 'jquery'
      //         jQuery: "jQuery"
      //       }
      //     }
      //   ]
      // },
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
  resolve: {
    alias: {
      jQuery$: path.resolve(__dirname, "src/assets/js/jquery.min.js")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jQuery" // 本地Js文件
    })
  ]
}