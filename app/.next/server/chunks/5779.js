exports.id = 5779;
exports.ids = [5779];
exports.modules = {

/***/ 5779:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1749);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2543);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(211);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2318);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2146);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const styles = theme => ({
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
});

class NavigationBar extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "selectedCompany", (e, val) => {
      const {
        history
      } = this.props;

      if (val === null) {
        history.push("/");
        return;
      }

      this.setState({
        selectedCompany: val
      }, () => {
        history.push("/companydetails/" + this.state.selectedCompany);
        this.setState({
          selectedCompany: ""
        }, () => {});
      });
    });

    _defineProperty(this, "componentDidMount", () => {
      console.log("NavigationBar");
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/companyNames").then(s => {
        if (s.status === 200) {
          this.setState({
            companyNames: s.data
          });
        } else {
          this.setState({
            companyNames: []
          });
        }
      }).catch(e => console.log(e));
    });

    this.state = {
      selectedCompany: " ",
      companyNames: []
    };
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      container: true,
      className: classes.root,
      spacing: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        item: true,
        className: classes.grid,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
          to: "/",
          className: classes.link,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            className: classes.typography,
            variant: "button",
            children: "Home"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        item: true,
        className: classes.grid,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
          to: "/about",
          className: classes.link,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            className: classes.typography,
            variant: "button",
            children: "About"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        item: true,
        className: classes.grid,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
          to: "/comparison",
          className: classes.link,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            className: classes.typography,
            variant: "button",
            children: "Comparison"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        item: true,
        className: classes.grid,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
          to: "/simulation",
          className: classes.link,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            className: classes.typography,
            variant: "button",
            children: "Simulation"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        item: true,
        className: classes.grid,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP, {
          style: {
            width: "300px",
            color: "#05386B"
          },
          value: this.state.selectedCompany,
          onChange: (e, val) => {
            this.selectedCompany(e, val);
          },
          id: "search for companies",
          freeSolo: true,
          options: this.state.companyNames.map(companyname => companyname),
          renderInput: params => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, _objectSpread(_objectSpread({}, params), {}, {
            label: "search for companies",
            margin: "normal",
            variant: "outlined",
            color: "#05386B"
          }))
        })
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(styles)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)(NavigationBar)));

/***/ })

};
;