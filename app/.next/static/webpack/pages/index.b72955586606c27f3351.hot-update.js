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

              if (key === "suggest") {} else {
                var res = key + " : " + _this2.state.companyDetails[key];
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
                  lineNumber: 126,
                  columnNumber: 21
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
            lineNumber: 147,
            columnNumber: 15
          }, _this2);
        }), this.state.selectedCompany !== "" && this.state.stockdetails.length !== 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_12__.default, {
          company: this.state.selectedCompany
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYW55RGV0YWlscy5qc3giXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsInNwYWNpbmciLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwibWFyZ2luVG9wIiwiQ29tcGFueURldGFpbHMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaCIsImNvbXBhbnkiLCJwYXJhbXMiLCJzZXRTdGF0ZSIsInNlbGVjdGVkQ29tcGFueSIsImdldENvbXBhbnlEZXRhaWxzIiwic3RhdGUiLCJheGlvcyIsInRoZW4iLCJzIiwic3RhdHVzIiwiY29tcGFueURldGFpbHMiLCJkYXRhIiwidCIsIk9iamVjdCIsImFzc2lnbiIsImUiLCJsb2FkaW5nIiwic3RvY2tkZXRhaWxzIiwiY29tcGFueUN1cnJlbnREYXlTdG9ja0RldGFpbHMiLCJzdG9ja2tleXMiLCJkaXNwbGF5IiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJrZXlzIiwibWFwIiwia2V5IiwicmVzIiwibGVuZ3RoIiwiUmVhY3QiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsZUFBVyxFQUFFO0FBQ1hDLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQURHO0FBRVhDLGNBQVEsRUFBRTtBQUZDLEtBRFk7QUFLekJDLGVBQVcsRUFBRTtBQUNYQyxlQUFTLEVBQUVOLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFEQTtBQUxZLEdBQVo7QUFBQSxDQUFmOztJQVVNSSxjOzs7OztBQUNKLDBC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O0FBQUEsb0JBREY7QUFVRCxTQVpELENBakRKLEVBOERHLEtBQUtuQixLQUFMLENBQVdGLGVBQVgsS0FBK0IsRUFBL0IsSUFDQyxLQUFLRSxLQUFMLENBQVdZLFlBQVgsQ0FBd0JZLE1BQXhCLEtBQW1DLENBRHBDLGlCQUVHLDhEQUFDLGdEQUFEO0FBQVcsaUJBQU8sRUFBRSxLQUFLeEIsS0FBTCxDQUFXRjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhFTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQXFFRDs7OztFQTNJMEIyQix5RDs7QUE2STdCLCtEQUFlQyw4REFBVSxDQUFDNUMsTUFBRCxDQUFWLENBQW1CUSxjQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI3Mjk1NTU4NjYwNmMyN2YzMzUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGlwLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBQYXBlcixcbiAgVHlwb2dyYXBoeSxcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBmb3JtQ29udHJvbDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtaW5XaWR0aDogMTUwLFxuICB9LFxuICBzZWxlY3RFbXB0eToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBDb21wYW55RGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb21wYW55RGV0YWlsczogW10sXG4gICAgICBjb21wYW55Q3VycmVudERheVN0b2NrRGV0YWlsczogW10sXG4gICAgICBzZWxlY3RlZENvbXBhbnk6IFwiXCIsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3RvY2trZXlzOiBbXG4gICAgICAgIFwiRGF0ZVwiLFxuICAgICAgICBcIk9wZW4gUHJpY2VcIixcbiAgICAgICAgXCJIaWdoIFByaWNlXCIsXG4gICAgICAgIFwiTG93IFByaWNlXCIsXG4gICAgICAgIFwiQ2xvc2UgUHJpY2VcIixcbiAgICAgICAgXCJXQVBcIixcbiAgICAgICAgXCJOby5vZiBTaGFyZXNcIixcbiAgICAgICAgXCJOby4gb2YgVHJhZGVzXCIsXG4gICAgICAgIFwiVG90YWwgVHVybm92ZXIgKFJzLilcIixcbiAgICAgICAgXCIlIERlbGkuIFF0eSB0byBUcmFkZWQgUXR5XCIsXG4gICAgICAgIFwiU3ByZWFkIEhpZ2gtTG93XCIsXG4gICAgICAgIFwiU3ByZWFkIENsb3NlLU9wZW5cIixcbiAgICAgIF0sXG4gICAgICBzdG9ja2RldGFpbHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBhbnlEZXRhaWxzXCIpO1xuICAgIGNvbnN0IHsgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcGFueSA9IG1hdGNoLnBhcmFtcy5jb21wYW55O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbnk6IGNvbXBhbnkgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5nZXRDb21wYW55RGV0YWlscyh0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0Q29tcGFueURldGFpbHMgPSBhc3luYyAoY29tcGFueSkgPT4ge1xuICAgIGF3YWl0IGF4aW9zLmdldChcIi9hcGkvY29tcGFueWRldGFpbHM/Y29tcGFueT1cIiArIGNvbXBhbnkpLnRoZW4oKHMpID0+IHtcbiAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGxldCBjb21wYW55RGV0YWlscyA9IHMuZGF0YTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcIi9hcGkvZ2V0c3VnZ2VzdGlvbnM/Y29tcGFueT1cIiArIGNvbXBhbnkpXG4gICAgICAgIC50aGVuKCh0KSA9PiB7XG4gICAgICAgICAgaWYgKHQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbXBhbnlEZXRhaWxzID0gT2JqZWN0LmFzc2lnbihjb21wYW55RGV0YWlscywgdC5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlEZXRhaWxzOiBjb21wYW55RGV0YWlscywgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlEZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9wcmV2aW91c2RheXN0b2NrZGV0YWlscz9jb21wYW55PVwiICsgY29tcGFueSlcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogcy5kYXRhLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnkgIT09IFwiXCIgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgZWxldmF0aW9uPXszfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgICBjb2xvciA6IFwiIzVDREI5NVwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICB7LyogPERpdmlkZXIgLz4gKi99XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJUaHJlZURvdHNcIiBjb2xvcj1cIiMwNTM4NkJcIiBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5jb21wYW55RGV0YWlscykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbXBhbnlEZXRhaWxzW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuPjwvc3Bhbj47XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwic3VnZ2VzdFwiKSB7XG5cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBsZXQgcmVzID0ga2V5ICsgXCIgOiBcIiArIHRoaXMuc3RhdGUuY29tcGFueURldGFpbHNba2V5XTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyZXN9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNUNEQjk1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiAgXCIjMDUzODZCXCJ9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7LyogPERpdmlkZXIgLz5cbiAgICAgICAgPERpdmlkZXIgLz4gKi99XG4gICAgICAgIHt0aGlzLnN0YXRlLnN0b2NrZGV0YWlscy5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLnN0b2Nra2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGtleSArIFwiIDogXCIgKyB0aGlzLnN0YXRlLnN0b2NrZGV0YWlsc1trZXldO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9e3Jlc31cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICAgICAgICAgICAgICBjb2xvciA6ICBcIiMwNTM4NkJcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55ICE9PSBcIlwiICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zdG9ja2RldGFpbHMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgIDxEYXNoYm9hcmQgY29tcGFueT17dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnl9IC8+XG4gICAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKENvbXBhbnlEZXRhaWxzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=