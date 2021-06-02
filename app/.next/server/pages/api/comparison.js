(function() {
var exports = {};
exports.id = "pages/api/comparison";
exports.ids = ["pages/api/comparison"];
exports.modules = {

/***/ "./pages/api/comparison.js":
/*!*********************************!*\
  !*** ./pages/api/comparison.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(/*! axios */ "axios");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res, next) => {
  try {
    const query = req.query;
    const days = parseInt(query["days"]);
    const rate = parseFloat(query["rate"]) / 100;
    let company = req.query["company"];
    company = company.toUpperCase();
    const companywithidURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/companywithid.json";
    const grstockdetailsURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/GRStock";
    axios.get(companywithidURL).then(s => {
      if (s.status === 200) {
        const companywithid = s.data;
        const code = parseInt(companywithid[company]);
        axios.get(grstockdetailsURL + "/" + "gr" + code + ".csv").then(t => {
          if (t.status === 200) {
            let nums = 0;
            let stockdetails = [];
            let rows = t.data.split("\n");
            const header = rows[0].split(",");
            const cpgr = header.indexOf("Close Price GR");
            const availdays = Math.min(rows.length, days);

            for (let i = 1; i < availdays; i++) {
              const row = rows[i];
              const cols = row.split(",");

              if (cols[cpgr] > rate) {
                nums = nums + 1;
              }
            }

            const response = {
              company: company,
              numberOfDays: nums,
              percentOfDays: (nums / days * 100).toFixed(3),
              totalNumberOfDays: days,
              rate: rate * 100
            };
            res.send(response);
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/comparison.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvY29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInJlcSIsInJlcyIsIm5leHQiLCJxdWVyeSIsImRheXMiLCJwYXJzZUludCIsInJhdGUiLCJwYXJzZUZsb2F0IiwiY29tcGFueSIsInRvVXBwZXJDYXNlIiwiY29tcGFueXdpdGhpZFVSTCIsImdyc3RvY2tkZXRhaWxzVVJMIiwiZ2V0IiwidGhlbiIsInMiLCJzdGF0dXMiLCJjb21wYW55d2l0aGlkIiwiZGF0YSIsImNvZGUiLCJ0IiwibnVtcyIsInN0b2NrZGV0YWlscyIsInJvd3MiLCJzcGxpdCIsImhlYWRlciIsImNwZ3IiLCJpbmRleE9mIiwiYXZhaWxkYXlzIiwiTWF0aCIsIm1pbiIsImxlbmd0aCIsImkiLCJyb3ciLCJjb2xzIiwicmVzcG9uc2UiLCJudW1iZXJPZkRheXMiLCJwZXJjZW50T2ZEYXlzIiwidG9GaXhlZCIsInRvdGFsTnVtYmVyT2ZEYXlzIiwic2VuZCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFyQjs7QUFFQSwrREFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ3ZDLE1BQUk7QUFDRixVQUFNQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ0csS0FBbEI7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUFyQjtBQUNBLFVBQU1HLElBQUksR0FBR0MsVUFBVSxDQUFDSixLQUFLLENBQUMsTUFBRCxDQUFOLENBQVYsR0FBNEIsR0FBekM7QUFDQSxRQUFJSyxPQUFPLEdBQUdSLEdBQUcsQ0FBQ0csS0FBSixDQUFVLFNBQVYs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ZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQXhDLE9BQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0J3QixJQUFoQixDQUFxQjtBQUFFRSxXQUFLLEVBQUU7QUFBVCxLQUFyQjtBQUNEO0FBQ0YsQ0E1REQsRTs7Ozs7Ozs7Ozs7QUNGQSxtQyIsImZpbGUiOiJwYWdlcy9hcGkvY29tcGFyaXNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBxdWVyeSA9IHJlcS5xdWVyeTtcbiAgICBjb25zdCBkYXlzID0gcGFyc2VJbnQocXVlcnlbXCJkYXlzXCJdKTtcbiAgICBjb25zdCByYXRlID0gcGFyc2VGbG9hdChxdWVyeVtcInJhdGVcIl0pIC8gMTAwO1xuICAgIGxldCBjb21wYW55ID0gcmVxLnF1ZXJ5W1wiY29tcGFueVwiXTtcbiAgICBjb21wYW55ID0gY29tcGFueS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGNvbXBhbnl3aXRoaWRVUkwgPVxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExLWRhdGEvbWFzdGVyL0RhdGEvY29tcGFueXdpdGhpZC5qc29uXCI7XG4gICAgY29uc3QgZ3JzdG9ja2RldGFpbHNVUkwgPVxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExLWRhdGEvbWFzdGVyL0RhdGEvR1JTdG9ja1wiO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGNvbXBhbnl3aXRoaWRVUkwpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IGNvbXBhbnl3aXRoaWQgPSBzLmRhdGE7XG4gICAgICAgICAgY29uc3QgY29kZSA9IHBhcnNlSW50KGNvbXBhbnl3aXRoaWRbY29tcGFueV0pO1xuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KGdyc3RvY2tkZXRhaWxzVVJMICsgXCIvXCIgKyBcImdyXCIgKyBjb2RlICsgXCIuY3N2XCIpXG4gICAgICAgICAgICAudGhlbigodCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIGxldCBudW1zID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgc3RvY2tkZXRhaWxzID0gW107XG4gICAgICAgICAgICAgICAgbGV0IHJvd3MgPSB0LmRhdGEuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gcm93c1swXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgY3BnciA9IGhlYWRlci5pbmRleE9mKFwiQ2xvc2UgUHJpY2UgR1JcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgYXZhaWxkYXlzID0gTWF0aC5taW4ocm93cy5sZW5ndGgsIGRheXMpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXZhaWxkYXlzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgICAgICAgICAgICBjb25zdCBjb2xzID0gcm93LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjb2xzW2NwZ3JdID4gcmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBudW1zID0gbnVtcyArIDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgY29tcGFueTogY29tcGFueSxcbiAgICAgICAgICAgICAgICAgIG51bWJlck9mRGF5czogbnVtcyxcbiAgICAgICAgICAgICAgICAgIHBlcmNlbnRPZkRheXM6ICgobnVtcyAvIGRheXMpICogMTAwKS50b0ZpeGVkKDMpLFxuICAgICAgICAgICAgICAgICAgdG90YWxOdW1iZXJPZkRheXM6IGRheXMsXG4gICAgICAgICAgICAgICAgICByYXRlOiByYXRlICogMTAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVzLnNlbmQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=