let { reactive, ref, onMounted, watchEffect, toRaw } = Vue
const option = {
  data() {
    return {
      arr_data,
      currentfloor: '',//当前楼层
      timer: null,
      perfectScrollbar: null,
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
  mounted() {
    this.init()
  },
  methods: {
    init() {
      //滚动条PerfectScrollbar ps.update()
      this.perfectScrollbar = new PerfectScrollbar('#slidescrollbar');
      this.$nextTick(() => {
        // window.scrollTo({ top: 0, behavior: "smooth" })
        window.addEventListener("scroll", this.scroll)
      })
    },
    scroll() {
      if (this.timer) { clearTimeout(this.timer) }
      this.timer = setTimeout(() => {
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
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scroll)
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