(function() {
var exports = {};
exports.id = "pages/api/topbuysell";
exports.ids = ["pages/api/topbuysell"];
exports.modules = {

/***/ "./pages/api/topbuysell.js":
/*!*********************************!*\
  !*** ./pages/api/topbuysell.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const underscore = __webpack_require__(/*! underscore */ "underscore");

const axios = __webpack_require__(/*! axios */ "axios");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res, next) => {
  try {
    const companywithidURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/companywithid.json";
    const topbuyselltockdetailsURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/Top/bs_180.csv";
    let company = req.query["company"];
    const type = req.query["type"];

    if (company === undefined) {
      axios.get(topbuyselltockdetailsURL.replace("bs", type)).then(t => {
        if (t.status === 200) {
          let topbuyselltockdetails = [];
          let rows = t.data.split("\n");
          const header = rows[0].split(",");

          for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const cols = row.split(",");
            var result = cols.reduce(function (result, field, index) {
              result[header[index].replace(/(\r\n|\n|\r)/gm, "")] = field.replace(/(\r\n|\n|\r)/gm, "");
              return result;
            }, {});
            topbuyselltockdetails.push(result);
          }

          res.send(topbuyselltockdetails);
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
      company = company.toUpperCase();
      axios.get(companywithidURL).then(s => {
        if (s.status === 200) {
          const companywithid = s.data;
          const code = parseInt(companywithid[company]);
          axios.get(previousdaystockdetailsURL).then(t => {
            if (t.status === 200) {
              let rows = t.data.split("\n");
              const header = rows[0].split(",");
              const codeindex = header.indexOf("Code");

              for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                const cols = row.split(",");

                if (parseInt(cols[codeindex]) === code) {
                  var result = cols.reduce(function (result, field, index) {
                    result[header[index].replace(/(\r\n|\n|\r)/gm, "")] = field.replace(/(\r\n|\n|\r)/gm, "");
                    return result;
                  }, {});
                  res.send(result);
                  break;
                }
              }
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/topbuysell.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvdG9wYnV5c2VsbC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInVuZGVyc2NvcmVcIiJdLCJuYW1lcyI6WyJ1bmRlcnNjb3JlIiwicmVxdWlyZSIsImF4aW9zIiwicmVxIiwicmVzIiwibmV4dCIsImNvbXBhbnl3aXRoaWRVUkwiLCJ0b3BidXlzZWxsdG9ja2RldGFpbHNVUkwiLCJjb21wYW55IiwicXVlcnkiLCJ0eXBlIiwidW5kZWZpbmVkIiwiZ2V0IiwicmVwbGFjZSIsInRoZW4iLCJ0Iiwic3RhdHVzIiwidG9wYnV5c2VsbHRvY2tkZXRhaWxzIiwicm93cyIsImRhdGEiLCJzcGxpdCIsImhlYWRlciIsImkiLCJsZW5ndGgiLCJyb3ciLCJjb2xzIiwicmVzdWx0IiwicmVkdWNlIiwiZmllbGQiLCJpbmRleCIsInB1c2giLCJzZW5kIiwiZXJyb3IiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJ0b1VwcGVyQ2FzZSIsInMiLCJjb21wYW55d2l0aGlkIiwiY29kZSIsInBhcnNlSW50IiwicHJldmlvdXNkYXlzdG9ja2RldGFpbHNVUkwiLCJjb2RlaW5kZXgiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUExQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUdELG1CQUFPLENBQUMsb0JBQUQsQ0FBckI7O0FBRUEsK0RBQWUsT0FBT0UsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUN2QyxNQUFJO0FBQ0YsVUFBTUMsZ0JBQWdCLEdBQ3BCLHlHQURGO0FBRUEsVUFBTUMsd0JBQXdCLEdBQzVCLHFHQURGO0FBRUEsUUFBSUMsT0FBTyxHQUFHTCxHQUFHLENBQUNNLEtBQUosQ0FBVSxTQUFWLENBQWQ7QUFDQSxVQUFNQyxJ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QTVCLFdBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JlLElBQWhCLENBQXFCO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQXJCO0FBQ0QsT0F4Q0g7QUF5Q0Q7QUFDRixHQS9FRCxDQStFRSxPQUFPQSxLQUFQLEVBQWM7QUFDZEUsV0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQTVCLE9BQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JlLElBQWhCLENBQXFCO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQXJCO0FBQ0Q7QUFDRixDQXBGRCxFOzs7Ozs7Ozs7OztBQ0hBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL2FwaS90b3BidXlzZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdW5kZXJzY29yZSA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb21wYW55d2l0aGlkVVJMID1cclxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExLWRhdGEvbWFzdGVyL0RhdGEvY29tcGFueXdpdGhpZC5qc29uXCI7XHJcbiAgICBjb25zdCB0b3BidXlzZWxsdG9ja2RldGFpbHNVUkwgPVxyXG4gICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWlrcjc4OS9zdG9jay1hbmFseXNpcy10b29sLTEwMTEtZGF0YS9tYXN0ZXIvRGF0YS9Ub3AvYnNfMTgwLmNzdlwiO1xyXG4gICAgbGV0IGNvbXBhbnkgPSByZXEucXVlcnlbXCJjb21wYW55XCJdO1xyXG4gICAgY29uc3QgdHlwZSA9IHJlcS5xdWVyeVtcInR5cGVcIl07XHJcbiAgICBpZiAoY29tcGFueSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldCh0b3BidXlzZWxsdG9ja2RldGFpbHNVUkwucmVwbGFjZShcImJzXCIsIHR5cGUpKVxyXG4gICAgICAgIC50aGVuKCh0KSA9PiB7XHJcbiAgICAgICAgICBpZiAodC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBsZXQgdG9wYnV5c2VsbHRvY2tkZXRhaWxzID0gW107XHJcbiAgICAgICAgICAgIGxldCByb3dzID0gdC5kYXRhLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSByb3dzWzBdLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcclxuICAgICAgICAgICAgICBjb25zdCBjb2xzID0gcm93LnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY29scy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgZmllbGQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbXHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcltpbmRleF0ucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIilcclxuICAgICAgICAgICAgICAgIF0gPSBmaWVsZC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgICAgICAgIHRvcGJ1eXNlbGx0b2NrZGV0YWlscy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzLnNlbmQodG9wYnV5c2VsbHRvY2tkZXRhaWxzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbXBhbnkgPSBjb21wYW55LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChjb21wYW55d2l0aGlkVVJMKVxyXG4gICAgICAgIC50aGVuKChzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wYW55d2l0aGlkID0gcy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcGFyc2VJbnQoY29tcGFueXdpdGhpZFtjb21wYW55XSk7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgLmdldChwcmV2aW91c2RheXN0b2NrZGV0YWlsc1VSTClcclxuICAgICAgICAgICAgICAudGhlbigodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IHJvd3MgPSB0LmRhdGEuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHJvd3NbMF0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjb2RlaW5kZXggPSBoZWFkZXIuaW5kZXhPZihcIkNvZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29scyA9IHJvdy5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGNvbHNbY29kZWluZGV4XSkgPT09IGNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjb2xzLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBmaWVsZCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcltpbmRleF0ucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSA9IGZpZWxkLnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzLnNlbmQocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5kZXJzY29yZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==