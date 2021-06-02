self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Components/SideBar.jsx":
/*!**************************************!*\
  !*** ./pages/Components/SideBar.jsx ***!
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\SideBar.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var styles = function styles(theme) {
  return {
    root: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    link: {
      textDecoration: "none"
    },
    paper: {
      display: "flex",
      "& > *": {
        padding: theme.spacing(3),
        // margin: theme.spacing(1),
        border: '0px',
        width: "100%",
        height: "100%"
      },
      backgroundColor: "#05386B",
      color: "#5CDB95"
    }
  };
};

var SideBar = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(SideBar, _React$Component);

  var _super = _createSuper(SideBar);

  function SideBar(props) {
    var _this;

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SideBar);

    _this = _super.call(this, props);

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "componentDidMount", function () {
      console.log("Sidebar");
    });

    _this.state = {};
    return _this;
  }

  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(SideBar, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper, {
          className: classes.paper,
          elevation: 0,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Accordion, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.AccordionSummary, {
              "aria-controls": "panel1a-content",
              id: "top10",
              style: {},
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
                variant: "button",
                fontSize: "24",
                children: "TOP 10"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.AccordionDetails, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
                to: {
                  pathname: "/top/10/buy"
                },
                className: classes.link,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper, {
                  className: classes.paper,
                  elevation: 0,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
                    variant: "button",
                    fontSize: "20",
                    children: "BUY"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.AccordionDetails, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
                to: {
                  pathname: "/top/10/sell"
                },
                className: classes.link,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper, {
                  className: classes.paper,
                  elevation: 0,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
                    variant: "button",
                    fontSize: "20",
                    children: "SELL"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper, {
          className: classes.paper,
          elevation: 0,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Accordion, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.AccordionSummary, {
              "aria-controls": "panel1a-content",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
                variant: "button",
                fontSize: "24",
                children: "TOP 30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.AccordionDetails, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
                to: {
                  pathname: "/top/30/buy"
                },
                className: classes.link,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper, {
                  className: classes.paper,
                  elevation: 0,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
                    variant: "button",
                    fontSize: "20",
                    children: "BUY"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.AccordionDetails, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
                to: {
                  pathname: "/top/30/sell"
                },
                className: classes.link,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper, {
                  className: classes.paper,
                  elevation: 0,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
                    variant: "button",
                    fontSize: "20",
                    children: "SELL"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper, {
          className: classes.paper,
          elevation: 0,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: {
              pathname: "/sectors"
            },
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper, {
              className: classes.paper,
              elevation: 0,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
                variant: "button",
                fontSize: "24",
                children: "Sectors"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper, {
          className: classes.paper,
          elevation: 0,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: {
              pathname: "/sp500"
            },
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper, {
              className: classes.paper,
              elevation: 0,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
                variant: "button",
                fontSize: "24",
                children: "S AND P 500"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper, {
          className: classes.paper,
          elevation: 0,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
            to: {
              pathname: "/revenue"
            },
            className: classes.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Paper, {
              className: classes.paper,
              elevation: 0,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
                variant: "button",
                fontSize: "24",
                children: " TOP REVENUE"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }, this);
    }
  }]);

  return SideBar;
}((react__WEBPACK_IMPORTED_MODULE_8___default().Component));

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.withStyles)(styles)(SideBar));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9TaWRlQmFyLmpzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImhlYWRpbmciLCJmb250U2l6ZSIsInR5cG9ncmFwaHkiLCJweFRvUmVtIiwiZm9udFdlaWdodCIsImZvbnRXZWlnaHRSZWd1bGFyIiwibGluayIsInRleHREZWNvcmF0aW9uIiwicGFwZXIiLCJkaXNwbGF5IiwicGFkZGluZyIsInNwYWNpbmciLCJib3JkZXIiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIlNpZGVCYXIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImNsYXNzZXMiLCJwYXRobmFtZSIsIlJlYWN0Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDekJDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUU7QUFESCxLQURtQjtBQUl6QkMsV0FBTyxFQUFFO0FBQ1BDLGNBQVEsRUFBRUosS0FBSyxDQUFDSyxVQUFOLENBQWlCQyxPQUFqQixDQUF5QixFQUF6QixDQURIO0FBRVBDLGdCQUFVLEVBQUVQLEtBQUssQ0FBQ0ssVUFBTixDQUFpQkc7QUFGdEIsS0FKZ0I7QUFRekJDLFFBQUksRUFBRTtBQUNKQyxvQkFBYyxFQUFFO0FBRFosS0FSbUI7QUFXekJDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUdMLGVBQVM7QUFDUEMsZUFBTyxFQUFFYixLQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkLENBREY7QUFFUDtBQUNBQyxjQUFNLEVBQUUsS0FIRDtBQUlQYixhQUFLLEVBQUUsTUFKQTtBQUtQYyxjQUFNLEVBQUU7QUFMRCxPQUhKO0FB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QUVlLE9BQU8sQ0FBQ2IsS0FBMUI7QUFBaUMsdUJBQVMsRUFBRSxDQUE1QztBQUFBLHFDQUNFLDhEQUFDLGtFQUFEO0FBQVksdUJBQU8sRUFBQyxRQUFwQjtBQUE2Qix3QkFBUSxFQUFFLElBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQW9GRDs7OztFQS9GbUJlLHdEOztBQWtHdEIsK0RBQWVDLDZEQUFVLENBQUM1QixNQUFELENBQVYsQ0FBbUJvQixPQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU4MjUzOWE4M2FlZDNmOTkwNjU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvbkRldGFpbHMsXG4gIEFjY29yZGlvblN1bW1hcnksXG4gIFBhcGVyLFxuICB3aXRoU3R5bGVzLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDE1KSxcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxuICB9LFxuICBsaW5rOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICB9LFxuICBwYXBlcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIFxuICAgIFwiJiA+ICpcIjoge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgIC8vIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIGJvcmRlcjogJzBweCcsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICBjb2xvcjogXCIjNUNEQjk1XCJcbiAgfSxcbn0pO1xuXG5jbGFzcyBTaWRlQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2lkZWJhclwiKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgPEFjY29yZGlvbj5cbiAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5IGFyaWEtY29udHJvbHM9XCJwYW5lbDFhLWNvbnRlbnRcIiBpZD1cInRvcDEwXCIgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYnV0dG9uXCIgZm9udFNpemU9IFwiMjRcIj5UT1AgMTA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdG9wLzEwL2J1eVwiIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGZvbnRTaXplPSBcIjIwXCI+QlVZPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPXt7IHBhdGhuYW1lOiBcIi90b3AvMTAvc2VsbFwiIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGZvbnRTaXplPSBcIjIwXCI+U0VMTDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgPEFjY29yZGlvbj5cbiAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5IGFyaWEtY29udHJvbHM9XCJwYW5lbDFhLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGZvbnRTaXplPSBcIjI0XCI+VE9QIDMwPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxuICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL3RvcC8zMC9idXlcIiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIiBmb250U2l6ZT0gXCIyMFwiPkJVWTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdG9wLzMwL3NlbGxcIiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIiBmb250U2l6ZT0gXCIyMFwiPlNFTEw8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgICB7LyogPGRpdiBzdHlsZSA9IHt7XG4gICAgICAgICAgICBwYWRkaW5nIDogJzJweCcsXG4gICAgICAgICAgfX0+PC9kaXY+ICovfVxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgIDxOYXZMaW5rIHRvPXt7IHBhdGhuYW1lOiBcIi9zZWN0b3JzXCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGZvbnRTaXplPSBcIjI0XCI+U2VjdG9yczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgIDxOYXZMaW5rIHRvPXt7IHBhdGhuYW1lOiBcIi9zcDUwMFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIiBmb250U2l6ZT0gXCIyNFwiPlMgQU5EIFAgNTAwPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89e3sgcGF0aG5hbWU6IFwiL3JldmVudWVcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYnV0dG9uXCIgZm9udFNpemU9IFwiMjRcIj4gVE9QIFJFVkVOVUU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2lkZUJhcik7XG4iXSwic291cmNlUm9vdCI6IiJ9