(function() {
var exports = {};
exports.id = "pages/api/stockdetails";
exports.ids = ["pages/api/stockdetails"];
exports.modules = {

/***/ "./pages/api/stockdetails.js":
/*!***********************************!*\
  !*** ./pages/api/stockdetails.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(/*! axios */ "axios");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res, next) => {
  try {
    let company = req.query["company"];

    if (company === undefined) {
      res.status(404).send({
        error: "error"
      });
    } else {
      company = company.toUpperCase();
      const companywithidURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/companywithid.json";
      const stockdetailsURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/Stock";
      axios.get(companywithidURL).then(s => {
        if (s.status === 200) {
          const companywithid = s.data;
          const code = parseInt(companywithid[company]);
          axios.get(stockdetailsURL + "/" + code + ".csv").then(t => {
            if (t.status === 200) {
              let stockdetails = [];
              let rows = t.data.split("\n");
              const header = rows[0].split(",");

              for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                const cols = row.split(",");
                var result = cols.reduce(function (result, field, index) {
                  result[header[index].replace(/(\r\n|\n|\r)/gm, "")] = field.replace(/(\r\n|\n|\r)/gm, "");
                  return result;
                }, {});
                stockdetails.push(result);
              }

              res.send(stockdetails);
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
    }
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/stockdetails.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvc3RvY2tkZXRhaWxzLmpzIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcImF4aW9zXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwicmVxIiwicmVzIiwibmV4dCIsImNvbXBhbnkiLCJxdWVyeSIsInVuZGVmaW5lZCIsInN0YXR1cyIsInNlbmQiLCJlcnJvciIsInRvVXBwZXJDYXNlIiwiY29tcGFueXdpdGhpZFVSTCIsInN0b2NrZGV0YWlsc1VSTCIsImdldCIsInRoZW4iLCJzIiwiY29tcGFueXdpdGhpZCIsImRhdGEiLCJjb2RlIiwicGFyc2VJbnQiLCJ0Iiwic3RvY2tkZXRhaWxzIiwicm93cyIsInNwbGl0IiwiaGVhZGVyIiwiaSIsImxlbmd0aCIsInJvdyIsImNvbHMiLCJyZXN1bHQiLCJyZWR1Y2UiLCJmaWVsZCIsImluZGV4IiwicmVwbGFjZSIsInB1c2giLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFELENBQXJCOztBQUVBLCtEQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDdkMsTUFBSTtBQUNGLFFBQUlDLE9BQU8sR0FBR0gsR0FBRyxDQUFDSSxLQUFKLENBQVUsU0FBVixDQUFkOztBQUNBLFFBQUlELE9BQU8sS0FBS0UsU0FBaEIsRUFBMkI7QUFDekJKLFNBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xMLGFBQU8sR0FBR0EsT0FBTyxDQUFDTSxXQUFSLEVBQVY7QUFDQSxZQUFNQyxnQkFBZ0IsR0FDcEIseUdBREY7QUFFQSxZQUFNQyxlQUFlLEdBQ25CLDRGQURGO0FBRUFiLFdBQUssQ0FDRmMsR0FESCxDQUNPRixnQkFEUCxFQUVHRyxJQUZILENBRVNDLENBQUQsSUFBTztBQUNYLFlBQUlBLENBQUMsQ0FBQ1IsTUFBRixLQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLGdCQUFNUyxhQUFhLEdBQUdELENBQUMsQ0FBQ0UsSUFBeEI7QUFDQSxnQkFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNILGFBQWEsQ0FBQ1osT0FBRCxDQUFkLENBQXJCO0FBQ0FMLGVBQUssQ0FDRmMsR0FESCxDQUNPRCxlQUFlLEdBQUcsR0FBbEIsR0FBd0JNLElBQXhCLEdBQStCLE1BRHRDLEVBRUdKLElBRkgsQ0FFU00sQ0FBRCxJQUFPO0FBQ1gsZ0JBQUlBLENBQUMsQ0FBQ2IsTUFBRixLQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLGtCQUFJYyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxrQkFBSUMsSUFBSSxHQUFHRixDQUFDLENBQUNILElBQUYsQ0FBT00sS0FBUCxDQUFhLElBQWIsQ0FBWDtBQUNBLG9CQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsS0FBUixDQUFjLEdBQWQsQ0FBZjs7QUFDQSxtQkFBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxJQUFJLENBQUNJLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLHNCQUFNRSxHQUFHLEdBQUdMLElBQUksQ0FBQ0csQ0FBRCxDQUFoQjtBQUNBLHNCQUFNRyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0osS0FBSixDQUFVLEdBQVYsQ0FBYjtBQUNBLG9CQUFJTSxNQUFNLEdBQUdELElBQUksQ0FBQ0UsTUFBTCxDQUFZLFVBQVVELE1BQVYsRUFBa0JFLEtBQWxCLEVBQXlCQyxLQUF6QixFQUFnQztBQUN2REgsd0JBQU0sQ0FDSkwsTUFBTSxDQUFDUSxLQUFELENBQU4sQ0FBY0MsT0FBZCxDQUFzQixnQkFBdEIsRUFBd0MsRUFBeEMsQ0FESSxDQUFOLEdBRUlGLEtBQUssQ0FBQ0UsT0FBTixDQUFjLGdCQUFkLEVBQWdDLEVBQWhDLENBRko7QUFHQSx5QkFBT0osTUFBUDtBQUNELGlCQUxZLEVBS1YsRUFMVSxDQUFiO0FBTUFSLDRCQUFZLENBQUNhLElBQWIsQ0FBa0JMLE1BQWxCO0FBQ0Q7O0FBQ0QzQixpQkFBRyxDQUFDTSxJQUFKLENBQVNhLFlBQVQ7QUFDRDtBQUNGLFdBcEJILEVBcUJHYyxLQXJCSCxDQXFCVTFCLEtBQUQsSUFBVztBQUNoQjJCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWTVCLEtBQVo7QUFDQVAsZUFBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsbUJBQUssRUFBRTtBQUFULGFBQXJCO0FBQ0QsV0F4Qkg7QUF5QkQsU0E1QkQsTUE0Qk87QUFDTFAsYUFBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQUssRUFBRTtBQUFULFdBQXJCO0FBQ0Q7QUFDRixPQWxDSCxFQW1DRzBCLEtBbkNILENBbUNVMUIsS0FBRCxJQUFXO0FBQ2hCMkIsZUFBTyxDQUFDQyxHQUFSLENBQVk1QixLQUFaO0FBQ0FQLFdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQXJCO0FBQ0QsT0F0Q0g7QUF1Q0Q7QUFDRixHQWxERCxDQWtERSxPQUFPQSxLQUFQLEVBQWM7QUFDZDJCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZNUIsS0FBWjtBQUNBUCxPQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFyQjtBQUNEO0FBQ0YsQ0F2REQsRTs7Ozs7Ozs7Ozs7QUNGQSxtQyIsImZpbGUiOiJwYWdlcy9hcGkvc3RvY2tkZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGxldCBjb21wYW55ID0gcmVxLnF1ZXJ5W1wiY29tcGFueVwiXTtcbiAgICBpZiAoY29tcGFueSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBhbnkgPSBjb21wYW55LnRvVXBwZXJDYXNlKCk7XG4gICAgICBjb25zdCBjb21wYW55d2l0aGlkVVJMID1cbiAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExLWRhdGEvbWFzdGVyL0RhdGEvY29tcGFueXdpdGhpZC5qc29uXCI7XG4gICAgICBjb25zdCBzdG9ja2RldGFpbHNVUkwgPVxuICAgICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWlrcjc4OS9zdG9jay1hbmFseXNpcy10b29sLTEwMTEtZGF0YS9tYXN0ZXIvRGF0YS9TdG9ja1wiO1xuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChjb21wYW55d2l0aGlkVVJMKVxuICAgICAgICAudGhlbigocykgPT4ge1xuICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wYW55d2l0aGlkID0gcy5kYXRhO1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHBhcnNlSW50KGNvbXBhbnl3aXRoaWRbY29tcGFueV0pO1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgLmdldChzdG9ja2RldGFpbHNVUkwgKyBcIi9cIiArIGNvZGUgKyBcIi5jc3ZcIilcbiAgICAgICAgICAgICAgLnRoZW4oKHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgbGV0IHN0b2NrZGV0YWlscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgbGV0IHJvd3MgPSB0LmRhdGEuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXIgPSByb3dzWzBdLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xzID0gcm93LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNvbHMucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGZpZWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcltpbmRleF0ucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdID0gZmllbGQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgICAgICAgICAgICBzdG9ja2RldGFpbHMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmVzLnNlbmQoc3RvY2tkZXRhaWxzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=