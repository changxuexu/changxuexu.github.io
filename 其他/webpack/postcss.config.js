module.exports = {
    plugins:[
        // require('autoprefixer') // webpack4
        [
            'postcss-preset-env',
            {
              // 其他选项
              browsers: 'last 2 versions'   
            }
        ]
    ]
}