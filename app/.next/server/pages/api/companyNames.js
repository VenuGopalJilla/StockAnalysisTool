(function() {
var exports = {};
exports.id = "pages/api/companyNames";
exports.ids = ["pages/api/companyNames"];
exports.modules = {

/***/ "./pages/api/companyNames.js":
/*!***********************************!*\
  !*** ./pages/api/companyNames.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(/*! axios */ "axios");

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  try {
    const companywithidURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/companywithid.json";
    axios.get(companywithidURL).then(s => {
      if (s.status === 200) {
        const companyNames = Object.keys(s.data);
        res.send(companyNames);
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/companyNames.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvY29tcGFueU5hbWVzLmpzIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcImF4aW9zXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwicmVxIiwicmVzIiwiY29tcGFueXdpdGhpZFVSTCIsImdldCIsInRoZW4iLCJzIiwic3RhdHVzIiwiY29tcGFueU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImRhdGEiLCJzZW5kIiwiZXJyb3IiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFELENBQXJCOztBQUVBLCtEQUFlLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzNCLE1BQUk7QUFDRixVQUFNQyxnQkFBZ0IsR0FDcEIsb0dBREY7QUFFQUosU0FBSyxDQUNGSyxHQURILENBQ09ELGdCQURQLEVBRUdFLElBRkgsQ0FFU0MsQ0FBRCxJQUFPO0FBQ1gsVUFBSUEsQ0FBQyxDQUFDQyxNQUFGLEtBQWEsR0FBakIsRUFBc0I7QUFDcEIsY0FBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosQ0FBQyxDQUFDSyxJQUFkLENBQXJCO0FBQ0FULFdBQUcsQ0FBQ1UsSUFBSixDQUFTSixZQUFUO0FBQ0QsT0FIRCxNQUdPO0FBQ0xOLFdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JLLElBQWhCLENBQXFCO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQXJCO0FBQ0Q7QUFDRixLQVRILEVBVUdDLEtBVkgsQ0FVVUQsS0FBRCxJQUFXO0FBQ2hCRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBWCxTQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCSyxJQUFoQixDQUFxQjtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFyQjtBQUNELEtBYkg7QUFjRCxHQWpCRCxDQWlCRSxPQUFPQSxLQUFQLEVBQWM7QUFDZEUsV0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQVgsT0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkssSUFBaEIsQ0FBcUI7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBckI7QUFDRDtBQUNGLENBdEJELEU7Ozs7Ozs7Ozs7O0FDRkEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL2NvbXBhbnlOYW1lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb21wYW55d2l0aGlkVVJMID1cbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS9tYXN0ZXIvRGF0YS9jb21wYW55d2l0aGlkLmpzb25cIjtcbiAgICBheGlvc1xuICAgICAgLmdldChjb21wYW55d2l0aGlkVVJMKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBjb21wYW55TmFtZXMgPSBPYmplY3Qua2V5cyhzLmRhdGEpO1xuICAgICAgICAgIHJlcy5zZW5kKGNvbXBhbnlOYW1lcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==