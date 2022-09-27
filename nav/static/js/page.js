
let { reactive, ref, onMounted, watchEffect, toRaw } = Vue

let favicon = new Favico({ animation: "pop", position: 'down' }); // 动态favico.ico

const offsetY = 36   //滚动y轴偏移量
let noscroll = false //左侧菜单栏闪烁

const option = {
  data() {
    return {
      arr_data,
      scrolltimer: null,
      resizetimer: null,
      totoptimer: null,
      currentfloor: '',   //当前楼层
      showsidebar: false, //展示侧边栏
      ismobile: false,    //手机端
      wscrolline: 0,  //滚动百分比
      scrollAvail: 0  //可滚动区域总高度
    }
  },
  computed: {
    arr_super_tit() {
      let arr_data = this.arr_data
      if (arr_data.length) {
        return arr_data.map(item => { return item.super_tit })
      } else {
        return []
      }
    }
  },
  created() {
    this.showsidebar = !this._isMobile()
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$nextTick(() => {
        //可滚动区域总高度
        this.scrollAvail = this._scrollHeight() - this._clientHeight()

        // tooltip
        tippy('[data-tippy-content]')

        // Typed
        new Typed('#typeitmotto', {
          strings: ['平平淡淡，随心生活；心无所贪，净土则生'],
          typeSpeed: 300, startDelay: 300,
          backSpeed: 300, showCursor: false, loop: true,
          onBegin: (self) => {
            self.el.style.color = this._getRandomColor()
          }
        })

        // 数字增加
        this._updateCounter()

        // favicon.js
        favicon.badge(' ');

        // 
        window.addEventListener("scroll", this.scroll)
        window.addEventListener('resize', this.resizehandle)

      })

    },
    scroll() {
      if (this.scrolltimer) { clearTimeout(this.scrolltimer) }
      this.scrolltimer = setTimeout(() => {
        //滚动高度
        let scrollTop = this._scrollTop()
        if (!noscroll) {
          //左侧菜单栏闪烁
          let temp = []
          let arr_flooritem = this.$refs.flooritem
          arr_flooritem.length && arr_flooritem.forEach((item, idx) => { temp.push(item.offsetTop - offsetY) });
          temp.forEach((item, idx, arr) => {
            if (arr[idx] <= scrollTop && arr[idx + 1] >= scrollTop) {
              this.currentfloor = `element_super_${idx + 1}`
              this._navscrollToTop(idx)
            }
          })
        }
        /* 进度条
          方式1：(滚动高度/可滚动区域总高度)*100 %
          方式2：（scrollTop + windowHeight）* windowWidth / pageHeight  px
        */
        this.wscrolline = (Math.max(0, Math.min(1, scrollTop / this.scrollAvail))) * 100

        // 返回顶部
        this.totopback()

      }, 20)
    },
    showsidebarhandle() {
      let showsidebar = this.showsidebar
      this.showsidebar = !showsidebar
    },
    resizehandle() {
      if (!document.hidden) {
        if (this.resizetimer) { clearTimeout(this.resizetimer) }
        this.resizetimer = setTimeout(() => {
          this.showsidebar = !this._isMobile()
        }, 20)
      }
    },
    movescrollbar() {
      if (!this._isMobile()) {
        document.body.style.overflow = 'hidden';
      }
    },
    leavescrollbar() {
      if (!this._isMobile()) {
        document.body.style.overflow = 'auto';
      }
    },
    navitemhandle(e) {
      this._waterripple(e)
    },
    totophandle() {
      let totopdom = this.$refs.totop
      let scrollTop = this._scrollTop()
      function t() {
        switch (totopdom.style.backgroundPosition) {
          case '-111px 0px':
            totopdom.style.backgroundPosition = '-165px 0px'
            break;
          case '-165px 0px':
            totopdom.style.backgroundPosition = '-217px 0px'
            break;
          case '-165px 0px':
            totopdom.style.backgroundPosition = '-268px 0px'
            break;
          default:
            totopdom.style.backgroundPosition = '-111px 0px'
            break;
        }
      }
      if (scrollTop == 0) {
        if (this.totoptimer) { clearInterval(this.totoptimer) }
        totopdom.style.backgroundPosition = '-4px 0px'
        return
      }
      this.totoptimer = setInterval(t, 17)
    },
    totopback() {
      let totopdom = this.$refs.totop
      let scrollTop = this._scrollTop()
      if (scrollTop == 0) {
        totopdom.classList.add('rocket-top-none')
        //解决：style属性opacity对animation中的opacity属性不起作用
        totopdom.style.opacity = '' 
        window.addEventListener("animationend", (e) => {
          if (e.animationName == 'rocketPos') {
            if (this.totoptimer) { clearInterval(this.totoptimer) }
            totopdom.style.display = 'none'
            totopdom.classList.remove('rocket-top-none')
            totopdom.style.backgroundPosition = '-4px 0px'
          }
        })
      } else if (scrollTop >= 500) {
        totopdom.style.display = 'block'
        let opacitynum = this._scalenum(this.wscrolline, 0, 100, 0, 1)
        totopdom.style.opacity = opacitynum
      }
    },
    toitemlink(url){
      //此做法是为了避免a元素href属性链接在浏览器左下角显示
      let a = document.createElement("a")
      a.style.display = "none"
      a.target = "_blank"
      a.href = url
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    },
    //导航跟随滚动
    _navscrollToTop(idx){
      const navitemheight = 35 //单个nav高度
      let arr_super_tit = this.arr_super_tit
      let total_navheight = arr_super_tit.length * navitemheight //nav总高度
      let visible_total_navheight = this._clientHeight() - 130 //nav可视总高度
      // 可视总高度大于nav总高度
      if(visible_total_navheight >= total_navheight){ return }
      let _domMenusectionlist = this.$refs.menusectionlist
      let scrollToTop = (idx - 3) * navitemheight <= 0 ? 0:(idx - 3) * navitemheight;
      _domMenusectionlist.scrollTo({ top:scrollToTop, left: 0, behavior: "smooth" });
    },
    _scrollTop() {
      let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      return scrollTop
    },
    _scrollHeight(){
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      return scrollHeight
    },
    _clientHeight(){
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      return clientHeight
    },
    // 将一个数字范围(in_min,in_max)映射到另一个数字范围(out_min,out_max)
    _scalenum(num, in_min, in_max, out_min, out_max) {
      return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    },
    // 水波纹效果
    _waterripple(e) {
      const x = e.clientX
      const y = e.clientY
      const buttonTop = e.target.offsetTop
      const buttonLeft = e.target.offsetLeft
      const xInside = x - buttonLeft
      const yInside = y - buttonTop
      const circle = document.createElement('span')
      circle.classList.add('circle')
      circle.style.top = yInside + 'px'
      circle.style.left = xInside + 'px'
      e.target.appendChild(circle)
      setTimeout(() => circle.remove(), 500)
    },
    _isMobile() {
      const rect = document.body.getBoundingClientRect()
      this.ismobile = rect.width < 768
      return rect.width < 768
    },
    _updateCounter() {
      const counters = this.$refs.superidxdom
      counters.forEach(counter => {
        counter.innerText = 0
        const updateCounter = () => {
          const target = +counter.getAttribute('data-target')
          const c = +counter.innerText
          const increment = target / 200
          if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 100)
          } else {
            counter.innerText = target
          }
        }

        updateCounter()
      })
    },
    _getRandomColor() {
      const colors = ['#39A4DC', '#00BEE1', '#00D4D0', '#0070A5']
      return colors[Math.floor(Math.random() * colors.length)]
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scroll)
    window.removeEventListener('resize', this.resizehandle)
  }
}

const app = Vue.createApp(option)
app.use(VueScrollTo, {
  container: "body",
  duration: 500,
  //默认情况下，targetX/targetY在滚动开始时计算一次；但是，如果目标可能在滚动过程中四处移动，则将lazy设置为false将强制在每个滚动步骤重新计算targetX/targetY
  lazy: true,
  // let easings = {'ease': [0.25, 0.1, 0.25, 1.0],'linear': [0.00, 0.0, 1.00, 1.0],'ease-in': [0.42, 0.0, 1.00, 1.0],'ease-out': [0.00, 0.0, 0.58, 1.0], 'ease-in-out': [0.42, 0.0, 0.58, 1.0] } 
  easing: "ease",
  // 滚动时应应用的偏移量，>=v2.8.0 可以使用回调函数
  offset: -offsetY,
  // 滚动正在进行，触发其他滚动是否立即执行
  force: true,
  //是否可以取消滚动
  cancelable: true,
  onStart: (el) => {
    noscroll = true
    this._active(el)
  },
  onDone: (el) => {
    noscroll = false
  },
  onCancel: false,
  // x轴滚动
  x: false,
  //y轴滚动
  y: true
})

const vm = app.mount('#app')

/* 工具函数 */
function _active(el) {
  vm.currentfloor = el['id']
}




// https://www.freesion.com/article/21051455961/