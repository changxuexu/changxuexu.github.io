{ name: '', href: '', title: '' }

50projects50days基础练习
https://github.com/bradtraversy/50projects50days

vue文档
  Gridsome 
    https://gridsome.org/
  VitePress
    https://vitepress.vuejs.org/

  VuePress
    https://www.vuepress.cn/


CKEditor5
  https://github.com/ckeditor
  
 

//js样式
const nav = document.querySelector('.nav')
nav.classList
nav.classList.add('active')
nav.classList.remove('active')
nav.classList.toggle('active')

e.target.parentNode.classList
e.target.nextElementSibling  //后一个兄弟节点
e.target.previousSibling     //前一个兄弟节点

const notif = document.createElement('div')
toasts.appendChild(notif)
notif.remove()


//原生form监听
form.addEventListener('submit/input', (e) => {
    e.preventDefault()
})

//骨架屏实现方案
  https://segmentfault.com/a/1190000038450165
  https://xiaoiver.github.io/coding/2017/07/30/%E4%B8%BAvue%E9%A1%B9%E7%9B%AE%E6%B7%BB%E5%8A%A0%E9%AA%A8%E6%9E%B6%E5%B1%8F.html


//fetch
	const res = await fetch('https://icanhazdadjoke.com', {
		headers: { Accept: 'application/json' }
	})
	const data = await res.json()

//样式
.progress-bar {
  background-color: #fff;
  height: 4px;
  width: 100%;
  animation: grow 10s linear infinite;
  transform-origin: left;
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
}


//星星
.loveMe .fa-heart {
  position: absolute;
  animation: grow 0.6s linear;
  transform: translate(-50%, -50%) scale(0);
}

@keyframes grow {
  to {
    transform: translate(-50%, -50%) scale(10);
    opacity: 0;
  }
}

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}






