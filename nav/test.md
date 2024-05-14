======================================
{ name: '', href: '', href_spare:'', title: '' } 


	
		

	
===============================
vue3 + node 技术博客
		https://xiaoman.blog.csdn.net/category_11618172_2.html

动画
	https://www.webhek.com/post/performant-parallaxing.html
	
	不要使用滚动事件(scroll events)或者背景定位（background-position）来创建视差动画。
	使用 CSS 3D 变换来创建一个更准确的视差效果。
	对于iOS移动设备的Safari浏览器使用 position: sticky 来确保视差可以生效。
	

//jinli模板
	https://www.webhek.com/post/interactive-resume.html

=================================

//骨架屏实现方案
  https://segmentfault.com/a/1190000038450165
  https://xiaoiver.github.io/coding/2017/07/30/%E4%B8%BAvue%E9%A1%B9%E7%9B%AE%E6%B7%BB%E5%8A%A0%E9%AA%A8%E6%9E%B6%E5%B1%8F.html

=================================

安徽大恒能源/尚特杰/舜禹股份

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

	canvas时钟：
		https://www.webhek.com/post/demo-tear-able-cloth.html
		https://www.webhek.com/demos/clock.html
		https://www.webhek.com/post/demo-draw-worm.html
		https://www.webhek.com/post/body-visualizer-female.html
		//圣诞树及其算法
		https://www.webhek.com/post/christmas-tree.html
		https://zhuanlan.zhihu.com/p/66457307
		https://zhuanlan.zhihu.com/p/66185816
	
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

3d轮播：
	https://www.cnblogs.com/hanguozhi/p/7473893.html

滚动公告：
	https://github.com/Stevenzwzhai/plugs/tree/master/z-vue-swipe

========================================================

日期选择器：https://zhuanlan.zhihu.com/p/57043693
小游戏：https://zhuanlan.zhihu.com/p/56149820
图片懒加载：
	https://zhuanlan.zhihu.com/p/55311726
	https://zhuanlan.zhihu.com/p/98683679
	https://www.cnblogs.com/wind-lanyan/p/9173755.html

=======================
手机软件
	洛雪音乐助手
	布丁扫描
	轻启动
	手机性能排行