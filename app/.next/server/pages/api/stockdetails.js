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
      const companywithidURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/companywithid.json";
      const stockdetailsURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/Stock";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvc3RvY2tkZXRhaWxzLmpzIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcImF4aW9zXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwicmVxIiwicmVzIiwibmV4dCIsImNvbXBhbnkiLCJxdWVyeSIsInVuZGVmaW5lZCIsInN0YXR1cyIsInNlbmQiLCJlcnJvciIsInRvVXBwZXJDYXNlIiwiY29tcGFueXdpdGhpZFVSTCIsInN0b2NrZGV0YWlsc1VSTCIsImdldCIsInRoZW4iLCJzIiwiY29tcGFueXdpdGhpZCIsImRhdGEiLCJjb2RlIiwicGFyc2VJbnQiLCJ0Iiwic3RvY2tkZXRhaWxzIiwicm93cyIsInNwbGl0IiwiaGVhZGVyIiwiaSIsImxlbmd0aCIsInJvdyIsImNvbHMiLCJyZXN1bHQiLCJyZWR1Y2UiLCJmaWVsZCIsImluZGV4IiwicmVwbGFjZSIsInB1c2giLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFELENBQXJCOztBQUVBLCtEQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDdkMsTUFBSTtBQUNGLFFBQUlDLE9BQU8sR0FBR0gsR0FBRyxDQUFDSSxLQUFKLENBQVUsU0FBVixDQUFkOztBQUNBLFFBQUlELE9BQU8sS0FBS0UsU0FBaEIsRUFBMkI7QUFDekJKLFNBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xMLGFBQU8sR0FBR0EsT0FBTyxDQUFDTSxXQUFSLEVBQVY7QUFDQSxZQUFNQyxnQkFBZ0IsR0FDcEIsb0dBREY7QUFFQSxZQUFNQyxlQUFlLEdBQ25CLHVGQURGO0FBRUFiLFdBQUssQ0FDRmMsR0FESCxDQUNPRixnQkFEUCxFQUVHRyxJQUZILENBRVNDLENBQUQsSUFBTztBQUNYLFlBQUlBLENBQUMsQ0FBQ1IsTUFBRixLQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLGdCQUFNUyxhQUFhLEdBQUdELENBQUMsQ0FBQ0UsSUFBeEI7QUFDQSxnQkFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNILGFBQWEsQ0FBQ1osT0FBRCxDQUFkLENBQXJCO0FBQ0FMLGVBQUssQ0FDRmMsR0FESCxDQUNPRCxlQUFlLEdBQUcsR0FBbEIsR0FBd0JNLElBQXhCLEdBQStCLE1BRHRDLEVBRUdKLElBRkgsQ0FFU00sQ0FBRCxJQUFPO0FBQ1gsZ0JBQUlBLENBQUMsQ0FBQ2IsTUFBRixLQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLGtCQUFJYyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxrQkFBSUMsSUFBSSxHQUFHRixDQUFDLENBQUNILElBQUYsQ0FBT00sS0FBUCxDQUFhLElBQWIsQ0FBWDtBQUNBLG9CQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsS0FBUixDQUFjLEdBQWQsQ0FBZjs7QUFDQSxtQkFBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxJQUFJLENBQUNJLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLHNCQUFNRSxHQUFHLEdBQUdMLElBQUksQ0FBQ0csQ0FBRCxDQUFoQjtBQUNBLHNCQUFNRyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0osS0FBSixDQUFVLEdBQVYsQ0FBYjtBQUNBLG9CQUFJTSxNQUFNLEdBQUdELElBQUksQ0FBQ0UsTUFBTCxDQUFZLFVBQVVELE1BQVYsRUFBa0JFLEtBQWxCLEVBQXlCQyxLQUF6QixFQUFnQztBQUN2REgsd0JBQU0sQ0FDSkwsTUFBTSxDQUFDUSxLQUFELENBQU4sQ0FBY0MsT0FBZCxDQUFzQixnQkFBdEIsRUFBd0MsRUFBeEMsQ0FESSxDQUFOLEdBRUlGLEtBQUssQ0FBQ0UsT0FBTixDQUFjLGdCQUFkLEVBQWdDLEVBQWhDLENBRko7QUFHQSx5QkFBT0osTUFBUDtBQUNELGlCQUxZLEVBS1YsRUFMVSxDQUFiO0FBTUFSLDRCQUFZLENBQUNhLElBQWIsQ0FBa0JMLE1BQWxCO0FBQ0Q7O0FBQ0QzQixpQkFBRyxDQUFDTSxJQUFKLENBQVNhLFlBQVQ7QUFDRDtBQUNGLFdBcEJILEVBcUJHYyxLQXJCSCxDQXFCVTFCLEtBQUQsSUFBVztBQUNoQjJCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWTVCLEtBQVo7QUFDQVAsZUFBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsbUJBQUssRUFBRTtBQUFULGFBQXJCO0FBQ0QsV0F4Qkg7QUF5QkQsU0E1QkQsTUE0Qk87QUFDTFAsYUFBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQUssRUFBRTtBQUFULFdBQXJCO0FBQ0Q7QUFDRixPQWxDSCxFQW1DRzBCLEtBbkNILENBbUNVMUIsS0FBRCxJQUFXO0FBQ2hCMkIsZUFBTyxDQUFDQyxHQUFSLENBQVk1QixLQUFaO0FBQ0FQLFdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQXJCO0FBQ0QsT0F0Q0g7QUF1Q0Q7QUFDRixHQWxERCxDQWtERSxPQUFPQSxLQUFQLEVBQWM7QUFDZDJCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZNUIsS0FBWjtBQUNBUCxPQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFyQjtBQUNEO0FBQ0YsQ0F2REQsRTs7Ozs7Ozs7Ozs7QUNGQSxtQyIsImZpbGUiOiJwYWdlcy9hcGkvc3RvY2tkZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGxldCBjb21wYW55ID0gcmVxLnF1ZXJ5W1wiY29tcGFueVwiXTtcbiAgICBpZiAoY29tcGFueSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBhbnkgPSBjb21wYW55LnRvVXBwZXJDYXNlKCk7XG4gICAgICBjb25zdCBjb21wYW55d2l0aGlkVVJMID1cbiAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExL21hc3Rlci9EYXRhL2NvbXBhbnl3aXRoaWQuanNvblwiO1xuICAgICAgY29uc3Qgc3RvY2tkZXRhaWxzVVJMID1cbiAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExL21hc3Rlci9EYXRhL1N0b2NrXCI7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KGNvbXBhbnl3aXRoaWRVUkwpXG4gICAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhbnl3aXRoaWQgPSBzLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcGFyc2VJbnQoY29tcGFueXdpdGhpZFtjb21wYW55XSk7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAuZ2V0KHN0b2NrZGV0YWlsc1VSTCArIFwiL1wiICsgY29kZSArIFwiLmNzdlwiKVxuICAgICAgICAgICAgICAudGhlbigodCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgc3RvY2tkZXRhaWxzID0gW107XG4gICAgICAgICAgICAgICAgICBsZXQgcm93cyA9IHQuZGF0YS5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHJvd3NbMF0uc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHMgPSByb3cuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY29scy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgZmllbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyW2luZGV4XS5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0gPSBmaWVsZC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b2NrZGV0YWlscy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXMuc2VuZChzdG9ja2RldGFpbHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==