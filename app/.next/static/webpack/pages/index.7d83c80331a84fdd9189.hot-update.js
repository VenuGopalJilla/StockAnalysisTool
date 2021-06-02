self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Components/NavigationBar.jsx":
/*!********************************************!*\
  !*** ./pages/Components/NavigationBar.jsx ***!
  \********************************************/
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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\NavigationBar.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    link: {
      textDecoration: "initial"
    },
    grid: {// "&:hover": {
      //   backgroundColor: "#ADD8E0",
      // },
    },
    typography: {
      padding: 20,
      fontSize: 24
    }
  };
};

var NavigationBar = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(NavigationBar, _React$Component);

  var _super = _createSuper(NavigationBar);

  function NavigationBar(props) {
    var _this;

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, NavigationBar);

    _this = _super.call(this, props);

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "selectedCompany", function (e, val) {
      var history = _this.props.history;

      if (val === null) {
        history.push("/");
        return;
      }

      _this.setState({
        selectedCompany: val
      }, function () {
        history.push("/companydetails/" + _this.state.selectedCompany);
      });
    });

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "componentDidMount", function () {
      console.log("NavigationBar");
      axios__WEBPACK_IMPORTED_MODULE_9___default().get("/api/companyNames").then(function (s) {
        if (s.status === 200) {
          _this.setState({
            companyNames: s.data
          });
        } else {
          _this.setState({
            companyNames: []
          });
        }
      })["catch"](function (e) {
        return console.log(e);
      });
    });

    _this.state = {
      selectedCompany: " ",
      companyNames: []
    };
    return _this;
  }

  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(NavigationBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
        container: true,
        className: classes.root,
        spacing: 1,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          item: true,
          className: classes.grid,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: "/",
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
              className: classes.typography,
              variant: "button",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          item: true,
          className: classes.grid,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: "/about",
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
              className: classes.typography,
              variant: "button",
              children: "About"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          item: true,
          className: classes.grid,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: "/comparison",
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
              className: classes.typography,
              variant: "button",
              children: "Comparison"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          item: true,
          className: classes.grid,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: "/simulation",
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
              className: classes.typography,
              variant: "button",
              children: "Simulation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          item: true,
          className: classes.grid,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_13__.default, {
            style: {
              width: "300px",
              color: "#05386B"
            } // value={this.state.selectedCompany}
            ,
            onChange: function onChange(e, val) {
              _this2.selectedCompany(e, val);
            },
            id: "search for companies",
            freeSolo: true,
            options: this.state.companyNames.map(function (companyname) {
              return companyname;
            }),
            renderInput: function renderInput(params) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__.default, _objectSpread(_objectSpread({}, params), {}, {
                label: "search for companies",
                margin: "normal",
                variant: "outlined",
                color: "#05386B"
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 15
              }, _this2);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }, this);
    }
  }]);

  return NavigationBar;
}((react__WEBPACK_IMPORTED_MODULE_8___default().Component));

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__.withStyles)(styles)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.withRouter)(NavigationBar)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImdyaWQiLCJ0eXBvZ3JhcGh5IiwicGFkZGluZyIsImZvbnRTaXplIiwiTmF2aWdhdGlvbkJhciIsInByb3BzIiwiZSIsInZhbCIsImhpc3RvcnkiLCJwdXNoIiwic2V0U3RhdGUiLCJzZWxlY3RlZENvbXBhbnkiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInRoZW4iLCJzIiwic3RhdHVzIiwiY29tcGFueU5hbWVzIiwiZGF0YSIsImNsYXNzZXMiLCJ3aWR0aCIsIm1hcCIsImNvbXBhbnluYW1lIiwicGFyYW1zIiwiUmVhY3QiLCJ3aXRoU3R5bGVzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRG1CO0FBSXpCQyxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFLFFBRE47QUFFTEMsV0FBSyxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFGckIsS0FKa0I7QUFRekJDLFFBQUksRUFBRTtBQUNKQyxvQkFBYyxFQUFFO0FBRFosS0FSbUI7QUFXekJDLFFBQUksRUFBRSxDQUNKO0FBQ0E7QUFDQTtBQUhJLEtBWG1CO0FBZ0J6QkMsY0FBVSxFQUFFO0FBQ1ZDLGFBQU8sRUFB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QWlCQSxXQUFqQjtBQUFBLGFBQTVCLENBWFg7QUFZRSx1QkFBVyxFQUFFLHFCQUFDQyxNQUFEO0FBQUEsa0NBQ1gsOERBQUMsaUVBQUQsa0NBQ01BLE1BRE47QUFFRSxxQkFBSyxFQUFDLHNCQUZSO0FBR0Usc0JBQU0sRUFBQyxRQUhUO0FBSUUsdUJBQU8sRUFBQyxVQUpWO0FBS0UscUJBQUssRUFBQztBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRFc7QUFBQTtBQVpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQTBFRDs7OztFQTNHeUJDLHdEOztBQTZHNUIsK0RBQWVDLHFFQUFVLENBQUN2QyxNQUFELENBQVYsQ0FBbUJ3Qyw2REFBVSxDQUFDeEIsYUFBRCxDQUE3QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdkODNjODAzMzFhODRmZGQ5MTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICB9LFxuICBsaW5rOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwiaW5pdGlhbFwiLFxuICB9LFxuICBncmlkOiB7XG4gICAgLy8gXCImOmhvdmVyXCI6IHtcbiAgICAvLyAgIGJhY2tncm91bmRDb2xvcjogXCIjQUREOEUwXCIsXG4gICAgLy8gfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIHBhZGRpbmc6IDIwLFxuICAgIGZvbnRTaXplIDogMjQsXG4gIH0sXG59KTtcblxuY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNlbGVjdGVkQ29tcGFueTogXCIgXCIsIGNvbXBhbnlOYW1lczogW10gfTtcbiAgfVxuXG4gIHNlbGVjdGVkQ29tcGFueSA9IChlLCB2YWwpID0+IHtcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ29tcGFueTogdmFsIH0sICgpID0+IHtcbiAgICAgIGhpc3RvcnkucHVzaChcIi9jb21wYW55ZGV0YWlscy9cIiArIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb25CYXJcIik7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL2NvbXBhbnlOYW1lc1wiKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueU5hbWVzOiBzLmRhdGEgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogW10gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHNwYWNpbmc9ezF9PlxuICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeX0gdmFyaWFudD1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvYWJvdXRcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeX0gdmFyaWFudD1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIHsvKiA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3BlcmZvcm1hbmNlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IHZhcmlhbnQ9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgUGVyZm9ybWFuY2VcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD4gKi99XG4gICAgICAgIHsvKiA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPiAqL31cbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvY29tcGFyaXNvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvZ3JhcGh5fSB2YXJpYW50PVwiYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29tcGFyaXNvblxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9zaW11bGF0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9ID5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvZ3JhcGh5fSB2YXJpYW50PVwiYnV0dG9uXCIgXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpbXVsYXRpb25cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgc3R5bGU9e3sgXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjMwMHB4XCIsXG4gICAgICAgICAgICAgIGNvbG9yOlwiIzA1Mzg2QlwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgLy8gdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbXBhbnkoZSwgdmFsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpZD1cInNlYXJjaCBmb3IgY29tcGFuaWVzXCJcbiAgICAgICAgICAgIGZyZWVTb2xvXG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmNvbXBhbnlOYW1lcy5tYXAoKGNvbXBhbnluYW1lKSA9PiBjb21wYW55bmFtZSl9XG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cbiAgICAgICAgICAgICAgICBsYWJlbD1cInNlYXJjaCBmb3IgY29tcGFuaWVzXCJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjMDUzODZCXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKSh3aXRoUm91dGVyKE5hdmlnYXRpb25CYXIpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=