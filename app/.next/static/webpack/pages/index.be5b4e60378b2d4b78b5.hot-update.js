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
              if (_this2.state.companyDetails[key] === null) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
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
                var _res = key + " : " + _this2.state.companyDetails[key];

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
                  lineNumber: 136,
                  columnNumber: 23
                }, _this2);
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
            lineNumber: 157,
            columnNumber: 15
          }, _this2);
        }), this.state.selectedCompany !== "" && this.state.stockdetails.length !== 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_12__.default, {
          company: this.state.selectedCompany
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYW55RGV0YWlscy5qc3giXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsInNwYWNpbmciLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwibWFyZ2luVG9wIiwiQ29tcGFueURldGFpbHMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaCIsImNvbXBhbnkiLCJwYXJhbXMiLCJzZXRTdGF0ZSIsInNlbGVjdGVkQ29tcGFueSIsImdldENvbXBhbnlEZXRhaWxzIiwic3RhdGUiLCJheGlvcyIsInRoZW4iLCJzIiwic3RhdHVzIiwiY29tcGFueURldGFpbHMiLCJkYXRhIiwidCIsIk9iamVjdCIsImFzc2lnbiIsImUiLCJsb2FkaW5nIiwic3RvY2tkZXRhaWxzIiwiY29tcGFueUN1cnJlbnREYXlTdG9ja0RldGFpbHMiLCJzdG9ja2tleXMiLCJkaXNwbGF5IiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJrZXlzIiwibWFwIiwia2V5IiwicmVzIiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJSZWFjdCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxlQUFXLEVBQUU7QUFDWEMsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREc7QUFFWEMsY0FBUSxFQUFFO0FBRkMsS0FEWTtBQUt6QkMsZUFBVyxFQUFFO0FBQ1hDLGVBQVMsRUFBRU4sS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURBO0FBTFksR0FBWjtBQUFBLENBQWY7O0lBVU1J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U0FBWCxDQUFxQk8sR0FBckIsQ0FBeUIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hDLGNBQUlDLEdBQUcsR0FBR0QsR0FBRyxHQUFHLEtBQU4sR0FBYyxNQUFJLENBQUN0QixLQUFMLENBQVdZLFlBQVgsQ0FBd0JVLEdBQXhCLENBQXhCO0FBQ0EsOEJBQ0UsOERBQUMsb0RBQUQ7QUFDRSxpQkFBSyxFQUFDLFNBRFI7QUFFRSxtQkFBTyxFQUFDLFVBRlY7QUFHRSxpQkFBSyxFQUFFQyxHQUhUO0FBSUUsaUJBQUssRUFBRTtBQUFFdEMsb0JBQU0sRUFBRSxLQUFWO0FBQ1BpQyw2QkFBZSxFQUFFLFNBRFY7QUFFUEMsbUJBQUssRUFBSTtBQUZGO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERjtBQVVELFNBWkQsQ0EzREosRUF3RUcsS0FBS25CLEtBQUwsQ0FBV0YsZUFBWCxLQUErQixFQUEvQixJQUNDLEtBQUtFLEtBQUwsQ0FBV1ksWUFBWCxDQUF3QmEsTUFBeEIsS0FBbUMsQ0FEcEMsaUJBRUcsOERBQUMsZ0RBQUQ7QUFBVyxpQkFBTyxFQUFFLEtBQUt6QixLQUFMLENBQVdGO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUVOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBK0VEOzs7O0VBckowQjRCLHlEOztBQXVKN0IsK0RBQWVDLDhEQUFVLENBQUM3QyxNQUFELENBQVYsQ0FBbUJRLGNBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmU1YjRlNjAzNzhiMmQ0Yjc4YjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoaXAsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIFBhcGVyLFxuICBUeXBvZ3JhcGh5LFxuICB3aXRoU3R5bGVzLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGZvcm1Db250cm9sOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIG1pbldpZHRoOiAxNTAsXG4gIH0sXG4gIHNlbGVjdEVtcHR5OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxufSk7XG5cbmNsYXNzIENvbXBhbnlEZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbXBhbnlEZXRhaWxzOiBbXSxcbiAgICAgIGNvbXBhbnlDdXJyZW50RGF5U3RvY2tEZXRhaWxzOiBbXSxcbiAgICAgIHNlbGVjdGVkQ29tcGFueTogXCJcIixcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzdG9ja2tleXM6IFtcbiAgICAgICAgXCJEYXRlXCIsXG4gICAgICAgIFwiT3BlbiBQcmljZVwiLFxuICAgICAgICBcIkhpZ2ggUHJpY2VcIixcbiAgICAgICAgXCJMb3cgUHJpY2VcIixcbiAgICAgICAgXCJDbG9zZSBQcmljZVwiLFxuICAgICAgICBcIldBUFwiLFxuICAgICAgICBcIk5vLm9mIFNoYXJlc1wiLFxuICAgICAgICBcIk5vLiBvZiBUcmFkZXNcIixcbiAgICAgICAgXCJUb3RhbCBUdXJub3ZlciAoUnMuKVwiLFxuICAgICAgICBcIiUgRGVsaS4gUXR5IHRvIFRyYWRlZCBRdHlcIixcbiAgICAgICAgXCJTcHJlYWQgSGlnaC1Mb3dcIixcbiAgICAgICAgXCJTcHJlYWQgQ2xvc2UtT3BlblwiLFxuICAgICAgXSxcbiAgICAgIHN0b2NrZGV0YWlsczogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tcGFueURldGFpbHNcIik7XG4gICAgY29uc3QgeyBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb21wYW55ID0gbWF0Y2gucGFyYW1zLmNvbXBhbnk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ29tcGFueTogY29tcGFueSB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmdldENvbXBhbnlEZXRhaWxzKHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRDb21wYW55RGV0YWlscyA9IGFzeW5jIChjb21wYW55KSA9PiB7XG4gICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9jb21wYW55ZGV0YWlscz9jb21wYW55PVwiICsgY29tcGFueSkudGhlbigocykgPT4ge1xuICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgbGV0IGNvbXBhbnlEZXRhaWxzID0gcy5kYXRhO1xuICAgICAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiL2FwaS9nZXRzdWdnZXN0aW9ucz9jb21wYW55PVwiICsgY29tcGFueSlcbiAgICAgICAgLnRoZW4oKHQpID0+IHtcbiAgICAgICAgICBpZiAodC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY29tcGFueURldGFpbHMgPSBPYmplY3QuYXNzaWduKGNvbXBhbnlEZXRhaWxzLCB0LmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueURldGFpbHM6IGNvbXBhbnlEZXRhaWxzLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueURldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3ByZXZpb3VzZGF5c3RvY2tkZXRhaWxzP2NvbXBhbnk9XCIgKyBjb21wYW55KVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tkZXRhaWxzOiBzLmRhdGEsIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tkZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tkZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICBlbGV2YXRpb249ezN9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yIDogXCIjNUNEQjk1XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiID57dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgIHsvKiA8RGl2aWRlciAvPiAqL31cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPT09IHRydWUgPyAoXG4gICAgICAgICAgICAgIDxMb2FkZXIgdHlwZT1cIlRocmVlRG90c1wiIGNvbG9yPVwiIzA1Mzg2QlwiIGhlaWdodD17ODB9IHdpZHRoPXs4MH0vPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNvbXBhbnlEZXRhaWxzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29tcGFueURldGFpbHNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4+PC9zcGFuPjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJzdWdnZXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IFwiU1VHR0VTVElPTiBcIiArIFwiIC0tIFwiICsgdGhpcy5zdGF0ZS5jb21wYW55RGV0YWlsc1trZXldLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IFwiIzVDREI5NVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApOyBcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBrZXkgKyBcIiA6IFwiICsgdGhpcy5zdGF0ZS5jb21wYW55RGV0YWlsc1trZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzVDREI5NVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiAgXCIjMDUzODZCXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgey8qIDxEaXZpZGVyIC8+XG4gICAgICAgIDxEaXZpZGVyIC8+ICovfVxuICAgICAgICB7dGhpcy5zdGF0ZS5zdG9ja2RldGFpbHMubGVuZ3RoICE9PSAwICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zdG9ja2tleXMubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCByZXMgPSBrZXkgKyBcIiA6IFwiICsgdGhpcy5zdGF0ZS5zdG9ja2RldGFpbHNba2V5XTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPXtyZXN9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNUNEQjk1XCIsXG4gICAgICAgICAgICAgICAgY29sb3IgOiAgXCIjMDUzODZCXCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSAhPT0gXCJcIiAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICA8RGFzaGJvYXJkIGNvbXBhbnk9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55fSAvPlxuICAgICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb21wYW55RGV0YWlscyk7XG4iXSwic291cmNlUm9vdCI6IiJ9