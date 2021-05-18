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
    const companydetailsURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/companies.json";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvY29tcGFueWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiYXhpb3NcIiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY29tcGFueSIsInF1ZXJ5IiwiY29tcGFueWRldGFpbHNVUkwiLCJnZXQiLCJ0aGVuIiwicyIsInN0YXR1cyIsImNvbXBhbmllcyIsImRhdGEiLCJ1bmRlZmluZWQiLCJzZW5kIiwidG9VcHBlckNhc2UiLCJlcnJvciIsImNhdGNoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQUQsQ0FBckI7O0FBQ0EsK0RBQWUsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDakMsTUFBSTtBQUNGLFFBQUlDLE9BQU8sR0FBR0gsR0FBRyxDQUFDSSxLQUFKLENBQVUsU0FBVixDQUFkO0FBQ0EsVUFBTUMsaUJBQWlCLEdBQ3JCLGdHQURGO0FBR0FQLFNBQUssQ0FDRlEsR0FESCxDQUNPRCxpQkFEUCxFQUVHRSxJQUZILENBRVNDLENBQUQsSUFBTztBQUNYLFVBQUlBLENBQUMsQ0FBQ0MsTUFBRixLQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLGNBQU1DLFNBQVMsR0FBR0YsQ0FBQyxDQUFDRyxJQUFwQjs7QUFDQSxZQUFJUixPQUFPLEtBQUtTLFNBQWhCLEVBQTJCO0FBQ3pCWCxhQUFHLENBQUNZLElBQUosQ0FBU0gsU0FBVDtBQUNELFNBRkQsTUFFTztBQUNMUCxpQkFBTyxHQUFHQSxPQUFPLENBQUNXLFdBQVIsRUFBVjtBQUNBYixhQUFHLENBQUNZLElBQUosQ0FBU0gsU0FBUyxDQUFDUCxPQUFELENBQWxCO0FBQ0Q7QUFDRixPQVJELE1BUU87QUFDTEYsV0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkksSUFBaEIsQ0FBcUI7QUFBRUUsZUFBSyxFQUFFO0FBQVQsU0FBckI7QUFDRDtBQUNGLEtBZEgsRUFlR0MsS0FmSCxDQWVVRCxLQUFELElBQVc7QUFDaEJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0FkLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JJLElBQWhCLENBQXFCO0FBQUVFLGFBQUssRUFBRTtBQUFULE9BQXJCO0FBQ0QsS0FsQkg7QUFtQkQsR0F4QkQsQ0F3QkUsT0FBT0EsS0FBUCxFQUFjO0FBQ2RFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0FkLE9BQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JJLElBQWhCLENBQXFCO0FBQUVFLFdBQUssRUFBRTtBQUFULEtBQXJCO0FBQ0Q7QUFDRixDQTdCRCxFOzs7Ozs7Ozs7OztBQ0RBLG1DIiwiZmlsZSI6InBhZ2VzL2FwaS9jb21wYW55ZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IGNvbXBhbnkgPSByZXEucXVlcnlbXCJjb21wYW55XCJdO1xuICAgIGNvbnN0IGNvbXBhbnlkZXRhaWxzVVJMID1cbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS9tYXN0ZXIvRGF0YS9jb21wYW5pZXMuanNvblwiO1xuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoY29tcGFueWRldGFpbHNVUkwpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IGNvbXBhbmllcyA9IHMuZGF0YTtcbiAgICAgICAgICBpZiAoY29tcGFueSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXMuc2VuZChjb21wYW5pZXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wYW55ID0gY29tcGFueS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgcmVzLnNlbmQoY29tcGFuaWVzW2NvbXBhbnldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBlcnJvcjogXCJlcnJvclwiIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgZXJyb3I6IFwiZXJyb3JcIiB9KTtcbiAgICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IGVycm9yOiBcImVycm9yXCIgfSk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==