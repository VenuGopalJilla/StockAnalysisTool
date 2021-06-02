(function() {
var exports = {};
exports.id = 6115;
exports.ids = [6115];
exports.modules = {

/***/ 4809:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(2376);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res, next) => {
  try {
    let company = req.query["company"];

    if (company === undefined) {
      res.status(404).send({
        error: "error"
      });
    } else {
      company = company.toUpperCase();
      const companywithidURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/companywithid.json";
      const stockdetailsURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/Stock";
      axios.get(companywithidURL).then(s => {
        if (s.status === 200) {
          const companywithid = s.data;
          const code = parseInt(companywithid[company]);
          axios.get(stockdetailsURL + "/" + code + ".csv").then(t => {
            if (t.status === 200) {
              let stockdetails = [];
              let rows = t.data.split("\n");
              const header = rows[0].split(",");

              for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                const cols = row.split(",");
                var result = cols.reduce(function (result, field, index) {
                  result[header[index].replace(/(\r\n|\n|\r)/gm, "")] = field.replace(/(\r\n|\n|\r)/gm, "");
                  return result;
                }, {});
                stockdetails.push(result);
              }

              res.send(stockdetails);
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
var __webpack_exports__ = (__webpack_exec__(4809));
module.exports = __webpack_exports__;

})();