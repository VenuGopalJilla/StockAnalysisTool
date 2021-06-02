(function() {
var exports = {};
exports.id = 7149;
exports.ids = [7149];
exports.modules = {

/***/ 9408:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(2376);

/* harmony default export */ __webpack_exports__["default"] = ((req, res, next) => {
  try {
    const sectorsURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/sectors.json";
    axios.get(sectorsURL).then(s => {
      if (s.status === 200) {
        res.send(s.data);
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
var __webpack_exports__ = (__webpack_exec__(9408));
module.exports = __webpack_exports__;

})();