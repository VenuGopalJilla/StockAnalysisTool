self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Components/Simulation.jsx":
/*!*****************************************!*\
  !*** ./pages/Components/Simulation.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/data-grid */ "./node_modules/@material-ui/data-grid/dist/index-esm.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Simulation.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var Simulation = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Simulation, _React$Component);

  var _super = _createSuper(Simulation);

  function Simulation(props) {
    var _this;

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Simulation);

    _this = _super.call(this, props);

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "componentDidMount", function () {
      var SP500 = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/SP500Companies.json";
      axios__WEBPACK_IMPORTED_MODULE_9___default().get(SP500).then(function (s) {
        if (s.status === 200) {
          var SP500Companies = Object.keys(underscore__WEBPACK_IMPORTED_MODULE_10__.default.invert(s.data));

          _this.setState({
            companyNames: SP500Companies
          }, function () {});
        }
      })["catch"](function (e) {
        console.log(e);
      });
      console.log("Simulation");
    });

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "onClickSubmit", function () {
      if (_this.state.selectedCompany === "") {
        return;
      }

      var params = "company=" + _this.state.selectedCompany + "&" + "investment=" + _this.state.investment + "&" + "days=" + _this.state.days + "&" + "date=" + _this.state.startdate;

      _this.setState({
        loading: true
      });

      axios__WEBPACK_IMPORTED_MODULE_9___default().get("/api/simulation?" + params).then(function (s) {
        if (s.status === 200) {
          var resp = s.data;

          if (resp.length != 0) {
            var cols = [];
            Object.keys(resp[0]).map(function (key) {
              cols.push({
                field: key,
                headerName: key,
                width: 150
              });
            });
            var rows = [];

            for (var i = 0; i < resp.length; i++) {
              if (Object.keys(resp[i]).length === 0) {} else {
                resp[i]["id"] = i;
                rows.push(resp[i]);
              }
            }

            _this.setState({
              response: rows,
              cols: cols,
              loading: false
            }, function () {});
          } else {
            _this.setState({
              loading: false
            }, function () {});
          }
        } else {
          _this.setState({
            loading: false
          }, function () {});
        }
      })["catch"](function (e) {
        console.log(e);

        _this.setState({
          loading: false
        }, function () {});
      });
    });

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "onSelectDays", function (e) {
      var days = e.target.value;

      _this.setState({
        seldays: days
      }, function () {});

      axios__WEBPACK_IMPORTED_MODULE_9___default().get("/api/simulationtop" + "?" + "days=" + days).then(function (s) {
        console.log(s.data);

        if (s.status === 200) {
          _this.setState({
            simulationtop: s.data
          }, function () {});
        }
      })["catch"](function (e) {
        console.log(e);
      });
    });

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "getDataFromURL", function (url) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          fetch(url).then(function (response) {
            return response.text();
          }).then(function (data) {
            resolve(data);
          });
        });
      }, 2000);
    });

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "exportToCSV", function () {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_11__.GridToolbarContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_11__.GridToolbarExport, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 9
        }, (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 7
      }, (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    });

    _this.state = {
      selectedCompany: "",
      companyNames: [],
      days: 1,
      investment: 1,
      startdate: "2017-03-10",
      response: [],
      cols: [],
      loading: false,
      seldays: "",
      simulationtop: [],
      companyselectedaftersimulation: "",
      companydetailsaftersimulation: []
    };
    return _this;
  }

  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Simulation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var today = new Date();
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Typography, {
            variant: "subtitle1",
            children: "Select number of days for simulation : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.FormControl, {
            style: {
              minWidth: "150px"
            },
            variant: "outlined",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.InputLabel, {
              style: {
                color: "#5CDB95"
              },
              children: "days"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Select, {
              style: {
                width: "100%",
                backgroundColor: "#05386B",
                color: "#5CDB95"
              },
              labelId: "days",
              id: "days",
              onChange: this.onSelectDays,
              value: this.state.seldays,
              children: [30, 60, 90, 180, 360, 720].map(function (period) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.MenuItem, {
                  value: period,
                  children: period
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 26
                }, _this2);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              padding: '20px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 11
          }, this), this.state.simulationtop.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13__.default, {
            component: _material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Paper,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_14__.default, {
              className: "Simualtion Results",
              minWidth: "650",
              "aria-label": "simple table",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_15__.default, {
                style: {
                  color: "#05386B",
                  backgroundColor: "#5CDB95"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__.default, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    variant: "h5",
                    children: " Security Id"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    align: "right",
                    variant: "h5",
                    children: "Company"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    align: "right",
                    variant: "h5",
                    children: "Actual Average Returns"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    align: "right",
                    variant: "h5",
                    children: "Minimum Prediction Range"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    align: "right",
                    variant: "h5",
                    children: "Maximum Prediction Range"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_18__.default, {
                children: this.state.simulationtop.map(function (row) {
                  console.log(row);
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__.default, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      component: "th",
                      scope: "row",
                      children: row.security_id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      align: "right",
                      children: row.company
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      align: "right",
                      children: row.actual_average_return_percent
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      align: "right",
                      children: row.minimum_prediction_range
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 207,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      align: "right",
                      children: row.maximum_prediction_range
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 23
                    }, _this2)]
                  }, row.Company, true, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 21
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 7
      }, this);
    }
  }]);

  return Simulation;
}((react__WEBPACK_IMPORTED_MODULE_8___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (Simulation);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9TaW11bGF0aW9uLmpzeCJdLCJuYW1lcyI6WyJTaW11bGF0aW9uIiwicHJvcHMiLCJTUDUwMCIsImF4aW9zIiwidGhlbiIsInMiLCJzdGF0dXMiLCJTUDUwMENvbXBhbmllcyIsIk9iamVjdCIsImtleXMiLCJ1bmRlcnNjb3JlIiwiZGF0YSIsInNldFN0YXRlIiwiY29tcGFueU5hbWVzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInNlbGVjdGVkQ29tcGFueSIsInBhcmFtcyIsImludmVzdG1lbnQiLCJkYXlzIiwic3RhcnRkYXRlIiwibG9hZGluZyIsInJlc3AiLCJsZW5ndGgiLCJjb2xzIiwibWFwIiwia2V5IiwicHVzaCIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwicm93cyIsImkiLCJyZXNwb25zZSIsInRhcmdldCIsInZhbHVlIiwic2VsZGF5cyIsInNpbXVsYXRpb250b3AiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJmZXRjaCIsInRleHQiLCJjb21wYW55c2VsZWN0ZWRhZnRlcnNpbXVsYXRpb24iLCJjb21wYW55ZGV0YWlsc2FmdGVyc2ltdWxhdGlvbiIsInRvZGF5IiwiRGF0ZSIsIm1pbldpZHRoIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvblNlbGVjdERheXMiLCJwZXJpb2QiLCJwYWRkaW5nIiwiUGFwZXIiLCJyb3ciLCJzZWN1cml0eV9pZCIsImNvbXBhbnkiLCJhY3R1YWxfYXZlcmFnZV9yZXR1cm5fcGVyY2VudCIsIm1pbmltdW1fcHJlZGljdGlvbl9yYW5nZSIsIm1heGltdW1fcHJlZGljdGlvbl9yYW5nZSIsIkNvbXBhbnkiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBT0E7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QkFERixlQUlFLDhEQUFDLGlFQUFEO0FBQVcsMkJBQUssRUFBQyxPQUFqQjtBQUFBLGdDQUEwQkQsR0FBRyxDQUFDRTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUpGLGVBS0UsOERBQUMsaUVBQUQ7QUFBVywyQkFBSyxFQUFDLE9BQWpCO0FBQUEsZ0NBQTBCRixHQUFHLENBQUNHO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBTEYsZUFNRSw4REFBQyxpRUFBRDtBQUFXLDJCQUFLLEVBQUMsT0FBakI7QUFBQSxnQ0FBMEJILEdBQUcsQ0FBQ0k7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFORixlQU9FLDhEQUFDLGlFQUFEO0FBQVcsMkJBQUssRUFBQyxPQUFqQjtBQUFBLGdDQUEwQkosR0FBRyxDQUFDSztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQVBGO0FBQUEscUJBQWVMLEdBQUcsQ0FBQ00sT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFEQTtBQW1CQSxpQkFyQkQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQXVFRDs7OztFQXZNc0JDLHdEOztBQTBNekIsK0RBQWVqRSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ2Zjg2OWM1ZWMwZGE0MjlkY2ExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBHcmlkLFxuICBGb3JtQ29udHJvbCxcbiAgSW5wdXRMYWJlbCxcbiAgU2VsZWN0LFxuICBNZW51SXRlbSxcbiAgUGFwZXIsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHVuZGVyc2NvcmUgZnJvbSBcInVuZGVyc2NvcmVcIjtcbmltcG9ydCB7XG4gIEdyaWRUb29sYmFyQ29udGFpbmVyLFxuICBHcmlkVG9vbGJhckV4cG9ydCxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIjtcblxuXG5cbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcblxuXG5jbGFzcyBTaW11bGF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkQ29tcGFueTogXCJcIixcbiAgICAgIGNvbXBhbnlOYW1lczogW10sXG4gICAgICBkYXlzOiAxLFxuICAgICAgaW52ZXN0bWVudDogMSxcbiAgICAgIHN0YXJ0ZGF0ZTogXCIyMDE3LTAzLTEwXCIsXG4gICAgICByZXNwb25zZTogW10sXG4gICAgICBjb2xzOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgc2VsZGF5czogXCJcIixcbiAgICAgIHNpbXVsYXRpb250b3A6IFtdLFxuICAgICAgY29tcGFueXNlbGVjdGVkYWZ0ZXJzaW11bGF0aW9uIDogXCJcIixcbiAgICAgIGNvbXBhbnlkZXRhaWxzYWZ0ZXJzaW11bGF0aW9uIDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IFNQNTAwID1cbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS9tYXN0ZXIvRGF0YS9TUDUwMENvbXBhbmllcy5qc29uXCI7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoU1A1MDApXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBTUDUwMENvbXBhbmllcyA9IE9iamVjdC5rZXlzKHVuZGVyc2NvcmUuaW52ZXJ0KHMuZGF0YSkpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55TmFtZXM6IFNQNTAwQ29tcGFuaWVzIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiU2ltdWxhdGlvblwiKTtcbiAgfTtcblxuICBvbkNsaWNrU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPVxuICAgICAgXCJjb21wYW55PVwiICtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55ICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiaW52ZXN0bWVudD1cIiArXG4gICAgICB0aGlzLnN0YXRlLmludmVzdG1lbnQgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJkYXlzPVwiICtcbiAgICAgIHRoaXMuc3RhdGUuZGF5cyArXG4gICAgICBcIiZcIiArXG4gICAgICBcImRhdGU9XCIgK1xuICAgICAgdGhpcy5zdGF0ZS5zdGFydGRhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3NpbXVsYXRpb24/XCIgKyBwYXJhbXMpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCByZXNwID0gcy5kYXRhO1xuICAgICAgICAgIGlmIChyZXNwLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBsZXQgY29scyA9IFtdO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzcFswXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgY29scy5wdXNoKHsgZmllbGQ6IGtleSwgaGVhZGVyTmFtZToga2V5LCB3aWR0aDogMTUwIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhyZXNwW2ldKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNwW2ldW1wiaWRcIl0gPSBpO1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaChyZXNwW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgeyByZXNwb25zZTogcm93cywgY29sczogY29scywgbG9hZGluZzogZmFsc2UgfSxcbiAgICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBvblNlbGVjdERheXMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGRheXMgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZGF5czogZGF5cyB9LCAoKSA9PiB7fSk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3NpbXVsYXRpb250b3BcIiArIFwiP1wiICsgXCJkYXlzPVwiICsgZGF5cylcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHMuZGF0YSk7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpbXVsYXRpb250b3A6IHMuZGF0YSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9KTtcbiAgfTtcblxuXG5cbiAgZ2V0RGF0YUZyb21VUkwgPSAodXJsKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xuICAgIH0sIDIwMDApO1xuXG4gIFxuXG4gIGV4cG9ydFRvQ1NWID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZFRvb2xiYXJDb250YWluZXI+XG4gICAgICAgIDxHcmlkVG9vbGJhckV4cG9ydCAvPlxuICAgICAgPC9HcmlkVG9vbGJhckNvbnRhaW5lcj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudCA9IFwic3VidGl0bGUxXCI+U2VsZWN0IG51bWJlciBvZiBkYXlzIGZvciBzaW11bGF0aW9uIDogPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyBtaW5XaWR0aDogXCIxNTBweFwiIH19IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxuICAgICAgICAgICAgPElucHV0TGFiZWwgc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+ZGF5czwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgc3R5bGU9e3sgXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzVDREI5NVwiXG4gICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBsYWJlbElkPVwiZGF5c1wiXG4gICAgICAgICAgICAgIGlkPVwiZGF5c1wiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RGF5c31cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZGF5c31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1szMCwgNjAsIDkwLCAxODAsIDM2MCwgNzIwXS5tYXAoXG4gICAgICAgICAgICAgICAgKHBlcmlvZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSB2YWx1ZT17cGVyaW9kfT57cGVyaW9kfTwvTWVudUl0ZW0+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPGRpdiBzdHlsZSA9IHt7XG4gICAgICAgICAgICBwYWRkaW5nIDogJzIwcHgnLFxuICAgICAgICAgIH19PjwvZGl2PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNpbXVsYXRpb250b3AubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwiU2ltdWFsdGlvbiBSZXN1bHRzXCIgbWluV2lkdGg9IFwiNjUwXCIgYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgc3R5bGUgPSB7eyBjb2xvciA6IFwiIzA1Mzg2QlwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiIzVDREI5NVwiLH19PlxuICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHZhcmlhbnQgPSBcImg1XCI+IFNlY3VyaXR5IElkPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHZhcmlhbnQgPSBcImg1XCI+Q29tcGFueTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiB2YXJpYW50ID0gXCJoNVwiPkFjdHVhbCBBdmVyYWdlIFJldHVybnM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgdmFyaWFudCA9IFwiaDVcIj5NaW5pbXVtIFByZWRpY3Rpb24gUmFuZ2U8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgdmFyaWFudCA9IFwiaDVcIj5NYXhpbXVtIFByZWRpY3Rpb24gUmFuZ2U8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNpbXVsYXRpb250b3AubWFwKChyb3cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm93KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93LkNvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5zZWN1cml0eV9pZH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNvbXBhbnl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5hY3R1YWxfYXZlcmFnZV9yZXR1cm5fcGVyY2VudH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93Lm1pbmltdW1fcHJlZGljdGlvbl9yYW5nZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93Lm1heGltdW1fcHJlZGljdGlvbl9yYW5nZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlJlc3VsdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWUgPSB7cm93W1wic2VjdXJpdHlfaWRcIl0gKyBcIl9cIiArIHRoaXMuc3RhdGUuc2VsZGF5cyArIFwiLmNzdlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZSA9IFwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4cG9ydEZpbGUgPSB7KCkgPT4gIFByb21pc2UucmVzb2x2ZSh0aGlzLiBnZXREYXRhRnJvbVVSTChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9WZW51R29wYWxKaWxsYS9TdG9ja0FuYWx5c2lzVG9vbC9tYWluL0RhdGEvU1A1MDBfc2ltdWxhdGlvbl9yZXN1bHRzL1wiICsgcm93W1wic2VjdXJpdHlfaWRcIl0gKyBcIl9cIiArIHRoaXMuc3RhdGUuc2VsZGF5cyArIFwiZGF5cy5jc3ZcIikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0RmlsZSA9IHsoKSA9PiAgUHJvbWlzZS5yZXNvbHZlKHRoaXMuIGdldERhdGFGcm9tVVJMKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWluZGV4LXJpc2svbWFzdGVyL0RhdGEvU2ltdWxhdGlvblJlc3VsdC9cIiArIHJvd1tcInNlY3VyaXR5X2lkXCJdICsgXCJfXCIgKyB0aGlzLnN0YXRlLnNlbGRheXMgKyBcIi5jc3ZcIikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICl9KX1cbiAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXVsYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9