{ name: '', href: '', title: '' }
=================================

Krpano
	https://github.com/ningbonb/nodeKrpano
vue组件
	https://mp.weixin.qq.com/s/u8EP2EaeLiPZfHOSQMPWXw

前端开发工具
	https://mp.weixin.qq.com/s/aNNBXubH6WyoxC1hB4w92w
		
=================================
//骨架屏实现方案
  https://segmentfault.com/a/1190000038450165
  https://xiaoiver.github.io/coding/2017/07/30/%E4%B8%BAvue%E9%A1%B9%E7%9B%AE%E6%B7%BB%E5%8A%A0%E9%AA%A8%E6%9E%B6%E5%B1%8F.html

//fetch
	const res = await fetch('https://icanhazdadjoke.com', {
		headers: { Accept: 'application/json' }
	})
	const data = await res.json()
=================================

const dom = document.querySelector('.nav') / document.querySelectorAll('.nav')
dom.classList
dom.classList.add('active')
dom.classList.remove('active')
dom.classList.toggle('active')

dom.parentNode          //父节点
dom.nextElementSibling  //后一个兄弟节点
dom.previousSibling     //前一个兄弟节点

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