self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Components/Dashboard.jsx":
/*!****************************************!*\
  !*** ./pages/Components/Dashboard.jsx ***!
  \****************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Dashboard.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // import Chart from "react-apexcharts";



var Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "vendors-node_modules_react-apexcharts_dist_react-apexcharts_min_js").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js")];
    },
    modules: ["Components\\Dashboard.jsx -> " + "react-apexcharts"]
  }
});
_c2 = Chart;




var styles = function styles(theme) {
  return {
    chart: {
      width: "80%"
    },
    divchart: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex"
    },
    buttongroup: {
      display: "flex",
      justifyContent: "center",
      margin: "10px"
    }
  };
};

var Dashboard = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Dashboard, _React$Component);

  var _super = _createSuper(Dashboard);

  function Dashboard(props) {
    var _this;

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Dashboard);

    _this = _super.call(this, props);

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "componentDidMount", function () {
      console.log("Dashboard");

      if (_this.props.company !== "sp500") {
        _this.setState({
          company: _this.props.company
        }, function () {
          axios__WEBPACK_IMPORTED_MODULE_9___default().get("/api/stockdetails?company=" + _this.state.company).then(function (s) {
            if (s.status === 200) {
              _this.setState({
                details: s.data,
                loading: false
              }, function () {});
            } else {
              _this.setState({
                details: [],
                loading: false
              }, function () {});
            }
          }).then(function () {})["catch"](function (e) {
            console.log(e);

            _this.setState({
              loading: false,
              error: true
            }, function () {});
          });
        });
      } else {
        _this.setState({
          company: _this.props.company
        }, function () {
          axios__WEBPACK_IMPORTED_MODULE_9___default().get("/api/sp500").then(function (s) {
            if (s.status === 200) {
              _this.setState({
                details: s.data,
                loading: false
              }, function () {});
            } else {
              _this.setState({
                details: [],
                loading: false
              }, function () {});
            }
          })["catch"](function (e) {
            console.log(e);

            _this.setState({
              loading: false,
              error: true
            }, function () {});
          });
        });
      }
    });

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "createGraph", function (days) {
      var closePriceData = {
        name: "Close Price",
        data: []
      };
      var openPriceData = {
        name: "Open Price",
        data: []
      };
      var highPriceData = {
        name: "High Price",
        data: []
      };
      var lowPriceData = {
        name: "Low Price",
        data: []
      };
      days = days === "all" ? _this.state.details.length - 1 : days > _this.state.details.length - 1 ? _this.state.details.length - 1 : days;
      var toDate = _this.state.details[0]["Date"];
      var fromDate = _this.state.details[days]["Date"];

      var data = _this.state.details.slice(0, days);

      for (var i = 0; i < data.length; i++) {
        var element = data[i];
        closePriceData.data.push({
          x: element["Date"],
          y: element["Close Price"] || element["Close"]
        });
        openPriceData.data.push({
          x: element["Date"],
          y: element["Open Price"] || element["Open"]
        });
        highPriceData.data.push({
          x: element["Date"],
          y: element["High Price"] || element["High"]
        });
        lowPriceData.data.push({
          x: element["Date"],
          y: element["Low Price"] || element["Low"]
        });
      }

      var options = _this.state.options;
      options.xaxis["min"] = fromDate;
      options.xaxis["max"] = toDate;
      var series = [];
      series.push(closePriceData);

      _this.setState({
        series: series,
        options: options
      }, function () {});
    });

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "selectedPeriod", function (e) {
      var days = e.currentTarget.value;

      if (_this.state.selectedPeriod === days) {
        return;
      }

      _this.setState({
        selectedPeriod: days
      }, function () {
        _this.createGraph(days);
      });
    });

    _this.state = {
      loading: true,
      details: [],
      selectedPeriod: "",
      company: "",
      error: false,
      series: [],
      options: {
        chart: {
          background: "#ffffff",
          type: "area",
          height: "auto",
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: "zoom"
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 2,
          dashArray: 0
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0
        },
        title: {
          text: "Stock Price Movement",
          align: "left",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Sans-serif",
            color: "black",
            display: "flex",
            justifyContent: "center"
          }
        },
        fill: {
          type: "solid",
          opacity: 0.9,
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 90, 100]
          }
        },
        yaxis: {
          labels: {
            formatter: function formatter(val) {
              return val.toFixed();
            }
          },
          title: {
            text: "Price in Rs"
          }
        },
        xaxis: {
          type: "datetime",
          labels: {
            formatter: function formatter(val) {
              var dt = new Date(val);
              return dt.getDate() + "-" + (dt.getMonth() + 1) + "-" + dt.getFullYear();
            }
          },
          title: {
            text: "Time Period"
          }
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function formatter(val) {
              var dt = new Date(val);
              return dt.getDate() + "-" + (dt.getMonth() + 1) + "-" + dt.getFullYear();
            }
          },
          y: {
            formatter: function formatter(val) {
              return val;
            }
          }
        }
      }
    };
    return _this;
  }

  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Dashboard, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), {
        children: this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_11__.default, {
          type: "ThreeDots",
          color: "#05386B",
          height: 80,
          width: 80
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }, this) : this.state.error !== true && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.ButtonGroup, {
            className: classes.buttongroup,
            "aria-label": "contained primary button group",
            variant: "outlined",
            style: {
              display: "flex",
              justifyContent: "center",
              margin: "10px",
              backgroundColor: "#05386B"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Button, {
              value: "7",
              onClick: this.selectedPeriod,
              style: {
                color: "#5CDB95"
              },
              children: "7D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Button, {
              value: "30",
              onClick: this.selectedPeriod,
              style: {
                color: "#5CDB95"
              },
              children: "1M"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Button, {
              value: "90",
              onClick: this.selectedPeriod,
              style: {
                color: "#5CDB95"
              },
              children: "3M"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Button, {
              value: "180",
              onClick: this.selectedPeriod,
              style: {
                color: "#5CDB95"
              },
              children: "6M"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Button, {
              value: "360",
              onClick: this.selectedPeriod,
              style: {
                color: "#5CDB95"
              },
              children: "1Y"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Button, {
              value: "1800",
              onClick: this.selectedPeriod,
              style: {
                color: "#5CDB95"
              },
              children: "5Y"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Button, {
              value: "all",
              onClick: this.selectedPeriod,
              style: {
                color: "#5CDB95"
              },
              children: "All"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.divchart,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {
              options: this.state.options,
              series: this.state.series,
              className: classes.chart
            }, "chart", false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 7
      }, this);
    }
  }]);

  return Dashboard;
}((react__WEBPACK_IMPORTED_MODULE_8___default().Component));

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__.withStyles)(styles, {
  withTheme: true
})(Dashboard));

var _c, _c2;

$RefreshReg$(_c, "Chart$dynamic");
$RefreshReg$(_c2, "Chart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9EYXNoYm9hcmQuanN4Il0sIm5hbWVzIjpbIkNoYXJ0IiwiZHluYW1pYyIsInNzciIsInN0eWxlcyIsInRoZW1lIiwiY2hhcnQiLCJ3aWR0aCIsImRpdmNoYXJ0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImJ1dHRvbmdyb3VwIiwibWFyZ2luIiwiRGFzaGJvYXJkIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiY29tcGFueSIsInNldFN0YXRlIiwiYXhpb3MiLCJzdGF0ZSIsInRoZW4iLCJzIiwic3RhdHVzIiwiZGV0YWlscyIsImRhdGEiLCJsb2FkaW5nIiwiZSIsImVycm9yIiwiZGF5cyIsImNsb3NlUHJpY2VEYXRhIiwibmFtZSIsIm9wZW5QcmljZURhdGEiLCJoaWdoUHJpY2VEYXRhIiwibG93UHJpY2VEYXRhIiwibGVuZ3RoIiwidG9EYXRlIiwiZnJvbURhdGUiLCJzbGljZSIsImkiLCJlbGVtZW50IiwicHVzaCIsIngiLCJ5Iiwib3B0aW9ucyIsInhheGlzIiwic2VyaWVzIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwic2VsZWN0ZWRQZXJpb2QiLCJjcmVhdGVHcmFwaCIsImJhY2tncm91bmQiLCJ0eXBlIiwiaGVpZ2h0Iiwiem9vbSIsImVuYWJsZWQiLCJhdXRvU2NhbGVZYXhpcyIsInRvb2xiYXIiLCJhdXRvU2VsZWN0ZWQiLCJzdHJva2UiLCJzaG93IiwiY3VydmUiLCJsaW5lQ2FwIiwiY29sb3JzIiwidW5kZWZpbmVkIiwiZGFzaEFycmF5IiwiZGF0YUxhYmVscyIsIm1hcmtlcnMiLCJzaXplIiwidGl0bGUiLCJ0ZXh0IiwiYWxpZ24iLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJjb2xvciIsImZpbGwiLCJvcGFjaXR5IiwiZ3JhZGllbnQiLCJzaGFkZUludGVuc2l0eSIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIiwieWF4aXMiLCJsYWJlbHMiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJ0b0ZpeGVkIiwiZHQiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0b29sdGlwIiwic2hhcmVkIiwiY2xhc3NlcyIsImJhY2tncm91bmRDb2xvciIsIlJlYWN0Iiwid2l0aFN0eWxlcyIsIndpdGhUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBLElBQU1BLEtBQUssR0FBR0Msb0RBQU8sTUFBQztBQUFBLFNBQU0sdVBBQU47QUFBQSxDQUFELEVBQW1DO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFyQixzRkFBcUI7QUFBQTtBQUFBLGdEQUFyQixrQkFBcUI7QUFBQTtBQUFBLENBQW5DLENBQXJCO01BQU1GLEs7QUFFTjtBQUNBO0FBQ0E7O0FBSUEsSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUU7QUFERixLQURrQjtBQUl6QkMsWUFBUSxFQUFFO0FBQ1JDLG9CQUFjLEVBQUUsUUFEUjtBQUVSQyxnQkFBVSxFQUFFLFFBRko7QUFHUkMsYUFBTyxFQUFFO0FBSEQsS0FKZTtBQVN6QkMsZUFBVyxFQUFFO0FBQ1hELGFBQU8sRUFBRSxNQURFO0FBRVhGLG9CQUFjLEVBQUUsUUFGTDtBQUdYSSxZQUFNLEVBQUU7QUFIRztBQVRZLEdBQVo7QUFBQSxDQUFmOztJQWlCTUMsUzs7Ozs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsb1VBaUhDLFlBQU07QUFDeEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7O0FBQ0EsVUFBSSxNQUFLRixLQUFMLENBQVdHLE9BQVgs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RDs7QUE2UnhCLCtEQUFlQyxxRUFBVSxDQUFDakcsTUFBRCxFQUFTO0FBQUVrRyxXQUFTLEVBQUU7QUFBYixDQUFULENBQVYsQ0FBd0N4RixTQUF4QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNiMzdkZmIzYjJkNmFlMjY4YTQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtYXBleGNoYXJ0c1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5pbXBvcnQgeyBCdXR0b25Hcm91cCwgQnV0dG9uLCBEaXZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCI7XG5cblxuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGNoYXJ0OiB7XG4gICAgd2lkdGg6IFwiODAlXCIsXG4gIH0sXG4gIGRpdmNoYXJ0OiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgfSxcbiAgYnV0dG9uZ3JvdXA6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBtYXJnaW46IFwiMTBweFwiLFxuICB9LFxufSk7XG5cblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBkZXRhaWxzOiBbXSxcbiAgICAgIHNlbGVjdGVkUGVyaW9kOiBcIlwiLFxuICAgICAgY29tcGFueTogXCJcIixcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIHNlcmllczogW10sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgdHlwZTogXCJhcmVhXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICB0eXBlOiBcInhcIixcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBhdXRvU2NhbGVZYXhpczogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgIGF1dG9TZWxlY3RlZDogXCJ6b29tXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBjdXJ2ZTogXCJzbW9vdGhcIixcbiAgICAgICAgICBsaW5lQ2FwOiBcImJ1dHRcIixcbiAgICAgICAgICBjb2xvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICBkYXNoQXJyYXk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgIHNpemU6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgdGV4dDogXCJTdG9jayBQcmljZSBNb3ZlbWVudFwiLFxuICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIlNhbnMtc2VyaWZcIixcbiAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICB0eXBlOiBcInNvbGlkXCIsXG4gICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICAgIGdyYWRpZW50OiB7XG4gICAgICAgICAgICBzaGFkZUludGVuc2l0eTogMSxcbiAgICAgICAgICAgIGludmVyc2VDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgICAgb3BhY2l0eUZyb206IDEsXG4gICAgICAgICAgICBvcGFjaXR5VG86IDEsXG4gICAgICAgICAgICBzdG9wczogWzAsIDkwLCAxMDBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbC50b0ZpeGVkKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiUHJpY2UgaW4gUnNcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB4YXhpczoge1xuICAgICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkdCA9IG5ldyBEYXRlKHZhbCk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZHQuZ2V0RGF0ZSgpICtcbiAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgKGR0LmdldE1vbnRoKCkgKyAxKSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIGR0LmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogXCJUaW1lIFBlcmlvZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgIHNoYXJlZDogZmFsc2UsXG4gICAgICAgICAgeDoge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUodmFsKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkdC5nZXREYXRlKCkgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICAoZHQuZ2V0TW9udGgoKSArIDEpICtcbiAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgZHQuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJEYXNoYm9hcmRcIik7XG4gICAgaWYgKHRoaXMucHJvcHMuY29tcGFueSAhPT0gXCJzcDUwMFwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueTogdGhpcy5wcm9wcy5jb21wYW55IH0sICgpID0+IHtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAuZ2V0KFwiL2FwaS9zdG9ja2RldGFpbHM/Y29tcGFueT1cIiArIHRoaXMuc3RhdGUuY29tcGFueSlcbiAgICAgICAgICAudGhlbigocykgPT4ge1xuICAgICAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IHMuZGF0YSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7fSlcbiAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogdHJ1ZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnk6IHRoaXMucHJvcHMuY29tcGFueSB9LCAoKSA9PiB7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgLmdldChcIi9hcGkvc3A1MDBcIilcbiAgICAgICAgICAudGhlbigocykgPT4ge1xuICAgICAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IHMuZGF0YSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogdHJ1ZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY3JlYXRlR3JhcGggPSAoZGF5cykgPT4ge1xuICAgIGxldCBjbG9zZVByaWNlRGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiQ2xvc2UgUHJpY2VcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG4gICAgbGV0IG9wZW5QcmljZURhdGEgPSB7XG4gICAgICBuYW1lOiBcIk9wZW4gUHJpY2VcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG4gICAgbGV0IGhpZ2hQcmljZURhdGEgPSB7XG4gICAgICBuYW1lOiBcIkhpZ2ggUHJpY2VcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG4gICAgbGV0IGxvd1ByaWNlRGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiTG93IFByaWNlXCIsXG4gICAgICBkYXRhOiBbXSxcbiAgICB9O1xuXG4gICAgZGF5cyA9XG4gICAgICBkYXlzID09PSBcImFsbFwiXG4gICAgICAgID8gdGhpcy5zdGF0ZS5kZXRhaWxzLmxlbmd0aCAtIDFcbiAgICAgICAgOiBkYXlzID4gdGhpcy5zdGF0ZS5kZXRhaWxzLmxlbmd0aCAtIDFcbiAgICAgICAgPyB0aGlzLnN0YXRlLmRldGFpbHMubGVuZ3RoIC0gMVxuICAgICAgICA6IGRheXM7XG4gICAgY29uc3QgdG9EYXRlID0gdGhpcy5zdGF0ZS5kZXRhaWxzWzBdW1wiRGF0ZVwiXTtcbiAgICBjb25zdCBmcm9tRGF0ZSA9IHRoaXMuc3RhdGUuZGV0YWlsc1tkYXlzXVtcIkRhdGVcIl07XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RhdGUuZGV0YWlscy5zbGljZSgwLCBkYXlzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhW2ldO1xuICAgICAgY2xvc2VQcmljZURhdGEuZGF0YS5wdXNoKHtcbiAgICAgICAgeDogZWxlbWVudFtcIkRhdGVcIl0sXG4gICAgICAgIHk6IGVsZW1lbnRbXCJDbG9zZSBQcmljZVwiXSB8fCBlbGVtZW50W1wiQ2xvc2VcIl0sXG4gICAgICB9KTtcblxuICAgICAgb3BlblByaWNlRGF0YS5kYXRhLnB1c2goe1xuICAgICAgICB4OiBlbGVtZW50W1wiRGF0ZVwiXSxcbiAgICAgICAgeTogZWxlbWVudFtcIk9wZW4gUHJpY2VcIl0gfHwgZWxlbWVudFtcIk9wZW5cIl0sXG4gICAgICB9KTtcblxuICAgICAgaGlnaFByaWNlRGF0YS5kYXRhLnB1c2goe1xuICAgICAgICB4OiBlbGVtZW50W1wiRGF0ZVwiXSxcbiAgICAgICAgeTogZWxlbWVudFtcIkhpZ2ggUHJpY2VcIl0gfHwgZWxlbWVudFtcIkhpZ2hcIl0sXG4gICAgICB9KTtcblxuICAgICAgbG93UHJpY2VEYXRhLmRhdGEucHVzaCh7XG4gICAgICAgIHg6IGVsZW1lbnRbXCJEYXRlXCJdLFxuICAgICAgICB5OiBlbGVtZW50W1wiTG93IFByaWNlXCJdIHx8IGVsZW1lbnRbXCJMb3dcIl0sXG4gICAgICB9KTtcblxuXG4gICAgfVxuICAgIGxldCBvcHRpb25zID0gdGhpcy5zdGF0ZS5vcHRpb25zO1xuICAgIG9wdGlvbnMueGF4aXNbXCJtaW5cIl0gPSBmcm9tRGF0ZTtcbiAgICBvcHRpb25zLnhheGlzW1wibWF4XCJdID0gdG9EYXRlO1xuICAgIGNvbnN0IHNlcmllcyA9IFtdO1xuICAgIHNlcmllcy5wdXNoKGNsb3NlUHJpY2VEYXRhKTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzZXJpZXM6IHNlcmllcyxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7fVxuICAgICk7XG4gIH07XG5cbiAgc2VsZWN0ZWRQZXJpb2QgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGRheXMgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRQZXJpb2QgPT09IGRheXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUGVyaW9kOiBkYXlzIH0sICgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlR3JhcGgoZGF5cyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkZXIgdHlwZT1cIlRocmVlRG90c1wiIGNvbG9yPVwiIzA1Mzg2QlwiIGhlaWdodD17ODB9IHdpZHRoPXs4MH0vPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgIT09IHRydWUgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxCdXR0b25Hcm91cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25ncm91cH1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY29udGFpbmVkIHByaW1hcnkgYnV0dG9uIGdyb3VwXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCI3XCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0gc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgICA3RFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCIzMFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9IHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgICAgMU1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiOTBcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfSBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICAgIDNNXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjE4MFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9IHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgICAgNk1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiMzYwXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0gc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgICAxWVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCIxODAwXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0gc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgICA1WVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCJhbGxcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfSBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICAgIEFsbFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmRpdmNoYXJ0fT5cbiAgICAgICAgICAgICAgPENoYXJ0IFxuICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnN9IFxuICAgICAgICAgICAgICBzZXJpZXM9e3RoaXMuc3RhdGUuc2VyaWVzfVxuICAgICAgICAgICAgICBrZXkgPSBcImNoYXJ0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuY2hhcnR9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IHdpdGhUaGVtZTogdHJ1ZSB9KShEYXNoYm9hcmQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==