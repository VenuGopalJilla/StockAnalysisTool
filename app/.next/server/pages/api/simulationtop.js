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
    // "https://raw.githubusercontent.com/saikr789/stock-index-risk/master/Data/SimulationResult/top_seldays.csv";
    // const topurl =
    // "https://raw.githubusercontent.com/VenuGopalJilla/StockAnalysisTool/main/Data/SP500_simulation_results/top_seldays_Results.csv";

    const topurl = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/Top/buy_seldays.csv";
    const days = req.query["days"];
    axios.get(topurl.replace("seldays", days)).then(s => {
      if (s.status === 200) {
        let response = [];
        let rows = s.data.split("\n");
        const header = rows[0].split(",");

        for (let i = 1; i < rows.length; i++) {
          const data = rows[i].split(",");

          if (data.length < 3) {
            continue;
          }

          response.push({
            security_id: data[0],
            company: data[1],
            actual_average_return_percent: data[2],
            minimum_prediction_range: data[3],
            maximum_prediction_range: data[4]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvc2ltdWxhdGlvbnRvcC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInJlcSIsInJlcyIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwidG9wdXJsIiwiZGF5cyIsInF1ZXJ5IiwiZ2V0IiwicmVwbGFjZSIsInRoZW4iLCJzIiwic3RhdHVzIiwicmVzcG9uc2UiLCJyb3dzIiwiZGF0YSIsInNwbGl0IiwiaGVhZGVyIiwiaSIsImxlbmd0aCIsInB1c2giLCJzZWN1cml0eV9pZCIsImNvbXBhbnkiLCJhY3R1YWxfYXZlcmFnZV9yZXR1cm5fcGVyY2VudCIsIm1pbmltdW1fcHJlZGljdGlvbl9yYW5nZSIsIm1heGltdW1fcHJlZGljdGlvbl9yYW5nZSIsInNlbmQiLCJlcnJvciIsImNhdGNoIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQUQsQ0FBckI7O0FBQ0EsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUN2QyxNQUFJO0FBQ0ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFERSxDQUVGO0FBQ0E7QUFDQTtBQUNFO0FBQ0Y7QUFDRTs7QUFDRixVQUFNQyxNQUFNLEdBQ1YsMEdBREY7QUFHQSxVQUFNQyxJQUFJLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSixDQUFVLE1BQVYsQ0FBYjtBQUNBVCxTQUFLLENBQ0ZVLEdBREgsQ0FDT0gsTUFBTSxDQUFDSSxPQUFQLENBQWUsU0FBZixFQUEwQkgsSUFBMUIsQ0FEUCxFQUVHSSxJQUZILENBRVNDLENBQUQsSUFBTztBQUNYLFVBQUlBLENBQUMsQ0FBQ0MsTUFBRixLQUFhLEdBQWpCLEVBQXNCO0FBRXBCLFlBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsWUFBSUMsSUFBSSxHQUFHSCxDQUFDLENBQUNJLElBQUYsQ0FBT0MsS0FBUCxDQUFhLElBQWIsQ0FBWDtBQUNBLGNBQU1DLE1BQU0sR0FBR0gsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRRSxLQUFSLENBQWMsR0FBZCxDQUFmOztBQUNBLGFBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osSUFBSSxDQUFDSyxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQyxnQkFBTUgsSUFBSSxHQUFHRCxJQUFJLENBQUNJLENBQUQsQ0FBSixDQUFRRixLQUFSLENBQWMsR0FBZCxDQUFiOztBQUNBLGNBQUlELElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CO0FBQ0Q7O0FBQ0ROLGtCQUFRLENBQUNPLElBQVQsQ0FBYztBQUNaQyx1QkFBVyxFQUFFTixJQUFJLENBQUMsQ0FBRCxDQURMO0FBRVpPLG1CQUFPLEVBQUdQLElBQUksQ0FBQyxDQUFELENBRkY7QUFHWlEseUNBQTZCLEVBQUVSLElBQUksQ0FBQyxDQUFELENBSHZCO0FBSVpTLG9DQUF3QixFQUFHVCxJQUFJLENBQUMsQ0FBRCxDQUpuQjtBQUtaVSxvQ0FBd0IsRUFBR1YsSUFBSSxDQUFDLENBQUQ7QUFMbkIsV0FBZDtBQU9EOztBQUNEZCxXQUFHLENBQUN5QixJQUFKLENBQVNiLFFBQVQ7QUFDRCxPQW5CRCxNQW1CTztBQUNMWixXQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCYyxJQUFoQixDQUFxQjtBQUFFQyxlQUFLLEVBQUU7QUFBVCxTQUFyQjtBQUNEO0FBQ0YsS0F6QkgsRUEwQkdDLEtBMUJILENBMEJVQyxDQUFELElBQU87QUFDWjVCLFNBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JjLElBQWhCLENBQXFCO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQXJCO0FBQ0F4QixhQUFPLENBQUNDLEdBQVIsQ0FBWXlCLENBQVo7QUFDRCxLQTdCSDtBQThCRCxHQTFDRCxDQTBDRSxPQUFPRixLQUFQLEVBQWM7QUFDZDFCLE9BQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JjLElBQWhCLENBQXFCO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQXJCO0FBQ0Q7QUFDRixDQTlDRCxFOzs7Ozs7Ozs7OztBQ0RBLG1DIiwiZmlsZSI6InBhZ2VzL2FwaS9zaW11bGF0aW9udG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhcInNpbXVsYXRpb250b3BcIik7XG4gICAgLy8gY29uc3QgdG9wdXJsID1cbiAgICAvLyAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS9tYXN0ZXIvRGF0YS9TaW11bGF0aW9uL3RvcF9zZWxkYXlzLmNzdlwiO1xuICAgIC8vIGNvbnN0IHRvcHVybCA9XG4gICAgICAvLyBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWlrcjc4OS9zdG9jay1pbmRleC1yaXNrL21hc3Rlci9EYXRhL1NpbXVsYXRpb25SZXN1bHQvdG9wX3NlbGRheXMuY3N2XCI7XG4gICAgLy8gY29uc3QgdG9wdXJsID1cbiAgICAgIC8vIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1ZlbnVHb3BhbEppbGxhL1N0b2NrQW5hbHlzaXNUb29sL21haW4vRGF0YS9TUDUwMF9zaW11bGF0aW9uX3Jlc3VsdHMvdG9wX3NlbGRheXNfUmVzdWx0cy5jc3ZcIjtcbiAgICBjb25zdCB0b3B1cmwgPSBcbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS1kYXRhL21hc3Rlci9EYXRhL1RvcC9idXlfc2VsZGF5cy5jc3ZcIjtcblxuICAgIGNvbnN0IGRheXMgPSByZXEucXVlcnlbXCJkYXlzXCJdO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KHRvcHVybC5yZXBsYWNlKFwic2VsZGF5c1wiLCBkYXlzKSlcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0gW107XG4gICAgICAgICAgbGV0IHJvd3MgPSBzLmRhdGEuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgY29uc3QgaGVhZGVyID0gcm93c1swXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJvd3NbaV0uc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3BvbnNlLnB1c2goe1xuICAgICAgICAgICAgICBzZWN1cml0eV9pZDogZGF0YVswXSxcbiAgICAgICAgICAgICAgY29tcGFueSA6IGRhdGFbMV0sXG4gICAgICAgICAgICAgIGFjdHVhbF9hdmVyYWdlX3JldHVybl9wZXJjZW50OiBkYXRhWzJdLFxuICAgICAgICAgICAgICBtaW5pbXVtX3ByZWRpY3Rpb25fcmFuZ2UgOiBkYXRhWzNdLFxuICAgICAgICAgICAgICBtYXhpbXVtX3ByZWRpY3Rpb25fcmFuZ2UgOiBkYXRhWzRdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlcy5zZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9