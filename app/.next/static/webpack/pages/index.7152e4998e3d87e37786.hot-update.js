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
                elevation: 0,
                style: {
                  display: "flex",
                  padding: "10px",
                  margin: "10px",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#15DB95",
                    color: "#0D19A3"
                  }
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                  variant: "subtitle2",
                  children: company
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9SZXZlbnVlLmpzeCJdLCJuYW1lcyI6WyJSZXZlbnVlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJ0aGVuIiwicyIsInN0YXR1cyIsImNvbXBhbnlTdG9ja0RldGFpbHMiLCJkYXRhIiwic29ydCIsImEiLCJiIiwic2xpY2UiLCJzdGF0ZSIsIm51bSIsInRvcENvbXBhbmllcyIsImluZGV4IiwibGVuZ3RoIiwiZWxlbWVudCIsInB1c2giLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJlIiwiZGlzcGxheSIsInBhZGRpbmciLCJtYXJnaW4iLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFwIiwiY29tcGFueSIsInRleHREZWNvcmF0aW9uIiwicGF0aG5hbWUiLCJ1dWlkdjQiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxPOzs7OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixvVUFTQyxZQUFNO0FBQ3hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FDLHNEQUFBLENBQ08sOEJBRFAsRUFFR0MsSUFGSCxDQUVRLFVBQUNDLENBQUQsRUFBTztBQUNYLFlBQUlBLENBQUMsQ0FBQ0MsTUFBRixLQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLGNBQUlDLG1CQUFtQixHQUFHRixDQUFDLENBQUNHLElBQTVCO0FBQ0FELDZCQUFtQixDQUFDRSxJQUFwQixDQUF5QixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNqQyxtQkFBT0QsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxHQUFlQyxDQUFDLENBQUMsU0FBRCxDQUF2QjtBQUNELFdBRkQ7QUFHQUosNkJBQW1C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a0NFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEYsZUFFT0cseUNBQU0sRUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGO0FBcUJELFdBdEJBLENBaEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWdERDs7OztFQXpGbUJDLHdEOztBQTRGdEIsK0RBQWVuQyxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcxNTJlNDk5OGUzZDg3ZTM3Nzg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcblxuY2xhc3MgUmV2ZW51ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b3BDb21wYW5pZXM6IFtdLFxuICAgICAgbnVtOiAzMCxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUmV2ZW51ZVwiKTtcbiAgICBheGlvc1xuICAgICAgLmdldChcIi9hcGkvcHJldmlvdXNkYXlzdG9ja2RldGFpbHNcIilcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgbGV0IGNvbXBhbnlTdG9ja0RldGFpbHMgPSBzLmRhdGE7XG4gICAgICAgICAgY29tcGFueVN0b2NrRGV0YWlscy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYVtcIlJldmVudWVcIl0gLSBiW1wiUmV2ZW51ZVwiXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb21wYW55U3RvY2tEZXRhaWxzID0gY29tcGFueVN0b2NrRGV0YWlscy5zbGljZSgwLCB0aGlzLnN0YXRlLm51bSk7XG4gICAgICAgICAgbGV0IHRvcENvbXBhbmllcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wYW55U3RvY2tEZXRhaWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNvbXBhbnlTdG9ja0RldGFpbHNbaW5kZXhdO1xuICAgICAgICAgICAgdG9wQ29tcGFuaWVzLnB1c2goZWxlbWVudFtcIkNvbXBhbnlcIl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgeyB0b3BDb21wYW5pZXM6IHRvcENvbXBhbmllcywgbG9hZGluZzogZmFsc2UgfSxcbiAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9wQ29tcGFuaWVzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9wQ29tcGFuaWVzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlciB0eXBlPVwiVGhyZWVEb3RzXCIgY29sb3I9XCIjMDUzODZCXCIgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfS8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yIDogXCIjNUNEQjk1XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxuICAgICAgICAgICAgICAgIFRvcCB7dGhpcy5zdGF0ZS5udW19IENvbXBhbmllcyBSZXZlbnVlIHdpc2VcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvcENvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2NvbXBhbnlkZXRhaWxzL1wiICsgY29tcGFueSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBtYXJnaW46IFwiMTBweFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE1REI5NVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwRDE5QTNcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiA+e2NvbXBhbnl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXZlbnVlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==