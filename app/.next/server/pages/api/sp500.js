(function() {
var exports = {};
exports.id = "pages/api/sp500";
exports.ids = ["pages/api/sp500"];
exports.modules = {

/***/ "./pages/api/sp500.js":
/*!****************************!*\
  !*** ./pages/api/sp500.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const underscore = __webpack_require__(/*! underscore */ "underscore");

const axios = __webpack_require__(/*! axios */ "axios");

/* harmony default export */ __webpack_exports__["default"] = ((req, res, next) => {
  try {
    const sp500URL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/sp500.csv";
    axios.get(sp500URL).then(s => {
      if (s.status === 200) {
        let sp500details = [];
        let rows = s.data.split("\n");
        const header = rows[0].split(",");

        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          const cols = row.split(",");
          var result = cols.reduce(function (result, field, index) {
            result[header[index].replace(/(\r\n|\n|\r)/gm, "")] = field.replace(/(\r\n|\n|\r)/gm, "");
            return result;
          }, {});
          sp500details.push(result);
        }

        res.send(sp500details);
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

/***/ }),

/***/ "underscore":
/*!*****************************!*\
  !*** external "underscore" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("underscore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/sp500.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvc3A1MDAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCIiXSwibmFtZXMiOlsidW5kZXJzY29yZSIsInJlcXVpcmUiLCJheGlvcyIsInJlcSIsInJlcyIsIm5leHQiLCJzcDUwMFVSTCIsImdldCIsInRoZW4iLCJzIiwic3RhdHVzIiwic3A1MDBkZXRhaWxzIiwicm93cyIsImRhdGEiLCJzcGxpdCIsImhlYWRlciIsImkiLCJsZW5ndGgiLCJyb3ciLCJjb2xzIiwicmVzdWx0IiwicmVkdWNlIiwiZmllbGQiLCJpbmRleCIsInJlcGxhY2UiLCJwdXNoIiwic2VuZCIsImVycm9yIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUExQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUdELG1CQUFPLENBQUMsb0JBQUQsQ0FBckI7O0FBRUEsK0RBQWUsQ0FBQ0UsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDakMsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FDWixnR0FERjtBQUVBSixTQUFLLENBQ0ZLLEdBREgsQ0FDT0QsUUFEUCxFQUVHRSxJQUZILENBRVNDLENBQUQsSUFBTztBQUNYLFVBQUlBLENBQUMsQ0FBQ0MsTUFBRixLQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLFlBQUlDLFlBQVksR0FBRyxFQUFuQjtBQUNBLFlBQUlDLElBQUksR0FBR0gsQ0FBQyxDQUFDSSxJQUFGLENBQU9DLEtBQVAsQ0FBYSxJQUFiLENBQVg7QUFDQSxjQUFNQyxNQUFNLEdBQUdILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUUsS0FBUixDQUFjLEdBQWQsQ0FBZjs7QUFDQSxhQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLElBQUksQ0FBQ0ssTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDcEMsZ0JBQU1FLEdBQUcsR0FBR04sSUFBSSxDQUFDSSxDQUFELENBQWhCO0FBQ0EsZ0JBQU1HLElBQUksR0FBR0QsR0FBRyxDQUFDSixLQUFKLENBQVUsR0FBVixDQUFiO0FBQ0EsY0FBSU0sTUFBTSxHQUFHRCxJQUFJLENBQUNFLE1BQUwsQ0FBWSxVQUFVRCxNQUFWLEVBQWtCRSxLQUFsQixFQUF5QkMsS0FBekIsRUFBZ0M7QUFDdkRILGtCQUFNLENBQ0pMLE1BQU0sQ0FBQ1EsS0FBRCxDQUFOLENBQWNDLE9BQWQsQ0FBc0IsZ0JBQXRCLEVBQXdDLEVBQXhDLENBREksQ0FBTixHQUVJRixLQUFLLENBQUNFLE9BQU4sQ0FBYyxnQkFBZCxFQUFnQyxFQUFoQyxDQUZKO0FBR0EsbUJBQU9KLE1BQVA7QUFDRCxXQUxZLEVBS1YsRUFMVSxDQUFiO0FBTUFULHNCQUFZLENBQUNjLElBQWIsQ0FBa0JMLE1BQWxCO0FBQ0Q7O0FBQ0RoQixXQUFHLENBQUNzQixJQUFKLENBQVNmLFlBQVQ7QUFDRCxPQWhCRCxNQWdCTztBQUNMUCxXQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCZ0IsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FBckI7QUFDRDtBQUNGLEtBdEJILEVBdUJHQyxLQXZCSCxDQXVCVUQsS0FBRCxJQUFXO0FBQ2hCRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBdkIsU0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQmdCLElBQWhCLENBQXFCO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQXJCO0FBQ0QsS0ExQkg7QUEyQkQsR0E5QkQsQ0E4QkUsT0FBT0EsS0FBUCxFQUFjO0FBQ2RFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0F2QixPQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCZ0IsSUFBaEIsQ0FBcUI7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBckI7QUFDRDtBQUNGLENBbkNELEU7Ozs7Ozs7Ozs7O0FDSEEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvYXBpL3NwNTAwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdW5kZXJzY29yZSA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHNwNTAwVVJMID1cbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS1kYXRhL21hc3Rlci9EYXRhL3NwNTAwLmNzdlwiO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KHNwNTAwVVJMKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgc3A1MDBkZXRhaWxzID0gW107XG4gICAgICAgICAgbGV0IHJvd3MgPSBzLmRhdGEuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgY29uc3QgaGVhZGVyID0gcm93c1swXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgICAgICAgICAgY29uc3QgY29scyA9IHJvdy5zcGxpdChcIixcIik7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gY29scy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgZmllbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJlc3VsdFtcbiAgICAgICAgICAgICAgICBoZWFkZXJbaW5kZXhdLnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sIFwiXCIpXG4gICAgICAgICAgICAgIF0gPSBmaWVsZC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgIHNwNTAwZGV0YWlscy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlcy5zZW5kKHNwNTAwZGV0YWlscyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5kZXJzY29yZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==