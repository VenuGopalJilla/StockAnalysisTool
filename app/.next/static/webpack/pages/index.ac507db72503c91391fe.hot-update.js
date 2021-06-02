self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Components/Revenue.jsx":
/*!**************************************!*\
  !*** ./pages/Components/Revenue.jsx ***!
  \**************************************/
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Revenue.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var styles = function styles(theme) {
  return {
    paper: {
      "&:hover": {
        backgroundColor: "#5CDB95",
        color: "#05386B"
      }
    }
  };
};

var Revenue = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Revenue, _React$Component);

  var _super = _createSuper(Revenue);

  function Revenue(props) {
    var _this;

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Revenue);

    _this = _super.call(this, props);

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "componentDidMount", function () {
      console.log("Revenue");
      axios__WEBPACK_IMPORTED_MODULE_9___default().get("/api/previousdaystockdetails").then(function (s) {
        if (s.status === 200) {
          var companyStockDetails = s.data;
          companyStockDetails.sort(function (a, b) {
            return a["Revenue"] - b["Revenue"];
          });
          companyStockDetails = companyStockDetails.slice(0, _this.state.num);
          var topCompanies = [];

          for (var index = 0; index < companyStockDetails.length; index++) {
            var element = companyStockDetails[index];
            topCompanies.push(element["Company"]);
          }

          _this.setState({
            topCompanies: topCompanies,
            loading: false
          }, function () {});
        } else {
          _this.setState({
            topCompanies: [],
            loading: false
          }, function () {});
        }
      })["catch"](function (e) {
        console.log(e);

        _this.setState({
          topCompanies: [],
          loading: false
        }, function () {});
      });
    });

    _this.state = {
      topCompanies: [],
      num: 30,
      loading: true
    };
    return _this;
  }

  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Revenue, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), {
        children: this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_10__.default, {
          type: "ThreeDots",
          color: "#05386B",
          height: 80,
          width: 80
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Paper, {
            elevation: 0,
            style: {
              display: "flex",
              padding: "15px",
              margin: "15px",
              justifyContent: "center",
              backgroundColor: "#05386B",
              color: "#5CDB95"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Typography, {
              variant: "subtitle1",
              children: ["Top ", this.state.num, " Companies Revenue wise"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this), this.state.topCompanies.map(function (company) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.NavLink, {
              style: {
                textDecoration: "none"
              },
              to: {
                pathname: "/companydetails/" + company
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Paper, {
                elevation: 0,
                style: {
                  display: "flex",
                  padding: "10px",
                  margin: "10px",
                  justifyContent: "center"
                },
                className: classes.paper,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                  variant: "subtitle2",
                  children: company
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 21
                }, _this2)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, _this2)
            }, (0,uuid__WEBPACK_IMPORTED_MODULE_13__.v4)(), false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, _this2);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, this);
    }
  }]);

  return Revenue;
}((react__WEBPACK_IMPORTED_MODULE_8___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (Revenue);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9SZXZlbnVlLmpzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJSZXZlbnVlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJ0aGVuIiwicyIsInN0YXR1cyIsImNvbXBhbnlTdG9ja0RldGFpbHMiLCJkYXRhIiwic29ydCIsImEiLCJiIiwic2xpY2UiLCJzdGF0ZSIsIm51bSIsInRvcENvbXBhbmllcyIsImluZGV4IiwibGVuZ3RoIiwiZWxlbWVudCIsInB1c2giLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJlIiwiY2xhc3NlcyIsImRpc3BsYXkiLCJwYWRkaW5nIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJtYXAiLCJjb21wYW55IiwidGV4dERlY29yYXRpb24iLCJwYXRobmFtZSIsInV1aWR2NCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsU0FBSyxFQUFHO0FBQ04saUJBQVc7QUFDVEMsdUJBQWUsRUFBRSxTQURSO0FBRVRDLGFBQUssRUFBRTtBQUZFO0FBREw7QUFEaUIsR0FBWjtBQUFBLENBQWY7O0lBU01DLE87Ozs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLG9VQVNDLFlBQU07QUFDeEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQUMsc0RBQUEsQ0FDTyw4QkFEUCxFQUVHQyxJQUZILENBRVEsVUFBQ0MsQ0FBRCxFQUFPO0FBQ1gsWUFBSUEsQ0FBQyxDQUFDQyxNQUFGLEtBQWEsR0FB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QUUsQ0FEYjtBQUVFLHFCQUFLLEVBQUU7QUFBRUwseUJBQU8sRUFBRSxNQUFYO0FBQW1CQyx5QkFBTyxFQUFFLE1BQTVCO0FBQW9DQyx3QkFBTSxFQUFFLE1BQTVDO0FBQW9EQyxnQ0FBYyxFQUFFO0FBQXBFLGlCQUZUO0FBR0UseUJBQVMsRUFBS0osT0FBTyxDQUFDM0IsS0FIeEI7QUFBQSx1Q0FLRSw4REFBQywwREFBRDtBQUFZLHlCQUFPLEVBQUMsV0FBcEI7QUFBQSw0QkFBa0NpQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGLGVBRU9HLHlDQUFNLEVBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERjtBQWlCRCxXQWxCQSxDQWhCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUE0Q0Q7Ozs7RUF0Rm1CQyx3RDs7QUF5RnRCLCtEQUFlbEMsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYzUwN2RiNzI1MDNjOTEzOTFmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBHUklEX0hFQURFUl9DRUxMX1NFUEFSQVRPUl9SRVNJWkFCTEVfQ1NTX0NMQVNTIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIjtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBwYXBlciA6IHtcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICAgIGNvbG9yOiBcIiMwNTM4NkJcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmNsYXNzIFJldmVudWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdG9wQ29tcGFuaWVzOiBbXSxcbiAgICAgIG51bTogMzAsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlJldmVudWVcIik7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3ByZXZpb3VzZGF5c3RvY2tkZXRhaWxzXCIpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBjb21wYW55U3RvY2tEZXRhaWxzID0gcy5kYXRhO1xuICAgICAgICAgIGNvbXBhbnlTdG9ja0RldGFpbHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFbXCJSZXZlbnVlXCJdIC0gYltcIlJldmVudWVcIl07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29tcGFueVN0b2NrRGV0YWlscyA9IGNvbXBhbnlTdG9ja0RldGFpbHMuc2xpY2UoMCwgdGhpcy5zdGF0ZS5udW0pO1xuICAgICAgICAgIGxldCB0b3BDb21wYW5pZXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcGFueVN0b2NrRGV0YWlscy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb21wYW55U3RvY2tEZXRhaWxzW2luZGV4XTtcbiAgICAgICAgICAgIHRvcENvbXBhbmllcy5wdXNoKGVsZW1lbnRbXCJDb21wYW55XCJdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHsgdG9wQ29tcGFuaWVzOiB0b3BDb21wYW5pZXMsIGxvYWRpbmc6IGZhbHNlIH0sXG4gICAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcENvbXBhbmllczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcENvbXBhbmllczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJUaHJlZURvdHNcIiBjb2xvcj1cIiMwNTM4NkJcIiBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgICAgY29sb3IgOiBcIiM1Q0RCOTVcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XG4gICAgICAgICAgICAgICAgVG9wIHt0aGlzLnN0YXRlLm51bX0gQ29tcGFuaWVzIFJldmVudWUgd2lzZVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUudG9wQ29tcGFuaWVzLm1hcCgoY29tcGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgIGtleT17dXVpZHY0KCl9XG4gICAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvY29tcGFueWRldGFpbHMvXCIgKyBjb21wYW55LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIG1hcmdpbjogXCIxMHB4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7IGNsYXNzZXMucGFwZXIgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgPntjb21wYW55fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmV2ZW51ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=