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
      series.push(openPriceData);
      series.push(highPriceData);
      series.push(lowPriceData);

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
          lineNumber: 266,
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
              lineNumber: 282,
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
              lineNumber: 285,
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
              lineNumber: 288,
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
              lineNumber: 291,
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
              lineNumber: 294,
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
              lineNumber: 297,
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
              lineNumber: 300,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.divchart,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {
              options: this.state.options,
              series: this.state.series,
              className: classes.chart
            }, "chart", false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9EYXNoYm9hcmQuanN4Il0sIm5hbWVzIjpbIkNoYXJ0IiwiZHluYW1pYyIsInNzciIsInN0eWxlcyIsInRoZW1lIiwiY2hhcnQiLCJ3aWR0aCIsImRpdmNoYXJ0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImJ1dHRvbmdyb3VwIiwibWFyZ2luIiwiRGFzaGJvYXJkIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiY29tcGFueSIsInNldFN0YXRlIiwiYXhpb3MiLCJzdGF0ZSIsInRoZW4iLCJzIiwic3RhdHVzIiwiZGV0YWlscyIsImRhdGEiLCJsb2FkaW5nIiwiZSIsImVycm9yIiwiZGF5cyIsImNsb3NlUHJpY2VEYXRhIiwibmFtZSIsIm9wZW5QcmljZURhdGEiLCJoaWdoUHJpY2VEYXRhIiwibG93UHJpY2VEYXRhIiwibGVuZ3RoIiwidG9EYXRlIiwiZnJvbURhdGUiLCJzbGljZSIsImkiLCJlbGVtZW50IiwicHVzaCIsIngiLCJ5Iiwib3B0aW9ucyIsInhheGlzIiwic2VyaWVzIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwic2VsZWN0ZWRQZXJpb2QiLCJjcmVhdGVHcmFwaCIsImJhY2tncm91bmQiLCJ0eXBlIiwiaGVpZ2h0Iiwiem9vbSIsImVuYWJsZWQiLCJhdXRvU2NhbGVZYXhpcyIsInRvb2xiYXIiLCJhdXRvU2VsZWN0ZWQiLCJzdHJva2UiLCJzaG93IiwiY3VydmUiLCJsaW5lQ2FwIiwiY29sb3JzIiwidW5kZWZpbmVkIiwiZGFzaEFycmF5IiwiZGF0YUxhYmVscyIsIm1hcmtlcnMiLCJzaXplIiwidGl0bGUiLCJ0ZXh0IiwiYWxpZ24iLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJjb2xvciIsImZpbGwiLCJvcGFjaXR5IiwiZ3JhZGllbnQiLCJzaGFkZUludGVuc2l0eSIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIiwieWF4aXMiLCJsYWJlbHMiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJ0b0ZpeGVkIiwiZHQiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0b29sdGlwIiwic2hhcmVkIiwiY2xhc3NlcyIsImJhY2tncm91bmRDb2xvciIsIlJlYWN0Iiwid2l0aFN0eWxlcyIsIndpdGhUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBLElBQU1BLEtBQUssR0FBR0Msb0RBQU8sTUFBQztBQUFBLFNBQU0sdVBBQU47QUFBQSxDQUFELEVBQW1DO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFyQixzRkFBcUI7QUFBQTtBQUFBLGdEQUFyQixrQkFBcUI7QUFBQTtBQUFBLENBQW5DLENBQXJCO01BQU1GLEs7QUFFTjtBQUNBO0FBQ0E7O0FBSUEsSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUU7QUFERixLQURrQjtBQUl6QkMsWUFBUSxFQUFFO0FBQ1JDLG9CQUFjLEVBQUUsUUFEUjtBQUVSQyxnQkFBVSxFQUFFLFFBRko7QUFHUkMsYUFBTyxFQUFFO0FBSEQsS0FKZTtBQVN6QkMsZUFBVyxFQUFFO0FBQ1hELGFBQU8sRUFBRSxNQURFO0FBRVhGLG9CQUFjLEVBQUUsUUFGTDtBQUdYSSxZQUFNLEVBQUU7QUFIRztBQVRZLEdBQVo7QUFBQSxDQUFmOztJQWlCTUMsUzs7Ozs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsb1VBaUhDLFlBQU07QUFDeEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7O0FBQ0EsVUFBSSxNQUFLRixLQUFMLENBQVdHLE9BQVgs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QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTE47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBcUREOzs7O0VBN1JxQjhGLHdEOztBQWdTeEIsK0RBQWVDLHFFQUFVLENBQUNqRyxNQUFELEVBQVM7QUFBRWtHLFdBQVMsRUFBRTtBQUFiLENBQVQsQ0FBVixDQUF3Q3hGLFNBQXhDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTA5ZDgzODgyMjExNDQyNTk4OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmNvbnN0IENoYXJ0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpLCB7IHNzcjogZmFsc2UgfSk7XG5cbmltcG9ydCB7IEJ1dHRvbkdyb3VwLCBCdXR0b24sIERpdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBjbGFzc25hbWVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIjtcblxuXG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgY2hhcnQ6IHtcbiAgICB3aWR0aDogXCI4MCVcIixcbiAgfSxcbiAgZGl2Y2hhcnQ6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9LFxuICBidXR0b25ncm91cDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gIH0sXG59KTtcblxuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGRldGFpbHM6IFtdLFxuICAgICAgc2VsZWN0ZWRQZXJpb2Q6IFwiXCIsXG4gICAgICBjb21wYW55OiBcIlwiLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgc2VyaWVzOiBbXSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICB0eXBlOiBcImFyZWFcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgIHR5cGU6IFwieFwiLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9TY2FsZVlheGlzOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgYXV0b1NlbGVjdGVkOiBcInpvb21cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIGN1cnZlOiBcInNtb290aFwiLFxuICAgICAgICAgIGxpbmVDYXA6IFwiYnV0dFwiLFxuICAgICAgICAgIGNvbG9yczogdW5kZWZpbmVkLFxuICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgIGRhc2hBcnJheTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICB0ZXh0OiBcIlN0b2NrIFByaWNlIE1vdmVtZW50XCIsXG4gICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgIHR5cGU6IFwic29saWRcIixcbiAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgICAgZ3JhZGllbnQ6IHtcbiAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAxLFxuICAgICAgICAgICAgaW52ZXJzZUNvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBvcGFjaXR5RnJvbTogMSxcbiAgICAgICAgICAgIG9wYWNpdHlUbzogMSxcbiAgICAgICAgICAgIHN0b3BzOiBbMCwgOTAsIDEwMF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsLnRvRml4ZWQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogXCJQcmljZSBpbiBSc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgdHlwZTogXCJkYXRldGltZVwiLFxuICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUodmFsKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkdC5nZXREYXRlKCkgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICAoZHQuZ2V0TW9udGgoKSArIDEpICtcbiAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgZHQuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlRpbWUgUGVyaW9kXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgc2hhcmVkOiBmYWxzZSxcbiAgICAgICAgICB4OiB7XG4gICAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZHQgPSBuZXcgRGF0ZSh2YWwpO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGR0LmdldERhdGUoKSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIChkdC5nZXRNb250aCgpICsgMSkgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICBkdC5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeToge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkRhc2hib2FyZFwiKTtcbiAgICBpZiAodGhpcy5wcm9wcy5jb21wYW55ICE9PSBcInNwNTAwXCIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55OiB0aGlzLnByb3BzLmNvbXBhbnkgfSwgKCkgPT4ge1xuICAgICAgICBheGlvc1xuICAgICAgICAgIC5nZXQoXCIvYXBpL3N0b2NrZGV0YWlscz9jb21wYW55PVwiICsgdGhpcy5zdGF0ZS5jb21wYW55KVxuICAgICAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogcy5kYXRhLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IHt9KVxuICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiB0cnVlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueTogdGhpcy5wcm9wcy5jb21wYW55IH0sICgpID0+IHtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAuZ2V0KFwiL2FwaS9zcDUwMFwiKVxuICAgICAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogcy5kYXRhLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiB0cnVlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjcmVhdGVHcmFwaCA9IChkYXlzKSA9PiB7XG4gICAgbGV0IGNsb3NlUHJpY2VEYXRhID0ge1xuICAgICAgbmFtZTogXCJDbG9zZSBQcmljZVwiLFxuICAgICAgZGF0YTogW10sXG4gICAgfTtcbiAgICBsZXQgb3BlblByaWNlRGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiT3BlbiBQcmljZVwiLFxuICAgICAgZGF0YTogW10sXG4gICAgfTtcbiAgICBsZXQgaGlnaFByaWNlRGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiSGlnaCBQcmljZVwiLFxuICAgICAgZGF0YTogW10sXG4gICAgfTtcbiAgICBsZXQgbG93UHJpY2VEYXRhID0ge1xuICAgICAgbmFtZTogXCJMb3cgUHJpY2VcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG5cbiAgICBkYXlzID1cbiAgICAgIGRheXMgPT09IFwiYWxsXCJcbiAgICAgICAgPyB0aGlzLnN0YXRlLmRldGFpbHMubGVuZ3RoIC0gMVxuICAgICAgICA6IGRheXMgPiB0aGlzLnN0YXRlLmRldGFpbHMubGVuZ3RoIC0gMVxuICAgICAgICA/IHRoaXMuc3RhdGUuZGV0YWlscy5sZW5ndGggLSAxXG4gICAgICAgIDogZGF5cztcbiAgICBjb25zdCB0b0RhdGUgPSB0aGlzLnN0YXRlLmRldGFpbHNbMF1bXCJEYXRlXCJdO1xuICAgIGNvbnN0IGZyb21EYXRlID0gdGhpcy5zdGF0ZS5kZXRhaWxzW2RheXNdW1wiRGF0ZVwiXTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5zdGF0ZS5kZXRhaWxzLnNsaWNlKDAsIGRheXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFbaV07XG4gICAgICBjbG9zZVByaWNlRGF0YS5kYXRhLnB1c2goe1xuICAgICAgICB4OiBlbGVtZW50W1wiRGF0ZVwiXSxcbiAgICAgICAgeTogZWxlbWVudFtcIkNsb3NlIFByaWNlXCJdIHx8IGVsZW1lbnRbXCJDbG9zZVwiXSxcbiAgICAgIH0pO1xuXG4gICAgICBvcGVuUHJpY2VEYXRhLmRhdGEucHVzaCh7XG4gICAgICAgIHg6IGVsZW1lbnRbXCJEYXRlXCJdLFxuICAgICAgICB5OiBlbGVtZW50W1wiT3BlbiBQcmljZVwiXSB8fCBlbGVtZW50W1wiT3BlblwiXSxcbiAgICAgIH0pO1xuXG4gICAgICBoaWdoUHJpY2VEYXRhLmRhdGEucHVzaCh7XG4gICAgICAgIHg6IGVsZW1lbnRbXCJEYXRlXCJdLFxuICAgICAgICB5OiBlbGVtZW50W1wiSGlnaCBQcmljZVwiXSB8fCBlbGVtZW50W1wiSGlnaFwiXSxcbiAgICAgIH0pO1xuXG4gICAgICBsb3dQcmljZURhdGEuZGF0YS5wdXNoKHtcbiAgICAgICAgeDogZWxlbWVudFtcIkRhdGVcIl0sXG4gICAgICAgIHk6IGVsZW1lbnRbXCJMb3cgUHJpY2VcIl0gfHwgZWxlbWVudFtcIkxvd1wiXSxcbiAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLnN0YXRlLm9wdGlvbnM7XG4gICAgb3B0aW9ucy54YXhpc1tcIm1pblwiXSA9IGZyb21EYXRlO1xuICAgIG9wdGlvbnMueGF4aXNbXCJtYXhcIl0gPSB0b0RhdGU7XG4gICAgY29uc3Qgc2VyaWVzID0gW107XG4gICAgc2VyaWVzLnB1c2goY2xvc2VQcmljZURhdGEpO1xuICAgIHNlcmllcy5wdXNoKG9wZW5QcmljZURhdGEpO1xuICAgIHNlcmllcy5wdXNoKGhpZ2hQcmljZURhdGEpO1xuICAgIHNlcmllcy5wdXNoKGxvd1ByaWNlRGF0YSk7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiBzZXJpZXMsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge31cbiAgICApO1xuICB9O1xuXG4gIHNlbGVjdGVkUGVyaW9kID0gKGUpID0+IHtcbiAgICBjb25zdCBkYXlzID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUGVyaW9kID09PSBkYXlzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFBlcmlvZDogZGF5cyB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUdyYXBoKGRheXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJUaHJlZURvdHNcIiBjb2xvcj1cIiMwNTM4NkJcIiBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yICE9PSB0cnVlICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8QnV0dG9uR3JvdXBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uZ3JvdXB9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNvbnRhaW5lZCBwcmltYXJ5IGJ1dHRvbiBncm91cFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiN1wiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9IHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgICAgN0RcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiMzBcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfSBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICAgIDFNXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjkwXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0gc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgICAzTVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCIxODBcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfSBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICAgIDZNXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjM2MFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9IHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgICAgMVlcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiMTgwMFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9IHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgICAgNVlcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiYWxsXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0gc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgICBBbGxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5kaXZjaGFydH0+XG4gICAgICAgICAgICAgIDxDaGFydCBcbiAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5vcHRpb25zfSBcbiAgICAgICAgICAgICAgc2VyaWVzPXt0aGlzLnN0YXRlLnNlcmllc31cbiAgICAgICAgICAgICAga2V5ID0gXCJjaGFydFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmNoYXJ0fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyB3aXRoVGhlbWU6IHRydWUgfSkoRGFzaGJvYXJkKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=