======================================

{ name: '', href: '', title: '' }

计划: vue3 + node 技术博客

===============================
js原生基础：
	
  
  //简历模板
		https://www.webhek.com/post/interactive-resume.html

  //css三维视差
		https://www.webhek.com/post/parallax-2.html
		https://www.webhek.com/post/performant-parallaxing.html

=================================

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


	
	canvas时钟：
		https://www.webhek.com/post/demo-tear-able-cloth.html
		https://www.webhek.com/demos/clock.html
		https://www.webhek.com/post/demo-draw-worm.html
    https://www.webhek.com/post/body-visualizer-female.html
		//圣诞树及其算法
		https://www.webhek.com/post/christmas-tree.html
		
	
	模板：
		//手势控制幻灯片播放
		https://www.webhek.com/post/gestures-reveal-js.html#/
		https://www.webhek.com/post/hackertyper.html
		//打字游戏
		https://www.webhek.com/post/z-type.html
		
		
		//书
		https://www.webhek.com/post/creativeguidebook.html
		//相册
		https://www.webhek.com/post/3d-album.html
		https://www.webhek.com/post/unitethelovers.html


js算法：
  https://www.webhek.com/post/javascript-boids.html
  排序算法 https://www.webhek.com/post/comparison-sort.html
  

====================================================

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



如果数组列表太大，以下递归代码将导致堆栈溢出。你如何解决这个问题，仍然保留递归模式？
    var list = readHugeList();
    var nextListItem = function() {
        var item = list.pop();
        if (item) {
            // process the list item...
            nextListItem();
            //setTimeout( nextListItem, 0);
        }
    };

	1.堆栈溢出被消除，因为事件循环处理递归，而不是调用堆栈。
	2.当nextListItem运行时，如果item不为null，则将超时函数（nextListItem）推送到事件队列，并且函数退出，从而使调用堆栈清零。
	3.当事件队列运行超时事件时，将处理下一个项目，并设置一个计时器以再次调用nextListItem。
	4.该方法从头到尾不经过直接递归调用即可处理，因此调用堆栈保持清晰，无论迭代次数如何。


创建一个函数，给定页面上的DOM元素，将访问元素本身及其所有后代（不仅仅是它的直接子元素）。
对于每个访问的元素，函数应该将该元素传递给提供的回调函数。
该函数的参数应该是：
    一个 DOM 元素
    一个回调函数（以DOM元素作为参数）
    访问树中的所有元素（DOM）是经典的深度优先搜索算法应用程序。以下是一个示例解决方案：
    function Traverse(p_element,p_callback) {
        p_callback(p_element);
        var list = p_element.children;
        for (var i = 0; i < list.length; i++) {
            Traverse(list[i],p_callback); // recursive call
        }
    }


浮点数之间的比较？
	ES6 在 Number 对象上面，新增了一个极小的常量 Number.EPSILON ，它表示 1 和大于 1 的最小浮点数之间的差，相当于 2 的 -52 次方Math.pow(2,-52)
	console.log(Number.EPSILON === Math.pow(2,-52))
	
	function areTheNumbersAlmostEqual(num1, num2) {
        return Math.abs( num1 - num2 ) < Number.EPSILON;
    }
	console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
	
	用它来设置能够接受的误差范围，比如，误差范围设为 2 的 -50 次方，如果两个浮点数的差小于这个值，我们就认为这两个浮点数相等
		function withErrorMargin(left, right) {
		  return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
		}

		console.log(withErrorMargin(0.1 + 0.2, 0.3));


/* 
	获取对应浏览器的CSS前缀类型,返回值{ css:"-webkit-", dom:"WebKit", js:"Webkit", lowercase: "webkit" }

	window.getComputedStyle(element, [pseudoElt])
		作用：获取dom对象的计算样式
		element: 用于获取计算样式的dom对象
		pseudoElt: 指定一个要匹配的伪元素(::after,::before,::marker,::line-marker)的字符串,必须对普通元素省略(或null)。如getComputedStyle(h3, '::after')

	Array.prototype.slice.call(arguments)
		将具有length属性的对象(key值为数字)转成数组,没有length属性的对象返回为空
		var obj = {0:'hello',1:'world',length:2};
		console.log(Array.prototype.slice.call(obj,0)); //["hello", "world"]

*/
function browserprefix(){
	var styles = window.getComputedStyle(document.documentElement,null)
	//把这些属性转换成数组对象，搜索已知的前缀类型，如果没有发现，就缺省设置为Opera浏览器
	var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1]
	var dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
	return { dom: dom, lowercase: pre, css: '-' + pre + '-', js: pre[0].toUpperCase() + pre.substr(1) }
}


css盒模型！！



获取电池状态，火狐浏览器
	电池对象是存放在window.navigator.battery里，但因为这是火狐浏览器首次实现并提供这个接口，并未普及，你需要使用window.navigator.mozBattery这种写法。这个mozBattery对象有下列属性：
	
	charging: 表示当前电池设备是否在充电。如果电池没有充电，这个值为false。如果为true，表明电池正在充电。当前的API实现里不能得到是否充满的信息，也无法判断当前设备是否有电池。
	chargingTime: 是指距离电池充满还需要多久。
	dischargingTime: 电池已使用时间。
	level: 表示电量等级，从0到1.0。当这个值为0时，表示电量耗尽，系统即将关机。如果为1.0，则表示电池满电。
	
	// 获取电池对象!
	var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

	// 显示一些有用属性值
	console.warn("电池充电状态: ", battery.charging); // true
	console.warn("电量水平: ", battery.level); // 0.58
	console.warn("电池使用时间: ", battery.dischargingTime);

	// 设置一些事件监听器
	battery.addEventListener("chargingchange", function(e) {
		console.warn("电池充电状态变化: ", battery.charging);
	}, false);
	battery.addEventListener("chargingtimechange", function(e) {
		console.warn("电池充电时间变化: ", battery.chargingTime);
	}, false);
	battery.addEventListener("dischargingtimechange", function(e) {
		console.warn("电池使用时间变化: ", battery.dischargingTime);
	}, false);
	battery.addEventListener("levelchange", function(e) {
		console.warn("电量水平变化: ", battery.level);
	}, false);
