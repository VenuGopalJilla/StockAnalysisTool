self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Components/CompanyDetails.jsx":
/*!*********************************************!*\
  !*** ./pages/Components/CompanyDetails.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Dashboard */ "./pages/Components/Dashboard.jsx");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);










var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\CompanyDetails.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var styles = function styles(theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  };
};

var CompanyDetails = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(CompanyDetails, _React$Component);

  var _super = _createSuper(CompanyDetails);

  function CompanyDetails(props) {
    var _this;

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, CompanyDetails);

    _this = _super.call(this, props);

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "componentDidMount", function () {
      console.log("CompanyDetails");
      var match = _this.props.match;
      var company = match.params.company;

      _this.setState({
        selectedCompany: company
      }, function () {
        _this.getCompanyDetails(_this.state.selectedCompany);
      });
    });

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "getCompanyDetails", /*#__PURE__*/function () {
      var _ref = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(company) {
        return C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_11___default().get("/api/companydetails?company=" + company).then(function (s) {
                  if (s.status === 200) {
                    var companyDetails = s.data;
                    axios__WEBPACK_IMPORTED_MODULE_11___default().get("/api/getsuggestions?company=" + company).then(function (t) {
                      if (t.status === 200) {
                        companyDetails = Object.assign(companyDetails, t.data);
                      }
                    })["catch"](function (e) {
                      console.log(e);
                    });

                    _this.setState({
                      companyDetails: companyDetails,
                      loading: false
                    }, function () {});
                  } else {
                    _this.setState({
                      companyDetails: [],
                      loading: false
                    }, function () {});
                  }
                });

              case 2:
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_11___default().get("/api/previousdaystockdetails?company=" + company).then(function (s) {
                  if (s.status === 200) {
                    _this.setState({
                      stockdetails: s.data,
                      loading: false
                    }, function () {});
                  } else {
                    _this.setState({
                      stockdetails: [],
                      loading: false
                    }, function () {});
                  }
                })["catch"](function (e) {
                  console.log(e);

                  _this.setState({
                    stockdetails: [],
                    loading: false
                  }, function () {});
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      companyDetails: [],
      companyCurrentDayStockDetails: [],
      selectedCompany: "",
      loading: true,
      stockkeys: ["Date", "Open Price", "High Price", "Low Price", "Close Price", "WAP", "No.of Shares", "No. of Trades", "Total Turnover (Rs.)", "% Deli. Qty to Traded Qty", "Spread High-Low", "Spread Close-Open"],
      stockdetails: []
    };
    return _this;
  }

  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(CompanyDetails, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_10___default().Fragment), {
        children: [this.state.selectedCompany !== "" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.Paper, {
            elevation: 3,
            style: {
              display: "flex",
              padding: "15px",
              margin: "15px",
              justifyContent: "center",
              backgroundColor: "#05386B",
              color: "#5CDB95"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.Typography, {
              variant: "subtitle1",
              children: this.state.selectedCompany
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this), this.state.loading === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_13__.default, {
            type: "ThreeDots",
            color: "#05386B",
            height: 80,
            width: 80
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.Grid, {
            container: true,
            children: Object.keys(this.state.companyDetails).map(function (key) {
              var impKeys = ["Open Price", "High prie", "Low Price", "Close Price"];

              if (_this2.state.companyDetails[key] === null) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 28
                }, _this2);
              }

              if (key === "suggest") {
                var res = "SUGGESTION " + " -- " + _this2.state.companyDetails[key].toUpperCase();

                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.Chip, {
                  color: "primary",
                  variant: "outlined",
                  label: res,
                  style: {
                    margin: "5px",
                    backgroundColor: "#05386B",
                    color: "#5CDB95"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 23
                }, _this2);
              } else {
                console.log(key);
                console.log(impKeys.includes(key));

                if (impKeys.includes(key)) {
                  var _res = key.toUpperCase() + " : " + _this2.state.companyDetails[key];

                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.Chip, {
                    color: "primary",
                    variant: "outlined",
                    label: _res,
                    style: {
                      margin: "5px",
                      backgroundColor: "#5CDB95",
                      color: "#05386B"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 25
                  }, _this2);
                } else {
                  var _res2 = key + " : " + _this2.state.companyDetails[key];

                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.Chip, {
                    color: "primary",
                    variant: "outlined",
                    label: _res2,
                    style: {
                      margin: "5px",
                      backgroundColor: "#5CDB95",
                      color: "#05386B"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 23
                  }, _this2);
                }
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), this.state.stockdetails.length !== 0 && this.state.stockkeys.map(function (key) {
          var res = key + " : " + _this2.state.stockdetails[key];
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.Chip, {
            color: "primary",
            variant: "outlined",
            label: res,
            style: {
              margin: "5px",
              backgroundColor: "#5CDB95",
              color: "#05386B"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 15
          }, _this2);
        }), this.state.selectedCompany !== "" && this.state.stockdetails.length !== 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_12__.default, {
          company: this.state.selectedCompany
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, this);
    }
  }]);

  return CompanyDetails;
}((react__WEBPACK_IMPORTED_MODULE_10___default().Component));

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.withStyles)(styles)(CompanyDetails));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYW55RGV0YWlscy5qc3giXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsInNwYWNpbmciLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwibWFyZ2luVG9wIiwiQ29tcGFueURldGFpbHMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaCIsImNvbXBhbnkiLCJwYXJhbXMiLCJzZXRTdGF0ZSIsInNlbGVjdGVkQ29tcGFueSIsImdldENvbXBhbnlEZXRhaWxzIiwic3RhdGUiLCJheGlvcyIsInRoZW4iLCJzIiwic3RhdHVzIiwiY29tcGFueURldGFpbHMiLCJkYXRhIiwidCIsIk9iamVjdCIsImFzc2lnbiIsImUiLCJsb2FkaW5nIiwic3RvY2tkZXRhaWxzIiwiY29tcGFueUN1cnJlbnREYXlTdG9ja0RldGFpbHMiLCJzdG9ja2tleXMiLCJkaXNwbGF5IiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJrZXlzIiwibWFwIiwia2V5IiwiaW1wS2V5cyIsInJlcyIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJSZWFjdCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxlQUFXLEVBQUU7QUFDWEMsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREc7QUFFWEMsY0FBUSxFQUFFO0FBRkMsS0FEWTtBQUt6QkMsZUFBVyxFQUFFO0FBQ1hDLGVBQVMsRUFBRU4sS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURBO0FBTFksR0FBWjtBQUFBLENBQWY7O0lBVU1JLGM7Ozs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLG9VQXlCQyxZQUFNO0FBQ3hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUR3QixVQUVoQkMsS0FGZ0IsR0FFTixNQUFLSCxLQUZDLENBRWhCRyxLQUZnQjtBQUd4QixVQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxPQUE3Qjs7QUFDQSxZQUFLRSxRQUFMLENBQWM7QUFBRUMsdUJBQWUsRUFBRUg7QUFBbkIsT0FBZCxFQUE0QyxZQUFNO0FBQ2hELGNBQUtJLGlCQUFMLENBQXVCLE1BQUtDLEtBQUwsQ0FBV0YsZUFBbEM7QUFDRCxPQUZEO0FBR0QsS0FoQ2tCOztBQUFBO0FBQUEsaVRBa0NDLGlCQUFPSCxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNaTSxpREFBQSxDQUFVLGlDQUFpQ04sT0FBM0MsRUFBb0RPLElBQXBELENBQXlELFVBQUNDLENBQUQsRUFBTztBQUNwRSxzQkFBSUEsQ0FBQyxDQUFDQyxNQUFGLEtBQWEsR0FBakIsRUFBc0I7QUFDcEIsd0JBQUlDLGNBQWMsR0FBR0YsQ0FBQyxDQUFDRyxJQUF2QjtBQUNBTCxxRUFBQSxDQUNLLGlDQUFpQ04sT0FEdEMsRUFFQ08sSUFGRCxDQUVNLFVBQUNLLENBQUQsRUFBTztBQUNYLDBCQUFJQSxDQUFDLENBQUNILE1BQUYsS0FBYSxHQUFqQixFQUFzQjtBQUNwQkMsc0NBQWMsR0FBR0csTUFBTSxDQUFDQyxNQUFQLENBQWNKLGNBQWQsRUFBOEJFLENBQUMsQ0FBQ0QsSUFBaEMsQ0FBakI7QUFDRDtBQUNGLHFCQU5ELFdBT08sVUFBQ0ksQ0FBRCxFQUFPO0FBQ1psQiw2QkFBTyxDQUFDQyxHQUFSLENBQVlpQixDQUFaO0FBQ0QscUJBVEQ7O0FBVUEsMEJBQUtiLFFBQUwsQ0FBYztBQUFFUSxvQ0FBYyxFQUFFQSxjQUFsQjtBQUFrQ00sNkJBQU8sRUFBRTtBQUEzQyxxQkFBZCxFQUFrRSxZQUFNLENBQUUsQ0FBMUU7QUFDRCxtQkFiRCxNQWFPO0FBQ0wsMEJBQUtkLFFBQUwsQ0FBYztBQUFFUSxvQ0FBYyxFQUFFLEVBQWxCO0FBQXNCTSw2QkFBTyxFQUFFO0FBQS9CLHFCQUFkLEVBQXNELFlBQU0sQ0FBRSxDQUE5RDtBQUNEO0FBQ0YsaUJBakJLLENBRFk7O0FBQUE7QUFBQTtBQUFBLHVCQW1CWlYsaURBQUEsQ0FDQywwQ0FBMENOLE9BRDNDLEVBRUhPLElBRkcsQ0FFRSxVQUFDQyxDQUFELEVBQU87QUFDWCxzQkFBSUEsQ0FBQyxDQUFDQyxNQUFGLEtBQWEsR0FBakIsRUFBc0I7QUFDcEIsMEJBQUtQLFFBQUwsQ0FBYztBQUFFZSxrQ0FBWSxFQUFFVCxDQUFDLENBQUNHLElBQWxCO0FBQXdCSyw2QkFBTyxFQUFFO0FBQWpDLHFCQUFkLEVBQXdELFlBQU0sQ0FBRSxDQUFoRTtBQUNELG1CQUZELE1BRU87QUFDTCwwQkFBS2QsUUFBTCxDQUFjO0FBQUVlLGtDQUFZLEVBQUUsRUFBaEI7QUFBb0JELDZCQUFPLEVBQUU7QUFBN0IscUJBQWQsRUFBb0QsWUFBTSxDQUFFLENBQTVEO0FBQ0Q7QUFDRixpQkFSRyxXQVNHLFVBQUNELENBQUQsRUFBTztBQUNabEIseUJBQU8sQ0FBQ0MsR0FBUixDQUFZaUIsQ0FBWjs7QUFDQSx3QkFBS2IsUUFBTCxDQUFjO0FBQUVlLGdDQUFZLEVBQUUsRUFBaEI7QUFBb0JELDJCQUFPLEVBQUU7QUFBN0IsbUJBQWQsRUFBb0QsWUFBTSxDQUFFLENBQTVEO0FBQ0QsaUJBWkcsQ0FuQlk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FsQ0Q7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWpCLFVBQUtYLEtBQUwsR0FBYTtBQUNYSyxvQkFBYyxFQUFFLEVBREw7QUFFWFEsbUNBQTZCLEVBQUUsRUFGcEI7QUFHWGYscUJBQWUsRUFBRSxFQUhOO0FBSVhhLGFBQU8sRUFBRSxJQUpFO0FBS1hHLGVBQVMsRUFBRSxDQUNULE1BRFMsRUFFVCxZQUZTLEVBR1QsWUFIUyxFQUlULFdBSlMsRUFLVCxhQUxTLEVBTVQsS0FOUyxFQU9ULGNBUFMsRUFRVCxlQVJTLEVBU1Qsc0JBVFMsRUFVVCwyQkFWUyxFQVdULGlCQVhTLEVBWVQsbUJBWlMsQ0FMQTtBQW1CWEYsa0JBQVksRUFBRTtBQW5CSCxLQUFiO0FBRmlCO0FBdUJsQjs7Ozs2QkE2Q1E7QUFBQTs7QUFDUCwwQkFDRSw4REFBQyx3REFBRDtBQUFBLG1CQUNHLEtBQUtaLEtBQUwsQ0FBV0YsZUFBWCxLQUErQixFQUEvQixpQkFDQztBQUFBLGtDQUNFLDhEQUFDLHFEQUFEO0FBQ0UscUJBQVMsRUFBRSxDQURiO0FBRUUsaUJBQUssRUFBRTtBQUNMaUIscUJBQU8sRUFBRSxNQURKO0FBRUxDLHFCQUFPLEVBQUUsTUFGSjtBQUdML0Isb0JBQU0sRUFBRSxNQUhIO0FBSUxnQyw0QkFBYyxFQUFFLFFBSlg7QUFLTEMsNkJBQWUsRUFBRSxTQUxaO0FBTUxDLG1CQUFLLEVBQUc7QUFOSCxhQUZUO0FBQUEsbUNBV0UsOERBQUMsMERBQUQ7QUFBWSxxQkFBTyxFQUFDLFdBQXBCO0FBQUEsd0JBQWtDLEtBQUtuQixLQUFMLENBQVdGO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBZUcsS0FBS0UsS0FBTCxDQUFXVyxPQUFYLEtBQXVCLElBQXZCLGdCQUNDLDhEQUFDLDBEQUFEO0FBQVEsZ0JBQUksRUFBQyxXQUFiO0FBQXlCLGlCQUFLLEVBQUMsU0FBL0I7QUFBeUMsa0JBQU0sRUFBRSxFQUFqRDtBQUFxRCxpQkFBSyxFQUFFO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZ0JBR0MsOERBQUMsb0RBQUQ7QUFBTSxxQkFBUyxNQUFmO0FBQUEsc0JBQ0dILE1BQU0sQ0FBQ1ksSUFBUCxDQUFZLEtBQUtwQixLQUFMLENBQVdLLGNBQXZCLEVBQXVDZ0IsR0FBdkMsQ0FBMkMsVUFBQ0MsR0FBRCxFQUFTO0FBQ25ELGtCQUFJQyxPQUFPLEdBQUcsQ0FBQyxZQUFELEVBQWUsV0FBZixFQUE0QixXQUE1QixFQUF5QyxhQUF6QyxDQUFkOztBQUNBLGtCQUFJLE1BQUksQ0FBQ3ZCLEtBQUwsQ0FBV0ssY0FBWCxDQUEwQmlCLEdBQTFCLE1BQW1DLElBQXZDLEVBQTZDO0FBQzNDLG9DQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQVA7QUFDRDs7QUFDRCxrQkFBSUEsR0FBRyxLQUFLLFNBQVosRUFBdUI7QUFDckIsb0JBQUlFLEdBQUcsR0FBRyxnQkFBZ0IsTUFBaEIsR0FBeUIsTUFBSSxDQUFDeEIsS0FBTCxDQUFXSyxjQUFYLENBQTBCaUIsR0FBMUIsRUFBK0JHLFdBQS9CLEVBQW5DOztBQUNBLG9DQUNFLDhEQUFDLG9EQUFEO0FBQ0UsdUJBQUssRUFBQyxTQURSO0FBRUUseUJBQU8sRUFBQyxVQUZWO0FBR0UsdUJBQUssRUFBRUQsR0FIVDtBQUlFLHVCQUFLLEVBQUU7QUFBRXZDLDBCQUFNLEVBQUUsS0FBVjtBQUNQaUMsbUNBQWUsRUFBRSxTQURWO0FBRVBDLHlCQUFLLEVBQUc7QUFGRDtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREY7QUFVRCxlQVpELE1BWU87QUFDTDNCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWTZCLEdBQVo7QUFDQTlCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWThCLE9BQU8sQ0FBQ0csUUFBUixDQUFpQkosR0FBakIsQ0FBWjs7QUFDQSxvQkFBSUMsT0FBTyxDQUFDRyxRQUFSLENBQWlCSixHQUFqQixDQUFKLEVBQTJCO0FBQ3pCLHNCQUFJRSxJQUFHLEdBQUdGLEdBQUcsQ0FBQ0csV0FBSixLQUFvQixLQUFwQixHQUE0QixNQUFJLENBQUN6QixLQUFMLENBQVdLLGNBQVgsQ0FBMEJpQixHQUExQixDQUF0Qzs7QUFDQSxzQ0FDRSw4REFBQyxvREFBRDtBQUNFLHlCQUFLLEVBQUMsU0FEUjtBQUVFLDJCQUFPLEVBQUMsVUFGVjtBQUdFLHlCQUFLLEVBQUVFLElBSFQ7QUFJRSx5QkFBSyxFQUFFO0FBQUV2Qyw0QkFBTSxFQUFFLEtBQVY7QUFDUGlDLHFDQUFlLEVBQUUsU0FEVjtBQUVQQywyQkFBSyxFQUFJO0FBRkY7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGO0FBVUQsaUJBWkQsTUFZTztBQUNQLHNCQUFJSyxLQUFHLEdBQUdGLEdBQUcsR0FBRyxLQUFOLEdBQWMsTUFBSSxDQUFDdEIsS0FBTCxDQUFXSyxjQUFYLENBQTBCaUIsR0FBMUIsQ0FBeEI7O0FBQ0Esc0NBQ0UsOERBQUMsb0RBQUQ7QUFDRSx5QkFBSyxFQUFDLFNBRFI7QUFFRSwyQkFBTyxFQUFDLFVBRlY7QUFHRSx5QkFBSyxFQUFFRSxLQUhUO0FBSUUseUJBQUssRUFBRTtBQUFFdkMsNEJBQU0sRUFBRSxLQUFWO0FBQ1BpQyxxQ0FBZSxFQUFFLFNBRFY7QUFFUEMsMkJBQUssRUFBSTtBQUZGO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERjtBQVVEO0FBQ0Y7QUFDQSxhQTlDQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixFQTBFRyxLQUFLbkIsS0FBTCxDQUFXWSxZQUFYLENBQXdCZSxNQUF4QixLQUFtQyxDQUFuQyxJQUNDLEtBQUszQixLQUFMLENBQVdjLFNBQVgsQ0FBcUJPLEdBQXJCLENBQXlCLFVBQUNDLEdBQUQsRUFBUztBQUNoQyxjQUFJRSxHQUFHLEdBQUdGLEdBQUcsR0FBRyxLQUFOLEdBQWMsTUFBSSxDQUFDdEIsS0FBTCxDQUFXWSxZQUFYLENBQXdCVSxHQUF4QixDQUF4QjtBQUNBLDhCQUNFLDhEQUFDLG9EQUFEO0FBQ0UsaUJBQUssRUFBQyxTQURSO0FBRUUsbUJBQU8sRUFBQyxVQUZWO0FBR0UsaUJBQUssRUFBRUUsR0FIVDtBQUlFLGlCQUFLLEVBQUU7QUFBRXZDLG9CQUFNLEVBQUUsS0FBVjtBQUNQaUMsNkJBQWUsRUFBRSxTQURWO0FBRVBDLG1CQUFLLEVBQUk7QUFGRjtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREY7QUFVRCxTQVpELENBM0VKLEVBd0ZHLEtBQUtuQixLQUFMLENBQVdGLGVBQVgsS0FBK0IsRUFBL0IsSUFDQyxLQUFLRSxLQUFMLENBQVdZLFlBQVgsQ0FBd0JlLE1BQXhCLEtBQW1DLENBRHBDLGlCQUVHLDhEQUFDLGdEQUFEO0FBQVcsaUJBQU8sRUFBRSxLQUFLM0IsS0FBTCxDQUFXRjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQStGRDs7OztFQXJLMEI4Qix5RDs7QUF1SzdCLCtEQUFlQyw4REFBVSxDQUFDL0MsTUFBRCxDQUFWLENBQW1CUSxjQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk5N2NiOGNkNzc3NjhmMDgwMGU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGlwLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBQYXBlcixcbiAgVHlwb2dyYXBoeSxcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBmb3JtQ29udHJvbDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtaW5XaWR0aDogMTUwLFxuICB9LFxuICBzZWxlY3RFbXB0eToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBDb21wYW55RGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb21wYW55RGV0YWlsczogW10sXG4gICAgICBjb21wYW55Q3VycmVudERheVN0b2NrRGV0YWlsczogW10sXG4gICAgICBzZWxlY3RlZENvbXBhbnk6IFwiXCIsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3RvY2trZXlzOiBbXG4gICAgICAgIFwiRGF0ZVwiLFxuICAgICAgICBcIk9wZW4gUHJpY2VcIixcbiAgICAgICAgXCJIaWdoIFByaWNlXCIsXG4gICAgICAgIFwiTG93IFByaWNlXCIsXG4gICAgICAgIFwiQ2xvc2UgUHJpY2VcIixcbiAgICAgICAgXCJXQVBcIixcbiAgICAgICAgXCJOby5vZiBTaGFyZXNcIixcbiAgICAgICAgXCJOby4gb2YgVHJhZGVzXCIsXG4gICAgICAgIFwiVG90YWwgVHVybm92ZXIgKFJzLilcIixcbiAgICAgICAgXCIlIERlbGkuIFF0eSB0byBUcmFkZWQgUXR5XCIsXG4gICAgICAgIFwiU3ByZWFkIEhpZ2gtTG93XCIsXG4gICAgICAgIFwiU3ByZWFkIENsb3NlLU9wZW5cIixcbiAgICAgIF0sXG4gICAgICBzdG9ja2RldGFpbHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBhbnlEZXRhaWxzXCIpO1xuICAgIGNvbnN0IHsgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcGFueSA9IG1hdGNoLnBhcmFtcy5jb21wYW55O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbnk6IGNvbXBhbnkgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5nZXRDb21wYW55RGV0YWlscyh0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0Q29tcGFueURldGFpbHMgPSBhc3luYyAoY29tcGFueSkgPT4ge1xuICAgIGF3YWl0IGF4aW9zLmdldChcIi9hcGkvY29tcGFueWRldGFpbHM/Y29tcGFueT1cIiArIGNvbXBhbnkpLnRoZW4oKHMpID0+IHtcbiAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGxldCBjb21wYW55RGV0YWlscyA9IHMuZGF0YTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcIi9hcGkvZ2V0c3VnZ2VzdGlvbnM/Y29tcGFueT1cIiArIGNvbXBhbnkpXG4gICAgICAgIC50aGVuKCh0KSA9PiB7XG4gICAgICAgICAgaWYgKHQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbXBhbnlEZXRhaWxzID0gT2JqZWN0LmFzc2lnbihjb21wYW55RGV0YWlscywgdC5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlEZXRhaWxzOiBjb21wYW55RGV0YWlscywgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlEZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9wcmV2aW91c2RheXN0b2NrZGV0YWlscz9jb21wYW55PVwiICsgY29tcGFueSlcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogcy5kYXRhLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnkgIT09IFwiXCIgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgZWxldmF0aW9uPXszfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgICBjb2xvciA6IFwiIzVDREI5NVwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICB7LyogPERpdmlkZXIgLz4gKi99XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJUaHJlZURvdHNcIiBjb2xvcj1cIiMwNTM4NkJcIiBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5jb21wYW55RGV0YWlscykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBpbXBLZXlzID0gW1wiT3BlbiBQcmljZVwiLCBcIkhpZ2ggcHJpZVwiLCBcIkxvdyBQcmljZVwiLCBcIkNsb3NlIFByaWNlXCJdO1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29tcGFueURldGFpbHNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4+PC9zcGFuPjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwic3VnZ2VzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBcIlNVR0dFU1RJT04gXCIgKyBcIiAtLSBcIiArIHRoaXMuc3RhdGUuY29tcGFueURldGFpbHNba2V5XS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBcIiM1Q0RCOTVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTsgXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbXBLZXlzLmluY2x1ZGVzKGtleSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW1wS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGtleS50b1VwcGVyQ2FzZSgpICsgXCIgOiBcIiArIHRoaXMuc3RhdGUuY29tcGFueURldGFpbHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzVDREI5NVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6ICBcIiMwNTM4NkJcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICk7IFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0ga2V5ICsgXCIgOiBcIiArIHRoaXMuc3RhdGUuY29tcGFueURldGFpbHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cmVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogIFwiIzA1Mzg2QlwifX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApOyBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHsvKiA8RGl2aWRlciAvPlxuICAgICAgICA8RGl2aWRlciAvPiAqL31cbiAgICAgICAge3RoaXMuc3RhdGUuc3RvY2tkZXRhaWxzLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuc3RvY2trZXlzLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzID0ga2V5ICsgXCIgOiBcIiArIHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzW2tleV07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICBsYWJlbD17cmVzfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzVDREI5NVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yIDogIFwiIzA1Mzg2QlwiIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICB7dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnkgIT09IFwiXCIgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLnN0b2NrZGV0YWlscy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgPERhc2hib2FyZCBjb21wYW55PXt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueX0gLz5cbiAgICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQ29tcGFueURldGFpbHMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==