webpackHotUpdate(1,{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(1);\n\n__webpack_require__(7);\n\nvar _vue = __webpack_require__(2);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _jquery = __webpack_require__(0);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _jquery2.default)(document).ready(function () {\n  var config = [''];\n  var vue = new _vue2.default({\n    el: '#v-main',\n    data: {\n      imgs: [],\n      currentImgGroup: null,\n      pageController: {\n        total: 1, // 总页码\n        current: 1, // 当前页码\n        sisiable: 5 // 可视的页码数\n      },\n      config: {\n        baseUrl: './data/',\n        urls: ['UVPrint/all.json', 'UVPrint/yakeli.json', 'UVPrint/ps.json', 'UVPrint/xuefu.json', 'UVPrint/boli.json', 'UVPrint/shicai.json', 'UVPrint/jinshu.json', 'UVPrint/pige.json']\n      }\n\n    },\n    created: function created() {\n      this.getPics(this.config.baseUrl + this.config.urls[0]);\n    },\n\n    methods: {\n      chooseType: function chooseType(event) {\n        var index = event.target.getAttribute('data-index');\n        var url = this.config.baseUrl + this.config.urls[index];\n        this.getPics(url);\n      },\n      getPics: function getPics(url) {\n        var _this = this;\n        _jquery2.default.ajax({\n          url: url,\n          data: null,\n          type: 'GET',\n          dataType: 'json',\n          success: function success(data, statusText) {\n            _this.imgs = _this.splitImgsToArray(data.data);\n            _this.currentImgGroup = _this.imgs[0];\n            _this.pageController.total = _this.currentImgGroup.length;\n\n            layui.use(['laypage', 'layer'], function () {\n              var laypage = layui.laypage;\n              var layer = layui.layer;\n\n              laypage({\n                cont: 'pagination',\n                first: '首页',\n                pages: _this.pageController.total, //总页数\n                groups: 5, //连续显示分页数\n                jump: _this.jumpCallback\n              });\n            });\n          }\n        });\n      },\n      jumpCallback: function jumpCallback(obj, first) {\n        this.currentImgGroup = this.imgs[obj.curr];\n      },\n      /**\r\n       * 将数组分割为每6个一组\r\n       * @param {any} array \r\n       */\n      splitImgsToArray: function splitImgsToArray(array) {\n        var newArray = [];\n        while (array.length > 0) {\n          newArray.push(array.splice(0, 6));\n        }\n        return newArray;\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgyLmpzPzMzYmQiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJyZWFkeSIsImNvbmZpZyIsInZ1ZSIsImVsIiwiZGF0YSIsImltZ3MiLCJjdXJyZW50SW1nR3JvdXAiLCJwYWdlQ29udHJvbGxlciIsInRvdGFsIiwiY3VycmVudCIsInNpc2lhYmxlIiwiYmFzZVVybCIsInVybHMiLCJjcmVhdGVkIiwiZ2V0UGljcyIsIm1ldGhvZHMiLCJjaG9vc2VUeXBlIiwiZXZlbnQiLCJpbmRleCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInVybCIsIl90aGlzIiwiYWpheCIsInR5cGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJzdGF0dXNUZXh0Iiwic3BsaXRJbWdzVG9BcnJheSIsImxlbmd0aCIsImxheXVpIiwidXNlIiwibGF5cGFnZSIsImxheWVyIiwiY29udCIsImZpcnN0IiwicGFnZXMiLCJncm91cHMiLCJqdW1wIiwianVtcENhbGxiYWNrIiwib2JqIiwiY3VyciIsImFycmF5IiwibmV3QXJyYXkiLCJwdXNoIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLHNCQUFFQSxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUM1QixNQUFJQyxTQUFTLENBQ1gsRUFEVyxDQUFiO0FBR0EsTUFBSUMsTUFBTSxrQkFBUTtBQUNoQkMsUUFBSSxTQURZO0FBRWhCQyxVQUFNO0FBQ0pDLFlBQU0sRUFERjtBQUVKQyx1QkFBaUIsSUFGYjtBQUdKQyxzQkFBZ0I7QUFDZEMsZUFBTyxDQURPLEVBQ0E7QUFDZEMsaUJBQVMsQ0FGSyxFQUVEO0FBQ2JDLGtCQUFVLENBSEksQ0FHRDtBQUhDLE9BSFo7QUFRSlQsY0FBTztBQUNMVSxpQkFBUyxTQURKO0FBRUxDLGNBQU0sQ0FDSixrQkFESSxFQUVKLHFCQUZJLEVBR0osaUJBSEksRUFJSixvQkFKSSxFQUtKLG1CQUxJLEVBTUoscUJBTkksRUFPSixxQkFQSSxFQVFKLG1CQVJJO0FBRkQ7O0FBUkgsS0FGVTtBQXlCaEJDLFdBekJnQixxQkF5Qk47QUFDUixXQUFLQyxPQUFMLENBQWEsS0FBS2IsTUFBTCxDQUFZVSxPQUFaLEdBQXNCLEtBQUtWLE1BQUwsQ0FBWVcsSUFBWixDQUFpQixDQUFqQixDQUFuQztBQUNELEtBM0JlOztBQTRCaEJHLGFBQVM7QUFDUEMsa0JBQVksb0JBQVVDLEtBQVYsRUFBaUI7QUFDM0IsWUFBSUMsUUFBUUQsTUFBTUUsTUFBTixDQUFhQyxZQUFiLENBQTBCLFlBQTFCLENBQVo7QUFDQSxZQUFJQyxNQUFNLEtBQUtwQixNQUFMLENBQVlVLE9BQVosR0FBc0IsS0FBS1YsTUFBTCxDQUFZVyxJQUFaLENBQWlCTSxLQUFqQixDQUFoQztBQUNBLGFBQUtKLE9BQUwsQ0FBYU8sR0FBYjtBQUNELE9BTE07QUFNUFAsZUFBUyxpQkFBVU8sR0FBVixFQUFlO0FBQ3RCLFlBQUlDLFFBQVEsSUFBWjtBQUNBLHlCQUFFQyxJQUFGLENBQU87QUFDTEYsZUFBS0EsR0FEQTtBQUVMakIsZ0JBQU0sSUFGRDtBQUdMb0IsZ0JBQU0sS0FIRDtBQUlMQyxvQkFBVSxNQUpMO0FBS0xDLG1CQUFTLGlCQUFVdEIsSUFBVixFQUFnQnVCLFVBQWhCLEVBQTRCO0FBQ25DTCxrQkFBTWpCLElBQU4sR0FBYWlCLE1BQU1NLGdCQUFOLENBQXVCeEIsS0FBS0EsSUFBNUIsQ0FBYjtBQUNBa0Isa0JBQU1oQixlQUFOLEdBQXdCZ0IsTUFBTWpCLElBQU4sQ0FBVyxDQUFYLENBQXhCO0FBQ0FpQixrQkFBTWYsY0FBTixDQUFxQkMsS0FBckIsR0FBNkJjLE1BQU1oQixlQUFOLENBQXNCdUIsTUFBbkQ7O0FBRUFDLGtCQUFNQyxHQUFOLENBQVUsQ0FBQyxTQUFELEVBQVksT0FBWixDQUFWLEVBQWdDLFlBQVc7QUFDekMsa0JBQUlDLFVBQVVGLE1BQU1FLE9BQXBCO0FBQ0Esa0JBQUlDLFFBQVFILE1BQU1HLEtBQWxCOztBQUVBRCxzQkFBUTtBQUNORSxzQkFBTSxZQURBO0FBRU5DLHVCQUFPLElBRkQ7QUFHTkMsdUJBQU9kLE1BQU1mLGNBQU4sQ0FBcUJDLEtBSHRCLEVBRzZCO0FBQ25DNkIsd0JBQVEsQ0FKRixFQUlLO0FBQ1hDLHNCQUFNaEIsTUFBTWlCO0FBTE4sZUFBUjtBQU9ELGFBWEQ7QUFZRDtBQXRCSSxTQUFQO0FBd0JELE9BaENNO0FBaUNQQSxvQkFBYyxzQkFBVUMsR0FBVixFQUFlTCxLQUFmLEVBQXNCO0FBQ2xDLGFBQUs3QixlQUFMLEdBQXVCLEtBQUtELElBQUwsQ0FBVW1DLElBQUlDLElBQWQsQ0FBdkI7QUFDRCxPQW5DTTtBQW9DUDs7OztBQUlBYixzQkF4Q08sNEJBd0NXYyxLQXhDWCxFQXdDa0I7QUFDdkIsWUFBSUMsV0FBVyxFQUFmO0FBQ0EsZUFBTUQsTUFBTWIsTUFBTixHQUFlLENBQXJCLEVBQXdCO0FBQ3RCYyxtQkFBU0MsSUFBVCxDQUFjRixNQUFNRyxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFkO0FBQ0Q7QUFDRCxlQUFPRixRQUFQO0FBQ0Q7QUE5Q007QUE1Qk8sR0FBUixDQUFWO0FBNkVELENBakZEIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Nzcy9zdHlsZS5zY3NzJ1xyXG5pbXBvcnQgJy4uL2Nzcy9pbmRleDIuc2NzcydcclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICB2YXIgY29uZmlnID0gW1xyXG4gICAgJydcclxuICBdXHJcbiAgdmFyIHZ1ZSA9IG5ldyBWdWUoe1xyXG4gICAgZWw6ICcjdi1tYWluJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgaW1nczogW10sXHJcbiAgICAgIGN1cnJlbnRJbWdHcm91cDogbnVsbCxcclxuICAgICAgcGFnZUNvbnRyb2xsZXI6IHtcclxuICAgICAgICB0b3RhbDogMSwgICAgIC8vIOaAu+mhteeggVxyXG4gICAgICAgIGN1cnJlbnQ6IDEsICAvLyDlvZPliY3pobXnoIFcclxuICAgICAgICBzaXNpYWJsZTogNSwgLy8g5Y+v6KeG55qE6aG156CB5pWwXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZzp7XHJcbiAgICAgICAgYmFzZVVybDogJy4vZGF0YS8nLFxyXG4gICAgICAgIHVybHM6IFtcclxuICAgICAgICAgICdVVlByaW50L2FsbC5qc29uJyxcclxuICAgICAgICAgICdVVlByaW50L3lha2VsaS5qc29uJyxcclxuICAgICAgICAgICdVVlByaW50L3BzLmpzb24nLFxyXG4gICAgICAgICAgJ1VWUHJpbnQveHVlZnUuanNvbicsXHJcbiAgICAgICAgICAnVVZQcmludC9ib2xpLmpzb24nLFxyXG4gICAgICAgICAgJ1VWUHJpbnQvc2hpY2FpLmpzb24nLFxyXG4gICAgICAgICAgJ1VWUHJpbnQvamluc2h1Lmpzb24nLFxyXG4gICAgICAgICAgJ1VWUHJpbnQvcGlnZS5qc29uJyxcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgIHRoaXMuZ2V0UGljcyh0aGlzLmNvbmZpZy5iYXNlVXJsICsgdGhpcy5jb25maWcudXJsc1swXSlcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGNob29zZVR5cGU6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKVxyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmNvbmZpZy5iYXNlVXJsICsgdGhpcy5jb25maWcudXJsc1tpbmRleF1cclxuICAgICAgICB0aGlzLmdldFBpY3ModXJsKTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0UGljczogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1c1RleHQpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW1ncyA9IF90aGlzLnNwbGl0SW1nc1RvQXJyYXkoZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50SW1nR3JvdXAgPSBfdGhpcy5pbWdzWzBdO1xyXG4gICAgICAgICAgICBfdGhpcy5wYWdlQ29udHJvbGxlci50b3RhbCA9IF90aGlzLmN1cnJlbnRJbWdHcm91cC5sZW5ndGhcclxuXHJcbiAgICAgICAgICAgIGxheXVpLnVzZShbJ2xheXBhZ2UnLCAnbGF5ZXInXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGxheXBhZ2UgPSBsYXl1aS5sYXlwYWdlXHJcbiAgICAgICAgICAgICAgdmFyIGxheWVyID0gbGF5dWkubGF5ZXJcclxuXHJcbiAgICAgICAgICAgICAgbGF5cGFnZSh7XHJcbiAgICAgICAgICAgICAgICBjb250OiAncGFnaW5hdGlvbicsIFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6ICfpppbpobUnLFxyXG4gICAgICAgICAgICAgICAgcGFnZXM6IF90aGlzLnBhZ2VDb250cm9sbGVyLnRvdGFsLCAvL+aAu+mhteaVsFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiA1LCAvL+i/nue7reaYvuekuuWIhumhteaVsFxyXG4gICAgICAgICAgICAgICAganVtcDogX3RoaXMuanVtcENhbGxiYWNrXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBqdW1wQ2FsbGJhY2s6IGZ1bmN0aW9uIChvYmosIGZpcnN0KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW1nR3JvdXAgPSB0aGlzLmltZ3Nbb2JqLmN1cnJdXHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiDlsIbmlbDnu4TliIblibLkuLrmr4825Liq5LiA57uEXHJcbiAgICAgICAqIEBwYXJhbSB7YW55fSBhcnJheSBcclxuICAgICAgICovXHJcbiAgICAgIHNwbGl0SW1nc1RvQXJyYXkgKGFycmF5KSB7XHJcbiAgICAgICAgdmFyIG5ld0FycmF5ID0gW11cclxuICAgICAgICB3aGlsZShhcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBuZXdBcnJheS5wdXNoKGFycmF5LnNwbGljZSgwLCA2KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxufSlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4Mi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })

})