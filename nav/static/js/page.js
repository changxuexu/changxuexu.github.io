let { reactive, ref, onMounted, watchEffect, toRaw } = Vue
const offsetY = 36 //滚动y轴偏移量
const option = {
  data() {
    return {
      arr_data,
      currentfloor: '',//当前楼层
      scrolltimer: null,
      resizetimer: null,
      showsidebar: true
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
        window.addEventListener("scroll", this.scroll)
        window.addEventListener('resize', this.resizehandle)
      })
    },
    scroll() {
      if (this.scrolltimer) { clearTimeout(this.scrolltimer) }
      this.scrolltimer = setTimeout(() => {
        let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        let temp = []
        let arr_flooritem = this.$refs.flooritem
        arr_flooritem.length && arr_flooritem.forEach((item, idx) => { temp.push(item.offsetTop - offsetY) });
        temp.forEach((item, idx, arr) => {
          if (arr[idx] <= scrollTop && arr[idx + 1] >= scrollTop) {
            this.currentfloor = `element_super_${idx + 1}`
          }
        })
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
      document.body.style.overflow = 'hidden';
    },
    leavescrollbar() {
      document.body.style.overflow = 'auto';
    },
    _isMobile() {
      const rect = document.body.getBoundingClientRect()
      return rect.width < 768
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


// https://www.freesion.com/article/21051455961/