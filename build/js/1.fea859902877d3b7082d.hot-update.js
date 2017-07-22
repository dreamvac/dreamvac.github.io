webpackHotUpdate(1,{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(1);\n\n__webpack_require__(7);\n\nvar _vue = __webpack_require__(2);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _jquery = __webpack_require__(0);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _jquery2.default)(document).ready(function () {\n  var config = [''];\n  var vue = new _vue2.default({\n    el: '#v-main',\n    data: {\n      imgs: [],\n      currentImgGroup: null,\n      pageController: {\n        total: 1, // 总页码\n        current: 1, // 当前页码\n        sisiable: 5 // 可视的页码数\n      }\n    },\n    created: function created() {\n      var _this = this;\n      _jquery2.default.ajax({\n        url: './data/UVPrint/all.json',\n        data: null,\n        type: 'get',\n        dataType: 'json',\n        success: function success(data, statusText) {\n          _this.imgs = _this.splitImgsToArray(data.data);\n          console.log(_this.imgs);\n          _this.currentImgGroup = _this.imgs[0];\n          _this.pageController.total = _this.currentImgGroup.length;\n\n          layui.use(['laypage', 'layer'], function () {\n            var laypage = layui.laypage;\n            var layer = layui.layer;\n\n            laypage({\n              cont: 'pagination',\n              first: '首页',\n              pages: _this.pageController.total, //总页数\n              groups: 15 //连续显示分页数\n            });\n          });\n        }\n      });\n    },\n\n    methods: {\n      getPics: function getPics(event) {\n        var index = event.target.getAttribute('data-index');\n        // var url = config[index]\n        var _this = this;\n        _jquery2.default.ajax({\n          url: '',\n          data: null,\n          type: 'GET',\n          dataType: 'json',\n          success: function success(data, statusText) {}\n        });\n      },\n\n      /**\r\n       * 将数组分割为每6个一组\r\n       * @param {any} array \r\n       */\n      splitImgsToArray: function splitImgsToArray(array) {\n        var newArray = [];\n        while (array.length > 0) {\n          newArray.push(array.splice(0, 6));\n        }\n        return newArray;\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgyLmpzPzMzYmQiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJyZWFkeSIsImNvbmZpZyIsInZ1ZSIsImVsIiwiZGF0YSIsImltZ3MiLCJjdXJyZW50SW1nR3JvdXAiLCJwYWdlQ29udHJvbGxlciIsInRvdGFsIiwiY3VycmVudCIsInNpc2lhYmxlIiwiY3JlYXRlZCIsIl90aGlzIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJzdGF0dXNUZXh0Iiwic3BsaXRJbWdzVG9BcnJheSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJsYXl1aSIsInVzZSIsImxheXBhZ2UiLCJsYXllciIsImNvbnQiLCJmaXJzdCIsInBhZ2VzIiwiZ3JvdXBzIiwibWV0aG9kcyIsImdldFBpY3MiLCJldmVudCIsImluZGV4IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiYXJyYXkiLCJuZXdBcnJheSIsInB1c2giLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsc0JBQUVBLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZO0FBQzVCLE1BQUlDLFNBQVMsQ0FDWCxFQURXLENBQWI7QUFHQSxNQUFJQyxNQUFNLGtCQUFRO0FBQ2hCQyxRQUFJLFNBRFk7QUFFaEJDLFVBQU07QUFDSkMsWUFBTSxFQURGO0FBRUpDLHVCQUFpQixJQUZiO0FBR0pDLHNCQUFnQjtBQUNkQyxlQUFPLENBRE8sRUFDQTtBQUNkQyxpQkFBUyxDQUZLLEVBRUQ7QUFDYkMsa0JBQVUsQ0FISSxDQUdEO0FBSEM7QUFIWixLQUZVO0FBV2hCQyxXQVhnQixxQkFXTjtBQUNSLFVBQUlDLFFBQVEsSUFBWjtBQUNBLHVCQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyx5QkFEQTtBQUVMVixjQUFNLElBRkQ7QUFHTFcsY0FBTSxLQUhEO0FBSUxDLGtCQUFVLE1BSkw7QUFLTEMsaUJBQVMsaUJBQVViLElBQVYsRUFBZ0JjLFVBQWhCLEVBQTRCO0FBQ25DTixnQkFBTVAsSUFBTixHQUFhTyxNQUFNTyxnQkFBTixDQUF1QmYsS0FBS0EsSUFBNUIsQ0FBYjtBQUNBZ0Isa0JBQVFDLEdBQVIsQ0FBWVQsTUFBTVAsSUFBbEI7QUFDQU8sZ0JBQU1OLGVBQU4sR0FBd0JNLE1BQU1QLElBQU4sQ0FBVyxDQUFYLENBQXhCO0FBQ0FPLGdCQUFNTCxjQUFOLENBQXFCQyxLQUFyQixHQUE2QkksTUFBTU4sZUFBTixDQUFzQmdCLE1BQW5EOztBQUVBQyxnQkFBTUMsR0FBTixDQUFVLENBQUMsU0FBRCxFQUFZLE9BQVosQ0FBVixFQUFnQyxZQUFXO0FBQ3pDLGdCQUFJQyxVQUFVRixNQUFNRSxPQUFwQjtBQUNBLGdCQUFJQyxRQUFRSCxNQUFNRyxLQUFsQjs7QUFFQUQsb0JBQVE7QUFDTkUsb0JBQU0sWUFEQTtBQUVOQyxxQkFBTyxJQUZEO0FBR05DLHFCQUFPakIsTUFBTUwsY0FBTixDQUFxQkMsS0FIdEIsRUFHNkI7QUFDbkNzQixzQkFBUSxFQUpGLENBSUs7QUFKTCxhQUFSO0FBTUQsV0FWRDtBQVdEO0FBdEJJLE9BQVA7QUF5QkQsS0F0Q2U7O0FBdUNoQkMsYUFBUztBQUNQQyxlQUFTLGlCQUFVQyxLQUFWLEVBQWlCO0FBQ3hCLFlBQUlDLFFBQVFELE1BQU1FLE1BQU4sQ0FBYUMsWUFBYixDQUEwQixZQUExQixDQUFaO0FBQ0E7QUFDQSxZQUFJeEIsUUFBUSxJQUFaO0FBQ0EseUJBQUVDLElBQUYsQ0FBTztBQUNMQyxlQUFLLEVBREE7QUFFTFYsZ0JBQU0sSUFGRDtBQUdMVyxnQkFBTSxLQUhEO0FBSUxDLG9CQUFVLE1BSkw7QUFLTEMsbUJBQVMsaUJBQVViLElBQVYsRUFBZ0JjLFVBQWhCLEVBQTRCLENBRXBDO0FBUEksU0FBUDtBQVNELE9BZE07O0FBZ0JQOzs7O0FBSUFDLHNCQXBCTyw0QkFvQldrQixLQXBCWCxFQW9Ca0I7QUFDdkIsWUFBSUMsV0FBVyxFQUFmO0FBQ0EsZUFBTUQsTUFBTWYsTUFBTixHQUFlLENBQXJCLEVBQXdCO0FBQ3RCZ0IsbUJBQVNDLElBQVQsQ0FBY0YsTUFBTUcsTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBZDtBQUNEO0FBQ0QsZUFBT0YsUUFBUDtBQUNEO0FBMUJNO0FBdkNPLEdBQVIsQ0FBVjtBQW9FRCxDQXhFRCIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuc2NzcydcclxuaW1wb3J0ICcuLi9jc3MvaW5kZXgyLnNjc3MnXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGNvbmZpZyA9IFtcclxuICAgICcnXHJcbiAgXVxyXG4gIHZhciB2dWUgPSBuZXcgVnVlKHtcclxuICAgIGVsOiAnI3YtbWFpbicsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGltZ3M6IFtdLFxyXG4gICAgICBjdXJyZW50SW1nR3JvdXA6IG51bGwsXHJcbiAgICAgIHBhZ2VDb250cm9sbGVyOiB7XHJcbiAgICAgICAgdG90YWw6IDEsICAgICAvLyDmgLvpobXnoIFcclxuICAgICAgICBjdXJyZW50OiAxLCAgLy8g5b2T5YmN6aG156CBXHJcbiAgICAgICAgc2lzaWFibGU6IDUsIC8vIOWPr+inhueahOmhteeggeaVsFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy4vZGF0YS9VVlByaW50L2FsbC5qc29uJyxcclxuICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIHR5cGU6ICdnZXQnLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1c1RleHQpIHtcclxuICAgICAgICAgIF90aGlzLmltZ3MgPSBfdGhpcy5zcGxpdEltZ3NUb0FycmF5KGRhdGEuZGF0YSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKF90aGlzLmltZ3MpXHJcbiAgICAgICAgICBfdGhpcy5jdXJyZW50SW1nR3JvdXAgPSBfdGhpcy5pbWdzWzBdO1xyXG4gICAgICAgICAgX3RoaXMucGFnZUNvbnRyb2xsZXIudG90YWwgPSBfdGhpcy5jdXJyZW50SW1nR3JvdXAubGVuZ3RoXHJcblxyXG4gICAgICAgICAgbGF5dWkudXNlKFsnbGF5cGFnZScsICdsYXllciddLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGxheXBhZ2UgPSBsYXl1aS5sYXlwYWdlXHJcbiAgICAgICAgICAgIHZhciBsYXllciA9IGxheXVpLmxheWVyXHJcblxyXG4gICAgICAgICAgICBsYXlwYWdlKHtcclxuICAgICAgICAgICAgICBjb250OiAncGFnaW5hdGlvbicsIFxyXG4gICAgICAgICAgICAgIGZpcnN0OiAn6aaW6aG1JyxcclxuICAgICAgICAgICAgICBwYWdlczogX3RoaXMucGFnZUNvbnRyb2xsZXIudG90YWwsIC8v5oC76aG15pWwXHJcbiAgICAgICAgICAgICAgZ3JvdXBzOiAxNSAvL+i/nue7reaYvuekuuWIhumhteaVsFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2V0UGljczogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXHJcbiAgICAgICAgLy8gdmFyIHVybCA9IGNvbmZpZ1tpbmRleF1cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1c1RleHQpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiDlsIbmlbDnu4TliIblibLkuLrmr4825Liq5LiA57uEXHJcbiAgICAgICAqIEBwYXJhbSB7YW55fSBhcnJheSBcclxuICAgICAgICovXHJcbiAgICAgIHNwbGl0SW1nc1RvQXJyYXkgKGFycmF5KSB7XHJcbiAgICAgICAgdmFyIG5ld0FycmF5ID0gW11cclxuICAgICAgICB3aGlsZShhcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBuZXdBcnJheS5wdXNoKGFycmF5LnNwbGljZSgwLCA2KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxufSlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4Mi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })

})