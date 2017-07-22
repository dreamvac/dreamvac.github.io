import '../css/index3.scss'
import '../css/style.scss'
// var a = $('body')
// var vue = new Vue({
//   el: '#v-main',
//   data: {}
// })

var headerVue = new Vue({
  el: '#v-header',
  data: {
    isShow: false
  },
  methods: {
    toggle: function () {
      console.log('hehe')
      this.isShow = !this.isShow
    }
  }
})
