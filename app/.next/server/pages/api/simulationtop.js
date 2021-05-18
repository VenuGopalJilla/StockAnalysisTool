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
            security_id: data[1],
            average_return_percent: data[2]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvc2ltdWxhdGlvbnRvcC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInJlcSIsInJlcyIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwidG9wdXJsIiwiZGF5cyIsInF1ZXJ5IiwiZ2V0IiwicmVwbGFjZSIsInRoZW4iLCJzIiwic3RhdHVzIiwicmVzcG9uc2UiLCJyb3dzIiwiZGF0YSIsInNwbGl0IiwiaGVhZGVyIiwiaSIsImxlbmd0aCIsInB1c2giLCJjb21wYW55Iiwic2VjdXJpdHlfaWQiLCJhdmVyYWdlX3JldHVybl9wZXJjZW50Iiwic2VuZCIsImVycm9yIiwiY2F0Y2giLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFyQjs7QUFDQSwrREFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ3ZDLE1BQUk7QUFDRkMsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQURFLENBRUY7QUFDQTtBQUNBO0FBQ0U7O0FBQ0YsVUFBTUMsTUFBTSxHQUNWLCtIQURGO0FBRUEsVUFBTUMsSUFBSSxHQUFHTixHQUFHLENBQUNPLEtBQUosQ0FBVSxNQUFWLENBQWI7QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVlFLElBQVo7QUFDQVIsU0FBSyxDQUNGVSxHQURILENBQ09ILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLEtBQWYsRUFBc0JILElBQXRCLENBRFAsRUFFR0ksSUFGSCxDQUVTQyxDQUFELElBQU87QUFDWCxVQUFJQSxDQUFDLENBQUNDLE1BQUYsS0FBYSxHQUFqQixFQUFzQjtBQUNwQlQsZUFBTyxDQUFDQyxHQUFSLENBQVlPLENBQVo7QUFDQSxZQUFJRSxRQUFRLEdBQUcsRUFBZjtBQUNBLFlBQUlDLElBQUksR0FBR0gsQ0FBQyxDQUFDSSxJQUFGLENBQU9DLEtBQVAsQ0FBYSxJQUFiLENBQVg7QUFDQSxjQUFNQyxNQUFNLEdBQUdILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUUsS0FBUixDQUFjLEdBQWQsQ0FBZjs7QUFDQSxhQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLElBQUksQ0FBQ0ssTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDcEMsZ0JBQU1ILElBQUksR0FBR0QsSUFBSSxDQUFDSSxDQUFELENBQUosQ0FBUUYsS0FBUixDQUFjLEdBQWQsQ0FBYjtBQUNBSCxrQkFBUSxDQUFDTyxJQUFULENBQWM7QUFDWkMsbUJBQU8sRUFBRU4sSUFBSSxDQUFDLENBQUQsQ0FERDtBQUVaTyx1QkFBVyxFQUFFUCxJQUFJLENBQUMsQ0FBRCxDQUZMO0FBR1pRLGtDQUFzQixFQUFFUixJQUFJLENBQUMsQ0FBRDtBQUhoQixXQUFkO0FBS0Q7O0FBQ0RkLFdBQUcsQ0FBQ3VCLElBQUosQ0FBU1gsUUFBVDtBQUNELE9BZEQsTUFjTztBQUNMWixXQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCWSxJQUFoQixDQUFxQjtBQUFFQyxlQUFLLEVBQUU7QUFBVCxTQUFyQjtBQUNEO0FBQ0YsS0FwQkgsRUFxQkdDLEtBckJILENBcUJVQyxDQUFELElBQU87QUFDWjFCLFNBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JZLElBQWhCLENBQXFCO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQXJCO0FBQ0F0QixhQUFPLENBQUNDLEdBQVIsQ0FBWXVCLENBQVo7QUFDRCxLQXhCSDtBQXlCRCxHQW5DRCxDQW1DRSxPQUFPRixLQUFQLEVBQWM7QUFDZHhCLE9BQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JZLElBQWhCLENBQXFCO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQXJCO0FBQ0Q7QUFDRixDQXZDRCxFOzs7Ozs7Ozs7OztBQ0RBLG1DIiwiZmlsZSI6InBhZ2VzL2FwaS9zaW11bGF0aW9udG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhcInNpbXVsYXRpb250b3BcIik7XG4gICAgLy8gY29uc3QgdG9wdXJsID1cbiAgICAvLyAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS9tYXN0ZXIvRGF0YS9TaW11bGF0aW9uL3RvcF9zZWxkYXlzLmNzdlwiO1xuICAgIC8vIGNvbnN0IHRvcHVybCA9XG4gICAgICAvLyBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWlrcjc4OS9zdG9jay1pbmRleC1yaXNrL21hc3Rlci9EYXRhL1NpbXVsYXRpb24vdG9wX3NlbGRheXMuY3N2XCI7XG4gICAgY29uc3QgdG9wdXJsID1cbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1ZlbnVHb3BhbEppbGxhL1N0b2NrQW5hbHlzaXNUb29sL21haW4vRGF0YS9TUDUwMF9zaW11bGF0aW9uX3Jlc3VsdHMvdG9wX3NlbGRheXNfUmVzdWx0cy5jc3ZcIjtcbiAgICBjb25zdCBkYXlzID0gcmVxLnF1ZXJ5W1wiZGF5c1wiXTtcbiAgICBjb25zb2xlLmxvZyhkYXlzKTtcbiAgICBheGlvc1xuICAgICAgLmdldCh0b3B1cmwucmVwbGFjZShcInNlbFwiLCBkYXlzKSlcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocyk7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0gW107XG4gICAgICAgICAgbGV0IHJvd3MgPSBzLmRhdGEuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgY29uc3QgaGVhZGVyID0gcm93c1swXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcm93c1tpXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICByZXNwb25zZS5wdXNoKHtcbiAgICAgICAgICAgICAgY29tcGFueTogZGF0YVswXSxcbiAgICAgICAgICAgICAgc2VjdXJpdHlfaWQ6IGRhdGFbMV0sXG4gICAgICAgICAgICAgIGF2ZXJhZ2VfcmV0dXJuX3BlcmNlbnQ6IGRhdGFbMl0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzLnNlbmQocmVzcG9uc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=