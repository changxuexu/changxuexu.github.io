处理css
  1.引入css
  2.css modules
  3.配置less/sass
  4.提取css代码,放在name.css文件中


1.引入css
  style-loader
    style-loader/url        //将css以link方式引入页面
    style-loader/useable    //控制引入样式是否可用
  css-loader

  1.安装
    npm install style-loader css-loader --save-dev

    方式二：
      npm install file-loader --save-dev

      output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/', //页面引入资源路径配置
        filename: '[name].bundle.js'
      }

      rules: [
          {
            test: /\.css/,
            use: [
              {
                loader: 'style-loader/url' 
              },
              {
                loader: 'file-loader'
              }
            ]
          }
        ]
      }

    特点：
      1.样式直接link插入到页面中
      2.尽量少用，因为当引入多个样式文件时，打包会link多份样式文件，并不能减少http请求

  
    方式三：
      rules: [
        {
          test: /\.css/,
          use: [
            {
              loader: 'style-loader/useable'
            },
            {
              loader: 'css-loader'
            }
          ]
        }
      ]

      app.js
        import base from './css/base.css'
        import common from './css/common.css'

        var flag = false;
        setInterval(function () {
          if (flag) {
            base.unuse()
          } else {
            base.use()
          }
          flag = !flag
        }, 500)

      特点：
        1.控制引入样式是否起作用


  
  