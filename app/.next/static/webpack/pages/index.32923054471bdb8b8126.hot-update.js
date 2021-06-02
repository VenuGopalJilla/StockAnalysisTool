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

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), {
        children: this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_10__.default, {
          type: "ThreeDots",
          color: "#05386B",
          height: 80,
          width: 80
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
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
              color: "primary",
              children: ["Top ", this.state.num, " Companies Revenue wise"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
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
                elevation: 1,
                style: {
                  display: "flex",
                  padding: "10px",
                  margin: "10px"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                  variant: "h6",
                  children: company
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 21
                }, _this2)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, _this2)
            }, (0,uuid__WEBPACK_IMPORTED_MODULE_13__.v4)(), false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, _this2);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9SZXZlbnVlLmpzeCJdLCJuYW1lcyI6WyJSZXZlbnVlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJ0aGVuIiwicyIsInN0YXR1cyIsImNvbXBhbnlTdG9ja0RldGFpbHMiLCJkYXRhIiwic29ydCIsImEiLCJiIiwic2xpY2UiLCJzdGF0ZSIsIm51bSIsInRvcENvbXBhbmllcyIsImluZGV4IiwibGVuZ3RoIiwiZWxlbWVudCIsInB1c2giLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJlIiwiZGlzcGxheSIsInBhZGRpbmciLCJtYXJnaW4iLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFwIiwiY29tcGFueSIsInRleHREZWNvcmF0aW9uIiwicGF0aG5hbWUiLCJ1dWlkdjQiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxPOzs7OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixvVUFTQyxZQUFNO0FBQ3hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FDLHNEQUFBLENBQ08sOEJBRFAsRUFFR0MsSUFGSCxDQUVRLFVBQUNDLENBQUQsRUFBTztBQUNYLFlBQUlBLENBQUMsQ0FBQ0MsTUFBRixLQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLGNBQUlDLG1CQUFtQixHQUFHRixDQUFDLENBQUNHLElBQTVCO0FBQ0FELDZCQUFtQixDQUFDRSxJQUFwQixDQUF5QixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNqQyxtQkFBT0QsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxHQUFlQyxDQUFDLENBQUMsU0FBRCxDQUF2QjtBQUNELFdBRkQ7QUFHQUosNkJBQW1C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QUVPRyx5Q0FBTSxFQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREY7QUFnQkQsV0FqQkEsQ0FoQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBMkNEOzs7O0VBcEZtQkMsd0Q7O0FBdUZ0QiwrREFBZW5DLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzI5MjMwNTQ0NzFiZGI4YjgxMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuXG5jbGFzcyBSZXZlbnVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvcENvbXBhbmllczogW10sXG4gICAgICBudW06IDMwLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSZXZlbnVlXCIpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9wcmV2aW91c2RheXN0b2NrZGV0YWlsc1wiKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgY29tcGFueVN0b2NrRGV0YWlscyA9IHMuZGF0YTtcbiAgICAgICAgICBjb21wYW55U3RvY2tEZXRhaWxzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhW1wiUmV2ZW51ZVwiXSAtIGJbXCJSZXZlbnVlXCJdO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbXBhbnlTdG9ja0RldGFpbHMgPSBjb21wYW55U3RvY2tEZXRhaWxzLnNsaWNlKDAsIHRoaXMuc3RhdGUubnVtKTtcbiAgICAgICAgICBsZXQgdG9wQ29tcGFuaWVzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXBhbnlTdG9ja0RldGFpbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY29tcGFueVN0b2NrRGV0YWlsc1tpbmRleF07XG4gICAgICAgICAgICB0b3BDb21wYW5pZXMucHVzaChlbGVtZW50W1wiQ29tcGFueVwiXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7IHRvcENvbXBhbmllczogdG9wQ29tcGFuaWVzLCBsb2FkaW5nOiBmYWxzZSB9LFxuICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3BDb21wYW5pZXM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3BDb21wYW5pZXM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJUaHJlZURvdHNcIiBjb2xvcj1cIiMwNTM4NkJcIiBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgICAgY29sb3IgOiBcIiM1Q0RCOTVcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgVG9wIHt0aGlzLnN0YXRlLm51bX0gQ29tcGFuaWVzIFJldmVudWUgd2lzZVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUudG9wQ29tcGFuaWVzLm1hcCgoY29tcGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgIGtleT17dXVpZHY0KCl9XG4gICAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvY29tcGFueWRldGFpbHMvXCIgKyBjb21wYW55LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPXsxfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIG1hcmdpbjogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2NvbXBhbnl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXZlbnVlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==