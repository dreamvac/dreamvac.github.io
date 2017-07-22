import '../css/style.scss';
require('../css/index.scss')
import Vue from 'vue'

var vue = new Vue({
  el: '#v-main',
  data: {}
})

var headerVue = new Vue({
  el: '#v-header',
  data: {
    isShow: false,
  },
  methods: {
    toggle: function() {
      console.log('hehe')
      this.isShow = !this.isShow
    }
  }
})

