self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Components/Top.jsx":
/*!**********************************!*\
  !*** ./pages/Components/Top.jsx ***!
  \**********************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Top.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var styles = function styles(theme) {
  return {
    paper: {
      "&:hover": {
        color: "blue"
      }
    }
  };
};

var Top = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Top, _React$Component);

  var _super = _createSuper(Top);

  function Top(props) {
    var _this;

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Top);

    _this = _super.call(this, props);

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "componentDidMount", function () {
      console.log("Top");
      console.log(_this.props);
      var match = _this.props.match;
      var _match$params = match.params,
          num = _match$params.num,
          type = _match$params.type;

      _this.setState({
        num: num,
        type: type,
        loading: true
      }, function () {});

      var params = "num=" + num + "&" + "type=" + type;
      console.log(params);
      axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/topbuysell?" + params).then(function (s) {
        if (s.status === 200) {
          var companyStockDetails = s.data;
          companyStockDetails = companyStockDetails.slice(0, num);
          var topCompanies = [];

          for (var index = 0; index < companyStockDetails.length; index++) {
            var element = companyStockDetails[index];
            console.log(element);
            topCompanies.push(element["company"]);
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
      loading: false,
      num: 10,
      type: "buy",
      topCompanies: []
    };
    return _this;
  }

  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Top, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), {
        children: this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_10__.default, {
          type: "ThreeDots",
          color: "#05386B",
          height: 80,
          width: 80
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Paper, {
            elevation: 0,
            style: {
              display: "flex",
              padding: "15px",
              margin: "15px",
              justifyContent: "center",
              backgroundColor: "#05386B"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Typography, {
              variant: "subtitle1",
              style: {
                color: "#5CDB95"
              },
              children: ["Top ", this.state.num, " Companies for", " ", this.state.type === "buy" ? "Investing" : "Trading"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
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
                  margin: "10px"
                },
                className: classes.paper,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                  variant: "subtitle2",
                  children: company
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 21
                }, _this2)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 19
              }, _this2)
            }, (0,uuid__WEBPACK_IMPORTED_MODULE_13__.v4)(), false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, _this2);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }, this);
    }
  }]);

  return Top;
}((react__WEBPACK_IMPORTED_MODULE_9___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (withStyles(styles, {
  withTheme: true
})(Top));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9Ub3AuanN4Il0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJjb2xvciIsIlRvcCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIm1hdGNoIiwicGFyYW1zIiwibnVtIiwidHlwZSIsInNldFN0YXRlIiwibG9hZGluZyIsImF4aW9zIiwidGhlbiIsInMiLCJzdGF0dXMiLCJjb21wYW55U3RvY2tEZXRhaWxzIiwiZGF0YSIsInNsaWNlIiwidG9wQ29tcGFuaWVzIiwiaW5kZXgiLCJsZW5ndGgiLCJlbGVtZW50IiwicHVzaCIsImUiLCJzdGF0ZSIsImNsYXNzZXMiLCJkaXNwbGF5IiwicGFkZGluZyIsIm1hcmdpbiIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwiY29tcGFueSIsInRleHREZWNvcmF0aW9uIiwicGF0aG5hbWUiLCJ1dWlkdjQiLCJSZWFjdCIsIndpdGhTdHlsZXMiLCJ3aXRoVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxTQUFLLEVBQUc7QUFDTixpQkFBVztBQUNUQyxhQUFLLEVBQUU7QUFERTtBQURMO0FBRGlCLEdBQVo7QUFBQSxDQUFmOztJQVFNQyxHOzs7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLG9VQVVDLFlBQU07QUFDeEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0YsS0FBakI7QUFGd0IsVUFHaEJHLEtBSGdCLEdBR04sTUFBS0gsS0FIQyxDQUdoQkcsS0FIZ0I7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InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk5OGNhNjhkMTkxN2Y5NDFiZjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IGNsYXNzbmFtZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZFwiO1xuXG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcGFwZXIgOiB7XG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmNsYXNzIFRvcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIG51bTogMTAsXG4gICAgICB0eXBlOiBcImJ1eVwiLFxuICAgICAgdG9wQ29tcGFuaWVzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJUb3BcIik7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gICAgY29uc3QgeyBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG51bSwgdHlwZSB9ID0gbWF0Y2gucGFyYW1zO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBudW06IG51bSwgdHlwZTogdHlwZSwgbG9hZGluZzogdHJ1ZSB9LCAoKSA9PiB7fSk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBcbiAgICBcIm51bT1cIiArIG51bSArXG4gICAgXCImXCIgKyBcbiAgICBcInR5cGU9XCIgKyB0eXBlO1xuXG4gICAgY29uc29sZS5sb2cocGFyYW1zKTtcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS90b3BidXlzZWxsP1wiICsgcGFyYW1zKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgY29tcGFueVN0b2NrRGV0YWlscyA9IHMuZGF0YTtcbiAgICAgICAgICBjb21wYW55U3RvY2tEZXRhaWxzID0gY29tcGFueVN0b2NrRGV0YWlscy5zbGljZSgwLCBudW0pO1xuICAgICAgICAgIGxldCB0b3BDb21wYW5pZXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcGFueVN0b2NrRGV0YWlscy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb21wYW55U3RvY2tEZXRhaWxzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgdG9wQ29tcGFuaWVzLnB1c2goZWxlbWVudFtcImNvbXBhbnlcIl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgeyB0b3BDb21wYW5pZXM6IHRvcENvbXBhbmllcywgbG9hZGluZzogZmFsc2UgfSxcbiAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9wQ29tcGFuaWVzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9wQ29tcGFuaWVzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICBcbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJUaHJlZURvdHNcIiBjb2xvcj1cIiMwNTM4NkJcIiBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICBUb3Age3RoaXMuc3RhdGUubnVtfSBDb21wYW5pZXMgZm9ye1wiIFwifVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnR5cGUgPT09IFwiYnV5XCIgPyBcIkludmVzdGluZ1wiIDogXCJUcmFkaW5nXCJ9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS50b3BDb21wYW5pZXMubWFwKChjb21wYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAga2V5PXt1dWlkdjQoKX1cbiAgICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9jb21wYW55ZGV0YWlscy9cIiArIGNvbXBhbnksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgbWFyZ2luOiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7IGNsYXNzZXMucGFwZXIgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+e2NvbXBhbnl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgd2l0aFRoZW1lOiB0cnVlIH0pKFRvcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9