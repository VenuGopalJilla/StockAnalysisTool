exports.id = 2623;
exports.ids = [2623];
exports.modules = {

/***/ 515:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class About extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "componentDidMount", () => {
      console.log("About");
    });
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: "About"
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 2623:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5258);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7159);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2543);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8358);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2146);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(515);
/* harmony import */ var _CompanyDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8934);
/* harmony import */ var _Comparison__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(440);
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5779);
/* harmony import */ var _PageNotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8245);
/* harmony import */ var _Revenue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3808);
/* harmony import */ var _Sectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9151);
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8978);
/* harmony import */ var _SP500__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9629);
/* harmony import */ var _Top__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9911);
/* harmony import */ var _Simulation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8183);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3834);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // import Login from "./Login";


 // import Performance from "./Performance";








const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    paddingTop: theme.spacing(2)
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  // necessary for content to be below app bar
  toolbar: _objectSpread({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  }, theme.mixins.toolbar),
  content: {
    // backgroundColor: theme.palette.background.default,
    backgroundColor: "white",
    flexGrow: 1,
    flexWrap: "wrap",
    padding: theme.spacing(3),
    minWidth: "480px",
    width: "auto",
    height: "100%",
    overflowX: "hidden",
    alignItems: "center"
  }
});

class Home extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      console.log("Home");
    });

    this.state = {
      companyNames: []
    };
  }

  render() {
    const {
      classes
    } = this.props;
    console.log(this.props);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.HashRouter, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
          position: "relative",
          className: classes.appBar,
          style: {
            backgroundColor: "#5CDB95",
            color: "#05386B"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavigationBar__WEBPACK_IMPORTED_MODULE_6__.default, {})
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: classes.root,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_17__/* .default */ .ZP, {
            className: classes.drawer,
            variant: "permanent",
            classes: {
              paper: classes.drawerPaper
            },
            anchor: "left",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SideBar__WEBPACK_IMPORTED_MODULE_10__.default, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
            className: classes.content,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/",
                component: _Main__WEBPACK_IMPORTED_MODULE_14__.default
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/home",
                component: _Main__WEBPACK_IMPORTED_MODULE_14__.default
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/about",
                component: _About__WEBPACK_IMPORTED_MODULE_3__.default
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/top/:num/:type",
                render: props => {
                  const {
                    match: {
                      params: {
                        num,
                        type
                      }
                    }
                  } = props;
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Top__WEBPACK_IMPORTED_MODULE_12__.default, _objectSpread({}, props), `num=${num}&type=${type}`);
                }
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/sectors",
                component: _Sectors__WEBPACK_IMPORTED_MODULE_9__.default
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/companydetails/:company",
                render: props => {
                  const {
                    match: {
                      params: {
                        company
                      }
                    }
                  } = props;
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CompanyDetails__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, props), `company=${company}`);
                }
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/revenue",
                component: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Revenue__WEBPACK_IMPORTED_MODULE_8__.default, {
                  companyNames: this.state.companyNames
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/sp500",
                component: _SP500__WEBPACK_IMPORTED_MODULE_11__.default
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/comparison",
                component: _Comparison__WEBPACK_IMPORTED_MODULE_5__.default
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/simulation",
                component: _Simulation__WEBPACK_IMPORTED_MODULE_13__.default
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                component: _PageNotFound__WEBPACK_IMPORTED_MODULE_7__.default
              })]
            })
          })]
        })]
      })
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z)(styles)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)(Home)));

/***/ }),

/***/ 3834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Main extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      console.log("Main");
    });

    this.state = {};
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: "\\images\\stocks3.jpg",
        style: {
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }
      })
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ 8245:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class PageNotFound extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "componentDidMount", () => {
      console.log("PageNotFound");
    });
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Page Not Found"
      })
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ })

};
;