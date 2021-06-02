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

/* harmony default export */ __webpack_exports__["default"] = (Top);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9Ub3AuanN4Il0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJjb2xvciIsIlRvcCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIm1hdGNoIiwicGFyYW1zIiwibnVtIiwidHlwZSIsInNldFN0YXRlIiwibG9hZGluZyIsImF4aW9zIiwidGhlbiIsInMiLCJzdGF0dXMiLCJjb21wYW55U3RvY2tEZXRhaWxzIiwiZGF0YSIsInNsaWNlIiwidG9wQ29tcGFuaWVzIiwiaW5kZXgiLCJsZW5ndGgiLCJlbGVtZW50IiwicHVzaCIsImUiLCJzdGF0ZSIsImNsYXNzZXMiLCJkaXNwbGF5IiwicGFkZGluZyIsIm1hcmdpbiIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwiY29tcGFueSIsInRleHREZWNvcmF0aW9uIiwicGF0aG5hbWUiLCJ1dWlkdjQiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFNBQUssRUFBRztBQUNOLGlCQUFXO0FBQ1RDLGFBQUssRUFBRTtBQURFO0FBREw7QUFEaUIsR0FBWjtBQUFBLENBQWY7O0lBUU1DLEc7Ozs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsb1VBVUMsWUFBTTtBQUN4QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFLRixLQUFqQjtBQUZ3QixVQUdoQkcsS0FIZ0IsR0FHTixNQUFLSCxLQUhDLENBR2hCRyxLQUhnQjtBQUFBLDBCQUlGQSxLQUFLLENBQUNDLE1B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QXpDO0FBQUEsaUNBQ08sS0FBS3dCLEtBQUwsQ0FBV2pCLEdBRGxCLG9CQUNxQyxHQURyQyxFQUVHLEtBQUtpQixLQUFMLENBQVdoQixJQUFYLEtBQW9CLEtBQXBCLEdBQTRCLFdBQTVCLEdBQTBDLFNBRjdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFnQkcsS0FBS2dCLEtBQUwsQ0FBV04sWUFBWCxDQUF3QmEsR0FBeEIsQ0FBNEIsVUFBQ0MsT0FBRCxFQUFhO0FBQ3hDLGdDQUNFLDhEQUFDLHNEQUFEO0FBQ0UsbUJBQUssRUFBRTtBQUFFQyw4QkFBYyxFQUFFO0FBQWxCLGVBRFQ7QUFHRSxnQkFBRSxFQUFFO0FBQ0ZDLHdCQUFRLEVBQUUscUJBQXFCRjtBQUQ3QixlQUhOO0FBQUEscUNBT0UsOERBQUMscURBQUQ7QUFDRSx5QkFBUyxFQUFFLENBRGI7QUFFRSxxQkFBSyxFQUFFO0FBQUVOLHlCQUFPLEVBQUUsTUFBWDtBQUFtQkMseUJBQU8sRUFBRSxNQUE1QjtBQUFvQ0Msd0JBQU0sRUFBRTtBQUE1QyxpQkFGVDtBQUdFLHlCQUFTLEVBQUtILE9BQU8sQ0FBQzFCLEtBSHhCO0FBQUEsdUNBS0UsOERBQUMsMERBQUQ7QUFBWSx5QkFBTyxFQUFDLFdBQXBCO0FBQUEsNEJBQWlDaUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixlQUVPRyx5Q0FBTSxFQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREY7QUFpQkQsV0FsQkEsQ0FoQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBOENEOzs7O0VBbkdlQyx3RDs7QUFzR2xCLCtEQUFlbkMsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZjIxNWViNzhlZmI5ZGZiZmY4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBjbGFzc25hbWVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIjtcblxuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHBhcGVyIDoge1xuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBUb3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBudW06IDEwLFxuICAgICAgdHlwZTogXCJidXlcIixcbiAgICAgIHRvcENvbXBhbmllczogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiVG9wXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IHsgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBudW0sIHR5cGUgfSA9IG1hdGNoLnBhcmFtcztcbiAgICB0aGlzLnNldFN0YXRlKHsgbnVtOiBudW0sIHR5cGU6IHR5cGUsIGxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge30pO1xuXG4gICAgY29uc3QgcGFyYW1zID0gXG4gICAgXCJudW09XCIgKyBudW0gK1xuICAgIFwiJlwiICsgXG4gICAgXCJ0eXBlPVwiICsgdHlwZTtcblxuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgICBheGlvc1xuICAgICAgLmdldChcIi9hcGkvdG9wYnV5c2VsbD9cIiArIHBhcmFtcylcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgbGV0IGNvbXBhbnlTdG9ja0RldGFpbHMgPSBzLmRhdGE7XG4gICAgICAgICAgY29tcGFueVN0b2NrRGV0YWlscyA9IGNvbXBhbnlTdG9ja0RldGFpbHMuc2xpY2UoMCwgbnVtKTtcbiAgICAgICAgICBsZXQgdG9wQ29tcGFuaWVzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXBhbnlTdG9ja0RldGFpbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY29tcGFueVN0b2NrRGV0YWlsc1tpbmRleF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgICAgIHRvcENvbXBhbmllcy5wdXNoKGVsZW1lbnRbXCJjb21wYW55XCJdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHsgdG9wQ29tcGFuaWVzOiB0b3BDb21wYW5pZXMsIGxvYWRpbmc6IGZhbHNlIH0sXG4gICAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcENvbXBhbmllczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcENvbXBhbmllczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgXG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlciB0eXBlPVwiVGhyZWVEb3RzXCIgY29sb3I9XCIjMDUzODZCXCIgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfS8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgVG9wIHt0aGlzLnN0YXRlLm51bX0gQ29tcGFuaWVzIGZvcntcIiBcIn1cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50eXBlID09PSBcImJ1eVwiID8gXCJJbnZlc3RpbmdcIiA6IFwiVHJhZGluZ1wifVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUudG9wQ29tcGFuaWVzLm1hcCgoY29tcGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgIGtleT17dXVpZHY0KCl9XG4gICAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvY29tcGFueWRldGFpbHMvXCIgKyBjb21wYW55LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIG1hcmdpbjogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0geyBjbGFzc2VzLnBhcGVyIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPntjb21wYW55fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIFxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=