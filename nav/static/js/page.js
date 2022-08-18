let { reactive, ref, onMounted, watchEffect, toRaw } = Vue
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
        arr_flooritem.length && arr_flooritem.forEach((item, idx) => { temp.push(item.offsetTop) });
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
  lazy: false,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: (el) => { this._active(el) },
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

const vm = app.mount('#app')
/* 工具函数 */
function _active(el) {
  vm.currentfloor = el['id']
}


// https://www.freesion.com/article/21051455961/