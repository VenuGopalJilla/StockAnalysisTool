(function() {
var exports = {};
exports.id = 3780;
exports.ids = [3780];
exports.modules = {

/***/ 3668:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const underscore = __webpack_require__(2164);

const axios = __webpack_require__(2376);

/* harmony default export */ __webpack_exports__["default"] = ((req, res, next) => {
  try {
    const sp500URL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/sp500.csv";
    axios.get(sp500URL).then(s => {
      if (s.status === 200) {
        let sp500details = [];
        let rows = s.data.split("\n");
        const header = rows[0].split(",");

        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          const cols = row.split(",");
          var result = cols.reduce(function (result, field, index) {
            result[header[index].replace(/(\r\n|\n|\r)/gm, "")] = field.replace(/(\r\n|\n|\r)/gm, "");
            return result;
          }, {});
          sp500details.push(result);
        }

        res.send(sp500details);
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

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 2164:
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
var __webpack_exports__ = (__webpack_exec__(3668));
module.exports = __webpack_exports__;

})();