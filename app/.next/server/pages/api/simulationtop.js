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

    const topurl = "https://raw.githubusercontent.com/saikr789/stock-index-risk/master/Data/SimulationResult/top_seldays.csv"; // const topurl =
    // "https://raw.githubusercontent.com/VenuGopalJilla/StockAnalysisTool/main/Data/SP500_simulation_results/top_seldays_Results.csv";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvc2ltdWxhdGlvbnRvcC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsInJlcSIsInJlcyIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwidG9wdXJsIiwiZGF5cyIsInF1ZXJ5IiwiZ2V0IiwicmVwbGFjZSIsInRoZW4iLCJzIiwic3RhdHVzIiwicmVzcG9uc2UiLCJyb3dzIiwiZGF0YSIsInNwbGl0IiwiaGVhZGVyIiwiaSIsImxlbmd0aCIsInB1c2giLCJjb21wYW55Iiwic2VjdXJpdHlfaWQiLCJhdmVyYWdlX3JldHVybl9wZXJjZW50Iiwic2VuZCIsImVycm9yIiwiY2F0Y2giLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFyQjs7QUFDQSwrREFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEtBQTBCO0FBQ3ZDLE1BQUk7QUFDRkMsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQURFLENBRUY7QUFDQTs7QUFDQSxVQUFNQyxNQUFNLEdBQ1YsMEdBREYsQ0FKRSxDQU1GO0FBQ0U7O0FBQ0YsVUFBTUMsSUFBSSxHQUFHTixHQUFHLENBQUNPLEtBQUosQ0FBVSxNQUFWLENBQWI7QUFDQVQsU0FBSyxDQUNGVSxHQURILENBQ09ILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLFNBQWYsRUFBMEJILElBQTFCLENBRFAsRUFFR0ksSUFGSCxDQUVTQyxDQUFELElBQU87QUFDWCxVQUFJQSxDQUFDLENBQUNDLE1BQUYsS0FBYSxHQUFqQixFQUFzQjtBQUVwQixZQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBLFlBQUlDLElBQUksR0FBR0gsQ0FBQyxDQUFDSSxJQUFGLENBQU9DLEtBQVAsQ0FBYSxJQUFiLENBQVg7QUFDQSxjQUFNQyxNQUFNLEdBQUdILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUUsS0FBUixDQUFjLEdBQWQsQ0FBZjs7QUFDQSxhQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLElBQUksQ0FBQ0ssTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDcEMsZ0JBQU1ILElBQUksR0FBR0QsSUFBSSxDQUFDSSxDQUFELENBQUosQ0FBUUYsS0FBUixDQUFjLEdBQWQsQ0FBYjs7QUFDQSxjQUFJRCxJQUFJLENBQUNJLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQjtBQUNEOztBQUNETixrQkFBUSxDQUFDTyxJQUFULENBQWM7QUFDWkMsbUJBQU8sRUFBRU4sSUFBSSxDQUFDLENBQUQsQ0FERDtBQUVaTyx1QkFBVyxFQUFFUCxJQUFJLENBQUMsQ0FBRCxDQUZMO0FBR1pRLGtDQUFzQixFQUFFUixJQUFJLENBQUMsQ0FBRDtBQUhoQixXQUFkO0FBS0Q7O0FBQ0RkLFdBQUcsQ0FBQ3VCLElBQUosQ0FBU1gsUUFBVDtBQUNELE9BakJELE1BaUJPO0FBQ0xaLFdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JZLElBQWhCLENBQXFCO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQXJCO0FBQ0Q7QUFDRixLQXZCSCxFQXdCR0MsS0F4QkgsQ0F3QlVDLENBQUQsSUFBTztBQUNaMUIsU0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQlksSUFBaEIsQ0FBcUI7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBckI7QUFDQXRCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZdUIsQ0FBWjtBQUNELEtBM0JIO0FBNEJELEdBckNELENBcUNFLE9BQU9GLEtBQVAsRUFBYztBQUNkeEIsT0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQlksSUFBaEIsQ0FBcUI7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBckI7QUFDRDtBQUNGLENBekNELEU7Ozs7Ozs7Ozs7O0FDREEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL3NpbXVsYXRpb250b3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwic2ltdWxhdGlvbnRvcFwiKTtcbiAgICAvLyBjb25zdCB0b3B1cmwgPVxuICAgIC8vICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExL21hc3Rlci9EYXRhL1NpbXVsYXRpb24vdG9wX3NlbGRheXMuY3N2XCI7XG4gICAgY29uc3QgdG9wdXJsID1cbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWluZGV4LXJpc2svbWFzdGVyL0RhdGEvU2ltdWxhdGlvblJlc3VsdC90b3Bfc2VsZGF5cy5jc3ZcIjtcbiAgICAvLyBjb25zdCB0b3B1cmwgPVxuICAgICAgLy8gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVmVudUdvcGFsSmlsbGEvU3RvY2tBbmFseXNpc1Rvb2wvbWFpbi9EYXRhL1NQNTAwX3NpbXVsYXRpb25fcmVzdWx0cy90b3Bfc2VsZGF5c19SZXN1bHRzLmNzdlwiO1xuICAgIGNvbnN0IGRheXMgPSByZXEucXVlcnlbXCJkYXlzXCJdO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KHRvcHVybC5yZXBsYWNlKFwic2VsZGF5c1wiLCBkYXlzKSlcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0gW107XG4gICAgICAgICAgbGV0IHJvd3MgPSBzLmRhdGEuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgY29uc3QgaGVhZGVyID0gcm93c1swXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJvd3NbaV0uc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3BvbnNlLnB1c2goe1xuICAgICAgICAgICAgICBjb21wYW55OiBkYXRhWzBdLFxuICAgICAgICAgICAgICBzZWN1cml0eV9pZDogZGF0YVsxXSxcbiAgICAgICAgICAgICAgYXZlcmFnZV9yZXR1cm5fcGVyY2VudDogZGF0YVsyXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXMuc2VuZChyZXNwb25zZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==