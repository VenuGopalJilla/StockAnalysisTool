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
      textDecoration: "none"
    },
    grid: {
      padding: 20
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
        spacing: 2,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: "/",
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
              className: classes.grid,
              variant: "h4",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: "/about",
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
              className: classes.grid,
              variant: "h4",
              children: "About"
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: "/performance",
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
              className: classes.grid,
              variant: "h4",
              children: "Performance"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: "/login",
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
              className: classes.grid,
              variant: "h4",
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: "/comparision",
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
              className: classes.grid,
              variant: "h4",
              children: "Comparison"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: "/simulation",
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
              className: classes.grid,
              variant: "h4",
              children: "Simulation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_13__.default, {
            style: {
              width: "200px"
            },
            value: this.state.selectedCompany,
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
                variant: "outlined"
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 15
              }, _this2);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImdyaWQiLCJwYWRkaW5nIiwiTmF2aWdhdGlvbkJhciIsInByb3BzIiwiZSIsInZhbCIsImhpc3RvcnkiLCJwdXNoIiwic2V0U3RhdGUiLCJzZWxlY3RlZENvbXBhbnkiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInRoZW4iLCJzIiwic3RhdHVzIiwiY29tcGFueU5hbWVzIiwiZGF0YSIsImNsYXNzZXMiLCJ3aWR0aCIsIm1hcCIsImNvbXBhbnluYW1lIiwicGFyYW1zIiwiUmVhY3QiLCJ3aXRoU3R5bGVzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRG1CO0FBSXpCQyxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFLFFBRE47QUFFTEMsV0FBSyxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFGckIsS0FKa0I7QUFRekJDLFFBQUksRUFBRTtBQUNKQyxvQkFBYyxFQUFFO0FBRFosS0FSbUI7QUFXekJDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUU7QUFETDtBQVhtQixHQUFaO0FBQUEsQ0FBZjs7SUFnQk1DLGE7Ozs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFB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QUFDRSxpQkFBSyxFQUFFO0FBQUVvQixtQkFBSyxFQUFFO0FBQVQsYUFEVDtBQUVFLGlCQUFLLEVBQUUsS0FBS1YsS0FBTCxDQUFXRCxlQUZwQjtBQUdFLG9CQUFRLEVBQUUsa0JBQUNMLENBQUQsRUFBSUMsR0FBSixFQUFZO0FBQ3BCLG9CQUFJLENBQUNJLGVBQUwsQ0FBcUJMLENBQXJCLEVBQXdCQyxHQUF4QjtBQUNELGFBTEg7QUFNRSxjQUFFLEVBQUMsc0JBTkw7QUFPRSxvQkFBUSxNQVBWO0FBUUUsbUJBQU8sRUFBRSxLQUFLSyxLQUFMLENBQVdPLFlBQVgsQ0FBd0JJLEdBQXhCLENBQTRCLFVBQUNDLFdBQUQ7QUFBQSxxQkFBaUJBLFdBQWpCO0FBQUEsYUFBNUIsQ0FSWDtBQVNFLHVCQUFXLEVBQUUscUJBQUNDLE1BQUQ7QUFBQSxrQ0FDWCw4REFBQyxpRUFBRCxrQ0FDTUEsTUFETjtBQUVFLHFCQUFLLEVBQUMsc0JBRlI7QUFHRSxzQkFBTSxFQUFDLFFBSFQ7QUFJRSx1QkFBTyxFQUFDO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEVztBQUFBO0FBVGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBa0VEOzs7O0VBbkd5QkMsd0Q7O0FBcUc1QiwrREFBZUMscUVBQVUsQ0FBQ3JDLE1BQUQsQ0FBVixDQUFtQnNDLDZEQUFVLENBQUN4QixhQUFELENBQTdCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDQzZDA3ZGYyOTQ0MzQyMWI2MmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmssIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICB9LFxuICBsaW5rOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICB9LFxuICBncmlkOiB7XG4gICAgcGFkZGluZzogMjAsXG4gIH0sXG59KTtcblxuY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNlbGVjdGVkQ29tcGFueTogXCIgXCIsIGNvbXBhbnlOYW1lczogW10gfTtcbiAgfVxuXG4gIHNlbGVjdGVkQ29tcGFueSA9IChlLCB2YWwpID0+IHtcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ29tcGFueTogdmFsIH0sICgpID0+IHtcbiAgICAgIGhpc3RvcnkucHVzaChcIi9jb21wYW55ZGV0YWlscy9cIiArIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb25CYXJcIik7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL2NvbXBhbnlOYW1lc1wiKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueU5hbWVzOiBzLmRhdGEgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogW10gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHNwYWNpbmc9ezJ9PlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3BlcmZvcm1hbmNlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICBQZXJmb3JtYW5jZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2NvbXBhcmlzaW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICBDb21wYXJpc29uXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvc2ltdWxhdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgU2ltdWxhdGlvblxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxBdXRvY29tcGxldGVcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21wYW55KGUsIHZhbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaWQ9XCJzZWFyY2ggZm9yIGNvbXBhbmllc1wiXG4gICAgICAgICAgICBmcmVlU29sb1xuICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5jb21wYW55TmFtZXMubWFwKChjb21wYW55bmFtZSkgPT4gY29tcGFueW5hbWUpfVxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJzZWFyY2ggZm9yIGNvbXBhbmllc1wiXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKHdpdGhSb3V0ZXIoTmF2aWdhdGlvbkJhcikpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==