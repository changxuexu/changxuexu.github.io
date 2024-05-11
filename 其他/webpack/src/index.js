import './style/style1.css'

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

// 引入动态数据 - 懒加载(定义chunk、vue、react异步组件)
setTimeout(()=>{
    import('./dynamic-data.js').then(res=>{
        console.log(res.default.message);
    })
},1000)

// IgnorePlugin 优化
import moment from 'moment'
import 'moment/locale/zh-cn' //手动引入中文语言包
moment.locale('zh-cn') //设置语言为中文
console.log('locale=',moment.locale());
console.log('date=',moment().format('ll'));

// 开启热更新之后的代码逻辑
// module.hot 是否开启热更新
if(module.hot){
    // 使用module.hot.accept()函数指定热更新监听模块，不在此范围的修改都是自动刷新
    module.hot.accept(['./math'], () => {
        const sumRes = sum(10, 20)
        console.log('sumRes in hot', sumRes)
    })
}
// 关闭指定子模块的HMR
// module.hot.decline('./replace.js')


*/