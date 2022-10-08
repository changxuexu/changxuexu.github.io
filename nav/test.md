======================================

{ name: '', href: '', title: '' }

vue3 + node 技术博客



=================================
linux:
	https://www.linuxcool.com

DOCX
  https://docx.js.org/#/

Dinero.js  
  https://dinerojs.com
  https://blog.csdn.net/womenjiademao/article/details/84067429


vue组件
	https://mp.weixin.qq.com/s/u8EP2EaeLiPZfHOSQMPWXw

二维码vue
  https://link-to-qr.com/
=================================


兼容：
  https://www.webhek.com/post/supporting-internet-explorer.html


//骨架屏实现方案
  https://segmentfault.com/a/1190000038450165
  https://xiaoiver.github.io/coding/2017/07/30/%E4%B8%BAvue%E9%A1%B9%E7%9B%AE%E6%B7%BB%E5%8A%A0%E9%AA%A8%E6%9E%B6%E5%B1%8F.html


=================================

const dom = document.querySelector('.nav') / document.querySelectorAll('.nav')
dom.classList
dom.classList.add('active')
dom.classList.remove('active')
dom.classList.toggle('active')

dom.parentNode          //父节点
dom.nextElementSibling  //后一个兄弟节点
dom.previousSibling     //前一个兄弟节点


//fetch
	const res = await fetch('https://icanhazdadjoke.com', {
		headers: { Accept: 'application/json' }
	})
	const data = await res.json()

=================================
//波浪
.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus + label span,
.form-control input:valid + label span {
  color: lightblue;
  transform: translateY(-30px);
}
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

//倒计时
.nums span.in {
  transform: translate(-50%, -50%) rotate(0deg);
  animation: goIn 0.5s ease-in-out;
}

.nums span.out {
  animation: goOut 0.5s ease-in-out;
}

@keyframes goIn {
  0% {
    transform: translate(-50%, -50%) rotate(120deg);
  }

  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(10deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}

@keyframes goOut {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(20deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
}




=====================================================================

jquery课程
	https://study.163.com/course/introduction.htm?courseId=465001#/courseDetail?tab=1



//简历模板
		https://www.webhek.com/post/interactive-resume.html
	
	canvas时钟：
		https://www.webhek.com/post/demo-tear-able-cloth.html
		https://www.webhek.com/demos/clock.html
		https://www.webhek.com/post/demo-draw-worm.html
		//圣诞树及其算法
		https://www.webhek.com/post/christmas-tree.html
		
	
	模板：
		//手势控制幻灯片播放
		https://www.webhek.com/post/gestures-reveal-js.html#/
		https://www.webhek.com/post/hackertyper.html
		//打字游戏
		https://www.webhek.com/post/z-type.html
		
		//css三维视差
		https://www.webhek.com/post/parallax-2.html
		https://www.webhek.com/post/performant-parallaxing.html
		//书
		https://www.webhek.com/post/creativeguidebook.html
		//相册
		https://www.webhek.com/post/3d-album.html
		https://www.webhek.com/post/unitethelovers.html


js原生基础：
  https://www.webhek.com/post/page-visibility.html
  https://www.webhek.com/post/vendor-prefix.html

  https://www.webhek.com/post/remove-whitespace-inline-block.html
  https://www.webhek.com/post/battery-api.html

js算法：
  https://www.webhek.com/post/javascript-boids.html
  排序算法 https://www.webhek.com/post/comparison-sort.html



插件
  https://www.webhek.com/post/body-visualizer-female.html

=====================================================




vue-cli项目改造为SSR服务端渲染: 
	https://zhuanlan.zhihu.com/p/51088598
	https://blog.csdn.net/qq_40323256/article/details/101907326
	

微信/支付宝支付：
	https://blog.csdn.net/qq_36710522/article/details/90480914
	https://www.cnblogs.com/niceyoo/p/12196095.html
	https://developers.weixin.qq.com/community/develop/doc/0004e21a190dc846683ae235951800
	
3d轮播：
	https://www.cnblogs.com/hanguozhi/p/7473893.html

滚动公告：
	https://github.com/Stevenzwzhai/plugs/tree/master/z-vue-swipe

linux
	https://www.imooc.com/learn/175
	https://www.runoob.com/linux/linux-tutorial.html
	http://c.biancheng.net/linux_tutorial/
	https://study.163.com/course/introduction.htm?courseId=232007#/courseDetail?tab=1

========================================================

https://zhuanlan.zhihu.com/p/66185816
https://zhuanlan.zhihu.com/p/66457307

Promise总结：https://zhuanlan.zhihu.com/p/66119015
创建对象：https://zhuanlan.zhihu.com/p/85351052

日期选择器：https://zhuanlan.zhihu.com/p/57043693
小游戏：https://zhuanlan.zhihu.com/p/56149820
图片懒加载：
	https://zhuanlan.zhihu.com/p/55311726
	https://zhuanlan.zhihu.com/p/98683679
	https://www.cnblogs.com/wind-lanyan/p/9173755.html

=======================


对象深拷贝
export const deepClone = (obj, hash = new WeakMap()) => {
  // 日期对象直接返回一个新的日期对象
  if (obj instanceof Date){
   return new Date(obj);
  } 
  //正则对象直接返回一个新的正则对象     
  if (obj instanceof RegExp){
   return new RegExp(obj);     
  }
  //如果循环引用,就用 weakMap 来解决
  if (hash.has(obj)){
   return hash.get(obj);
  }
  // 获取对象所有自身属性的描述
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  // 遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  
  hash.set(obj, cloneObj)
  for (let key of Reflect.ownKeys(obj)) { 
    if(typeof obj[key] === 'object' && obj[key] !== null){
     cloneObj[key] = deepClone(obj[key], hash);
    } else {
     cloneObj[key] = obj[key];
    }
  }
  return cloneObj
}

/**
 * 这只是深度复制的一个简单版本
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
	export function deepClone(source) {
	  if (!source && typeof source !== 'object') {
		throw new Error('error arguments', 'deepClone')
	  }
	  const targetObj = source.constructor === Array ? [] : {}
	  Object.keys(source).forEach(keys => {
		if (source[keys] && typeof source[keys] === 'object') {
		  targetObj[keys] = deepClone(source[keys])
		} else {
		  targetObj[keys] = source[keys]
		}
	  })
	  return targetObj
	}



/**
 * 合并两个对象，使最后一个对象优先
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}



=====================================================