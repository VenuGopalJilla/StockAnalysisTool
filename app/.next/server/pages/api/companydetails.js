(function() {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 4742:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(2376);

/* harmony default export */ __webpack_exports__["default"] = ((req, res, next) => {
  try {
    let company = req.query["company"];
    const companydetailsURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/companies.json";
    axios.get(companydetailsURL).then(s => {
      if (s.status === 200) {
        const companies = s.data;

        if (company === undefined) {
          res.send(companies);
        } else {
          company = company.toUpperCase();
          res.send(companies[company]);
        }
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(4742));
module.exports = __webpack_exports__;

})();