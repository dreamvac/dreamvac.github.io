import '../css/style.scss'
import '../css/index2.scss'
import * as Vue from 'vue'
import * as $ from 'jquery'

$(document).ready(function () {
  var config = [
    ''
  ]
  var vue = new Vue({
    el: '#v-main',
    data: function () {
      return { imgs: 1 }
     },
    created() {
      var _this = this
      $.ajax({
        url: './data/UVPrint/all.json',
        data: null,
        type: 'get',
        dataType: 'json',
        success: function (data, statusText) {
          _this.imgs = data.data
        }
      })
    },
    methods: {
      getPics: function (event) {
        var index = event.target.getAttribute('data-index')
        var url = config[index]
        var _this = this
        $.ajax({
          url: '',
          data: null,
          type: 'GET',
          dataType: 'json',
          success: function (data, statusText) {
            _this.imgs = data.data
          }
        })
      },

      /**
       *
       * @param {any} array 
       */
      splitImgsToArray (array) {

      }
    }
  })
})
