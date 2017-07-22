import '../css/style.scss'
import '../css/index2.scss'
import Vue from 'vue'
import $ from 'jquery'

$(document).ready(function () {
  var vue = new Vue({
    el: '#v-main',
    data: {
      imgs: [],
      currentImgGroup: [],
      pageController: {
        total: 1, // 总页码
        current: 1, // 当前页码
        sisiable: 5, // 可视的页码数
      },
      config: {
        baseUrl: './data/',
        urls: [
          'UVPrint/all.json',
          'UVPrint/yakeli.json',
          'UVPrint/ps.json',
          'UVPrint/xuefu.json',
          'UVPrint/boli.json',
          'UVPrint/shicai.json',
          'UVPrint/jinshu.json',
          'UVPrint/pige.json'
        ]
      }

    },
    created() {
      this.getPics(this.config.baseUrl + this.config.urls[0])
    },
    methods: {
      chooseType: function (event) {
        var index = event.target.getAttribute('data-index')
        var url = this.config.baseUrl + this.config.urls[index]
        this.getPics(url)
      },
      getPics: function (url) {
        var _this = this
        $.ajax({
          url: url,
          data: null,
          type: 'GET',
          dataType: 'json',
          success: function (data, statusText) {
            _this.imgs = _this.splitImgsToArray(data.data)
            _this.currentImgGroup = _this.imgs[0]
            _this.pageController.total = _this.imgs.length

            layui.use(['laypage', 'layer'], function () {
              var laypage = layui.laypage
              var layer = layui.layer

              laypage({
                cont: 'pagination',
                first: '首页',
                pages: _this.pageController.total, // 总页数
                groups: 5, // 连续显示分页数
                jump: _this.jumpCallback
              })
            })
          }
        })
      },
      jumpCallback: function (obj, first) {
        this.currentImgGroup = this.imgs[obj.curr - 1]
      },
      /**
       * 将数组分割为每6个一组
       * @param {any} array 
       */
      splitImgsToArray(array) {
        var newArray = []
        while(array.length > 0) {
          newArray.push(array.splice(0, 6))
        }
        return newArray
      }
    }
  })

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
})
