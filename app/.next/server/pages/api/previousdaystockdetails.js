(function() {
var exports = {};
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 3357:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const underscore = __webpack_require__(2164);

const axios = __webpack_require__(2376);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res, next) => {
  try {
    const companywithidURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/companywithid.json";
    const previousdaystockdetailsURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/Stock/previousdaystockdetails.csv";
    let company = req.query["company"];

    if (company === undefined) {
      axios.get(previousdaystockdetailsURL).then(t => {
        if (t.status === 200) {
          let previousdaystockdetails = [];
          let rows = t.data.split("\n");
          const header = rows[0].split(",");

          for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const cols = row.split(",");
            var result = cols.reduce(function (result, field, index) {
              result[header[index].replace(/(\r\n|\n|\r)/gm, "")] = field.replace(/(\r\n|\n|\r)/gm, "");
              return result;
            }, {});
            previousdaystockdetails.push(result);
          }

          res.send(previousdaystockdetails);
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
    } else {
      company = company.toUpperCase();
      axios.get(companywithidURL).then(s => {
        if (s.status === 200) {
          const companywithid = s.data;
          const code = parseInt(companywithid[company]);
          axios.get(previousdaystockdetailsURL).then(t => {
            if (t.status === 200) {
              let rows = t.data.split("\n");
              const header = rows[0].split(",");
              const codeindex = header.indexOf("Code");

              for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                const cols = row.split(",");

                if (parseInt(cols[codeindex]) === code) {
                  var result = cols.reduce(function (result, field, index) {
                    result[header[index].replace(/(\r\n|\n|\r)/gm, "")] = field.replace(/(\r\n|\n|\r)/gm, "");
                    return result;
                  }, {});
                  res.send(result);
                  break;
                }
              }
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
var __webpack_exports__ = (__webpack_exec__(3357));
module.exports = __webpack_exports__;

})();