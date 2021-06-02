(function() {
var exports = {};
exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 7665:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(2376);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res, next) => {
  try {
    console.log("simulationdetails");
    const topurl = "https://raw.githubusercontent.com/saikr789/stock-index-risk/master/Data/Simulation/top_seldays.csv";
    const days = req.query["days"];
    console.log(days);
    axios.get(topurl.replace("seldays", days)).then(s => {
      if (s.status === 200) {
        let response = [];
        let rows = s.data.split("\n");
        const header = rows[0].split(",");

        for (let i = 1; i < rows.length; i++) {
          const data = rows[i].split(",", 2);
          const data1 = rows[i];
          console.log(data1);

          if (data[0] === req.query["company"]) {
            response.push({
              company: data[0],
              average_return_percent: data[1],
              inv_details: data1
            });
          }
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
var __webpack_exports__ = (__webpack_exec__(7665));
module.exports = __webpack_exports__;

})();