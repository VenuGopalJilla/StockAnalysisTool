(function() {
var exports = {};
exports.id = "pages/api/simulationtop";
exports.ids = ["pages/api/simulationtop"];
exports.modules = {

/***/ "./pages/api/simulationtop.js":
/*!************************************!*\
  !*** ./pages/api/simulationtop.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(/*! axios */ "axios");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res, next) => {
  try {
    console.log("simulationtop"); // const topurl =
    //   "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/Simulation/top_seldays.csv";
    // const topurl =
    // "https://raw.githubusercontent.com/saikr789/stock-index-risk/master/Data/Simulation/top_seldays.csv";

    const topurl = "https://raw.githubusercontent.com/VenuGopalJilla/StockAnalysisTool/main/Data/SP500_simulation_results/top_seldays_Results.csv";
    const days = req.query["days"];
    console.log(days);
    axios.get(topurl.replace("sel", days)).then(s => {
      if (s.status === 200) {
        console.log(s);
        let response = [];
        let rows = s.data.split("\n");
        const header = rows[0].split(",");

        for (let i = 1; i < rows.length; i++) {
          const data = rows[i].split(",");
          response.push({
            company: data[0],
            average_return_percent: data[1]
          });
        }

        res.send(response);
      } else {
        res.status(404).send({
          error: "error"
        });
      }
    }).catch(e => {
      res.status(404).send({
        error: "error"
      });
      console.log(e);
    });
  } catch (error) {
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/simulationtop.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvc2ltdWxhdGlvbnRvcC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInJlcSIsInJlcyIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwidG9wdXJsIiwiZGF5cyIsInF1ZXJ5IiwiZ2V0IiwicmVwbGFjZSIsInRoZW4iLCJzIiwic3RhdHVzIiwicmVzcG9uc2UiLCJyb3dzIiwiZGF0YSIsInNwbGl0IiwiaGVhZGVyIiwiaSIsImxlbmd0aCIsInB1c2giLCJjb21wYW55IiwiYXZlcmFnZV9yZXR1cm5fcGVyY2VudCIsInNlbmQiLCJlcnJvciIsImNhdGNoIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQUQsQ0FBckI7O0FBQ0EsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUN2QyxNQUFJO0FBQ0ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFERSxDQUVGO0FBQ0E7QUFDQTtBQUNFOztBQUNGLFVBQU1DLE1BQU0sR0FDViwrSEFERjtBQUVBLFVBQU1DLElBQUksR0FBR04sR0FBRyxDQUFDTyxLQUFKLENBQVUsTUFBVixDQUFiO0FBQ0FKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaO0FBQ0FSLFNBQUssQ0FDRlUsR0FESCxDQUNPSCxNQUFNLENBQUNJLE9BQVAsQ0FBZSxLQUFmLEVBQXNCSCxJQUF0QixDQURQLEVBRUdJLElBRkgsQ0FFU0MsQ0FBRCxJQUFPO0FBQ1gsVUFBSUEsQ0FBQyxDQUFDQyxNQUFGLEtBQWEsR0FBakIsRUFBc0I7QUFDcEJULGVBQU8sQ0FBQ0MsR0FBUixDQUFZTyxDQUFaO0FBQ0EsWUFBSUUsUUFBUSxHQUFHLEVBQWY7QUFDQSxZQUFJQyxJQUFJLEdBQUdILENBQUMsQ0FBQ0ksSUFBRixDQUFPQyxLQUFQLENBQWEsSUFBYixDQUFYO0FBQ0EsY0FBTUMsTUFBTSxHQUFHSCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFFLEtBQVIsQ0FBYyxHQUFkLENBQWY7O0FBQ0EsYUFBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixJQUFJLENBQUNLLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLGdCQUFNSCxJQUFJLEdBQUdELElBQUksQ0FBQ0ksQ0FBRCxDQUFKLENBQVFGLEtBQVIsQ0FBYyxHQUFkLENBQWI7QUFDQUgsa0JBQVEsQ0FBQ08sSUFBVCxDQUFjO0FBQ1pDLG1CQUFPLEVBQUVOLElBQUksQ0FBQyxDQUFELENBREQ7QUFFWk8sa0NBQXNCLEVBQUVQLElBQUksQ0FBQyxDQUFEO0FBRmhCLFdBQWQ7QUFJRDs7QUFDRGQsV0FBRyxDQUFDc0IsSUFBSixDQUFTVixRQUFUO0FBQ0QsT0FiRCxNQWFPO0FBQ0xaLFdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JXLElBQWhCLENBQXFCO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQXJCO0FBQ0Q7QUFDRixLQW5CSCxFQW9CR0MsS0FwQkgsQ0FvQlVDLENBQUQsSUFBTztBQUNaekIsU0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQlcsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBckI7QUFDQXJCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZc0IsQ0FBWjtBQUNELEtBdkJIO0FBd0JELEdBbENELENBa0NFLE9BQU9GLEtBQVAsRUFBYztBQUNkdkIsT0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQlcsSUFBaEIsQ0FBcUI7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBckI7QUFDRDtBQUNGLENBdENELEU7Ozs7Ozs7Ozs7O0FDREEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL3NpbXVsYXRpb250b3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwic2ltdWxhdGlvbnRvcFwiKTtcbiAgICAvLyBjb25zdCB0b3B1cmwgPVxuICAgIC8vICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExL21hc3Rlci9EYXRhL1NpbXVsYXRpb24vdG9wX3NlbGRheXMuY3N2XCI7XG4gICAgLy8gY29uc3QgdG9wdXJsID1cbiAgICAgIC8vIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWluZGV4LXJpc2svbWFzdGVyL0RhdGEvU2ltdWxhdGlvbi90b3Bfc2VsZGF5cy5jc3ZcIjtcbiAgICBjb25zdCB0b3B1cmwgPVxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVmVudUdvcGFsSmlsbGEvU3RvY2tBbmFseXNpc1Rvb2wvbWFpbi9EYXRhL1NQNTAwX3NpbXVsYXRpb25fcmVzdWx0cy90b3Bfc2VsZGF5c19SZXN1bHRzLmNzdlwiO1xuICAgIGNvbnN0IGRheXMgPSByZXEucXVlcnlbXCJkYXlzXCJdO1xuICAgIGNvbnNvbGUubG9nKGRheXMpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KHRvcHVybC5yZXBsYWNlKFwic2VsXCIsIGRheXMpKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzKTtcbiAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBbXTtcbiAgICAgICAgICBsZXQgcm93cyA9IHMuZGF0YS5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICBjb25zdCBoZWFkZXIgPSByb3dzWzBdLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByb3dzW2ldLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIHJlc3BvbnNlLnB1c2goe1xuICAgICAgICAgICAgICBjb21wYW55OiBkYXRhWzBdLFxuICAgICAgICAgICAgICBhdmVyYWdlX3JldHVybl9wZXJjZW50OiBkYXRhWzFdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlcy5zZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9