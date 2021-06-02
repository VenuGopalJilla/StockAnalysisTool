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
            style: {
              color: "#05386B"
            },
            children: "Select number of days for simulation : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              padding: '3px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
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
              lineNumber: 165,
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
                  lineNumber: 179,
                  columnNumber: 26
                }, _this2);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              padding: '20px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 11
          }, this), this.state.simulationtop.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
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
                    lineNumber: 194,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    align: "right",
                    variant: "h5",
                    children: "Company"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    align: "right",
                    variant: "h5",
                    children: "Actual Average Returns"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    align: "right",
                    variant: "h5",
                    children: "Minimum Prediction Range"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    align: "right",
                    variant: "h5",
                    children: "Maximum Prediction Range"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
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
                      lineNumber: 206,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      align: "right",
                      children: row.company
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 209,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      align: "right",
                      children: row.actual_average_return_percent
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 210,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      align: "right",
                      children: row.minimum_prediction_range
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      align: "right",
                      children: row.maximum_prediction_range
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 23
                    }, _this2)]
                  }, row.Company, true, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 21
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9TaW11bGF0aW9uLmpzeCJdLCJuYW1lcyI6WyJTaW11bGF0aW9uIiwicHJvcHMiLCJTUDUwMCIsImF4aW9zIiwidGhlbiIsInMiLCJzdGF0dXMiLCJTUDUwMENvbXBhbmllcyIsIk9iamVjdCIsImtleXMiLCJ1bmRlcnNjb3JlIiwiZGF0YSIsInNldFN0YXRlIiwiY29tcGFueU5hbWVzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInNlbGVjdGVkQ29tcGFueSIsInBhcmFtcyIsImludmVzdG1lbnQiLCJkYXlzIiwic3RhcnRkYXRlIiwibG9hZGluZyIsInJlc3AiLCJsZW5ndGgiLCJjb2xzIiwibWFwIiwia2V5IiwicHVzaCIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwicm93cyIsImkiLCJyZXNwb25zZSIsInRhcmdldCIsInZhbHVlIiwic2VsZGF5cyIsInNpbXVsYXRpb250b3AiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJmZXRjaCIsInRleHQiLCJjb21wYW55c2VsZWN0ZWRhZnRlcnNpbXVsYXRpb24iLCJjb21wYW55ZGV0YWlsc2FmdGVyc2ltdWxhdGlvbiIsInRvZGF5IiwiRGF0ZSIsImNvbG9yIiwicGFkZGluZyIsIm1pbldpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwib25TZWxlY3REYXlzIiwicGVyaW9kIiwiUGFwZXIiLCJyb3ciLCJzZWN1cml0eV9pZCIsImNvbXBhbnkiLCJhY3R1YWxfYXZlcmFnZV9yZXR1cm5fcGVyY2VudCIsIm1pbmltdW1fcHJlZGljdGlvbl9yYW5nZSIsIm1heGltdW1fcHJlZGljdGlvbl9yYW5nZSIsIkNvbXBhbnkiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBT0E7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RDtBQUFBLDRDQUNFLDhEQUFDLGlFQUFEO0FBQVcsK0JBQVMsRUFBQyxJQUFyQjtBQUEwQiwyQkFBSyxFQUFDLEtBQWhDO0FBQUEsZ0NBQ0dBLEdBQUcsQ0FBQ0M7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLGVBSUUsOERBQUMsaUVBQUQ7QUFBVywyQkFBSyxFQUFDLE9BQWpCO0FBQUEsZ0NBQTBCRCxHQUFHLENBQUNFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSkYsZUFLRSw4REFBQyxpRUFBRDtBQUFXLDJCQUFLLEVBQUMsT0FBakI7QUFBQSxnQ0FBMEJGLEdBQUcsQ0FBQ0c7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFMRixlQU1FLDhEQUFDLGlFQUFEO0FBQVcsMkJBQUssRUFBQyxPQUFqQjtBQUFBLGdDQUEwQkgsR0FBRyxDQUFDSTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQU5GLGVBT0UsOERBQUMsaUVBQUQ7QUFBVywyQkFBSyxFQUFDLE9BQWpCO0FBQUEsZ0NBQTBCSixHQUFHLENBQUNLO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBUEY7QUFBQSxxQkFBZUwsR0FBRyxDQUFDTSxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURBO0FBbUJBLGlCQXJCRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBMkVEOzs7O0VBM01zQkMsd0Q7O0FBOE16QiwrREFBZWpFLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTAxZjY2NzMwNjZkYTE5M2JjMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEdyaWQsXG4gIEZvcm1Db250cm9sLFxuICBJbnB1dExhYmVsLFxuICBTZWxlY3QsXG4gIE1lbnVJdGVtLFxuICBQYXBlcixcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdW5kZXJzY29yZSBmcm9tIFwidW5kZXJzY29yZVwiO1xuaW1wb3J0IHtcbiAgR3JpZFRvb2xiYXJDb250YWluZXIsXG4gIEdyaWRUb29sYmFyRXhwb3J0LFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZFwiO1xuXG5cblxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuXG5cbmNsYXNzIFNpbXVsYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRDb21wYW55OiBcIlwiLFxuICAgICAgY29tcGFueU5hbWVzOiBbXSxcbiAgICAgIGRheXM6IDEsXG4gICAgICBpbnZlc3RtZW50OiAxLFxuICAgICAgc3RhcnRkYXRlOiBcIjIwMTctMDMtMTBcIixcbiAgICAgIHJlc3BvbnNlOiBbXSxcbiAgICAgIGNvbHM6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBzZWxkYXlzOiBcIlwiLFxuICAgICAgc2ltdWxhdGlvbnRvcDogW10sXG4gICAgICBjb21wYW55c2VsZWN0ZWRhZnRlcnNpbXVsYXRpb24gOiBcIlwiLFxuICAgICAgY29tcGFueWRldGFpbHNhZnRlcnNpbXVsYXRpb24gOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgU1A1MDAgPVxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExL21hc3Rlci9EYXRhL1NQNTAwQ29tcGFuaWVzLmpzb25cIjtcbiAgICBheGlvc1xuICAgICAgLmdldChTUDUwMClcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgbGV0IFNQNTAwQ29tcGFuaWVzID0gT2JqZWN0LmtleXModW5kZXJzY29yZS5pbnZlcnQocy5kYXRhKSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogU1A1MDBDb21wYW5pZXMgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJTaW11bGF0aW9uXCIpO1xuICB9O1xuXG4gIG9uQ2xpY2tTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55ID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9XG4gICAgICBcImNvbXBhbnk9XCIgK1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnkgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJpbnZlc3RtZW50PVwiICtcbiAgICAgIHRoaXMuc3RhdGUuaW52ZXN0bWVudCArXG4gICAgICBcIiZcIiArXG4gICAgICBcImRheXM9XCIgK1xuICAgICAgdGhpcy5zdGF0ZS5kYXlzICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiZGF0ZT1cIiArXG4gICAgICB0aGlzLnN0YXRlLnN0YXJ0ZGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICBheGlvc1xuICAgICAgLmdldChcIi9hcGkvc2ltdWxhdGlvbj9cIiArIHBhcmFtcylcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgbGV0IHJlc3AgPSBzLmRhdGE7XG4gICAgICAgICAgaWYgKHJlc3AubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIGxldCBjb2xzID0gW107XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyZXNwWzBdKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICBjb2xzLnB1c2goeyBmaWVsZDoga2V5LCBoZWFkZXJOYW1lOiBrZXksIHdpZHRoOiAxNTAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCByb3dzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHJlc3BbaV0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3BbaV1bXCJpZFwiXSA9IGk7XG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKHJlc3BbaV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICB7IHJlc3BvbnNlOiByb3dzLCBjb2xzOiBjb2xzLCBsb2FkaW5nOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIG9uU2VsZWN0RGF5cyA9IChlKSA9PiB7XG4gICAgY29uc3QgZGF5cyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxkYXlzOiBkYXlzIH0sICgpID0+IHt9KTtcbiAgICBheGlvc1xuICAgICAgLmdldChcIi9hcGkvc2ltdWxhdGlvbnRvcFwiICsgXCI/XCIgKyBcImRheXM9XCIgKyBkYXlzKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocy5kYXRhKTtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2ltdWxhdGlvbnRvcDogcy5kYXRhIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH0pO1xuICB9O1xuXG5cblxuICBnZXREYXRhRnJvbVVSTCA9ICh1cmwpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgfSwgMjAwMCk7XG5cbiAgXG5cbiAgZXhwb3J0VG9DU1YgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHcmlkVG9vbGJhckNvbnRhaW5lcj5cbiAgICAgICAgPEdyaWRUb29sYmFyRXhwb3J0IC8+XG4gICAgICA8L0dyaWRUb29sYmFyQ29udGFpbmVyPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50ID0gXCJzdWJ0aXRsZTFcIiBzdHlsZSA9IHt7IGNvbG9yIDogXCIjMDUzODZCXCJ9fT5TZWxlY3QgbnVtYmVyIG9mIGRheXMgZm9yIHNpbXVsYXRpb24gOiA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPGRpdiBzdHlsZSA9IHt7XG4gICAgICAgICAgICBwYWRkaW5nIDogJzNweCdcbiAgICAgICAgICB9fT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgbWluV2lkdGg6IFwiMTUwcHhcIiB9fSB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgICAgICAgIDxJbnB1dExhYmVsIHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PmRheXM8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHN0eWxlPXt7IFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1Q0RCOTVcIlxuICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgbGFiZWxJZD1cImRheXNcIlxuICAgICAgICAgICAgICBpZD1cImRheXNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdERheXN9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGRheXN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtbMzAsIDYwLCA5MCwgMTgwLCAzNjAsIDcyMF0ubWFwKFxuICAgICAgICAgICAgICAgIChwZXJpb2QpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8TWVudUl0ZW0gdmFsdWU9e3BlcmlvZH0+e3BlcmlvZH08L01lbnVJdGVtPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e1xuICAgICAgICAgICAgcGFkZGluZyA6ICcyMHB4JyxcbiAgICAgICAgICB9fT48L2Rpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaW11bGF0aW9udG9wLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cIlNpbXVhbHRpb24gUmVzdWx0c1wiIG1pbldpZHRoPSBcIjY1MFwiIGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkIHN0eWxlID0ge3sgY29sb3IgOiBcIiMwNTM4NkJcIiwgYmFja2dyb3VuZENvbG9yOiBcIiM1Q0RCOTVcIix9fT5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCB2YXJpYW50ID0gXCJoNVwiPiBTZWN1cml0eSBJZDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiB2YXJpYW50ID0gXCJoNVwiPkNvbXBhbnk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgdmFyaWFudCA9IFwiaDVcIj5BY3R1YWwgQXZlcmFnZSBSZXR1cm5zPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHZhcmlhbnQgPSBcImg1XCI+TWluaW11bSBQcmVkaWN0aW9uIFJhbmdlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHZhcmlhbnQgPSBcImg1XCI+TWF4aW11bSBQcmVkaWN0aW9uIFJhbmdlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaW11bGF0aW9udG9wLm1hcCgocm93KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5Db21wYW55fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuc2VjdXJpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jb21wYW55fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuYWN0dWFsX2F2ZXJhZ2VfcmV0dXJuX3BlcmNlbnR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5taW5pbXVtX3ByZWRpY3Rpb25fcmFuZ2V9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5tYXhpbXVtX3ByZWRpY3Rpb25fcmFuZ2V9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJSZXN1bHRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0ge3Jvd1tcInNlY3VyaXR5X2lkXCJdICsgXCJfXCIgKyB0aGlzLnN0YXRlLnNlbGRheXMgKyBcIi5jc3ZcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWUgPSBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBvcnRGaWxlID0geygpID0+ICBQcm9taXNlLnJlc29sdmUodGhpcy4gZ2V0RGF0YUZyb21VUkwoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVmVudUdvcGFsSmlsbGEvU3RvY2tBbmFseXNpc1Rvb2wvbWFpbi9EYXRhL1NQNTAwX3NpbXVsYXRpb25fcmVzdWx0cy9cIiArIHJvd1tcInNlY3VyaXR5X2lkXCJdICsgXCJfXCIgKyB0aGlzLnN0YXRlLnNlbGRheXMgKyBcImRheXMuY3N2XCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydEZpbGUgPSB7KCkgPT4gIFByb21pc2UucmVzb2x2ZSh0aGlzLiBnZXREYXRhRnJvbVVSTChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWlrcjc4OS9zdG9jay1pbmRleC1yaXNrL21hc3Rlci9EYXRhL1NpbXVsYXRpb25SZXN1bHQvXCIgKyByb3dbXCJzZWN1cml0eV9pZFwiXSArIFwiX1wiICsgdGhpcy5zdGF0ZS5zZWxkYXlzICsgXCIuY3N2XCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICApfSl9XG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW11bGF0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==