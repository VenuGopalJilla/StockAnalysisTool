(function() {
var exports = {};
exports.id = "pages/api/previousdaystockdetails";
exports.ids = ["pages/api/previousdaystockdetails"];
exports.modules = {

/***/ "./pages/api/previousdaystockdetails.js":
/*!**********************************************!*\
  !*** ./pages/api/previousdaystockdetails.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const underscore = __webpack_require__(/*! underscore */ "underscore");

const axios = __webpack_require__(/*! axios */ "axios");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res, next) => {
  try {
    const companywithidURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/companywithid.json";
    const previousdaystockdetailsURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/Stock/previousdaystockdetails.csv";
    let company = req.query["company"];

    if (company === undefined) {
      axios.get(previousdaystockdetailsURL).then(t => {
        if (t.status === 200) {
          let previousdaystockdetails = [];
          let rows = t.data.split("\n");
          const header = rows[0].split(",");

          for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const cols = row.split(",");
            var result = cols.reduce(function (result, field, index) {
              result[header[index].replace(/(\r\n|\n|\r)/gm, "")] = field.replace(/(\r\n|\n|\r)/gm, "");
              return result;
            }, {});
            previousdaystockdetails.push(result);
          }

          res.send(previousdaystockdetails);
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/previousdaystockdetails.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvcHJldmlvdXNkYXlzdG9ja2RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCIiXSwibmFtZXMiOlsidW5kZXJzY29yZSIsInJlcXVpcmUiLCJheGlvcyIsInJlcSIsInJlcyIsIm5leHQiLCJjb21wYW55d2l0aGlkVVJMIiwicHJldmlvdXNkYXlzdG9ja2RldGFpbHNVUkwiLCJjb21wYW55IiwicXVlcnkiLCJ1bmRlZmluZWQiLCJnZXQiLCJ0aGVuIiwidCIsInN0YXR1cyIsInByZXZpb3VzZGF5c3RvY2tkZXRhaWxzIiwicm93cyIsImRhdGEiLCJzcGxpdCIsImhlYWRlciIsImkiLCJsZW5ndGgiLCJyb3ciLCJjb2xzIiwicmVzdWx0IiwicmVkdWNlIiwiZmllbGQiLCJpbmRleCIsInJlcGxhY2UiLCJwdXNoIiwic2VuZCIsImVycm9yIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwidG9VcHBlckNhc2UiLCJzIiwiY29tcGFueXdpdGhpZCIsImNvZGUiLCJwYXJzZUludCIsImNvZGVpbmRleCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFELENBQTFCOztBQUNBLE1BQU1DLEtBQUssR0FBR0QsbUJBQU8sQ0FBQyxvQkFBRCxDQUFyQjs7QUFFQSwrREFBZSxPQUFPRSxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ3ZDLE1BQUk7QUFDRixVQUFNQyxnQkFBZ0IsR0FDcEIseUdBREY7QUFFQSxVQUFNQywwQkFBMEIsR0FDOUIsd0hBREY7QUFFQSxRQUFJQyxPQUFPLEdBQUdMLEdBQUcsQ0FBQ00sS0FBSixDQUFVLFNBQVYsQ0FBZDs7QUFDQSxRQUFJRCxPQUFPLEtBQUtFLFNBQWhCLEVB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T0EsS0FBUCxFQUFjO0FBQ2RFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0EzQixPQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCZ0IsSUFBaEIsQ0FBcUI7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBckI7QUFDRDtBQUNGLENBbkZELEU7Ozs7Ozs7Ozs7O0FDSEEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvYXBpL3ByZXZpb3VzZGF5c3RvY2tkZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdW5kZXJzY29yZSA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbXBhbnl3aXRoaWRVUkwgPVxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExLWRhdGEvbWFzdGVyL0RhdGEvY29tcGFueXdpdGhpZC5qc29uXCI7XG4gICAgY29uc3QgcHJldmlvdXNkYXlzdG9ja2RldGFpbHNVUkwgPVxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExLWRhdGEvbWFzdGVyL0RhdGEvU3RvY2svcHJldmlvdXNkYXlzdG9ja2RldGFpbHMuY3N2XCI7XG4gICAgbGV0IGNvbXBhbnkgPSByZXEucXVlcnlbXCJjb21wYW55XCJdO1xuICAgIGlmIChjb21wYW55ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQocHJldmlvdXNkYXlzdG9ja2RldGFpbHNVUkwpXG4gICAgICAgIC50aGVuKCh0KSA9PiB7XG4gICAgICAgICAgaWYgKHQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c2RheXN0b2NrZGV0YWlscyA9IFtdO1xuICAgICAgICAgICAgbGV0IHJvd3MgPSB0LmRhdGEuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSByb3dzWzBdLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgICAgICAgICAgICBjb25zdCBjb2xzID0gcm93LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNvbHMucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGZpZWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtcbiAgICAgICAgICAgICAgICAgIGhlYWRlcltpbmRleF0ucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIilcbiAgICAgICAgICAgICAgICBdID0gZmllbGQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgICAgICBwcmV2aW91c2RheXN0b2NrZGV0YWlscy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXMuc2VuZChwcmV2aW91c2RheXN0b2NrZGV0YWlscyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGFueSA9IGNvbXBhbnkudG9VcHBlckNhc2UoKTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoY29tcGFueXdpdGhpZFVSTClcbiAgICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY29uc3QgY29tcGFueXdpdGhpZCA9IHMuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBwYXJzZUludChjb21wYW55d2l0aGlkW2NvbXBhbnldKTtcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgIC5nZXQocHJldmlvdXNkYXlzdG9ja2RldGFpbHNVUkwpXG4gICAgICAgICAgICAgIC50aGVuKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgIGxldCByb3dzID0gdC5kYXRhLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gcm93c1swXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjb2RlaW5kZXggPSBoZWFkZXIuaW5kZXhPZihcIkNvZGVcIik7XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29scyA9IHJvdy5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjb2xzW2NvZGVpbmRleF0pID09PSBjb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNvbHMucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGZpZWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJbaW5kZXhdLnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdID0gZmllbGQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICByZXMuc2VuZChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9