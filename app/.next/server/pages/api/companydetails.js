(function() {
var exports = {};
exports.id = "pages/api/companydetails";
exports.ids = ["pages/api/companydetails"];
exports.modules = {

/***/ "./pages/api/companydetails.js":
/*!*************************************!*\
  !*** ./pages/api/companydetails.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const axios = __webpack_require__(/*! axios */ "axios");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/companydetails.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvY29tcGFueWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiYXhpb3NcIiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY29tcGFueSIsInF1ZXJ5IiwiY29tcGFueWRldGFpbHNVUkwiLCJnZXQiLCJ0aGVuIiwicyIsInN0YXR1cyIsImNvbXBhbmllcyIsImRhdGEiLCJ1bmRlZmluZWQiLCJzZW5kIiwidG9VcHBlckNhc2UiLCJlcnJvciIsImNhdGNoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQUQsQ0FBckI7O0FBQ0EsK0RBQWUsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDakMsTUFBSTtBQUNGLFFBQUlDLE9BQU8sR0FBR0gsR0FBRyxDQUFDSSxLQUFKLENBQVUsU0FBVixDQUFkO0FBQ0EsVUFBTUMsaUJBQWlCLEdBQ3JCLHFHQURGO0FBR0FQLFNBQUssQ0FDRlEsR0FESCxDQUNPRCxpQkFEUCxFQUVHRSxJQUZILENBRVNDLENBQUQsSUFBTztBQUNYLFVBQUlBLENBQUMsQ0FBQ0MsTUFBRixLQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLGNBQU1DLFNBQVMsR0FBR0YsQ0FBQyxDQUFDRyxJQUFwQjs7QUFDQSxZQUFJUixPQUFPLEtBQUtTLFNBQWhCLEVBQTJCO0FBQ3pCWCxhQUFHLENBQUNZLElBQUosQ0FBU0gsU0FBVDtBQUNELFNBRkQsTUFFTztBQUNMUCxpQkFBTyxHQUFHQSxPQUFPLENBQUNXLFdBQVIsRUFBVjtBQUNBYixhQUFHLENBQUNZLElBQUosQ0FBU0gsU0FBUyxDQUFDUCxPQUFELENBQWxCO0FBQ0Q7QUFDRixPQVJELE1BUU87QUFDTEYsV0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkksSUFBaEIsQ0FBcUI7QUFBRUUsZUFBSyxFQUFFO0FBQVQsU0FBckI7QUFDRDtBQUNGLEtBZEgsRUFlR0MsS0FmSCxDQWVVRCxLQUFELElBQVc7QUFDaEJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0FkLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JJLElBQWhCLENBQXFCO0FBQUVFLGFBQUssRUFBRTtBQUFULE9BQXJCO0FBQ0QsS0FsQkg7QUFtQkQsR0F4QkQsQ0F3QkUsT0FBT0EsS0FBUCxFQUFjO0FBQ2RFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0FkLE9BQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JJLElBQWhCLENBQXFCO0FBQUVFLFdBQUssRUFBRTtBQUFULEtBQXJCO0FBQ0Q7QUFDRixDQTdCRCxFOzs7Ozs7Ozs7OztBQ0RBLG1DIiwiZmlsZSI6InBhZ2VzL2FwaS9jb21wYW55ZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IGNvbXBhbnkgPSByZXEucXVlcnlbXCJjb21wYW55XCJdO1xuICAgIGNvbnN0IGNvbXBhbnlkZXRhaWxzVVJMID1cbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS1kYXRhL21hc3Rlci9EYXRhL2NvbXBhbmllcy5qc29uXCI7XG5cbiAgICBheGlvc1xuICAgICAgLmdldChjb21wYW55ZGV0YWlsc1VSTClcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc3QgY29tcGFuaWVzID0gcy5kYXRhO1xuICAgICAgICAgIGlmIChjb21wYW55ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlcy5zZW5kKGNvbXBhbmllcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBhbnkgPSBjb21wYW55LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXMuc2VuZChjb21wYW5pZXNbY29tcGFueV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICAgICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9