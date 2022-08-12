let { reactive, ref, onMounted, watchEffect, toRaw } = Vue
const option = {
  data() {
    return {
      arr_data
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
    // console.log(toRaw(this.arr_data));
  },
  methods: {

  }
}

const app = Vue.createApp(option)
app.mount('#app')