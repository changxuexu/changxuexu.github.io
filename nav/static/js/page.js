
let { reactive, ref, onMounted, watchEffect, toRaw } = Vue
let favicon = new Favico({ animation: "pop", position: 'down' }); // 动态favico.ico

const offsetY = 36 //滚动y轴偏移量

const option = {
  data() {
    return {
      arr_data,
      scrolltimer: null,
      resizetimer: null,
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
      // window.scrollTo({ top: 0, behavior: "smooth" })
      this.$nextTick(() => {
        let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let scrollAvail = pageHeight - windowHeight; //可滚动区域总高度
        this.scrollAvail = scrollAvail

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
        let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        let temp = []
        let arr_flooritem = this.$refs.flooritem
        arr_flooritem.length && arr_flooritem.forEach((item, idx) => { temp.push(item.offsetTop - offsetY) });
        temp.forEach((item, idx, arr) => {
          if (arr[idx] <= scrollTop && arr[idx + 1] >= scrollTop) {
            this.currentfloor = `element_super_${idx + 1}`
          }
        })

        //方式1：(滚动高度/可滚动区域总高度)*100 %
        //方式2：（scrollTop + windowHeight）* windowWidth / pageHeight  px
        this.wscrolline = (Math.max(0, Math.min(1, scrollTop / this.scrollAvail))) * 100

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
      const colors = ['#39A4DC', '#00BEE1', '#00D4D0', '#4EE7AF', '#A7F38A']
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
    this._active(el)
  },
  onDone: false,
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

function _isIE() {
  var ua = window.navigator.userAgent;
  console.log('xxxx=', ua);
  var old_ie = ua.indexOf('MSIE ');
  var new_ie = ua.indexOf('Trident/')
  if ((old_ie > -1) || (new_ie > -1)) {
    return true //IE
  } else {
    return false
  }
}
// const browserhappydom = document.createElement('div')
// browserhappydom.innerHTML = '<div class="browserhappy"><p>此站点不支持IE浏览器，请升级您的浏览器</p><a href="https://browsehappy.com/" target="_blank">立即更新</a></div>'
// document.body.appendChild(browserhappydom)

// https://www.freesion.com/article/21051455961/