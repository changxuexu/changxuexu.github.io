let { reactive, ref, onMounted, watchEffect, toRaw } = Vue
const option = {
  data() {
    return {
      arr_data,
      currentfloor:'1'
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
    
  },
  methods: {
  }
}

const app = Vue.createApp(option)
app.use(VueScrollTo,{
  container: "body",
  duration: 500,
  lazy: false,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone(el){
    console.log(option);
    console.log(el.id)
  },
  onCancel: false,
  x: false,
  y: true
})
console.log(VueScrollTo);
app.mount('#app')

// https://www.freesion.com/article/21051455961/