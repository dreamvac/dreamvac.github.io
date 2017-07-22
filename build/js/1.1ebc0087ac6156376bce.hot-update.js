webpackHotUpdate(1,{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(1);\n\n__webpack_require__(7);\n\nvar _vue = __webpack_require__(2);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _jquery = __webpack_require__(0);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _jquery2.default)(document).ready(function () {\n  var config = [''];\n  var vue = new _vue2.default({\n    el: '#v-main',\n    data: {\n      imgs: [],\n      currentImgGroup: null,\n      pageController: {\n        total: 1, // 总页码\n        current: 1, // 当前页码\n        sisiable: 5 // 可视的页码数\n      },\n      config: {\n        baseUrl: './data/',\n        urls: ['UVPrint/all.json', 'UVPrint/yakeli.json', 'UVPrint/ps.json', 'UVPrint/xuefu.json', 'UVPrint/boli.json', 'UVPrint/shicai.json', 'UVPrint/jinshu.json', 'UVPrint/pige.json']\n      }\n\n    },\n    created: function created() {\n      this.getPics(this.config.baseUrl + this.config.urls[0]);\n    },\n\n    methods: {\n      chooseType: function chooseType(event) {\n        var index = event.target.getAttribute('data-index');\n        var url = this.config.baseUrl + this.config.urls[index];\n        this.getPics(url);\n      },\n      getPics: function getPics(url) {\n        var _this = this;\n        _jquery2.default.ajax({\n          url: url,\n          data: null,\n          type: 'GET',\n          dataType: 'json',\n          success: function success(data, statusText) {\n            _this.imgs = _this.splitImgsToArray(data.data);\n            console.log(_this.imgs);\n            _this.currentImgGroup = _this.imgs[0];\n            _this.pageController.total = _this.currentImgGroup.length;\n\n            layui.use(['laypage', 'layer'], function () {\n              var laypage = layui.laypage;\n              var layer = layui.layer;\n\n              laypage({\n                cont: 'pagination',\n                first: '首页',\n                pages: _this.pageController.total, //总页数\n                groups: 5, //连续显示分页数\n                jump: _this.jumpCallback\n              });\n            });\n          }\n        });\n      },\n      jumpCallback: function jumpCallback(obj, first) {\n        this.currentImgGroup = this.imgs[obj.curr];\n      },\n      /**\r\n       * 将数组分割为每6个一组\r\n       * @param {any} array \r\n       */\n      splitImgsToArray: function splitImgsToArray(array) {\n        var newArray = [];\n        while (array.length > 0) {\n          newArray.push(array.splice(0, 6));\n        }\n        return newArray;\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgyLmpzPzMzYmQiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJyZWFkeSIsImNvbmZpZyIsInZ1ZSIsImVsIiwiZGF0YSIsImltZ3MiLCJjdXJyZW50SW1nR3JvdXAiLCJwYWdlQ29udHJvbGxlciIsInRvdGFsIiwiY3VycmVudCIsInNpc2lhYmxlIiwiYmFzZVVybCIsInVybHMiLCJjcmVhdGVkIiwiZ2V0UGljcyIsIm1ldGhvZHMiLCJjaG9vc2VUeXBlIiwiZXZlbnQiLCJpbmRleCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInVybCIsIl90aGlzIiwiYWpheCIsInR5cGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJzdGF0dXNUZXh0Iiwic3BsaXRJbWdzVG9BcnJheSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJsYXl1aSIsInVzZSIsImxheXBhZ2UiLCJsYXllciIsImNvbnQiLCJmaXJzdCIsInBhZ2VzIiwiZ3JvdXBzIiwianVtcCIsImp1bXBDYWxsYmFjayIsIm9iaiIsImN1cnIiLCJhcnJheSIsIm5ld0FycmF5IiwicHVzaCIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxzQkFBRUEsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDNUIsTUFBSUMsU0FBUyxDQUNYLEVBRFcsQ0FBYjtBQUdBLE1BQUlDLE1BQU0sa0JBQVE7QUFDaEJDLFFBQUksU0FEWTtBQUVoQkMsVUFBTTtBQUNKQyxZQUFNLEVBREY7QUFFSkMsdUJBQWlCLElBRmI7QUFHSkMsc0JBQWdCO0FBQ2RDLGVBQU8sQ0FETyxFQUNBO0FBQ2RDLGlCQUFTLENBRkssRUFFRDtBQUNiQyxrQkFBVSxDQUhJLENBR0Q7QUFIQyxPQUhaO0FBUUpULGNBQU87QUFDTFUsaUJBQVMsU0FESjtBQUVMQyxjQUFNLENBQ0osa0JBREksRUFFSixxQkFGSSxFQUdKLGlCQUhJLEVBSUosb0JBSkksRUFLSixtQkFMSSxFQU1KLHFCQU5JLEVBT0oscUJBUEksRUFRSixtQkFSSTtBQUZEOztBQVJILEtBRlU7QUF5QmhCQyxXQXpCZ0IscUJBeUJOO0FBQ1IsV0FBS0MsT0FBTCxDQUFhLEtBQUtiLE1BQUwsQ0FBWVUsT0FBWixHQUFzQixLQUFLVixNQUFMLENBQVlXLElBQVosQ0FBaUIsQ0FBakIsQ0FBbkM7QUFDRCxLQTNCZTs7QUE0QmhCRyxhQUFTO0FBQ1BDLGtCQUFZLG9CQUFVQyxLQUFWLEVBQWlCO0FBQzNCLFlBQUlDLFFBQVFELE1BQU1FLE1BQU4sQ0FBYUMsWUFBYixDQUEwQixZQUExQixDQUFaO0FBQ0EsWUFBSUMsTUFBTSxLQUFLcEIsTUFBTCxDQUFZVSxPQUFaLEdBQXNCLEtBQUtWLE1BQUwsQ0FBWVcsSUFBWixDQUFpQk0sS0FBakIsQ0FBaEM7QUFDQSxhQUFLSixPQUFMLENBQWFPLEdBQWI7QUFDRCxPQUxNO0FBTVBQLGVBQVMsaUJBQVVPLEdBQVYsRUFBZTtBQUN0QixZQUFJQyxRQUFRLElBQVo7QUFDQSx5QkFBRUMsSUFBRixDQUFPO0FBQ0xGLGVBQUtBLEdBREE7QUFFTGpCLGdCQUFNLElBRkQ7QUFHTG9CLGdCQUFNLEtBSEQ7QUFJTEMsb0JBQVUsTUFKTDtBQUtMQyxtQkFBUyxpQkFBVXRCLElBQVYsRUFBZ0J1QixVQUFoQixFQUE0QjtBQUNuQ0wsa0JBQU1qQixJQUFOLEdBQWFpQixNQUFNTSxnQkFBTixDQUF1QnhCLEtBQUtBLElBQTVCLENBQWI7QUFDQXlCLG9CQUFRQyxHQUFSLENBQVlSLE1BQU1qQixJQUFsQjtBQUNBaUIsa0JBQU1oQixlQUFOLEdBQXdCZ0IsTUFBTWpCLElBQU4sQ0FBVyxDQUFYLENBQXhCO0FBQ0FpQixrQkFBTWYsY0FBTixDQUFxQkMsS0FBckIsR0FBNkJjLE1BQU1oQixlQUFOLENBQXNCeUIsTUFBbkQ7O0FBRUFDLGtCQUFNQyxHQUFOLENBQVUsQ0FBQyxTQUFELEVBQVksT0FBWixDQUFWLEVBQWdDLFlBQVc7QUFDekMsa0JBQUlDLFVBQVVGLE1BQU1FLE9BQXBCO0FBQ0Esa0JBQUlDLFFBQVFILE1BQU1HLEtBQWxCOztBQUVBRCxzQkFBUTtBQUNORSxzQkFBTSxZQURBO0FBRU5DLHVCQUFPLElBRkQ7QUFHTkMsdUJBQU9oQixNQUFNZixjQUFOLENBQXFCQyxLQUh0QixFQUc2QjtBQUNuQytCLHdCQUFRLENBSkYsRUFJSztBQUNYQyxzQkFBTWxCLE1BQU1tQjtBQUxOLGVBQVI7QUFPRCxhQVhEO0FBWUQ7QUF2QkksU0FBUDtBQXlCRCxPQWpDTTtBQWtDUEEsb0JBQWMsc0JBQVVDLEdBQVYsRUFBZUwsS0FBZixFQUFzQjtBQUNsQyxhQUFLL0IsZUFBTCxHQUF1QixLQUFLRCxJQUFMLENBQVVxQyxJQUFJQyxJQUFkLENBQXZCO0FBQ0QsT0FwQ007QUFxQ1A7Ozs7QUFJQWYsc0JBekNPLDRCQXlDV2dCLEtBekNYLEVBeUNrQjtBQUN2QixZQUFJQyxXQUFXLEVBQWY7QUFDQSxlQUFNRCxNQUFNYixNQUFOLEdBQWUsQ0FBckIsRUFBd0I7QUFDdEJjLG1CQUFTQyxJQUFULENBQWNGLE1BQU1HLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQWQ7QUFDRDtBQUNELGVBQU9GLFFBQVA7QUFDRDtBQS9DTTtBQTVCTyxHQUFSLENBQVY7QUE4RUQsQ0FsRkQiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnXHJcbmltcG9ydCAnLi4vY3NzL2luZGV4Mi5zY3NzJ1xyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBjb25maWcgPSBbXHJcbiAgICAnJ1xyXG4gIF1cclxuICB2YXIgdnVlID0gbmV3IFZ1ZSh7XHJcbiAgICBlbDogJyN2LW1haW4nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBpbWdzOiBbXSxcclxuICAgICAgY3VycmVudEltZ0dyb3VwOiBudWxsLFxyXG4gICAgICBwYWdlQ29udHJvbGxlcjoge1xyXG4gICAgICAgIHRvdGFsOiAxLCAgICAgLy8g5oC76aG156CBXHJcbiAgICAgICAgY3VycmVudDogMSwgIC8vIOW9k+WJjemhteeggVxyXG4gICAgICAgIHNpc2lhYmxlOiA1LCAvLyDlj6/op4bnmoTpobXnoIHmlbBcclxuICAgICAgfSxcclxuICAgICAgY29uZmlnOntcclxuICAgICAgICBiYXNlVXJsOiAnLi9kYXRhLycsXHJcbiAgICAgICAgdXJsczogW1xyXG4gICAgICAgICAgJ1VWUHJpbnQvYWxsLmpzb24nLFxyXG4gICAgICAgICAgJ1VWUHJpbnQveWFrZWxpLmpzb24nLFxyXG4gICAgICAgICAgJ1VWUHJpbnQvcHMuanNvbicsXHJcbiAgICAgICAgICAnVVZQcmludC94dWVmdS5qc29uJyxcclxuICAgICAgICAgICdVVlByaW50L2JvbGkuanNvbicsXHJcbiAgICAgICAgICAnVVZQcmludC9zaGljYWkuanNvbicsXHJcbiAgICAgICAgICAnVVZQcmludC9qaW5zaHUuanNvbicsXHJcbiAgICAgICAgICAnVVZQcmludC9waWdlLmpzb24nLFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgdGhpcy5nZXRQaWNzKHRoaXMuY29uZmlnLmJhc2VVcmwgKyB0aGlzLmNvbmZpZy51cmxzWzBdKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgY2hvb3NlVHlwZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuY29uZmlnLmJhc2VVcmwgKyB0aGlzLmNvbmZpZy51cmxzW2luZGV4XVxyXG4gICAgICAgIHRoaXMuZ2V0UGljcyh1cmwpO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRQaWNzOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzVGV4dCkge1xyXG4gICAgICAgICAgICBfdGhpcy5pbWdzID0gX3RoaXMuc3BsaXRJbWdzVG9BcnJheShkYXRhLmRhdGEpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF90aGlzLmltZ3MpXHJcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnRJbWdHcm91cCA9IF90aGlzLmltZ3NbMF07XHJcbiAgICAgICAgICAgIF90aGlzLnBhZ2VDb250cm9sbGVyLnRvdGFsID0gX3RoaXMuY3VycmVudEltZ0dyb3VwLmxlbmd0aFxyXG5cclxuICAgICAgICAgICAgbGF5dWkudXNlKFsnbGF5cGFnZScsICdsYXllciddLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICB2YXIgbGF5cGFnZSA9IGxheXVpLmxheXBhZ2VcclxuICAgICAgICAgICAgICB2YXIgbGF5ZXIgPSBsYXl1aS5sYXllclxyXG5cclxuICAgICAgICAgICAgICBsYXlwYWdlKHtcclxuICAgICAgICAgICAgICAgIGNvbnQ6ICdwYWdpbmF0aW9uJywgXHJcbiAgICAgICAgICAgICAgICBmaXJzdDogJ+mmlumhtScsXHJcbiAgICAgICAgICAgICAgICBwYWdlczogX3RoaXMucGFnZUNvbnRyb2xsZXIudG90YWwsIC8v5oC76aG15pWwXHJcbiAgICAgICAgICAgICAgICBncm91cHM6IDUsIC8v6L+e57ut5pi+56S65YiG6aG15pWwXHJcbiAgICAgICAgICAgICAgICBqdW1wOiBfdGhpcy5qdW1wQ2FsbGJhY2tcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGp1bXBDYWxsYmFjazogZnVuY3Rpb24gKG9iaiwgZmlyc3QpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbWdHcm91cCA9IHRoaXMuaW1nc1tvYmouY3Vycl1cclxuICAgICAgfSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIOWwhuaVsOe7hOWIhuWJsuS4uuavjzbkuKrkuIDnu4RcclxuICAgICAgICogQHBhcmFtIHthbnl9IGFycmF5IFxyXG4gICAgICAgKi9cclxuICAgICAgc3BsaXRJbWdzVG9BcnJheSAoYXJyYXkpIHtcclxuICAgICAgICB2YXIgbmV3QXJyYXkgPSBbXVxyXG4gICAgICAgIHdoaWxlKGFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIG5ld0FycmF5LnB1c2goYXJyYXkuc3BsaWNlKDAsIDYpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3QXJyYXlcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG59KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXgyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ })

})