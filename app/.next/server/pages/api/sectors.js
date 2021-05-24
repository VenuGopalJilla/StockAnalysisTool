(function() {
var exports = {};
exports.id = "pages/api/sectors";
exports.ids = ["pages/api/sectors"];
exports.modules = {

/***/ "./pages/api/sectors.js":
/*!******************************!*\
  !*** ./pages/api/sectors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(/*! axios */ "axios");

/* harmony default export */ __webpack_exports__["default"] = ((req, res, next) => {
  try {
    const sectorsURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/sectors.json";
    axios.get(sectorsURL).then(s => {
      if (s.status === 200) {
        res.send(s.data);
      } else {
        res.status(404).send({
          error: "error"
        });
      }
    }).catch(error => {
      console.log(error);
      res.status(404).send({
        error: "error"
      });
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: "error"
    });
  }
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/sectors.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvc2VjdG9ycy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInJlcSIsInJlcyIsIm5leHQiLCJzZWN0b3JzVVJMIiwiZ2V0IiwidGhlbiIsInMiLCJzdGF0dXMiLCJzZW5kIiwiZGF0YSIsImVycm9yIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFyQjs7QUFFQSwrREFBZSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxLQUFvQjtBQUNqQyxNQUFJO0FBQ0YsVUFBTUMsVUFBVSxHQUNkLDhGQURGO0FBRUFMLFNBQUssQ0FDRk0sR0FESCxDQUNPRCxVQURQLEVBRUdFLElBRkgsQ0FFU0MsQ0FBRCxJQUFPO0FBQ1gsVUFBSUEsQ0FBQyxDQUFDQyxNQUFGLEtBQWEsR0FBakIsRUFBc0I7QUFDcEJOLFdBQUcsQ0FBQ08sSUFBSixDQUFTRixDQUFDLENBQUNHLElBQVg7QUFDRCxPQUZELE1BRU87QUFDTFIsV0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUUsZUFBSyxFQUFFO0FBQVQsU0FBckI7QUFDRDtBQUNGLEtBUkgsRUFTR0MsS0FUSCxDQVNVRCxLQUFELElBQVc7QUFDaEJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0FULFNBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVFLGFBQUssRUFBRTtBQUFULE9BQXJCO0FBQ0QsS0FaSDtBQWFELEdBaEJELENBZ0JFLE9BQU9BLEtBQVAsRUFBYztBQUNkRSxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBVCxPQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRSxXQUFLLEVBQUU7QUFBVCxLQUFyQjtBQUNEO0FBQ0YsQ0FyQkQsRTs7Ozs7Ozs7Ozs7QUNGQSxtQyIsImZpbGUiOiJwYWdlcy9hcGkvc2VjdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZWN0b3JzVVJMID1cbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS9tYXN0ZXIvRGF0YS9zZWN0b3JzLmpzb25cIjtcbiAgICBheGlvc1xuICAgICAgLmdldChzZWN0b3JzVVJMKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICByZXMuc2VuZChzLmRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=