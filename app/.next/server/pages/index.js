(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/App.js":
/*!**********************!*\
  !*** ./pages/App.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Home */ "./pages/Components/Home.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\App.js";




class App extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Home__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/Components/About.jsx":
/*!************************************!*\
  !*** ./pages/Components/About.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\About.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class About extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "componentDidMount", () => {
      console.log("About");
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: "About"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/Components/CompanyDetails.jsx":
/*!*********************************************!*\
  !*** ./pages/Components/CompanyDetails.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dashboard */ "./pages/Components/Dashboard.jsx");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\CompanyDetails.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});

class CompanyDetails extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      console.log("CompanyDetails");
      const {
        match
      } = this.props;
      const company = match.params.company;
      this.setState({
        selectedCompany: company
      }, () => {
        this.getCompanyDetails(this.state.selectedCompany);
      });
    });

    _defineProperty(this, "getCompanyDetails", async company => {
      await axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/companydetails?company=" + company).then(s => {
        if (s.status === 200) {
          this.setState({
            companyDetails: s.data,
            loading: false
          }, () => {});
        } else {
          this.setState({
            companyDetails: [],
            loading: false
          }, () => {});
        }
      });
      await axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/previousdaystockdetails?company=" + company).then(s => {
        if (s.status === 200) {
          this.setState({
            stockdetails: s.data,
            loading: false
          }, () => {});
        } else {
          this.setState({
            stockdetails: [],
            loading: false
          }, () => {});
        }
      }).catch(e => {
        console.log(e);
        this.setState({
          stockdetails: [],
          loading: false
        }, () => {});
      });
    });

    this.state = {
      companyDetails: [],
      companyCurrentDayStockDetails: [],
      selectedCompany: "",
      loading: true,
      stockkeys: ["Date", "Open Price", "High Price", "Low Price", "Close Price", "WAP", "No.of Shares", "No. of Trades", "Total Turnover (Rs.)", "% Deli. Qty to Traded Qty", "Spread High-Low", "Spread Close-Open"],
      stockdetails: []
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [this.state.selectedCompany !== "" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
          elevation: 3,
          style: {
            display: "flex",
            padding: "15px",
            margin: "15px",
            justifyContent: "center"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            variant: "h4",
            children: this.state.selectedCompany
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, this), this.state.loading === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
          container: true,
          children: Object.keys(this.state.companyDetails).map(key => {
            if (this.state.companyDetails[key] === null) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 28
              }, this);
            }

            let res = key + " : " + this.state.companyDetails[key];
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Chip, {
              color: "primary",
              variant: "outlined",
              label: res,
              style: {
                margin: "5px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 21
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this), this.state.stockdetails.length !== 0 && this.state.stockkeys.map(key => {
        let res = key + " : " + this.state.stockdetails[key];
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Chip, {
          color: "primary",
          variant: "outlined",
          label: res,
          style: {
            margin: "5px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 15
        }, this);
      }), this.state.selectedCompany !== "" && this.state.stockdetails.length !== 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_4__.default, {
        company: this.state.selectedCompany
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles)(CompanyDetails));

/***/ }),

/***/ "./pages/Components/Comparision.jsx":
/*!******************************************!*\
  !*** ./pages/Components/Comparision.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dashboard */ "./pages/Components/Dashboard.jsx");

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Comparision.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Comparision extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      console.log("Comparision");
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/companyNames").then(s => {
        if (s.status === 200) {
          this.setState({
            companyNames: s.data
          }, () => {});
        } else {
          this.setState({
            companyNames: s.data
          }, () => {});
        }
      }).catch(e => {
        console.log(e);
        this.setState({
          stockdetails: [],
          loading: false
        }, () => {});
      });
    });

    _defineProperty(this, "onClickSubmit", async () => {
      if (this.state.selectedCompanies.length < 2) {
        this.setState({
          error: "select atleast two companies"
        }, () => {});
        return;
      } else {
        this.setState({
          error: "",
          loading: true
        }, () => {});
      }

      let stockdetails = {};

      for (let index = 0; index < this.state.selectedCompanies.length; index++) {
        const company = this.state.selectedCompanies[index];
        stockdetails[company] = {};
      }

      for (let index = 0; index < this.state.selectedCompanies.length; index++) {
        const company = this.state.selectedCompanies[index];
        await axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/previousdaystockdetails?company=" + company).then(s => {
          if (s.status === 200) {
            stockdetails[company] = Object.assign(stockdetails[company], s.data);
          }
        }).catch(e => {
          console.log(e);
        });
        await axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/comparision?days=" + this.state.selectedTimePeriod + "&rate=" + this.state.rate + "&company=" + company).then(s => {
          if (s.status === 200) {
            stockdetails[company] = Object.assign(stockdetails[company], s.data);
          }
        }).catch(e => {
          console.log(e);
        });
      }

      this.setState({
        stockdetails: stockdetails,
        loading: false
      }, () => {});
    });

    this.state = {
      loading: false,
      companyNames: [],
      selectedCompanies: [],
      selectedTimePeriod: "180",
      rate: "1",
      stockkeys: ["Date", "Open Price", "High Price", "Low Price", "Close Price", "WAP", "No.of Shares", "No. of Trades", "Total Turnover (Rs.)", "% Deli. Qty to Traded Qty", "Spread High-Low", "Spread Close-Open"],
      timePeriod: {
        "1 day": "1",
        "7 days": "7",
        "1 month": "30",
        "3 months": "90",
        "6 months": "180",
        "1 year": "360",
        "2 years": "720",
        "5 years": "1800",
        "10 years": "3600"
      },
      stockdetails: [],
      num: 10,
      error: ""
    };
  }

  render() {
    const period = underscore__WEBPACK_IMPORTED_MODULE_3___default().invert(this.state.timePeriod);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
        container: true,
        spacing: 2,
        direction: "row",
        justify: "flex-start",
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
          item: true,
          xs: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4___default()), {
            multiple: true,
            value: this.state.firstCompany,
            onChange: (e, company, reason, detail) => {
              if (reason === "remove-option") {
                let companies = this.state.stockdetails;
                delete companies[detail.option];
                this.setState({
                  stockdetails: companies
                }, () => {});
              } else {
                this.setState({
                  selectedCompanies: company
                }, () => {});
              }
            },
            id: "select multiple companies",
            freeSolo: true,
            options: this.state.companyNames.map(companyname => companyname),
            renderInput: params => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, _objectSpread(_objectSpread({}, params), {}, {
              label: "select multiple companies",
              margin: "normal",
              variant: "outlined",
              helperText: this.state.error,
              error: this.state.error !== ""
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
            style: {
              minWidth: "150px"
            },
            variant: "outlined",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.InputLabel, {
              children: "trading period"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Select, {
              style: {
                width: "100%"
              },
              labelId: "trading period",
              id: "trading",
              onChange: e => {
                this.setState({
                  selectedTimePeriod: e.target.value
                }, () => {});
              },
              value: this.state.selectedTimePeriod,
              children: Object.keys(this.state.timePeriod).map(period => {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                  value: this.state.timePeriod[period],
                  children: period
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 21
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
          item: true,
          xs: 2,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {
            type: "number",
            style: {
              width: "100%"
            },
            inputProps: {
              min: "-100",
              max: "100",
              step: "0.01"
            },
            label: "rate of growth",
            variant: "outlined",
            value: this.state.rate,
            onChange: e => {
              this.setState({
                rate: e.target.value
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
            variant: "outlined",
            size: "large",
            onClick: this.onClickSubmit,
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, this), this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 11
      }, this) : this.state.stockdetails.length !== 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
        container: true,
        spacing: 1,
        direction: "row",
        justify: "flex-start",
        alignItems: "center",
        children: Object.keys(this.state.stockdetails).map(company => {
          const element = this.state.stockdetails[company];
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {
            item: true,
            xs: 6,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Paper, {
              style: {
                display: "flex",
                padding: "15px",
                margin: "15px",
                justifyContent: "center"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
                to: {
                  pathname: "companydetails/" + element["company"]
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                  variant: "h6",
                  children: element["company"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
              variant: "h6",
              children: ["In the last ", period[element["totalNumberOfDays"]], ", for", " ", element["percentOfDays"], " percent of trading days close price growth rate was more than ", element["rate"], " %"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_8__.default, {
              company: element["company"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 21
            }, this), this.state.stockkeys.map((key, i) => {
              let res = key + " : " + element[key];
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Chip, {
                color: "primary",
                variant: "outlined",
                label: res,
                style: {
                  margin: "5px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 25
              }, this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 19
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Comparision);

/***/ }),

/***/ "./pages/Components/Dashboard.jsx":
/*!****************************************!*\
  !*** ./pages/Components/Dashboard.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Dashboard.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import Chart from "react-apexcharts";


const Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-apexcharts */ "react-apexcharts", 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-apexcharts */ "react-apexcharts")],
    modules: ["Components\\Dashboard.jsx -> " + "react-apexcharts"]
  }
});



class Dashboard extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      console.log("Dashboard");

      if (this.props.company !== "sp500") {
        this.setState({
          company: this.props.company
        }, () => {
          axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/stockdetails?company=" + this.state.company).then(s => {
            if (s.status === 200) {
              this.setState({
                details: s.data,
                loading: false
              }, () => {});
            } else {
              this.setState({
                details: [],
                loading: false
              }, () => {});
            }
          }).then(() => {}).catch(e => {
            console.log(e);
            this.setState({
              loading: false,
              error: true
            }, () => {});
          });
        });
      } else {
        this.setState({
          company: this.props.company
        }, () => {
          axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/sp500").then(s => {
            if (s.status === 200) {
              this.setState({
                details: s.data,
                loading: false
              }, () => {});
            } else {
              this.setState({
                details: [],
                loading: false
              }, () => {});
            }
          }).catch(e => {
            console.log(e);
            this.setState({
              loading: false,
              error: true
            }, () => {});
          });
        });
      }
    });

    _defineProperty(this, "createGraph", days => {
      let closePriceData = {
        name: "Close Price",
        data: []
      };
      days = days === "all" ? this.state.details.length - 1 : days > this.state.details.length - 1 ? this.state.details.length - 1 : days;
      const toDate = this.state.details[0]["Date"];
      const fromDate = this.state.details[days]["Date"];
      const data = this.state.details.slice(0, days);

      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        closePriceData.data.push({
          x: element["Date"],
          y: element["Close Price"] || element["Close"]
        });
      }

      let options = this.state.options;
      options.xaxis["min"] = fromDate;
      options.xaxis["max"] = toDate;
      const series = [];
      series.push(closePriceData);
      this.setState({
        series: series,
        options: options
      }, () => {});
    });

    _defineProperty(this, "selectedPeriod", e => {
      const days = e.currentTarget.value;

      if (this.state.selectedPeriod === days) {
        return;
      }

      this.setState({
        selectedPeriod: days
      }, () => {
        this.createGraph(days);
      });
    });

    this.state = {
      loading: true,
      details: [],
      selectedPeriod: "",
      company: "",
      error: false,
      series: [],
      options: {
        chart: {
          background: "#ffffff",
          type: "area",
          height: "auto",
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: "zoom"
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 2,
          dashArray: 0
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0
        },
        title: {
          text: "Stock Price Movement",
          align: "left",
          style: {
            fontSize: "24px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "blue",
            display: "flex",
            justifyContent: "center"
          }
        },
        fill: {
          type: "solid",
          opacity: 0.9,
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 90, 100]
          }
        },
        yaxis: {
          labels: {
            formatter: val => {
              return val.toFixed();
            }
          },
          title: {
            text: "Price in Rs"
          }
        },
        xaxis: {
          type: "datetime",
          labels: {
            formatter: val => {
              const dt = new Date(val);
              return dt.getDate() + "-" + (dt.getMonth() + 1) + "-" + dt.getFullYear();
            }
          },
          title: {
            text: "Time Period"
          }
        },
        tooltip: {
          shared: false,
          x: {
            formatter: val => {
              const dt = new Date(val);
              return dt.getDate() + "-" + (dt.getMonth() + 1) + "-" + dt.getFullYear();
            }
          },
          y: {
            formatter: val => {
              return val;
            }
          }
        }
      }
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 11
      }, this) : this.state.error !== true && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
          color: "primary",
          style: {
            display: "flex",
            justifyContent: "center",
            margin: "10px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "7",
            onClick: this.selectedPeriod,
            children: "7D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "30",
            onClick: this.selectedPeriod,
            children: "1M"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "90",
            onClick: this.selectedPeriod,
            children: "3M"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "180",
            onClick: this.selectedPeriod,
            children: "6M"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "360",
            onClick: this.selectedPeriod,
            children: "1Y"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "1800",
            onClick: this.selectedPeriod,
            children: "5Y"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "all",
            onClick: this.selectedPeriod,
            children: "All"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {
          options: this.state.options,
          series: this.state.series
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./pages/Components/Home.jsx":
/*!***********************************!*\
  !*** ./pages/Components/Home.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./About */ "./pages/Components/About.jsx");
/* harmony import */ var _CompanyDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CompanyDetails */ "./pages/Components/CompanyDetails.jsx");
/* harmony import */ var _Comparision__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Comparision */ "./pages/Components/Comparision.jsx");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Login */ "./pages/Components/Login.jsx");
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NavigationBar */ "./pages/Components/NavigationBar.jsx");
/* harmony import */ var _PageNotFound__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PageNotFound */ "./pages/Components/PageNotFound.jsx");
/* harmony import */ var _Performance__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Performance */ "./pages/Components/Performance.jsx");
/* harmony import */ var _Revenue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Revenue */ "./pages/Components/Revenue.jsx");
/* harmony import */ var _Sectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Sectors */ "./pages/Components/Sectors.jsx");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SideBar */ "./pages/Components/SideBar.jsx");
/* harmony import */ var _SP500__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SP500 */ "./pages/Components/SP500.jsx");
/* harmony import */ var _Top__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Top */ "./pages/Components/Top.jsx");
/* harmony import */ var _Simulation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Simulation */ "./pages/Components/Simulation.jsx");

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Home.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
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
    // justifyContent: "flex-end",
    justifyContent: "center",
    padding: 20
  }, theme.mixins.toolbar),
  content: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    flexWrap: "wrap",
    padding: theme.spacing(3),
    minWidth: "480px",
    width: "auto",
    height: "100%",
    overflowX: "hidden"
  }
});

class Home extends (react__WEBPACK_IMPORTED_MODULE_5___default().Component) {
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {
        position: "relative",
        className: classes.appBar,
        style: {
          backgroundColor: "inherit",
          color: "inherit"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default()), {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationBar__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.root,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2___default()), {
          className: classes.drawer,
          variant: "permanent",
          classes: {
            paper: classes.drawerPaper
          },
          anchor: "left",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.toolbar,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
              variant: "h4",
              children: "Stock Trends"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
          className: classes.content,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              exact: true,
              path: "/"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              exact: true,
              path: "/login",
              component: _Login__WEBPACK_IMPORTED_MODULE_11__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              exact: true,
              path: "/about",
              component: _About__WEBPACK_IMPORTED_MODULE_8__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              exact: true,
              path: "/performance",
              component: _Performance__WEBPACK_IMPORTED_MODULE_14__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
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
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Top__WEBPACK_IMPORTED_MODULE_19__.default, _objectSpread({}, props), `num=${num}&type=${type}`, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 26
                }, this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              exact: true,
              path: "/sectors",
              component: _Sectors__WEBPACK_IMPORTED_MODULE_16__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
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
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CompanyDetails__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({}, props), `company=${company}`, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 21
                }, this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              exact: true,
              path: "/revenue",
              component: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Revenue__WEBPACK_IMPORTED_MODULE_15__.default, {
                companyNames: this.state.companyNames
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              exact: true,
              path: "/sp500",
              component: _SP500__WEBPACK_IMPORTED_MODULE_18__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              exact: true,
              path: "/comparision",
              component: _Comparision__WEBPACK_IMPORTED_MODULE_10__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              exact: true,
              path: "/simulation",
              component: _Simulation__WEBPACK_IMPORTED_MODULE_20__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              component: _PageNotFound__WEBPACK_IMPORTED_MODULE_13__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.withStyles)(styles)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.withRouter)(Home)));

/***/ }),

/***/ "./pages/Components/Login.jsx":
/*!************************************!*\
  !*** ./pages/Components/Login.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Login.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Login extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "componentDidMount", () => {
      console.log("Login");
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./pages/Components/NavigationBar.jsx":
/*!********************************************!*\
  !*** ./pages/Components/NavigationBar.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\NavigationBar.jsx";

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
    textDecoration: "none"
  },
  grid: {
    padding: 20
  }
});

class NavigationBar extends (react__WEBPACK_IMPORTED_MODULE_6___default().Component) {
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
      });
    });

    _defineProperty(this, "componentDidMount", () => {
      console.log("NavigationBar");
      axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/companyNames").then(s => {
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default()), {
      container: true,
      className: classes.root,
      spacing: 2,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default()), {
        item: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
          to: "/",
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default()), {
        item: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
          to: "/about",
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default()), {
        item: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
          to: "/performance",
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default()), {
        item: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
          to: "/login",
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default()), {
        item: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
          to: "/comparision",
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
            className: classes.grid,
            variant: "h4",
            children: "Comparision"
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default()), {
        item: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
          to: "/simulation",
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default()), {
        item: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5___default()), {
          style: {
            width: "200px"
          },
          value: this.state.selectedCompany,
          onChange: (e, val) => {
            this.selectedCompany(e, val);
          },
          id: "search for companies",
          freeSolo: true,
          options: this.state.companyNames.map(companyname => companyname),
          renderInput: params => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({}, params), {}, {
            label: "search for companies",
            margin: "normal",
            variant: "outlined"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, this)
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

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.withRouter)(NavigationBar)));

/***/ }),

/***/ "./pages/Components/PageNotFound.jsx":
/*!*******************************************!*\
  !*** ./pages/Components/PageNotFound.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\PageNotFound.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class PageNotFound extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "componentDidMount", () => {
      console.log("PageNotFound");
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Page Not Found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./pages/Components/Performance.jsx":
/*!******************************************!*\
  !*** ./pages/Components/Performance.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Performance.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Performance extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "componentDidMount", () => {
      console.log("Performance");
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: "Performance"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Performance);

/***/ }),

/***/ "./pages/Components/Revenue.jsx":
/*!**************************************!*\
  !*** ./pages/Components/Revenue.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Revenue.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Revenue extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      console.log("Revenue");
      axios__WEBPACK_IMPORTED_MODULE_5___default().get("/api/previousdaystockdetails").then(s => {
        if (s.status === 200) {
          let companyStockDetails = s.data;
          companyStockDetails.sort((a, b) => {
            return a["Revenue"] - b["Revenue"];
          });
          companyStockDetails = companyStockDetails.slice(0, this.state.num);
          let topCompanies = [];

          for (let index = 0; index < companyStockDetails.length; index++) {
            const element = companyStockDetails[index];
            topCompanies.push(element["Company"]);
          }

          this.setState({
            topCompanies: topCompanies,
            loading: false
          }, () => {});
        } else {
          this.setState({
            topCompanies: [],
            loading: false
          }, () => {});
        }
      }).catch(e => {
        console.log(e);
        this.setState({
          topCompanies: [],
          loading: false
        }, () => {});
      });
    });

    this.state = {
      topCompanies: [],
      num: 30,
      loading: true
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
          elevation: 1,
          style: {
            display: "flex",
            padding: "15px",
            margin: "15px",
            justifyContent: "center"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            variant: "h4",
            color: "primary",
            children: ["Top ", this.state.num, " Companies Revenue wise"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, this), this.state.topCompanies.map(company => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
            style: {
              textDecoration: "none"
            },
            to: {
              pathname: "/companydetails/" + company
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
              elevation: 1,
              style: {
                display: "flex",
                padding: "10px",
                margin: "10px"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "h6",
                children: company
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 19
            }, this)
          }, (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(), false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, this);
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

}

/* harmony default export */ __webpack_exports__["default"] = (Revenue);

/***/ }),

/***/ "./pages/Components/SP500.jsx":
/*!************************************!*\
  !*** ./pages/Components/SP500.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard */ "./pages/Components/Dashboard.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\SP500.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SP500 extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      console.log("SP500"); // axios
      //   .get("/sp500")
      //   .then((s) => {
      //     this.setState({ sp500: s.data, loading: false }, () => {});
      //   })
      //   .then(() => {})
      //   .catch((e) => {});
    });

    this.state = {
      sp500: []
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Paper, {
        elevation: 3,
        style: {
          display: "flex",
          padding: "15px",
          margin: "15px",
          justifyContent: "center"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          variant: "h4",
          children: "SP 500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_2__.default, {
        company: "sp500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SP500);

/***/ }),

/***/ "./pages/Components/Sectors.jsx":
/*!**************************************!*\
  !*** ./pages/Components/Sectors.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Sectors.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Sectors extends (react__WEBPACK_IMPORTED_MODULE_4___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      console.log("Sectors");
      const {
        history,
        location
      } = this.props;

      if ("state" in location && location.state === undefined) {
        history.push("/");
      }

      axios__WEBPACK_IMPORTED_MODULE_3___default().get("api/sectors").then(s => {
        if (s.status === 200) {
          this.setState({
            sectors: s.data
          }, () => {});
        } else {
          this.setState({
            sectors: []
          }, () => {});
        }
      });
    });

    _defineProperty(this, "selectedSector", (e, val) => {
      if (val === null) {
        this.setState({
          selectedSector: "",
          selectedSectorCompanies: []
        }, () => {});
      } else {
        this.setState({
          selectedSector: val,
          selectedSectorCompanies: this.state.sectors[val]
        }, () => {});
      }
    });

    _defineProperty(this, "selectedCompany", val => {
      const {
        history
      } = this.props;

      if (val === null) {
        history.push("/");
      } else {
        this.setState({
          selectedCompany: val
        }, () => {
          history.push("companydetails/" + val);
        });
      }
    });

    this.state = {
      sectors: [],
      selectedSector: "",
      selectedSectorCompanies: [],
      selectedCompany: ""
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
      children: [this.state.sectors.length !== 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2___default()), {
        style: {
          width: "50%",
          align: "center"
        },
        onChange: (e, val) => {
          this.selectedSector(e, val);
        },
        id: "search for sector",
        freeSolo: true,
        options: Object.keys(this.state.sectors).map(sector => sector),
        getOptionLabel: option => option,
        renderInput: params => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, _objectSpread(_objectSpread({}, params), {}, {
          label: "search for sector",
          margin: "normal",
          variant: "outlined"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, this), this.state.selectedSectorCompanies.length !== 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2___default()), {
        style: {
          width: "50%",
          align: "center"
        },
        onChange: (e, val) => {
          this.selectedCompany(val);
        },
        id: "search for companies",
        freeSolo: true,
        options: this.state.selectedSectorCompanies.map(company => company),
        getOptionLabel: option => option,
        renderInput: params => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, _objectSpread(_objectSpread({}, params), {}, {
          label: "search for company",
          margin: "normal",
          variant: "outlined"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sectors);

/***/ }),

/***/ "./pages/Components/SideBar.jsx":
/*!**************************************!*\
  !*** ./pages/Components/SideBar.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\SideBar.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const styles = theme => ({
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
      padding: theme.spacing(2),
      // margin: theme.spacing(1),
      width: "100%",
      height: "100%"
    }
  }
});

class SideBar extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      console.log("Sidebar");
    });

    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        className: classes.paper,
        elevation: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Accordion, {
          style: {
            border: "none"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AccordionSummary, {
            "aria-controls": "panel1a-content",
            id: "top10",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
              variant: "h4",
              children: "TOP 10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AccordionDetails, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
              to: {
                pathname: "/top/10/buy"
              },
              className: classes.link,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                className: classes.paper,
                elevation: 0,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                  variant: "h6",
                  children: "BUY"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AccordionDetails, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
              to: {
                pathname: "/top/10/sell"
              },
              className: classes.link,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                className: classes.paper,
                elevation: 0,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                  variant: "h6",
                  children: "SELL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        className: classes.paper,
        elevation: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Accordion, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AccordionSummary, {
            "aria-controls": "panel1a-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
              variant: "h4",
              children: "TOP 30"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AccordionDetails, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
              to: {
                pathname: "/top/30/buy"
              },
              className: classes.link,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                className: classes.paper,
                elevation: 0,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                  variant: "h6",
                  children: "BUY"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AccordionDetails, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
              to: {
                pathname: "/top/30/sell"
              },
              className: classes.link,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                className: classes.paper,
                elevation: 0,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                  variant: "h6",
                  children: "SELL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        className: classes.paper,
        elevation: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
          to: {
            pathname: "/sectors"
          },
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
            className: classes.paper,
            elevation: 0,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
              variant: "h4",
              children: "Sectors"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        className: classes.paper,
        elevation: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
          to: {
            pathname: "/sp500"
          },
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
            className: classes.paper,
            elevation: 0,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
              variant: "h4",
              children: "S AND P 500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        className: classes.paper,
        elevation: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
          to: {
            pathname: "/revenue"
          },
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
            className: classes.paper,
            elevation: 0,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
              variant: "h4",
              children: "TOP REVENUE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles)(SideBar));

/***/ }),

/***/ "./pages/Components/Simulation.jsx":
/*!*****************************************!*\
  !*** ./pages/Components/Simulation.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/data-grid */ "@material-ui/data-grid");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_download_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-download-link */ "react-download-link");
/* harmony import */ var react_download_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_download_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Simulation.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class Simulation extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      const SP500 = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/SP500Companies.json";
      axios__WEBPACK_IMPORTED_MODULE_5___default().get(SP500).then(s => {
        if (s.status === 200) {
          let SP500Companies = Object.keys(underscore__WEBPACK_IMPORTED_MODULE_7___default().invert(s.data));
          this.setState({
            companyNames: SP500Companies
          }, () => {});
        }
      }).catch(e => {
        console.log(e);
      });
      console.log("Simulation");
    });

    _defineProperty(this, "onClickSubmit", () => {
      if (this.state.selectedCompany === "") {
        return;
      }

      const params = "company=" + this.state.selectedCompany + "&" + "investment=" + this.state.investment + "&" + "days=" + this.state.days + "&" + "date=" + this.state.startdate;
      this.setState({
        loading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_5___default().get("/api/simulation?" + params).then(s => {
        if (s.status === 200) {
          let resp = s.data;

          if (resp.length != 0) {
            let cols = [];
            Object.keys(resp[0]).map(key => {
              cols.push({
                field: key,
                headerName: key,
                width: 150
              });
            });
            let rows = [];

            for (let i = 0; i < resp.length; i++) {
              if (Object.keys(resp[i]).length === 0) {} else {
                resp[i]["id"] = i;
                rows.push(resp[i]);
              }
            }

            this.setState({
              response: rows,
              cols: cols,
              loading: false
            }, () => {});
          } else {
            this.setState({
              loading: false
            }, () => {});
          }
        } else {
          this.setState({
            loading: false
          }, () => {});
        }
      }).catch(e => {
        console.log(e);
        this.setState({
          loading: false
        }, () => {});
      });
    });

    _defineProperty(this, "onSelectDays", e => {
      const days = e.target.value; // const topurl =
      //   "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/Simulation/top_seldays.csv";

      this.setState({
        seldays: days
      }, () => {});
      axios__WEBPACK_IMPORTED_MODULE_5___default().get("/api/simulationtop" + "?" + "days=" + days).then(s => {
        if (s.status === 200) {
          this.setState({
            simulationtop: s.data
          }, () => {});
        }
      }).catch(e => {
        console.log(e);
      });
    });

    _defineProperty(this, "getDataFromURL", url => new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(url).then(response => response.text()).then(data => {
          resolve(data);
        });
      });
    }, 2000));

    _defineProperty(this, "exportToCSV", () => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_8__.GridToolbarContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_8__.GridToolbarExport, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 7
      }, this);
    });

    this.state = {
      selectedCompany: "",
      companyNames: [],
      days: 1,
      investment: 1,
      startdate: "2017-03-10",
      response: [],
      cols: [],
      loading: false,
      seldays: "",
      simulationtop: [],
      companyselectedaftersimulation: "",
      companydetailsaftersimulation: []
    };
  }

  render() {
    const today = new Date();
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
          style: {
            minWidth: "150px"
          },
          variant: "outlined",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {
            style: {
              width: "100%"
            },
            labelId: "days",
            id: "days",
            onChange: this.onSelectDays,
            value: this.state.seldays,
            children: [30, 60, 90, 180, 270, 360, 540, 720, 900, 1080].map(period => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                value: period,
                children: period
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 26
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this), this.state.simulationtop.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }, this) :
        /*#__PURE__*/
        // <Grid style={{ height: "250px", overflowX: "scroll" }}>
        //   {/* <Typography variant="h4"> Companies to invest</Typography> */}
        //   {this.state.simulationtop.map((row) => {
        //     const company = row['company'];
        //     return (
        //       <React.Fragment>
        //           <Typography variant="h6">{row['company']} {row['average_return_percent']}   
        //             <DownloadLink
        //             label = "Download Simulation Results"
        //             filename = "details.csv"
        //             tagName = "button"
        //             exportFile = {() => Promise.resolve(this. getDataFromURL("https://raw.githubusercontent.com/saikr789/stock-index-risk/master/Data/Simulation/500002.csv"))}
        //             />
        //          </Typography>
        //     </React.Fragment>);
        //   })}
        // </Grid>
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13___default()), {
          component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Paper,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10___default()), {
            className: "Simualtion Results",
            minWidth: "650",
            "aria-label": "simple table",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_14___default()), {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15___default()), {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12___default()), {
                  variant: "h5",
                  children: " Company"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12___default()), {
                  align: "right",
                  variant: "h5",
                  children: "Security Id"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12___default()), {
                  align: "right",
                  variant: "h5",
                  children: "Average Returns Percentage"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12___default()), {
                  align: "right",
                  variant: "h5",
                  children: "Simulation Results"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11___default()), {
              children: this.state.simulationtop.map(row => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15___default()), {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12___default()), {
                  component: "th",
                  scope: "row",
                  children: row.Company
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12___default()), {
                  align: "right",
                  children: row["Security Id"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12___default()), {
                  align: "right",
                  children: row["Average Returns %"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_12___default()), {
                  align: "right",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_download_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                    label: "Results",
                    filename: "details.csv",
                    tagName: "button",
                    exportFile: () => Promise.resolve(this.getDataFromURL("https://raw.githubusercontent.com/saikr789/stock-index-risk/master/Data/Simulation/500002.csv"))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 23
                }, this)]
              }, row.Company, true, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 21
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Simulation);

/***/ }),

/***/ "./pages/Components/Top.jsx":
/*!**********************************!*\
  !*** ./pages/Components/Top.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Top.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Top extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      console.log("Top");
      const {
        history,
        location
      } = this.props;

      if ("state" in location && location.state === undefined) {
        history.push("/");
      }

      const {
        match
      } = this.props;
      const {
        num,
        type
      } = match.params;
      this.setState({
        num: num,
        type: type,
        loading: true
      }, () => {});
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/previousdaystockdetails").then(s => {
        if (s.status === 200) {
          let companyStockDetails = s.data;

          if (type === "sell") {
            companyStockDetails.sort((a, b) => {
              return a["Close Price"] - b["Close Price"];
            });
          } else if (type === "buy") {
            companyStockDetails.sort((a, b) => {
              return b["Close Price"] - a["Close Price"];
            });
          }

          companyStockDetails = companyStockDetails.slice(0, num);
          let topCompanies = [];

          for (let index = 0; index < companyStockDetails.length; index++) {
            const element = companyStockDetails[index];
            topCompanies.push(element["Company"]);
          }

          this.setState({
            topCompanies: topCompanies,
            loading: false
          }, () => {});
        } else {
          this.setState({
            topCompanies: [],
            loading: false
          }, () => {});
        }
      }).catch(e => {
        console.log(e);
        this.setState({
          topCompanies: [],
          loading: false
        }, () => {});
      });
    });

    this.state = {
      loading: false,
      num: 10,
      type: "buy",
      topCompanies: []
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
          elevation: 1,
          style: {
            display: "flex",
            padding: "15px",
            margin: "15px",
            justifyContent: "center"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            variant: "h4",
            color: "primary",
            children: ["Top ", this.state.num, " Companies for", " ", this.state.type === "buy" ? "Investing" : "Trading"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this), this.state.topCompanies.map(company => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
            style: {
              textDecoration: "none"
            },
            to: {
              pathname: "/companydetails/" + company
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
              elevation: 1,
              style: {
                display: "flex",
                padding: "10px",
                margin: "10px"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "h6",
                children: company
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 19
            }, this)
          }, (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(), false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }, this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Top);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./pages/App.js");

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\index.js";


 // ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/AppBar");;

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Drawer");;

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Grid");;

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Table");;

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/TableBody");;

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/TableCell");;

/***/ }),

/***/ "@material-ui/core/TableContainer":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableContainer" ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/TableContainer");;

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/TableHead");;

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/TableRow");;

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/TextField");;

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Toolbar");;

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Typography");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@material-ui/data-grid":
/*!*****************************************!*\
  !*** external "@material-ui/data-grid" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/data-grid");;

/***/ }),

/***/ "@material-ui/lab/Autocomplete":
/*!************************************************!*\
  !*** external "@material-ui/lab/Autocomplete" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/lab/Autocomplete");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-apexcharts":
/*!***********************************!*\
  !*** external "react-apexcharts" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-apexcharts");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-download-link":
/*!**************************************!*\
  !*** external "react-download-link" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-download-link");;

/***/ }),

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-loader-spinner");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "underscore":
/*!*****************************!*\
  !*** external "underscore" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("underscore");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9BcHAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9BYm91dC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYW55RGV0YWlscy5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYXJpc2lvbi5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9EYXNoYm9hcmQuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1BhZ2VOb3RGb3VuZC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9QZXJmb3JtYW5jZS5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9SZXZlbnVlLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1NQNTAwLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1NlY3RvcnMuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvU2lkZUJhci5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9TaW11bGF0aW9uLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1RvcC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtYXBleGNoYXJ0c1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LWRvd25sb2FkLWxpbmtcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwicmVuZGVyIiwiQWJvdXQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwidGhlbWUiLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsInNwYWNpbmciLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwibWFyZ2luVG9wIiwiQ29tcGFueURldGFpbHMiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwibWF0Y2giLCJjb21wYW55IiwicGFyYW1zIiwic2V0U3RhdGUiLCJzZWxlY3RlZENvbXBhbnkiLCJnZXRDb21wYW55RGV0YWlscyIsInN0YXRlIiwiYXhpb3MiLCJ0aGVuIiwicyIsInN0YXR1cyIsImNvbXBhbnlEZXRhaWxzIiwiZGF0YSIsImxvYWRpbmciLCJzdG9ja2RldGFpbHMiLCJjYXRjaCIsImUiLCJjb21wYW55Q3VycmVudERheVN0b2NrRGV0YWlscyIsInN0b2Nra2V5cyIsImRpc3BsYXkiLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwicmVzIiwibGVuZ3RoIiwid2l0aFN0eWxlcyIsIkNvbXBhcmlzaW9uIiwiY29tcGFueU5hbWVzIiwic2VsZWN0ZWRDb21wYW5pZXMiLCJlcnJvciIsImluZGV4IiwiYXNzaWduIiwic2VsZWN0ZWRUaW1lUGVyaW9kIiwicmF0ZSIsInRpbWVQZXJpb2QiLCJudW0iLCJwZXJpb2QiLCJ1bmRlcnNjb3JlIiwiZmlyc3RDb21wYW55IiwicmVhc29uIiwiZGV0YWlsIiwiY29tcGFuaWVzIiwib3B0aW9uIiwiY29tcGFueW5hbWUiLCJ3aWR0aCIsInRhcmdldCIsInZhbHVlIiwibWluIiwibWF4Iiwic3RlcCIsIm9uQ2xpY2tTdWJtaXQiLCJlbGVtZW50IiwicGF0aG5hbWUiLCJpIiwiQ2hhcnQiLCJkeW5hbWljIiwic3NyIiwiRGFzaGJvYXJkIiwiZGV0YWlscyIsImRheXMiLCJjbG9zZVByaWNlRGF0YSIsIm5hbWUiLCJ0b0RhdGUiLCJmcm9tRGF0ZSIsInNsaWNlIiwicHVzaCIsIngiLCJ5Iiwib3B0aW9ucyIsInhheGlzIiwic2VyaWVzIiwiY3VycmVudFRhcmdldCIsInNlbGVjdGVkUGVyaW9kIiwiY3JlYXRlR3JhcGgiLCJjaGFydCIsImJhY2tncm91bmQiLCJ0eXBlIiwiaGVpZ2h0Iiwiem9vbSIsImVuYWJsZWQiLCJhdXRvU2NhbGVZYXhpcyIsInRvb2xiYXIiLCJhdXRvU2VsZWN0ZWQiLCJzdHJva2UiLCJzaG93IiwiY3VydmUiLCJsaW5lQ2FwIiwiY29sb3JzIiwidW5kZWZpbmVkIiwiZGFzaEFycmF5IiwiZGF0YUxhYmVscyIsIm1hcmtlcnMiLCJzaXplIiwidGl0bGUiLCJ0ZXh0IiwiYWxpZ24iLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJjb2xvciIsImZpbGwiLCJvcGFjaXR5IiwiZ3JhZGllbnQiLCJzaGFkZUludGVuc2l0eSIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIiwieWF4aXMiLCJsYWJlbHMiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJ0b0ZpeGVkIiwiZHQiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0b29sdGlwIiwic2hhcmVkIiwiZHJhd2VyV2lkdGgiLCJyb290IiwiYXBwQmFyIiwibWFyZ2luTGVmdCIsImRyYXdlciIsImZsZXhTaHJpbmsiLCJkcmF3ZXJQYXBlciIsImFsaWduSXRlbXMiLCJtaXhpbnMiLCJjb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImRlZmF1bHQiLCJmbGV4R3JvdyIsImZsZXhXcmFwIiwib3ZlcmZsb3dYIiwiSG9tZSIsImNsYXNzZXMiLCJwYXBlciIsIkxvZ2luIiwiUGVyZm9ybWFuY2UiLCJTZWN0b3JzIiwiU1A1MDAiLCJTaW11bGF0aW9uIiwiUGFnZU5vdEZvdW5kIiwid2l0aFJvdXRlciIsInRleHRBbGlnbiIsInNlY29uZGFyeSIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImdyaWQiLCJOYXZpZ2F0aW9uQmFyIiwiaGlzdG9yeSIsIlJldmVudWUiLCJjb21wYW55U3RvY2tEZXRhaWxzIiwic29ydCIsImEiLCJiIiwidG9wQ29tcGFuaWVzIiwidXVpZHY0Iiwic3A1MDAiLCJsb2NhdGlvbiIsInNlY3RvcnMiLCJzZWxlY3RlZFNlY3RvciIsInNlbGVjdGVkU2VjdG9yQ29tcGFuaWVzIiwic2VjdG9yIiwiaGVhZGluZyIsInR5cG9ncmFwaHkiLCJweFRvUmVtIiwiZm9udFdlaWdodFJlZ3VsYXIiLCJTaWRlQmFyIiwiYm9yZGVyIiwiU1A1MDBDb21wYW5pZXMiLCJpbnZlc3RtZW50Iiwic3RhcnRkYXRlIiwicmVzcCIsImNvbHMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJyb3dzIiwicmVzcG9uc2UiLCJzZWxkYXlzIiwic2ltdWxhdGlvbnRvcCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImZldGNoIiwiY29tcGFueXNlbGVjdGVkYWZ0ZXJzaW11bGF0aW9uIiwiY29tcGFueWRldGFpbHNhZnRlcnNpbXVsYXRpb24iLCJ0b2RheSIsIm9uU2VsZWN0RGF5cyIsIlBhcGVyIiwicm93IiwiQ29tcGFueSIsImdldERhdGFGcm9tVVJMIiwiVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxHQUFOLFNBQWtCQyx3REFBbEIsQ0FBa0M7QUFDaENDLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLDJEQUFEO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQVArQjs7QUFVbEMsK0RBQWVGLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUEsTUFBTUcsS0FBTixTQUFvQkYsd0RBQXBCLENBQW9DO0FBQUE7QUFBQTs7QUFBQSwrQ0FDZCxNQUFNO0FBQ3hCRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsS0FIaUM7QUFBQTs7QUFLbENILFFBQU0sR0FBRztBQUNQLHdCQUFPLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFQaUM7O0FBVXBDLCtEQUFlQyxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1HLE1BQU0sR0FBSUMsS0FBRCxLQUFZO0FBQ3pCQyxhQUFXLEVBQUU7QUFDWEMsVUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREc7QUFFWEMsWUFBUSxFQUFFO0FBRkMsR0FEWTtBQUt6QkMsYUFBVyxFQUFFO0FBQ1hDLGFBQVMsRUFBRU4sS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURBO0FBTFksQ0FBWixDQUFmOztBQVVB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Ozs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vQ29tcG9uZW50cy9Ib21lXCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxIb21lIC8+XG4gICAgICA8L1JvdXRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkFib3V0XCIpXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+QWJvdXQ8L1JlYWN0LkZyYWdtZW50PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsImltcG9ydCB7XG4gIENoaXAsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIFBhcGVyLFxuICBUeXBvZ3JhcGh5LFxuICB3aXRoU3R5bGVzLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGZvcm1Db250cm9sOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIG1pbldpZHRoOiAxNTAsXG4gIH0sXG4gIHNlbGVjdEVtcHR5OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxufSk7XG5cbmNsYXNzIENvbXBhbnlEZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbXBhbnlEZXRhaWxzOiBbXSxcbiAgICAgIGNvbXBhbnlDdXJyZW50RGF5U3RvY2tEZXRhaWxzOiBbXSxcbiAgICAgIHNlbGVjdGVkQ29tcGFueTogXCJcIixcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzdG9ja2tleXM6IFtcbiAgICAgICAgXCJEYXRlXCIsXG4gICAgICAgIFwiT3BlbiBQcmljZVwiLFxuICAgICAgICBcIkhpZ2ggUHJpY2VcIixcbiAgICAgICAgXCJMb3cgUHJpY2VcIixcbiAgICAgICAgXCJDbG9zZSBQcmljZVwiLFxuICAgICAgICBcIldBUFwiLFxuICAgICAgICBcIk5vLm9mIFNoYXJlc1wiLFxuICAgICAgICBcIk5vLiBvZiBUcmFkZXNcIixcbiAgICAgICAgXCJUb3RhbCBUdXJub3ZlciAoUnMuKVwiLFxuICAgICAgICBcIiUgRGVsaS4gUXR5IHRvIFRyYWRlZCBRdHlcIixcbiAgICAgICAgXCJTcHJlYWQgSGlnaC1Mb3dcIixcbiAgICAgICAgXCJTcHJlYWQgQ2xvc2UtT3BlblwiLFxuICAgICAgXSxcbiAgICAgIHN0b2NrZGV0YWlsczogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tcGFueURldGFpbHNcIik7XG4gICAgY29uc3QgeyBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb21wYW55ID0gbWF0Y2gucGFyYW1zLmNvbXBhbnk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ29tcGFueTogY29tcGFueSB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmdldENvbXBhbnlEZXRhaWxzKHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRDb21wYW55RGV0YWlscyA9IGFzeW5jIChjb21wYW55KSA9PiB7XG4gICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9jb21wYW55ZGV0YWlscz9jb21wYW55PVwiICsgY29tcGFueSkudGhlbigocykgPT4ge1xuICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlEZXRhaWxzOiBzLmRhdGEsIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55RGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhd2FpdCBheGlvc1xuICAgICAgLmdldChcIi9hcGkvcHJldmlvdXNkYXlzdG9ja2RldGFpbHM/Y29tcGFueT1cIiArIGNvbXBhbnkpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2RldGFpbHM6IHMuZGF0YSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2RldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2RldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55ICE9PSBcIlwiICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17M31cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuY29tcGFueURldGFpbHMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb21wYW55RGV0YWlsc1trZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3Bhbj48L3NwYW4+O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGtleSArIFwiIDogXCIgKyB0aGlzLnN0YXRlLmNvbXBhbnlEZXRhaWxzW2tleV07XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cmVzfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAge3RoaXMuc3RhdGUuc3RvY2tkZXRhaWxzLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuc3RvY2trZXlzLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzID0ga2V5ICsgXCIgOiBcIiArIHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzW2tleV07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICBsYWJlbD17cmVzfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55ICE9PSBcIlwiICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zdG9ja2RldGFpbHMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgIDxEYXNoYm9hcmQgY29tcGFueT17dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnl9IC8+XG4gICAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKENvbXBhbnlEZXRhaWxzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB1bmRlcnNjb3JlIGZyb20gXCJ1bmRlcnNjb3JlXCI7XG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xuXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgR3JpZCxcbiAgSW5wdXRMYWJlbCxcbiAgQnV0dG9uLFxuICBNZW51SXRlbSxcbiAgUGFwZXIsXG4gIFNlbGVjdCxcbiAgVHlwb2dyYXBoeSxcbiAgVGV4dEZpZWxkLFxuICBDaGlwLFxuICBEaXZpZGVyLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XG5jbGFzcyBDb21wYXJpc2lvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGNvbXBhbnlOYW1lczogW10sXG4gICAgICBzZWxlY3RlZENvbXBhbmllczogW10sXG4gICAgICBzZWxlY3RlZFRpbWVQZXJpb2Q6IFwiMTgwXCIsXG4gICAgICByYXRlOiBcIjFcIixcbiAgICAgIHN0b2Nra2V5czogW1xuICAgICAgICBcIkRhdGVcIixcbiAgICAgICAgXCJPcGVuIFByaWNlXCIsXG4gICAgICAgIFwiSGlnaCBQcmljZVwiLFxuICAgICAgICBcIkxvdyBQcmljZVwiLFxuICAgICAgICBcIkNsb3NlIFByaWNlXCIsXG4gICAgICAgIFwiV0FQXCIsXG4gICAgICAgIFwiTm8ub2YgU2hhcmVzXCIsXG4gICAgICAgIFwiTm8uIG9mIFRyYWRlc1wiLFxuICAgICAgICBcIlRvdGFsIFR1cm5vdmVyIChScy4pXCIsXG4gICAgICAgIFwiJSBEZWxpLiBRdHkgdG8gVHJhZGVkIFF0eVwiLFxuICAgICAgICBcIlNwcmVhZCBIaWdoLUxvd1wiLFxuICAgICAgICBcIlNwcmVhZCBDbG9zZS1PcGVuXCIsXG4gICAgICBdLFxuICAgICAgdGltZVBlcmlvZDoge1xuICAgICAgICBcIjEgZGF5XCI6IFwiMVwiLFxuICAgICAgICBcIjcgZGF5c1wiOiBcIjdcIixcbiAgICAgICAgXCIxIG1vbnRoXCI6IFwiMzBcIixcbiAgICAgICAgXCIzIG1vbnRoc1wiOiBcIjkwXCIsXG4gICAgICAgIFwiNiBtb250aHNcIjogXCIxODBcIixcbiAgICAgICAgXCIxIHllYXJcIjogXCIzNjBcIixcbiAgICAgICAgXCIyIHllYXJzXCI6IFwiNzIwXCIsXG4gICAgICAgIFwiNSB5ZWFyc1wiOiBcIjE4MDBcIixcbiAgICAgICAgXCIxMCB5ZWFyc1wiOiBcIjM2MDBcIixcbiAgICAgIH0sXG4gICAgICBzdG9ja2RldGFpbHM6IFtdLFxuICAgICAgbnVtOiAxMCxcbiAgICAgIGVycm9yOiBcIlwiLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBhcmlzaW9uXCIpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9jb21wYW55TmFtZXNcIilcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogcy5kYXRhIH0sICgpID0+IHt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueU5hbWVzOiBzLmRhdGEgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tkZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgb25DbGlja1N1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbmllcy5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IFwic2VsZWN0IGF0bGVhc3QgdHdvIGNvbXBhbmllc1wiIH0sICgpID0+IHt9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBcIlwiLCBsb2FkaW5nOiB0cnVlIH0sICgpID0+IHt9KTtcbiAgICB9XG4gICAgbGV0IHN0b2NrZGV0YWlscyA9IHt9O1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFuaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY29tcGFueSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW5pZXNbaW5kZXhdO1xuICAgICAgc3RvY2tkZXRhaWxzW2NvbXBhbnldID0ge307XG4gICAgfVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFuaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY29tcGFueSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW5pZXNbaW5kZXhdO1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChcIi9hcGkvcHJldmlvdXNkYXlzdG9ja2RldGFpbHM/Y29tcGFueT1cIiArIGNvbXBhbnkpXG4gICAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHN0b2NrZGV0YWlsc1tjb21wYW55XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHN0b2NrZGV0YWlsc1tjb21wYW55XSxcbiAgICAgICAgICAgICAgcy5kYXRhXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChcbiAgICAgICAgICBcIi9hcGkvY29tcGFyaXNpb24/ZGF5cz1cIiArXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVBlcmlvZCArXG4gICAgICAgICAgICBcIiZyYXRlPVwiICtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucmF0ZSArXG4gICAgICAgICAgICBcIiZjb21wYW55PVwiICtcbiAgICAgICAgICAgIGNvbXBhbnlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigocykgPT4ge1xuICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBzdG9ja2RldGFpbHNbY29tcGFueV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICBzdG9ja2RldGFpbHNbY29tcGFueV0sXG4gICAgICAgICAgICAgIHMuZGF0YVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogc3RvY2tkZXRhaWxzLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBlcmlvZCA9IHVuZGVyc2NvcmUuaW52ZXJ0KHRoaXMuc3RhdGUudGltZVBlcmlvZCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0Q29tcGFueX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBjb21wYW55LCByZWFzb24sIGRldGFpbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFwicmVtb3ZlLW9wdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgY29tcGFuaWVzID0gdGhpcy5zdGF0ZS5zdG9ja2RldGFpbHM7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgY29tcGFuaWVzW2RldGFpbC5vcHRpb25dO1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogY29tcGFuaWVzIH0sICgpID0+IHt9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ29tcGFuaWVzOiBjb21wYW55IH0sICgpID0+IHt9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGlkPVwic2VsZWN0IG11bHRpcGxlIGNvbXBhbmllc1wiXG4gICAgICAgICAgICAgIGZyZWVTb2xvXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuY29tcGFueU5hbWVzLm1hcChcbiAgICAgICAgICAgICAgICAoY29tcGFueW5hbWUpID0+IGNvbXBhbnluYW1lXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgey4uLnBhcmFtc31cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2VsZWN0IG11bHRpcGxlIGNvbXBhbmllc1wiXG4gICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e3RoaXMuc3RhdGUuZXJyb3J9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvciAhPT0gXCJcIn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyBtaW5XaWR0aDogXCIxNTBweFwiIH19IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbD50cmFkaW5nIHBlcmlvZDwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJ0cmFkaW5nIHBlcmlvZFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ0cmFkaW5nXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgIHsgc2VsZWN0ZWRUaW1lUGVyaW9kOiBlLnRhcmdldC52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVBlcmlvZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnRpbWVQZXJpb2QpLm1hcCgocGVyaW9kKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e3RoaXMuc3RhdGUudGltZVBlcmlvZFtwZXJpb2RdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7cGVyaW9kfVxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IG1pbjogXCItMTAwXCIsIG1heDogXCIxMDBcIiwgc3RlcDogXCIwLjAxXCIgfX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJyYXRlIG9mIGdyb3d0aFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXRlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja1N1Ym1pdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zdG9ja2RldGFpbHMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5zdG9ja2RldGFpbHMpLm1hcCgoY29tcGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnN0YXRlLnN0b2NrZGV0YWlsc1tjb21wYW55XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiY29tcGFueWRldGFpbHMvXCIgKyBlbGVtZW50W1wiY29tcGFueVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50W1wiY29tcGFueVwiXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIEluIHRoZSBsYXN0IHtwZXJpb2RbZWxlbWVudFtcInRvdGFsTnVtYmVyT2ZEYXlzXCJdXX0sIGZvcntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudFtcInBlcmNlbnRPZkRheXNcIl19IHBlcmNlbnQgb2YgdHJhZGluZyBkYXlzIGNsb3NlXG4gICAgICAgICAgICAgICAgICAgICAgcHJpY2UgZ3Jvd3RoIHJhdGUgd2FzIG1vcmUgdGhhbiB7ZWxlbWVudFtcInJhdGVcIl19ICVcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkIGNvbXBhbnk9e2VsZW1lbnRbXCJjb21wYW55XCJdfSAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdG9ja2tleXMubWFwKChrZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0ga2V5ICsgXCIgOiBcIiArIGVsZW1lbnRba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wYXJpc2lvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuY29uc3QgQ2hhcnQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LWFwZXhjaGFydHNcIiksIHsgc3NyOiBmYWxzZSB9KTtcblxuaW1wb3J0IHsgQnV0dG9uR3JvdXAsIEJ1dHRvbiwgRGl2aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgZGV0YWlsczogW10sXG4gICAgICBzZWxlY3RlZFBlcmlvZDogXCJcIixcbiAgICAgIGNvbXBhbnk6IFwiXCIsXG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBzZXJpZXM6IFtdLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBjaGFydDoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgIHR5cGU6IFwiYXJlYVwiLFxuICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgdHlwZTogXCJ4XCIsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgYXV0b1NjYWxlWWF4aXM6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICBhdXRvU2VsZWN0ZWQ6IFwiem9vbVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0cm9rZToge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgY3VydmU6IFwic21vb3RoXCIsXG4gICAgICAgICAgbGluZUNhcDogXCJidXR0XCIsXG4gICAgICAgICAgY29sb3JzOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgZGFzaEFycmF5OiAwLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICBzaXplOiAwLFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIHRleHQ6IFwiU3RvY2sgUHJpY2UgTW92ZW1lbnRcIixcbiAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjI0cHhcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgdHlwZTogXCJzb2xpZFwiLFxuICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgICBncmFkaWVudDoge1xuICAgICAgICAgICAgc2hhZGVJbnRlbnNpdHk6IDEsXG4gICAgICAgICAgICBpbnZlcnNlQ29sb3JzOiBmYWxzZSxcbiAgICAgICAgICAgIG9wYWNpdHlGcm9tOiAxLFxuICAgICAgICAgICAgb3BhY2l0eVRvOiAxLFxuICAgICAgICAgICAgc3RvcHM6IFswLCA5MCwgMTAwXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB5YXhpczoge1xuICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWwudG9GaXhlZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlByaWNlIGluIFJzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICB0eXBlOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZHQgPSBuZXcgRGF0ZSh2YWwpO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGR0LmdldERhdGUoKSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIChkdC5nZXRNb250aCgpICsgMSkgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICBkdC5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiVGltZSBQZXJpb2RcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICBzaGFyZWQ6IGZhbHNlLFxuICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkdCA9IG5ldyBEYXRlKHZhbCk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZHQuZ2V0RGF0ZSgpICtcbiAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgKGR0LmdldE1vbnRoKCkgKyAxKSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIGR0LmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5OiB7XG4gICAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRGFzaGJvYXJkXCIpO1xuICAgIGlmICh0aGlzLnByb3BzLmNvbXBhbnkgIT09IFwic3A1MDBcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnk6IHRoaXMucHJvcHMuY29tcGFueSB9LCAoKSA9PiB7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgLmdldChcIi9hcGkvc3RvY2tkZXRhaWxzP2NvbXBhbnk9XCIgKyB0aGlzLnN0YXRlLmNvbXBhbnkpXG4gICAgICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBzLmRhdGEsIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge30pXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IHRydWUgfSwgKCkgPT4ge30pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55OiB0aGlzLnByb3BzLmNvbXBhbnkgfSwgKCkgPT4ge1xuICAgICAgICBheGlvc1xuICAgICAgICAgIC5nZXQoXCIvYXBpL3NwNTAwXCIpXG4gICAgICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBzLmRhdGEsIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IHRydWUgfSwgKCkgPT4ge30pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNyZWF0ZUdyYXBoID0gKGRheXMpID0+IHtcbiAgICBsZXQgY2xvc2VQcmljZURhdGEgPSB7XG4gICAgICBuYW1lOiBcIkNsb3NlIFByaWNlXCIsXG4gICAgICBkYXRhOiBbXSxcbiAgICB9O1xuICAgIGRheXMgPVxuICAgICAgZGF5cyA9PT0gXCJhbGxcIlxuICAgICAgICA/IHRoaXMuc3RhdGUuZGV0YWlscy5sZW5ndGggLSAxXG4gICAgICAgIDogZGF5cyA+IHRoaXMuc3RhdGUuZGV0YWlscy5sZW5ndGggLSAxXG4gICAgICAgID8gdGhpcy5zdGF0ZS5kZXRhaWxzLmxlbmd0aCAtIDFcbiAgICAgICAgOiBkYXlzO1xuICAgIGNvbnN0IHRvRGF0ZSA9IHRoaXMuc3RhdGUuZGV0YWlsc1swXVtcIkRhdGVcIl07XG4gICAgY29uc3QgZnJvbURhdGUgPSB0aGlzLnN0YXRlLmRldGFpbHNbZGF5c11bXCJEYXRlXCJdO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0YXRlLmRldGFpbHMuc2xpY2UoMCwgZGF5cyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZGF0YVtpXTtcbiAgICAgIGNsb3NlUHJpY2VEYXRhLmRhdGEucHVzaCh7XG4gICAgICAgIHg6IGVsZW1lbnRbXCJEYXRlXCJdLFxuICAgICAgICB5OiBlbGVtZW50W1wiQ2xvc2UgUHJpY2VcIl0gfHwgZWxlbWVudFtcIkNsb3NlXCJdLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBvcHRpb25zID0gdGhpcy5zdGF0ZS5vcHRpb25zO1xuICAgIG9wdGlvbnMueGF4aXNbXCJtaW5cIl0gPSBmcm9tRGF0ZTtcbiAgICBvcHRpb25zLnhheGlzW1wibWF4XCJdID0gdG9EYXRlO1xuICAgIGNvbnN0IHNlcmllcyA9IFtdO1xuICAgIHNlcmllcy5wdXNoKGNsb3NlUHJpY2VEYXRhKTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzZXJpZXM6IHNlcmllcyxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7fVxuICAgICk7XG4gIH07XG5cbiAgc2VsZWN0ZWRQZXJpb2QgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGRheXMgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRQZXJpb2QgPT09IGRheXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUGVyaW9kOiBkYXlzIH0sICgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlR3JhcGgoZGF5cyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgIT09IHRydWUgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCI3XCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0+XG4gICAgICAgICAgICAgICAgICA3RFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCIzMFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9PlxuICAgICAgICAgICAgICAgICAgMU1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiOTBcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfT5cbiAgICAgICAgICAgICAgICAgIDNNXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjE4MFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9PlxuICAgICAgICAgICAgICAgICAgNk1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiMzYwXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0+XG4gICAgICAgICAgICAgICAgICAxWVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCIxODAwXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0+XG4gICAgICAgICAgICAgICAgICA1WVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCJhbGxcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfT5cbiAgICAgICAgICAgICAgICAgIEFsbFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17dGhpcy5zdGF0ZS5vcHRpb25zfSBzZXJpZXM9e3RoaXMuc3RhdGUuc2VyaWVzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsImltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIHdpdGhSb3V0ZXIsIHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL0Fib3V0XCI7XG5cbmltcG9ydCBDb21wYW55RGV0YWlscyBmcm9tIFwiLi9Db21wYW55RGV0YWlsc1wiO1xuaW1wb3J0IENvbXBhcmlzaW9uIGZyb20gXCIuL0NvbXBhcmlzaW9uXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gXCIuL05hdmlnYXRpb25CYXJcIjtcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSBcIi4vUGFnZU5vdEZvdW5kXCI7XG5pbXBvcnQgUGVyZm9ybWFuY2UgZnJvbSBcIi4vUGVyZm9ybWFuY2VcIjtcbmltcG9ydCBSZXZlbnVlIGZyb20gXCIuL1JldmVudWVcIjtcbmltcG9ydCBTZWN0b3JzIGZyb20gXCIuL1NlY3RvcnNcIjtcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuL1NpZGVCYXJcIjtcbmltcG9ydCBTUDUwMCBmcm9tIFwiLi9TUDUwMFwiO1xuaW1wb3J0IFRvcCBmcm9tIFwiLi9Ub3BcIjtcbmltcG9ydCBTaW11bGF0aW9uIGZyb20gXCIuL1NpbXVsYXRpb25cIjtcbmNvbnN0IGRyYXdlcldpZHRoID0gMzAwO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gIH0sXG4gIGFwcEJhcjoge1xuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxuICB9LFxuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgZmxleFNocmluazogMCxcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gIH0sXG4gIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXG4gIHRvb2xiYXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIC8vIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgcGFkZGluZzogMjAsXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxuICAgIGZsZXhHcm93OiAxLFxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIG1pbldpZHRoOiBcIjQ4MHB4XCIsXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICB9LFxufSk7XG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbXBhbnlOYW1lczogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiSG9tZVwiKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxBcHBCYXJcbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfVxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJpbmhlcml0XCIsIGNvbG9yOiBcImluaGVyaXRcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJhciAvPlxuICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9XG4gICAgICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYW5jaG9yPVwibGVmdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlN0b2NrIFRyZW5kczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNpZGVCYXIgLz5cbiAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiAvPlxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvcGVyZm9ybWFuY2VcIiBjb21wb25lbnQ9e1BlcmZvcm1hbmNlfSAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgIHBhdGg9XCIvdG9wLzpudW0vOnR5cGVcIlxuICAgICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IG51bSwgdHlwZSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUb3Aga2V5PXtgbnVtPSR7bnVtfSZ0eXBlPSR7dHlwZX1gfSB7Li4ucHJvcHN9IC8+O1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NlY3RvcnNcIiBjb21wb25lbnQ9e1NlY3RvcnN9IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgcGF0aD1cIi9jb21wYW55ZGV0YWlscy86Y29tcGFueVwiXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgY29tcGFueSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENvbXBhbnlEZXRhaWxzIGtleT17YGNvbXBhbnk9JHtjb21wYW55fWB9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICBwYXRoPVwiL3JldmVudWVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17KCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJldmVudWUgY29tcGFueU5hbWVzPXt0aGlzLnN0YXRlLmNvbXBhbnlOYW1lc30gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9zcDUwMFwiIGNvbXBvbmVudD17U1A1MDB9IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2NvbXBhcmlzaW9uXCIgY29tcG9uZW50PXtDb21wYXJpc2lvbn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2ltdWxhdGlvblwiIGNvbXBvbmVudD17U2ltdWxhdGlvbn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17UGFnZU5vdEZvdW5kfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykod2l0aFJvdXRlcihIb21lKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJMb2dpblwiKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+TG9naW48L1JlYWN0LkZyYWdtZW50PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsImltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmssIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICB9LFxuICBsaW5rOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICB9LFxuICBncmlkOiB7XG4gICAgcGFkZGluZzogMjAsXG4gIH0sXG59KTtcblxuY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNlbGVjdGVkQ29tcGFueTogXCIgXCIsIGNvbXBhbnlOYW1lczogW10gfTtcbiAgfVxuXG4gIHNlbGVjdGVkQ29tcGFueSA9IChlLCB2YWwpID0+IHtcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ29tcGFueTogdmFsIH0sICgpID0+IHtcbiAgICAgIGhpc3RvcnkucHVzaChcIi9jb21wYW55ZGV0YWlscy9cIiArIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb25CYXJcIik7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL2NvbXBhbnlOYW1lc1wiKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueU5hbWVzOiBzLmRhdGEgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogW10gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHNwYWNpbmc9ezJ9PlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3BlcmZvcm1hbmNlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICBQZXJmb3JtYW5jZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2NvbXBhcmlzaW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICBDb21wYXJpc2lvblxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3NpbXVsYXRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0gdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIFNpbXVsYXRpb25cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29tcGFueShlLCB2YWwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGlkPVwic2VhcmNoIGZvciBjb21wYW5pZXNcIlxuICAgICAgICAgICAgZnJlZVNvbG9cbiAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuY29tcGFueU5hbWVzLm1hcCgoY29tcGFueW5hbWUpID0+IGNvbXBhbnluYW1lKX1cbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwic2VhcmNoIGZvciBjb21wYW5pZXNcIlxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKSh3aXRoUm91dGVyKE5hdmlnYXRpb25CYXIpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgUGFnZU5vdEZvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJQYWdlTm90Rm91bmRcIik7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxoMT5QYWdlIE5vdCBGb3VuZDwvaDE+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vdEZvdW5kO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBQZXJmb3JtYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUGVyZm9ybWFuY2VcIik7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlBlcmZvcm1hbmNlPC9SZWFjdC5GcmFnbWVudD47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyZm9ybWFuY2U7XG4iLCJpbXBvcnQgeyBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcblxuY2xhc3MgUmV2ZW51ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b3BDb21wYW5pZXM6IFtdLFxuICAgICAgbnVtOiAzMCxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUmV2ZW51ZVwiKTtcbiAgICBheGlvc1xuICAgICAgLmdldChcIi9hcGkvcHJldmlvdXNkYXlzdG9ja2RldGFpbHNcIilcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgbGV0IGNvbXBhbnlTdG9ja0RldGFpbHMgPSBzLmRhdGE7XG4gICAgICAgICAgY29tcGFueVN0b2NrRGV0YWlscy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYVtcIlJldmVudWVcIl0gLSBiW1wiUmV2ZW51ZVwiXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb21wYW55U3RvY2tEZXRhaWxzID0gY29tcGFueVN0b2NrRGV0YWlscy5zbGljZSgwLCB0aGlzLnN0YXRlLm51bSk7XG4gICAgICAgICAgbGV0IHRvcENvbXBhbmllcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wYW55U3RvY2tEZXRhaWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNvbXBhbnlTdG9ja0RldGFpbHNbaW5kZXhdO1xuICAgICAgICAgICAgdG9wQ29tcGFuaWVzLnB1c2goZWxlbWVudFtcIkNvbXBhbnlcIl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgeyB0b3BDb21wYW5pZXM6IHRvcENvbXBhbmllcywgbG9hZGluZzogZmFsc2UgfSxcbiAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9wQ29tcGFuaWVzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9wQ29tcGFuaWVzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgZWxldmF0aW9uPXsxfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIFRvcCB7dGhpcy5zdGF0ZS5udW19IENvbXBhbmllcyBSZXZlbnVlIHdpc2VcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvcENvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2NvbXBhbnlkZXRhaWxzL1wiICsgY29tcGFueSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBtYXJnaW46IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntjb21wYW55fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmV2ZW51ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuY2xhc3MgU1A1MDAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzcDUwMDogW10gfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNQNTAwXCIpO1xuICAgIC8vIGF4aW9zXG4gICAgLy8gICAuZ2V0KFwiL3NwNTAwXCIpXG4gICAgLy8gICAudGhlbigocykgPT4ge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgc3A1MDA6IHMuZGF0YSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC50aGVuKCgpID0+IHt9KVxuICAgIC8vICAgLmNhdGNoKChlKSA9PiB7fSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8UGFwZXJcbiAgICAgICAgICBlbGV2YXRpb249ezN9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntcIlNQIDUwMFwifTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPERhc2hib2FyZCBjb21wYW55PVwic3A1MDBcIiAvPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNQNTAwO1xuIiwiaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBTZWN0b3JzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlY3RvcnM6IFtdLFxuICAgICAgc2VsZWN0ZWRTZWN0b3I6IFwiXCIsXG4gICAgICBzZWxlY3RlZFNlY3RvckNvbXBhbmllczogW10sXG4gICAgICBzZWxlY3RlZENvbXBhbnk6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2VjdG9yc1wiKTtcbiAgICBjb25zdCB7IGhpc3RvcnksIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChcInN0YXRlXCIgaW4gbG9jYXRpb24gJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICB9XG5cbiAgICBheGlvcy5nZXQoXCJhcGkvc2VjdG9yc1wiKS50aGVuKChzKSA9PiB7XG4gICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VjdG9yczogcy5kYXRhIH0sICgpID0+IHt9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWN0b3JzOiBbXSB9LCAoKSA9PiB7fSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgc2VsZWN0ZWRTZWN0b3IgPSAoZSwgdmFsKSA9PiB7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgeyBzZWxlY3RlZFNlY3RvcjogXCJcIiwgc2VsZWN0ZWRTZWN0b3JDb21wYW5pZXM6IFtdIH0sXG4gICAgICAgICgpID0+IHt9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTZWN0b3I6IHZhbCxcbiAgICAgICAgICBzZWxlY3RlZFNlY3RvckNvbXBhbmllczogdGhpcy5zdGF0ZS5zZWN0b3JzW3ZhbF0sXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHt9XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBzZWxlY3RlZENvbXBhbnkgPSAodmFsKSA9PiB7XG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbnk6IHZhbCB9LCAoKSA9PiB7XG4gICAgICAgIGhpc3RvcnkucHVzaChcImNvbXBhbnlkZXRhaWxzL1wiICsgdmFsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlY3RvcnMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgYWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZWN0b3IoZSwgdmFsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpZD1cInNlYXJjaCBmb3Igc2VjdG9yXCJcbiAgICAgICAgICAgIGZyZWVTb2xvXG4gICAgICAgICAgICBvcHRpb25zPXtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnNlY3RvcnMpLm1hcCgoc2VjdG9yKSA9PiBzZWN0b3IpfVxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbn1cbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwic2VhcmNoIGZvciBzZWN0b3JcIlxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWRTZWN0b3JDb21wYW5pZXMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgYWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21wYW55KHZhbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaWQ9XCJzZWFyY2ggZm9yIGNvbXBhbmllc1wiXG4gICAgICAgICAgICBmcmVlU29sb1xuICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlY3RvckNvbXBhbmllcy5tYXAoXG4gICAgICAgICAgICAgIChjb21wYW55KSA9PiBjb21wYW55XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbn1cbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwic2VhcmNoIGZvciBjb21wYW55XCJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdG9ycztcbiIsImltcG9ydCB7XG4gIEFjY29yZGlvbixcbiAgQWNjb3JkaW9uRGV0YWlscyxcbiAgQWNjb3JkaW9uU3VtbWFyeSxcbiAgUGFwZXIsXG4gIHdpdGhTdHlsZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxuICBoZWFkaW5nOiB7XG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNSksXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcbiAgfSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBcIiYgPiAqXCI6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAvLyBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY2xhc3MgU2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNpZGViYXJcIik7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgIDxBY2NvcmRpb24gc3R5bGU9e3sgYm9yZGVyOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5IGFyaWEtY29udHJvbHM9XCJwYW5lbDFhLWNvbnRlbnRcIiBpZD1cInRvcDEwXCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlRPUCAxMDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPXt7IHBhdGhuYW1lOiBcIi90b3AvMTAvYnV5XCIgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5CVVk8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL3RvcC8xMC9zZWxsXCIgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5TRUxMPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICA8QWNjb3JkaW9uPlxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgYXJpYS1jb250cm9scz1cInBhbmVsMWEtY29udGVudFwiPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5UT1AgMzA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdG9wLzMwL2J1eVwiIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+QlVZPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPXt7IHBhdGhuYW1lOiBcIi90b3AvMzAvc2VsbFwiIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+U0VMTDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89e3sgcGF0aG5hbWU6IFwiL3NlY3RvcnNcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5TZWN0b3JzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89e3sgcGF0aG5hbWU6IFwiL3NwNTAwXCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+UyBBTkQgUCA1MDA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICA8TmF2TGluayB0bz17eyBwYXRobmFtZTogXCIvcmV2ZW51ZVwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlRPUCBSRVZFTlVFPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFNpZGVCYXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2hpcCxcbiAgR3JpZCxcbiAgVHlwb2dyYXBoeSxcbiAgVGV4dEZpZWxkLFxuICBGb3JtQ29udHJvbCxcbiAgSW5wdXRMYWJlbCxcbiAgU2VsZWN0LFxuICBNZW51SXRlbSxcbiAgRGl2aWRlcixcbiAgUGFwZXIsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHVuZGVyc2NvcmUgZnJvbSBcInVuZGVyc2NvcmVcIjtcbmltcG9ydCB7XG4gIERhdGFHcmlkLFxuICBHcmlkVG9vbGJhckNvbnRhaW5lcixcbiAgR3JpZFRvb2xiYXJFeHBvcnQsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCI7XG5pbXBvcnQgRG93bmxvYWRMaW5rIGZyb20gXCJyZWFjdC1kb3dubG9hZC1saW5rXCI7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5cblxuY2xhc3MgU2ltdWxhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZENvbXBhbnk6IFwiXCIsXG4gICAgICBjb21wYW55TmFtZXM6IFtdLFxuICAgICAgZGF5czogMSxcbiAgICAgIGludmVzdG1lbnQ6IDEsXG4gICAgICBzdGFydGRhdGU6IFwiMjAxNy0wMy0xMFwiLFxuICAgICAgcmVzcG9uc2U6IFtdLFxuICAgICAgY29sczogW10sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHNlbGRheXM6IFwiXCIsXG4gICAgICBzaW11bGF0aW9udG9wOiBbXSxcbiAgICAgIGNvbXBhbnlzZWxlY3RlZGFmdGVyc2ltdWxhdGlvbiA6IFwiXCIsXG4gICAgICBjb21wYW55ZGV0YWlsc2FmdGVyc2ltdWxhdGlvbiA6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBTUDUwMCA9XG4gICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWlrcjc4OS9zdG9jay1hbmFseXNpcy10b29sLTEwMTEvbWFzdGVyL0RhdGEvU1A1MDBDb21wYW5pZXMuanNvblwiO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFNQNTAwKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgU1A1MDBDb21wYW5pZXMgPSBPYmplY3Qua2V5cyh1bmRlcnNjb3JlLmludmVydChzLmRhdGEpKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueU5hbWVzOiBTUDUwMENvbXBhbmllcyB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlNpbXVsYXRpb25cIik7XG4gIH07XG5cbiAgb25DbGlja1N1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnkgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1zID1cbiAgICAgIFwiY29tcGFueT1cIiArXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSArXG4gICAgICBcIiZcIiArXG4gICAgICBcImludmVzdG1lbnQ9XCIgK1xuICAgICAgdGhpcy5zdGF0ZS5pbnZlc3RtZW50ICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiZGF5cz1cIiArXG4gICAgICB0aGlzLnN0YXRlLmRheXMgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJkYXRlPVwiICtcbiAgICAgIHRoaXMuc3RhdGUuc3RhcnRkYXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9zaW11bGF0aW9uP1wiICsgcGFyYW1zKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgcmVzcCA9IHMuZGF0YTtcbiAgICAgICAgICBpZiAocmVzcC5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgbGV0IGNvbHMgPSBbXTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlc3BbMF0pLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbHMucHVzaCh7IGZpZWxkOiBrZXksIGhlYWRlck5hbWU6IGtleSwgd2lkdGg6IDE1MCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IHJvd3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocmVzcFtpXSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzcFtpXVtcImlkXCJdID0gaTtcbiAgICAgICAgICAgICAgICByb3dzLnB1c2gocmVzcFtpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgIHsgcmVzcG9uc2U6IHJvd3MsIGNvbHM6IGNvbHMsIGxvYWRpbmc6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgb25TZWxlY3REYXlzID0gKGUpID0+IHtcbiAgICBjb25zdCBkYXlzID0gZS50YXJnZXQudmFsdWU7XG4gICAgLy8gY29uc3QgdG9wdXJsID1cbiAgICAvLyAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS9tYXN0ZXIvRGF0YS9TaW11bGF0aW9uL3RvcF9zZWxkYXlzLmNzdlwiO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxkYXlzOiBkYXlzIH0sICgpID0+IHt9KTtcbiAgICBheGlvc1xuICAgICAgLmdldChcIi9hcGkvc2ltdWxhdGlvbnRvcFwiICsgXCI/XCIgKyBcImRheXM9XCIgKyBkYXlzKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2ltdWxhdGlvbnRvcDogcy5kYXRhIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH0pO1xuICB9O1xuXG5cblxuICBnZXREYXRhRnJvbVVSTCA9ICh1cmwpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgfSwgMjAwMCk7XG5cbiAgXG5cbiAgZXhwb3J0VG9DU1YgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHcmlkVG9vbGJhckNvbnRhaW5lcj5cbiAgICAgICAgPEdyaWRUb29sYmFyRXhwb3J0IC8+XG4gICAgICA8L0dyaWRUb29sYmFyQ29udGFpbmVyPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgbWluV2lkdGg6IFwiMTUwcHhcIiB9fSB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgICAgICAgIDxJbnB1dExhYmVsPmRheXM8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICBsYWJlbElkPVwiZGF5c1wiXG4gICAgICAgICAgICAgIGlkPVwiZGF5c1wiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RGF5c31cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZGF5c31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1szMCwgNjAsIDkwLCAxODAsIDI3MCwgMzYwLCA1NDAsIDcyMCwgOTAwLCAxMDgwXS5tYXAoXG4gICAgICAgICAgICAgICAgKHBlcmlvZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSB2YWx1ZT17cGVyaW9kfT57cGVyaW9kfTwvTWVudUl0ZW0+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAge3RoaXMuc3RhdGUuc2ltdWxhdGlvbnRvcC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAvLyA8R3JpZCBzdHlsZT17eyBoZWlnaHQ6IFwiMjUwcHhcIiwgb3ZlcmZsb3dYOiBcInNjcm9sbFwiIH19PlxuICAgICAgICAgICAgLy8gICB7LyogPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+IENvbXBhbmllcyB0byBpbnZlc3Q8L1R5cG9ncmFwaHk+ICovfVxuICAgICAgICAgICAgLy8gICB7dGhpcy5zdGF0ZS5zaW11bGF0aW9udG9wLm1hcCgocm93KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgY29tcGFueSA9IHJvd1snY29tcGFueSddO1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiAoXG4gICAgICAgICAgICAvLyAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e3Jvd1snY29tcGFueSddfSB7cm93WydhdmVyYWdlX3JldHVybl9wZXJjZW50J119ICAgXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxEb3dubG9hZExpbmtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsID0gXCJEb3dubG9hZCBTaW11bGF0aW9uIFJlc3VsdHNcIlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmlsZW5hbWUgPSBcImRldGFpbHMuY3N2XCJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRhZ05hbWUgPSBcImJ1dHRvblwiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBleHBvcnRGaWxlID0geygpID0+IFByb21pc2UucmVzb2x2ZSh0aGlzLiBnZXREYXRhRnJvbVVSTChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWlrcjc4OS9zdG9jay1pbmRleC1yaXNrL21hc3Rlci9EYXRhL1NpbXVsYXRpb24vNTAwMDAyLmNzdlwiKSl9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgLy8gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgLy8gICAgIDwvUmVhY3QuRnJhZ21lbnQ+KTtcbiAgICAgICAgICAgIC8vICAgfSl9XG4gICAgICAgICAgICAvLyA8L0dyaWQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cIlNpbXVhbHRpb24gUmVzdWx0c1wiIG1pbldpZHRoPSBcIjY1MFwiIGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHZhcmlhbnQgPSBcImg1XCI+IENvbXBhbnk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgdmFyaWFudCA9IFwiaDVcIj5TZWN1cml0eSBJZDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiB2YXJpYW50ID0gXCJoNVwiPkF2ZXJhZ2UgUmV0dXJucyBQZXJjZW50YWdlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHZhcmlhbnQgPSBcImg1XCI+U2ltdWxhdGlvbiBSZXN1bHRzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaW11bGF0aW9udG9wLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5Db21wYW55fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuQ29tcGFueX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93W1wiU2VjdXJpdHkgSWRcIl19PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvd1tcIkF2ZXJhZ2UgUmV0dXJucyAlXCJdfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJSZXN1bHRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gXCJkZXRhaWxzLmNzdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lID0gXCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0RmlsZSA9IHsoKSA9PiBQcm9taXNlLnJlc29sdmUodGhpcy4gZ2V0RGF0YUZyb21VUkwoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2staW5kZXgtcmlzay9tYXN0ZXIvRGF0YS9TaW11bGF0aW9uLzUwMDAwMi5jc3ZcIikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgey8qIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiB9fVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICB7IHJlc3BvbnNlOiBbXSwgc2VsZWN0ZWRDb21wYW55OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDb21wYW55OiB2YWwgfSwgKCkgPT4ge30pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaWQ9XCJzZWFyY2ggZm9yIGNvbXBhbmllc1wiXG4gICAgICAgICAgICAgIGZyZWVTb2xvXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuY29tcGFueU5hbWVzLm1hcChcbiAgICAgICAgICAgICAgICAoY29tcGFueW5hbWUpID0+IGNvbXBhbnluYW1lXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgey4uLnBhcmFtc31cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2VhcmNoIGZvciBjb21wYW5pZXNcIlxuICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMTVweFwiIH19XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwic3RhcnQgZGF0ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMjAxNy0wMy0xMFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnN0YXJ0ZGF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0ZGF0ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7IG1pbjogXCIyMDE3LTAzLTEwXCIsIG1heDogXCIyMDIxLTAzLTE5XCIgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogXCIxNXB4XCIgfX1cbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBtaW46IFwiMVwiLCBtYXg6IFwiODAwXCIsIHN0ZXA6IFwiMVwiIH19XG4gICAgICAgICAgICAgIGxhYmVsPVwiZGF5c1wiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRheXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXlzOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdUb3A6IFwiMTVweFwiIH19XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgbWluOiBcIjFcIiwgbWF4OiBcIjEwMDAwMDBcIiwgc3RlcDogXCIxXCIgfX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJpbnZlc3RtZW50XCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW52ZXN0bWVudH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGludmVzdG1lbnQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMTVweFwiIH19XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja1N1Ym1pdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD4gKi99XG4gICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB0aGlzLnN0YXRlLmNvbXBhbnlkZXRhaWxzYWZ0ZXJzaW11bGF0aW9uLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICA8RGF0YUdyaWRcbiAgICAgICAgICAgICAgcm93cz17dGhpcy5zdGF0ZS5jb21wYW55ZGV0YWlsc2FmdGVyc2ltdWxhdGlvbn1cbiAgICAgICAgICAgICAgY29sdW1ucz17dGhpcy5zdGF0ZS5jb2xzfVxuICAgICAgICAgICAgICBhdXRvSGVpZ2h0XG4gICAgICAgICAgICAgIGRpc2FibGVTZWxlY3Rpb25PbkNsaWNrXG4gICAgICAgICAgICAgIGhpZGVGb290ZXJQYWdpbmF0aW9uXG4gICAgICAgICAgICAgIGhpZGVGb290ZXJcbiAgICAgICAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgICAgICAgIFRvb2xiYXI6IHRoaXMuZXhwb3J0VG9DU1YsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgKX0gKi99XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltdWxhdGlvbjtcbiIsImltcG9ydCB7IFBhcGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuXG5jbGFzcyBUb3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBudW06IDEwLFxuICAgICAgdHlwZTogXCJidXlcIixcbiAgICAgIHRvcENvbXBhbmllczogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiVG9wXCIpO1xuICAgIGNvbnN0IHsgaGlzdG9yeSwgbG9jYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKFwic3RhdGVcIiBpbiBsb2NhdGlvbiAmJiBsb2NhdGlvbi5zdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgIH1cbiAgICBjb25zdCB7IG1hdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbnVtLCB0eXBlIH0gPSBtYXRjaC5wYXJhbXM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG51bTogbnVtLCB0eXBlOiB0eXBlLCBsb2FkaW5nOiB0cnVlIH0sICgpID0+IHt9KTtcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9wcmV2aW91c2RheXN0b2NrZGV0YWlsc1wiKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgY29tcGFueVN0b2NrRGV0YWlscyA9IHMuZGF0YTtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gXCJzZWxsXCIpIHtcbiAgICAgICAgICAgIGNvbXBhbnlTdG9ja0RldGFpbHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYVtcIkNsb3NlIFByaWNlXCJdIC0gYltcIkNsb3NlIFByaWNlXCJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImJ1eVwiKSB7XG4gICAgICAgICAgICBjb21wYW55U3RvY2tEZXRhaWxzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGJbXCJDbG9zZSBQcmljZVwiXSAtIGFbXCJDbG9zZSBQcmljZVwiXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb21wYW55U3RvY2tEZXRhaWxzID0gY29tcGFueVN0b2NrRGV0YWlscy5zbGljZSgwLCBudW0pO1xuICAgICAgICAgIGxldCB0b3BDb21wYW5pZXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcGFueVN0b2NrRGV0YWlscy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb21wYW55U3RvY2tEZXRhaWxzW2luZGV4XTtcbiAgICAgICAgICAgIHRvcENvbXBhbmllcy5wdXNoKGVsZW1lbnRbXCJDb21wYW55XCJdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHsgdG9wQ29tcGFuaWVzOiB0b3BDb21wYW5pZXMsIGxvYWRpbmc6IGZhbHNlIH0sXG4gICAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcENvbXBhbmllczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcENvbXBhbmllczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17MX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICBUb3Age3RoaXMuc3RhdGUubnVtfSBDb21wYW5pZXMgZm9ye1wiIFwifVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnR5cGUgPT09IFwiYnV5XCIgPyBcIkludmVzdGluZ1wiIDogXCJUcmFkaW5nXCJ9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS50b3BDb21wYW5pZXMubWFwKChjb21wYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAga2V5PXt1dWlkdjQoKX1cbiAgICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9jb21wYW55ZGV0YWlscy9cIiArIGNvbXBhbnksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249ezF9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgbWFyZ2luOiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57Y29tcGFueX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoXG4vLyAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuLy8gICAgIDxBcHAgLz5cbi8vICAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4vLyApO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gPEFwcCAvPjtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBleGNoYXJ0c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb3dubG9hZC1saW5rXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9