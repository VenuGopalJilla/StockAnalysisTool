(function() {
var exports = {};
exports.id = "pages/api/comparision";
exports.ids = ["pages/api/comparision"];
exports.modules = {

/***/ "./pages/api/comparision.js":
/*!**********************************!*\
  !*** ./pages/api/comparision.js ***!
  \**********************************/
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
    const companywithidURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/companywithid.json";
    const grstockdetailsURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/GRStock";
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/comparision.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvY29tcGFyaXNpb24uanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiYXhpb3NcIiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJuZXh0IiwicXVlcnkiLCJkYXlzIiwicGFyc2VJbnQiLCJyYXRlIiwicGFyc2VGbG9hdCIsImNvbXBhbnkiLCJ0b1VwcGVyQ2FzZSIsImNvbXBhbnl3aXRoaWRVUkwiLCJncnN0b2NrZGV0YWlsc1VSTCIsImdldCIsInRoZW4iLCJzIiwic3RhdHVzIiwiY29tcGFueXdpdGhpZCIsImRhdGEiLCJjb2RlIiwidCIsIm51bXMiLCJzdG9ja2RldGFpbHMiLCJyb3dzIiwic3BsaXQiLCJoZWFkZXIiLCJjcGdyIiwiaW5kZXhPZiIsImF2YWlsZGF5cyIsIk1hdGgiLCJtaW4iLCJsZW5ndGgiLCJpIiwicm93IiwiY29scyIsInJlc3BvbnNlIiwibnVtYmVyT2ZEYXlzIiwicGVyY2VudE9mRGF5cyIsInRvRml4ZWQiLCJ0b3RhbE51bWJlck9mRGF5cyIsInNlbmQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQUQsQ0FBckI7O0FBRUEsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUN2QyxNQUFJO0FBQ0YsVUFBTUMsS0FBSyxHQUFHSCxHQUFHLENBQUNHLEtBQWxCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNGLEtBQUssQ0FBQyxNQUFELENBQU4sQ0FBckI7QUFDQSxVQUFNRyxJQUFJLEdBQUdDLFVBQVUsQ0FBQ0osS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUFWLEdBQTRCLEdBQXpDO0FBQ0EsUUFBSUssT0FBTyxHQUFHUixHQUFHLENBQUNHLEtBQUosQ0FBVSxTQUFW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Q2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0F4QyxPQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCd0IsSUFBaEIsQ0FBcUI7QUFBRUUsV0FBSyxFQUFFO0FBQVQsS0FBckI7QUFDRDtBQUNGLENBNURELEU7Ozs7Ozs7Ozs7O0FDRkEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL2NvbXBhcmlzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gcmVxLnF1ZXJ5O1xuICAgIGNvbnN0IGRheXMgPSBwYXJzZUludChxdWVyeVtcImRheXNcIl0pO1xuICAgIGNvbnN0IHJhdGUgPSBwYXJzZUZsb2F0KHF1ZXJ5W1wicmF0ZVwiXSkgLyAxMDA7XG4gICAgbGV0IGNvbXBhbnkgPSByZXEucXVlcnlbXCJjb21wYW55XCJdO1xuICAgIGNvbXBhbnkgPSBjb21wYW55LnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgY29tcGFueXdpdGhpZFVSTCA9XG4gICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWlrcjc4OS9zdG9jay1hbmFseXNpcy10b29sLTEwMTEvbWFzdGVyL0RhdGEvY29tcGFueXdpdGhpZC5qc29uXCI7XG4gICAgY29uc3QgZ3JzdG9ja2RldGFpbHNVUkwgPVxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExL21hc3Rlci9EYXRhL0dSU3RvY2tcIjtcbiAgICBheGlvc1xuICAgICAgLmdldChjb21wYW55d2l0aGlkVVJMKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBjb21wYW55d2l0aGlkID0gcy5kYXRhO1xuICAgICAgICAgIGNvbnN0IGNvZGUgPSBwYXJzZUludChjb21wYW55d2l0aGlkW2NvbXBhbnldKTtcbiAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgLmdldChncnN0b2NrZGV0YWlsc1VSTCArIFwiL1wiICsgXCJnclwiICsgY29kZSArIFwiLmNzdlwiKVxuICAgICAgICAgICAgLnRoZW4oKHQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbnVtcyA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IHN0b2NrZGV0YWlscyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCByb3dzID0gdC5kYXRhLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHJvd3NbMF0uc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNwZ3IgPSBoZWFkZXIuaW5kZXhPZihcIkNsb3NlIFByaWNlIEdSXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF2YWlsZGF5cyA9IE1hdGgubWluKHJvd3MubGVuZ3RoLCBkYXlzKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGF2YWlsZGF5czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgICAgICAgICAgICAgICAgY29uc3QgY29scyA9IHJvdy5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICBpZiAoY29sc1tjcGdyXSA+IHJhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtcyA9IG51bXMgKyAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICAgIGNvbXBhbnk6IGNvbXBhbnksXG4gICAgICAgICAgICAgICAgICBudW1iZXJPZkRheXM6IG51bXMsXG4gICAgICAgICAgICAgICAgICBwZXJjZW50T2ZEYXlzOiAoKG51bXMgLyBkYXlzKSAqIDEwMCkudG9GaXhlZCgzKSxcbiAgICAgICAgICAgICAgICAgIHRvdGFsTnVtYmVyT2ZEYXlzOiBkYXlzLFxuICAgICAgICAgICAgICAgICAgcmF0ZTogcmF0ZSAqIDEwMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlcy5zZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICAgICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9