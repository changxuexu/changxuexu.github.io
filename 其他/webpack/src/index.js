/* 
// 引入js, 处理es6
import { sum } from './math'
const sumRes = sum(10, 20)
console.log('sumRes=', sumRes);

// 引入css，处理postcss-loader样式兼容，autoprefixer前缀
import './style/style1.css'
import './style/style2.less'

// 引入图片
function insertImgElem(imgFile){ 
    const img = new Image()
    img.src = imgFile
    document.body.appendChild(img)
}

import imgFile1 from './img/1.png'
insertImgElem(imgFile1) //大图
import imgFile2 from './img/2.jpeg'
insertImgElem(imgFile2) //小图,在生产环境下打包成base64引入，而不是地址

// 自定义全局变量
console.log('window.ENV=',ENV);

// 引入第三方模块
import _ from 'lodash'
console.log(_.each); 

// 开启热更新之后的代码逻辑
if(module.hot){
    module.hot.accept(['./math'], () => {
        const sumRes = sum(10, 20)
        console.log('sumRes in hot', sumRes)
    })
}

// 引入动态数据
setTimeout(()=>{
    import('./dynamic-data.js').then(res=>{
        console.log(res.default.message);
    })
},1000)
*/