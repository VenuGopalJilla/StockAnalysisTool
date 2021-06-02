(function() {
var exports = {};
exports.id = "pages/api/getsuggestions";
exports.ids = ["pages/api/getsuggestions"];
exports.modules = {

/***/ "./pages/api/getsuggestions.js":
/*!*************************************!*\
  !*** ./pages/api/getsuggestions.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(/*! axios */ "axios");

/* harmony default export */ __webpack_exports__["default"] = ((req, res, next) => {
  try {
    let company = req.query["company"];
    company = company.toUpperCase();
    const suggestURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/Top/simres_180.csv";
    const companywithidURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/companywithid.json";
    axios.get(companywithidURL).then(s => {
      if (s.status === 200) {
        const code = parseInt(s.data[company]);
        axios.get(suggestURL).then(t => {
          if (t.status === 200) {
            let suggestion = "";
            let rows = t.data.split("\n");
            const header = rows[0].replace("\r", "").split(",");
            const codeindex = header.indexOf("code");
            const suggestindex = header.indexOf("suggest");

            for (let i = 1; i < rows.length - 1; i++) {
              let row = rows[i].split(",");

              if (parseInt(row[codeindex]) == code) {
                suggestion = row[suggestindex].replace("\r", "");
                break;
              }
            }

            res.send({
              suggest: suggestion
            });
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/getsuggestions.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvZ2V0c3VnZ2VzdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiYXhpb3NcIiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY29tcGFueSIsInF1ZXJ5IiwidG9VcHBlckNhc2UiLCJzdWdnZXN0VVJMIiwiY29tcGFueXdpdGhpZFVSTCIsImdldCIsInRoZW4iLCJzIiwic3RhdHVzIiwiY29kZSIsInBhcnNlSW50IiwiZGF0YSIsInQiLCJzdWdnZXN0aW9uIiwicm93cyIsInNwbGl0IiwiaGVhZGVyIiwicmVwbGFjZSIsImNvZGVpbmRleCIsImluZGV4T2YiLCJzdWdnZXN0aW5kZXgiLCJpIiwibGVuZ3RoIiwicm93Iiwic2VuZCIsInN1Z2dlc3QiLCJlcnJvciIsImNhdGNoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQUQsQ0FBckI7O0FBQ0EsK0RBQWUsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDakMsTUFBSTtBQUNGLFFBQUlDLE9BQU8sR0FBR0gsR0FBRyxDQUFDSSxLQUFKLENBQVUsU0FBVixDQUFkO0FBQ0FELFdBQU8sR0FBR0EsT0FBTyxDQUFDRSxXQUFSLEVBQVY7QUFDQSxVQUFNQyxVQUFVLEdBQ2QseUdBREY7QUFFQSxVQUFNQyxnQkFBZ0IsR0FDcEIseUdBREY7QUFFQVQsU0FBSyxDQUNGVSxHQURILENBQ09ELGdCQURQLEVBRUdFLElBRkgsQ0FFU0MsQ0FBRCxJQUFPO0FBQ1gsVUFBSUEsQ0FBQyxDQUFDQyxNQUFGLEtBQWEsR0FBakIsRUFBc0I7QUFDcEIsY0FBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNILENBQUMsQ0FBQ0ksSUFBRixDQUFPWCxPQUFQLENBQUQsQ0FBckI7QUFDQUwsYUFBSyxDQUNGVSxHQURILENBQ09GLFVBRFAsRUFFR0csSUFGSCxDQUVTTSxDQUFELElBQU87QUFDWCxjQUFJQSxDQUFDLENBQUNKLE1BQUYsS0FBYSxHQUFqQixFQUFzQjtBQUNwQixnQkFBSUssVUFBVSxHQUFHLEVBQWpCO0FBQ0EsZ0JBQUlDLElBQUksR0FBR0YsQ0FBQyxDQUFDRCxJQUFGLENBQU9JLEtBQVAsQ0FBYSxJQUFiLENBQVg7QUFDQSxrQkFBTUMsTUFBTSxHQUFHRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFHLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0IsRUFBdEIsRUFBMEJGLEtBQTFCLENBQWdDLEdBQWhDLENBQWY7QUFDQSxrQkFBTUcsU0FBUyxHQUFHRixNQUFNLENBQUNHLE9BQVAsQ0FBZSxNQUFmLENBQWxCO0FBQ0Esa0JBQU1DLFlBQVksR0FBR0osTUFBTSxDQUFDRyxPQUFQLENBQWUsU0FBZixDQUFyQjs7QUFDQSxpQkFBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUCxJQUFJLENBQUNRLE1BQUwsR0FBYyxDQUFsQyxFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN4QyxrQkFBSUUsR0FBRyxHQUFHVCxJQUFJLENBQUNPLENBQUQsQ0FBSixDQUFRTixLQUFSLENBQWMsR0FBZCxDQUFWOztBQUNBLGtCQUFJTCxRQUFRLENBQUNhLEdBQUcsQ0FBQ0wsU0FBRCxDQUFKLENBQVIsSUFBNEJULElBQWhDLEVBQXNDO0FBQ3BDSSwwQkFBVSxHQUFHVSxHQUFHLENBQUNILFlBQUQsQ0FBSCxDQUFrQkgsT0FBbEIsQ0FBMEIsSUFBMUIsRUFBZ0MsRUFBaEMsQ0FBYjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRG5CLGVBQUcsQ0FBQzBCLElBQUosQ0FBUztBQUFFQyxxQkFBTyxFQUFFWjtBQUFYLGFBQVQ7QUFDRCxXQWRELE1BY087QUFDTGYsZUFBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQmdCLElBQWhCLENBQXFCO0FBQUVFLG1CQUFLLEVBQUU7QUFBVCxhQUFyQjtBQUNEO0FBQ0YsU0FwQkgsRUFxQkdDLEtBckJILENBcUJVRCxLQUFELElBQVc7QUFDaEJFLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBNUIsYUFBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQmdCLElBQWhCLENBQXFCO0FBQUVFLGlCQUFLLEVBQUU7QUFBVCxXQUFyQjtBQUNELFNBeEJIO0FBeUJELE9BM0JELE1BMkJPO0FBQ0w1QixXQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCZ0IsSUFBaEIsQ0FBcUI7QUFBRUUsZUFBSyxFQUFFO0FBQVQsU0FBckI7QUFDRDtBQUNGLEtBakNILEVBa0NHQyxLQWxDSCxDQWtDVUQsS0FBRCxJQUFXO0FBQ2hCRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBNUIsU0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQmdCLElBQWhCLENBQXFCO0FBQUVFLGFBQUssRUFBRTtBQUFULE9BQXJCO0FBQ0QsS0FyQ0g7QUFzQ0QsR0E3Q0QsQ0E2Q0UsT0FBT0EsS0FBUCxFQUFjO0FBQ2RFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0E1QixPQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCZ0IsSUFBaEIsQ0FBcUI7QUFBRUUsV0FBSyxFQUFFO0FBQVQsS0FBckI7QUFDRDtBQUNGLENBbERELEU7Ozs7Ozs7Ozs7O0FDREEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL2dldHN1Z2dlc3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XHJcbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgY29tcGFueSA9IHJlcS5xdWVyeVtcImNvbXBhbnlcIl07XHJcbiAgICBjb21wYW55ID0gY29tcGFueS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgY29uc3Qgc3VnZ2VzdFVSTCA9XHJcbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS1kYXRhL21hc3Rlci9EYXRhL1RvcC9zaW1yZXNfMTgwLmNzdlwiO1xyXG4gICAgY29uc3QgY29tcGFueXdpdGhpZFVSTCA9XHJcbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS1kYXRhL21hc3Rlci9EYXRhL2NvbXBhbnl3aXRoaWQuanNvblwiO1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChjb21wYW55d2l0aGlkVVJMKVxyXG4gICAgICAudGhlbigocykgPT4ge1xyXG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zdCBjb2RlID0gcGFyc2VJbnQocy5kYXRhW2NvbXBhbnldKTtcclxuICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoc3VnZ2VzdFVSTClcclxuICAgICAgICAgICAgLnRoZW4oKHQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAodC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1Z2dlc3Rpb24gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvd3MgPSB0LmRhdGEuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXIgPSByb3dzWzBdLnJlcGxhY2UoXCJcXHJcIiwgXCJcIikuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29kZWluZGV4ID0gaGVhZGVyLmluZGV4T2YoXCJjb2RlXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VnZ2VzdGluZGV4ID0gaGVhZGVyLmluZGV4T2YoXCJzdWdnZXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3dzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcm93ID0gcm93c1tpXS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChyb3dbY29kZWluZGV4XSkgPT0gY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb24gPSByb3dbc3VnZ2VzdGluZGV4XS5yZXBsYWNlKFwiXFxyXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXMuc2VuZCh7IHN1Z2dlc3Q6IHN1Z2dlc3Rpb24gfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XHJcbiAgfVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9