(function() {
var exports = {};
exports.id = 193;
exports.ids = [193];
exports.modules = {

/***/ 4137:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(2376);

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

/***/ 2376:
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
var __webpack_exports__ = (__webpack_exec__(4137));
module.exports = __webpack_exports__;

})();