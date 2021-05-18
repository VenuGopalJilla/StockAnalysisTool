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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/data-grid */ "@material-ui/data-grid");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_download_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-download-link */ "react-download-link");
/* harmony import */ var react_download_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_download_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Simulation.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















class Simulation extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      const SP500 = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/SP500Companies.json";
      axios__WEBPACK_IMPORTED_MODULE_4___default().get(SP500).then(s => {
        if (s.status === 200) {
          let SP500Companies = Object.keys(underscore__WEBPACK_IMPORTED_MODULE_6___default().invert(s.data));
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
      axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/simulation?" + params).then(s => {
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
      axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/simulationtop" + "?" + "days=" + days).then(s => {
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
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_7__.GridToolbarContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_7__.GridToolbarExport, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
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
            lineNumber: 166,
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
                lineNumber: 176,
                columnNumber: 26
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, this), this.state.simulationtop.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
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
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_12___default()), {
          component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Paper,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9___default()), {
            className: "Simualtion Results",
            minWidth: "650",
            "aria-label": "simple table",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13___default()), {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14___default()), {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default()), {
                  variant: "h5",
                  children: " Company"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default()), {
                  align: "right",
                  variant: "h5",
                  children: "Average Returns Percentage"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default()), {
                  align: "right",
                  variant: "h5",
                  children: "Simulation Results"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10___default()), {
              children: this.state.simulationtop.map(row => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14___default()), {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default()), {
                  component: "th",
                  scope: "row",
                  children: row.company
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default()), {
                  align: "right",
                  children: row.average_return_percent
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default()), {
                  align: "right",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_download_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                    label: "Results",
                    filename: "details.csv",
                    tagName: "button",
                    exportFile: () => Promise.resolve(this.getDataFromURL("https://raw.githubusercontent.com/saikr789/stock-index-risk/master/Data/Simulation/500002.csv"))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 23
                }, this)]
              }, row.company, true, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 21
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9BcHAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9BYm91dC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYW55RGV0YWlscy5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYXJpc2lvbi5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9EYXNoYm9hcmQuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1BhZ2VOb3RGb3VuZC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9QZXJmb3JtYW5jZS5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9SZXZlbnVlLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1NQNTAwLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1NlY3RvcnMuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvU2lkZUJhci5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9TaW11bGF0aW9uLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1RvcC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtYXBleGNoYXJ0c1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LWRvd25sb2FkLWxpbmtcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwicmVuZGVyIiwiQWJvdXQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwidGhlbWUiLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsInNwYWNpbmciLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwibWFyZ2luVG9wIiwiQ29tcGFueURldGFpbHMiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwibWF0Y2giLCJjb21wYW55IiwicGFyYW1zIiwic2V0U3RhdGUiLCJzZWxlY3RlZENvbXBhbnkiLCJnZXRDb21wYW55RGV0YWlscyIsInN0YXRlIiwiYXhpb3MiLCJ0aGVuIiwicyIsInN0YXR1cyIsImNvbXBhbnlEZXRhaWxzIiwiZGF0YSIsImxvYWRpbmciLCJzdG9ja2RldGFpbHMiLCJjYXRjaCIsImUiLCJjb21wYW55Q3VycmVudERheVN0b2NrRGV0YWlscyIsInN0b2Nra2V5cyIsImRpc3BsYXkiLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwicmVzIiwibGVuZ3RoIiwid2l0aFN0eWxlcyIsIkNvbXBhcmlzaW9uIiwiY29tcGFueU5hbWVzIiwic2VsZWN0ZWRDb21wYW5pZXMiLCJlcnJvciIsImluZGV4IiwiYXNzaWduIiwic2VsZWN0ZWRUaW1lUGVyaW9kIiwicmF0ZSIsInRpbWVQZXJpb2QiLCJudW0iLCJwZXJpb2QiLCJ1bmRlcnNjb3JlIiwiZmlyc3RDb21wYW55IiwicmVhc29uIiwiZGV0YWlsIiwiY29tcGFuaWVzIiwib3B0aW9uIiwiY29tcGFueW5hbWUiLCJ3aWR0aCIsInRhcmdldCIsInZhbHVlIiwibWluIiwibWF4Iiwic3RlcCIsIm9uQ2xpY2tTdWJtaXQiLCJlbGVtZW50IiwicGF0aG5hbWUiLCJpIiwiQ2hhcnQiLCJkeW5hbWljIiwic3NyIiwiRGFzaGJvYXJkIiwiZGV0YWlscyIsImRheXMiLCJjbG9zZVByaWNlRGF0YSIsIm5hbWUiLCJ0b0RhdGUiLCJmcm9tRGF0ZSIsInNsaWNlIiwicHVzaCIsIngiLCJ5Iiwib3B0aW9ucyIsInhheGlzIiwic2VyaWVzIiwiY3VycmVudFRhcmdldCIsInNlbGVjdGVkUGVyaW9kIiwiY3JlYXRlR3JhcGgiLCJjaGFydCIsImJhY2tncm91bmQiLCJ0eXBlIiwiaGVpZ2h0Iiwiem9vbSIsImVuYWJsZWQiLCJhdXRvU2NhbGVZYXhpcyIsInRvb2xiYXIiLCJhdXRvU2VsZWN0ZWQiLCJzdHJva2UiLCJzaG93IiwiY3VydmUiLCJsaW5lQ2FwIiwiY29sb3JzIiwidW5kZWZpbmVkIiwiZGFzaEFycmF5IiwiZGF0YUxhYmVscyIsIm1hcmtlcnMiLCJzaXplIiwidGl0bGUiLCJ0ZXh0IiwiYWxpZ24iLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJjb2xvciIsImZpbGwiLCJvcGFjaXR5IiwiZ3JhZGllbnQiLCJzaGFkZUludGVuc2l0eSIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIiwieWF4aXMiLCJsYWJlbHMiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJ0b0ZpeGVkIiwiZHQiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0b29sdGlwIiwic2hhcmVkIiwiZHJhd2VyV2lkdGgiLCJyb290IiwiYXBwQmFyIiwibWFyZ2luTGVmdCIsImRyYXdlciIsImZsZXhTaHJpbmsiLCJkcmF3ZXJQYXBlciIsImFsaWduSXRlbXMiLCJtaXhpbnMiLCJjb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImRlZmF1bHQiLCJmbGV4R3JvdyIsImZsZXhXcmFwIiwib3ZlcmZsb3dYIiwiSG9tZSIsImNsYXNzZXMiLCJwYXBlciIsIkxvZ2luIiwiUGVyZm9ybWFuY2UiLCJTZWN0b3JzIiwiU1A1MDAiLCJTaW11bGF0aW9uIiwiUGFnZU5vdEZvdW5kIiwid2l0aFJvdXRlciIsInRleHRBbGlnbiIsInNlY29uZGFyeSIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImdyaWQiLCJOYXZpZ2F0aW9uQmFyIiwiaGlzdG9yeSIsIlJldmVudWUiLCJjb21wYW55U3RvY2tEZXRhaWxzIiwic29ydCIsImEiLCJiIiwidG9wQ29tcGFuaWVzIiwidXVpZHY0Iiwic3A1MDAiLCJsb2NhdGlvbiIsInNlY3RvcnMiLCJzZWxlY3RlZFNlY3RvciIsInNlbGVjdGVkU2VjdG9yQ29tcGFuaWVzIiwic2VjdG9yIiwiaGVhZGluZyIsInR5cG9ncmFwaHkiLCJweFRvUmVtIiwiZm9udFdlaWdodFJlZ3VsYXIiLCJTaWRlQmFyIiwiYm9yZGVyIiwiU1A1MDBDb21wYW5pZXMiLCJpbnZlc3RtZW50Iiwic3RhcnRkYXRlIiwicmVzcCIsImNvbHMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJyb3dzIiwicmVzcG9uc2UiLCJzZWxkYXlzIiwic2ltdWxhdGlvbnRvcCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImZldGNoIiwiY29tcGFueXNlbGVjdGVkYWZ0ZXJzaW11bGF0aW9uIiwiY29tcGFueWRldGFpbHNhZnRlcnNpbXVsYXRpb24iLCJ0b2RheSIsIm9uU2VsZWN0RGF5cyIsIlBhcGVyIiwicm93IiwiYXZlcmFnZV9yZXR1cm5fcGVyY2VudCIsImdldERhdGFGcm9tVVJMIiwiVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxHQUFOLFNBQWtCQyx3REFBbEIsQ0FBa0M7QUFDaENDLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLDJEQUFEO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQVArQjs7QUFVbEMsK0RBQWVGLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUEsTUFBTUcsS0FBTixTQUFvQkYsd0RBQXBCLENBQW9DO0FBQUE7QUFBQTs7QUFBQSwrQ0FDZCxNQUFNO0FBQ3hCRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsS0FIaUM7QUFBQTs7QUFLbENILFFBQU0sR0FBRztBQUNQLHdCQUFPLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFQaUM7O0FBVXBDLCtEQUFlQyxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1HLE1BQU0sR0FBSUMsS0FBRCxLQUFZO0FBQ3pCQyxhQUFXLEVBQUU7QUFDWEMsVUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREc7QUFFWEMsWUFBUSxFQUFFO0FBRkMsR0FEWTtBQUt6QkMsYUFBVyxFQUFFO0FBQ1hDLGFBQVMsRUFBRU4sS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURBO0FBTFks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QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL0NvbXBvbmVudHMvSG9tZVwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Um91dGVyPlxuICAgICAgICA8SG9tZSAvPlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJBYm91dFwiKVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PkFib3V0PC9SZWFjdC5GcmFnbWVudD47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iLCJpbXBvcnQge1xuICBDaGlwLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBQYXBlcixcbiAgVHlwb2dyYXBoeSxcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBmb3JtQ29udHJvbDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtaW5XaWR0aDogMTUwLFxuICB9LFxuICBzZWxlY3RFbXB0eToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBDb21wYW55RGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb21wYW55RGV0YWlsczogW10sXG4gICAgICBjb21wYW55Q3VycmVudERheVN0b2NrRGV0YWlsczogW10sXG4gICAgICBzZWxlY3RlZENvbXBhbnk6IFwiXCIsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3RvY2trZXlzOiBbXG4gICAgICAgIFwiRGF0ZVwiLFxuICAgICAgICBcIk9wZW4gUHJpY2VcIixcbiAgICAgICAgXCJIaWdoIFByaWNlXCIsXG4gICAgICAgIFwiTG93IFByaWNlXCIsXG4gICAgICAgIFwiQ2xvc2UgUHJpY2VcIixcbiAgICAgICAgXCJXQVBcIixcbiAgICAgICAgXCJOby5vZiBTaGFyZXNcIixcbiAgICAgICAgXCJOby4gb2YgVHJhZGVzXCIsXG4gICAgICAgIFwiVG90YWwgVHVybm92ZXIgKFJzLilcIixcbiAgICAgICAgXCIlIERlbGkuIFF0eSB0byBUcmFkZWQgUXR5XCIsXG4gICAgICAgIFwiU3ByZWFkIEhpZ2gtTG93XCIsXG4gICAgICAgIFwiU3ByZWFkIENsb3NlLU9wZW5cIixcbiAgICAgIF0sXG4gICAgICBzdG9ja2RldGFpbHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBhbnlEZXRhaWxzXCIpO1xuICAgIGNvbnN0IHsgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcGFueSA9IG1hdGNoLnBhcmFtcy5jb21wYW55O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbnk6IGNvbXBhbnkgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5nZXRDb21wYW55RGV0YWlscyh0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0Q29tcGFueURldGFpbHMgPSBhc3luYyAoY29tcGFueSkgPT4ge1xuICAgIGF3YWl0IGF4aW9zLmdldChcIi9hcGkvY29tcGFueWRldGFpbHM/Y29tcGFueT1cIiArIGNvbXBhbnkpLnRoZW4oKHMpID0+IHtcbiAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55RGV0YWlsczogcy5kYXRhLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueURldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3ByZXZpb3VzZGF5c3RvY2tkZXRhaWxzP2NvbXBhbnk9XCIgKyBjb21wYW55KVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tkZXRhaWxzOiBzLmRhdGEsIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tkZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tkZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICBlbGV2YXRpb249ezN9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNvbXBhbnlEZXRhaWxzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29tcGFueURldGFpbHNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4+PC9zcGFuPjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBrZXkgKyBcIiA6IFwiICsgdGhpcy5zdGF0ZS5jb21wYW55RGV0YWlsc1trZXldO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jlc31cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnN0b2NrZGV0YWlscy5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLnN0b2Nra2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGtleSArIFwiIDogXCIgKyB0aGlzLnN0YXRlLnN0b2NrZGV0YWlsc1trZXldO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9e3Jlc31cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSAhPT0gXCJcIiAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICA8RGFzaGJvYXJkIGNvbXBhbnk9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55fSAvPlxuICAgICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb21wYW55RGV0YWlscyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdW5kZXJzY29yZSBmcm9tIFwidW5kZXJzY29yZVwiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIjtcblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEdyaWQsXG4gIElucHV0TGFiZWwsXG4gIEJ1dHRvbixcbiAgTWVudUl0ZW0sXG4gIFBhcGVyLFxuICBTZWxlY3QsXG4gIFR5cG9ncmFwaHksXG4gIFRleHRGaWVsZCxcbiAgQ2hpcCxcbiAgRGl2aWRlcixcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuY2xhc3MgQ29tcGFyaXNpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBjb21wYW55TmFtZXM6IFtdLFxuICAgICAgc2VsZWN0ZWRDb21wYW5pZXM6IFtdLFxuICAgICAgc2VsZWN0ZWRUaW1lUGVyaW9kOiBcIjE4MFwiLFxuICAgICAgcmF0ZTogXCIxXCIsXG4gICAgICBzdG9ja2tleXM6IFtcbiAgICAgICAgXCJEYXRlXCIsXG4gICAgICAgIFwiT3BlbiBQcmljZVwiLFxuICAgICAgICBcIkhpZ2ggUHJpY2VcIixcbiAgICAgICAgXCJMb3cgUHJpY2VcIixcbiAgICAgICAgXCJDbG9zZSBQcmljZVwiLFxuICAgICAgICBcIldBUFwiLFxuICAgICAgICBcIk5vLm9mIFNoYXJlc1wiLFxuICAgICAgICBcIk5vLiBvZiBUcmFkZXNcIixcbiAgICAgICAgXCJUb3RhbCBUdXJub3ZlciAoUnMuKVwiLFxuICAgICAgICBcIiUgRGVsaS4gUXR5IHRvIFRyYWRlZCBRdHlcIixcbiAgICAgICAgXCJTcHJlYWQgSGlnaC1Mb3dcIixcbiAgICAgICAgXCJTcHJlYWQgQ2xvc2UtT3BlblwiLFxuICAgICAgXSxcbiAgICAgIHRpbWVQZXJpb2Q6IHtcbiAgICAgICAgXCIxIGRheVwiOiBcIjFcIixcbiAgICAgICAgXCI3IGRheXNcIjogXCI3XCIsXG4gICAgICAgIFwiMSBtb250aFwiOiBcIjMwXCIsXG4gICAgICAgIFwiMyBtb250aHNcIjogXCI5MFwiLFxuICAgICAgICBcIjYgbW9udGhzXCI6IFwiMTgwXCIsXG4gICAgICAgIFwiMSB5ZWFyXCI6IFwiMzYwXCIsXG4gICAgICAgIFwiMiB5ZWFyc1wiOiBcIjcyMFwiLFxuICAgICAgICBcIjUgeWVhcnNcIjogXCIxODAwXCIsXG4gICAgICAgIFwiMTAgeWVhcnNcIjogXCIzNjAwXCIsXG4gICAgICB9LFxuICAgICAgc3RvY2tkZXRhaWxzOiBbXSxcbiAgICAgIG51bTogMTAsXG4gICAgICBlcnJvcjogXCJcIixcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDb21wYXJpc2lvblwiKTtcbiAgICBheGlvc1xuICAgICAgLmdldChcIi9hcGkvY29tcGFueU5hbWVzXCIpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55TmFtZXM6IHMuZGF0YSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogcy5kYXRhIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIG9uQ2xpY2tTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW5pZXMubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBcInNlbGVjdCBhdGxlYXN0IHR3byBjb21wYW5pZXNcIiB9LCAoKSA9PiB7fSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogXCJcIiwgbG9hZGluZzogdHJ1ZSB9LCAoKSA9PiB7fSk7XG4gICAgfVxuICAgIGxldCBzdG9ja2RldGFpbHMgPSB7fTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbmllcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNvbXBhbnkgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFuaWVzW2luZGV4XTtcbiAgICAgIHN0b2NrZGV0YWlsc1tjb21wYW55XSA9IHt9O1xuICAgIH1cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbmllcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNvbXBhbnkgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFuaWVzW2luZGV4XTtcbiAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoXCIvYXBpL3ByZXZpb3VzZGF5c3RvY2tkZXRhaWxzP2NvbXBhbnk9XCIgKyBjb21wYW55KVxuICAgICAgICAudGhlbigocykgPT4ge1xuICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBzdG9ja2RldGFpbHNbY29tcGFueV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICBzdG9ja2RldGFpbHNbY29tcGFueV0sXG4gICAgICAgICAgICAgIHMuZGF0YVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcbiAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoXG4gICAgICAgICAgXCIvYXBpL2NvbXBhcmlzaW9uP2RheXM9XCIgK1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVQZXJpb2QgK1xuICAgICAgICAgICAgXCImcmF0ZT1cIiArXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJhdGUgK1xuICAgICAgICAgICAgXCImY29tcGFueT1cIiArXG4gICAgICAgICAgICBjb21wYW55XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgc3RvY2tkZXRhaWxzW2NvbXBhbnldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgc3RvY2tkZXRhaWxzW2NvbXBhbnldLFxuICAgICAgICAgICAgICBzLmRhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2RldGFpbHM6IHN0b2NrZGV0YWlscywgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwZXJpb2QgPSB1bmRlcnNjb3JlLmludmVydCh0aGlzLnN0YXRlLnRpbWVQZXJpb2QpO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdENvbXBhbnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgY29tcGFueSwgcmVhc29uLCBkZXRhaWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVhc29uID09PSBcInJlbW92ZS1vcHRpb25cIikge1xuICAgICAgICAgICAgICAgICAgbGV0IGNvbXBhbmllcyA9IHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzO1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbXBhbmllc1tkZXRhaWwub3B0aW9uXTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2RldGFpbHM6IGNvbXBhbmllcyB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbmllczogY29tcGFueSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpZD1cInNlbGVjdCBtdWx0aXBsZSBjb21wYW5pZXNcIlxuICAgICAgICAgICAgICBmcmVlU29sb1xuICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmNvbXBhbnlOYW1lcy5tYXAoXG4gICAgICAgICAgICAgICAgKGNvbXBhbnluYW1lKSA9PiBjb21wYW55bmFtZVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cInNlbGVjdCBtdWx0aXBsZSBjb21wYW5pZXNcIlxuICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXt0aGlzLnN0YXRlLmVycm9yfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3IgIT09IFwiXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgbWluV2lkdGg6IFwiMTUwcHhcIiB9fSB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgICAgICAgICAgPElucHV0TGFiZWw+dHJhZGluZyBwZXJpb2Q8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICBsYWJlbElkPVwidHJhZGluZyBwZXJpb2RcIlxuICAgICAgICAgICAgICAgIGlkPVwidHJhZGluZ1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICB7IHNlbGVjdGVkVGltZVBlcmlvZDogZS50YXJnZXQudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVQZXJpb2R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS50aW1lUGVyaW9kKS5tYXAoKHBlcmlvZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXt0aGlzLnN0YXRlLnRpbWVQZXJpb2RbcGVyaW9kXX0+XG4gICAgICAgICAgICAgICAgICAgICAge3BlcmlvZH1cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBtaW46IFwiLTEwMFwiLCBtYXg6IFwiMTAwXCIsIHN0ZXA6IFwiMC4wMVwiIH19XG4gICAgICAgICAgICAgIGxhYmVsPVwicmF0ZSBvZiBncm93dGhcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yYXRlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF0ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tTdWJtaXR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzKS5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5zdGF0ZS5zdG9ja2RldGFpbHNbY29tcGFueV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcImNvbXBhbnlkZXRhaWxzL1wiICsgZWxlbWVudFtcImNvbXBhbnlcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudFtcImNvbXBhbnlcIl19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICBJbiB0aGUgbGFzdCB7cGVyaW9kW2VsZW1lbnRbXCJ0b3RhbE51bWJlck9mRGF5c1wiXV19LCBmb3J7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnRbXCJwZXJjZW50T2ZEYXlzXCJdfSBwZXJjZW50IG9mIHRyYWRpbmcgZGF5cyBjbG9zZVxuICAgICAgICAgICAgICAgICAgICAgIHByaWNlIGdyb3d0aCByYXRlIHdhcyBtb3JlIHRoYW4ge2VsZW1lbnRbXCJyYXRlXCJdfSAlXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZCBjb21wYW55PXtlbGVtZW50W1wiY29tcGFueVwiXX0gLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3RvY2trZXlzLm1hcCgoa2V5LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGtleSArIFwiIDogXCIgKyBlbGVtZW50W2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyaXNpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmNvbnN0IENoYXJ0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpLCB7IHNzcjogZmFsc2UgfSk7XG5cbmltcG9ydCB7IEJ1dHRvbkdyb3VwLCBCdXR0b24sIERpdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGRldGFpbHM6IFtdLFxuICAgICAgc2VsZWN0ZWRQZXJpb2Q6IFwiXCIsXG4gICAgICBjb21wYW55OiBcIlwiLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgc2VyaWVzOiBbXSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICB0eXBlOiBcImFyZWFcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgIHR5cGU6IFwieFwiLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9TY2FsZVlheGlzOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgYXV0b1NlbGVjdGVkOiBcInpvb21cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIGN1cnZlOiBcInNtb290aFwiLFxuICAgICAgICAgIGxpbmVDYXA6IFwiYnV0dFwiLFxuICAgICAgICAgIGNvbG9yczogdW5kZWZpbmVkLFxuICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgIGRhc2hBcnJheTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICB0ZXh0OiBcIlN0b2NrIFByaWNlIE1vdmVtZW50XCIsXG4gICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIyNHB4XCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgIHR5cGU6IFwic29saWRcIixcbiAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgICAgZ3JhZGllbnQ6IHtcbiAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAxLFxuICAgICAgICAgICAgaW52ZXJzZUNvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBvcGFjaXR5RnJvbTogMSxcbiAgICAgICAgICAgIG9wYWNpdHlUbzogMSxcbiAgICAgICAgICAgIHN0b3BzOiBbMCwgOTAsIDEwMF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsLnRvRml4ZWQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogXCJQcmljZSBpbiBSc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgdHlwZTogXCJkYXRldGltZVwiLFxuICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUodmFsKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkdC5nZXREYXRlKCkgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICAoZHQuZ2V0TW9udGgoKSArIDEpICtcbiAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgZHQuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlRpbWUgUGVyaW9kXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgc2hhcmVkOiBmYWxzZSxcbiAgICAgICAgICB4OiB7XG4gICAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZHQgPSBuZXcgRGF0ZSh2YWwpO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGR0LmdldERhdGUoKSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIChkdC5nZXRNb250aCgpICsgMSkgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICBkdC5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeToge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkRhc2hib2FyZFwiKTtcbiAgICBpZiAodGhpcy5wcm9wcy5jb21wYW55ICE9PSBcInNwNTAwXCIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55OiB0aGlzLnByb3BzLmNvbXBhbnkgfSwgKCkgPT4ge1xuICAgICAgICBheGlvc1xuICAgICAgICAgIC5nZXQoXCIvYXBpL3N0b2NrZGV0YWlscz9jb21wYW55PVwiICsgdGhpcy5zdGF0ZS5jb21wYW55KVxuICAgICAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogcy5kYXRhLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IHt9KVxuICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiB0cnVlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueTogdGhpcy5wcm9wcy5jb21wYW55IH0sICgpID0+IHtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAuZ2V0KFwiL2FwaS9zcDUwMFwiKVxuICAgICAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogcy5kYXRhLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiB0cnVlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjcmVhdGVHcmFwaCA9IChkYXlzKSA9PiB7XG4gICAgbGV0IGNsb3NlUHJpY2VEYXRhID0ge1xuICAgICAgbmFtZTogXCJDbG9zZSBQcmljZVwiLFxuICAgICAgZGF0YTogW10sXG4gICAgfTtcbiAgICBkYXlzID1cbiAgICAgIGRheXMgPT09IFwiYWxsXCJcbiAgICAgICAgPyB0aGlzLnN0YXRlLmRldGFpbHMubGVuZ3RoIC0gMVxuICAgICAgICA6IGRheXMgPiB0aGlzLnN0YXRlLmRldGFpbHMubGVuZ3RoIC0gMVxuICAgICAgICA/IHRoaXMuc3RhdGUuZGV0YWlscy5sZW5ndGggLSAxXG4gICAgICAgIDogZGF5cztcbiAgICBjb25zdCB0b0RhdGUgPSB0aGlzLnN0YXRlLmRldGFpbHNbMF1bXCJEYXRlXCJdO1xuICAgIGNvbnN0IGZyb21EYXRlID0gdGhpcy5zdGF0ZS5kZXRhaWxzW2RheXNdW1wiRGF0ZVwiXTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5zdGF0ZS5kZXRhaWxzLnNsaWNlKDAsIGRheXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFbaV07XG4gICAgICBjbG9zZVByaWNlRGF0YS5kYXRhLnB1c2goe1xuICAgICAgICB4OiBlbGVtZW50W1wiRGF0ZVwiXSxcbiAgICAgICAgeTogZWxlbWVudFtcIkNsb3NlIFByaWNlXCJdIHx8IGVsZW1lbnRbXCJDbG9zZVwiXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMuc3RhdGUub3B0aW9ucztcbiAgICBvcHRpb25zLnhheGlzW1wibWluXCJdID0gZnJvbURhdGU7XG4gICAgb3B0aW9ucy54YXhpc1tcIm1heFwiXSA9IHRvRGF0ZTtcbiAgICBjb25zdCBzZXJpZXMgPSBbXTtcbiAgICBzZXJpZXMucHVzaChjbG9zZVByaWNlRGF0YSk7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiBzZXJpZXMsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge31cbiAgICApO1xuICB9O1xuXG4gIHNlbGVjdGVkUGVyaW9kID0gKGUpID0+IHtcbiAgICBjb25zdCBkYXlzID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUGVyaW9kID09PSBkYXlzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFBlcmlvZDogZGF5cyB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUdyYXBoKGRheXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yICE9PSB0cnVlICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25Hcm91cFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiN1wiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9PlxuICAgICAgICAgICAgICAgICAgN0RcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiMzBcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfT5cbiAgICAgICAgICAgICAgICAgIDFNXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjkwXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0+XG4gICAgICAgICAgICAgICAgICAzTVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCIxODBcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfT5cbiAgICAgICAgICAgICAgICAgIDZNXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjM2MFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9PlxuICAgICAgICAgICAgICAgICAgMVlcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiMTgwMFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9PlxuICAgICAgICAgICAgICAgICAgNVlcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiYWxsXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0+XG4gICAgICAgICAgICAgICAgICBBbGxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e3RoaXMuc3RhdGUub3B0aW9uc30gc2VyaWVzPXt0aGlzLnN0YXRlLnNlcmllc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iLCJpbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCB3aXRoUm91dGVyLCB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi9BYm91dFwiO1xuXG5pbXBvcnQgQ29tcGFueURldGFpbHMgZnJvbSBcIi4vQ29tcGFueURldGFpbHNcIjtcbmltcG9ydCBDb21wYXJpc2lvbiBmcm9tIFwiLi9Db21wYXJpc2lvblwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tIFwiLi9OYXZpZ2F0aW9uQmFyXCI7XG5pbXBvcnQgUGFnZU5vdEZvdW5kIGZyb20gXCIuL1BhZ2VOb3RGb3VuZFwiO1xuaW1wb3J0IFBlcmZvcm1hbmNlIGZyb20gXCIuL1BlcmZvcm1hbmNlXCI7XG5pbXBvcnQgUmV2ZW51ZSBmcm9tIFwiLi9SZXZlbnVlXCI7XG5pbXBvcnQgU2VjdG9ycyBmcm9tIFwiLi9TZWN0b3JzXCI7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9TaWRlQmFyXCI7XG5pbXBvcnQgU1A1MDAgZnJvbSBcIi4vU1A1MDBcIjtcbmltcG9ydCBUb3AgZnJvbSBcIi4vVG9wXCI7XG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tIFwiLi9TaW11bGF0aW9uXCI7XG5jb25zdCBkcmF3ZXJXaWR0aCA9IDMwMDtcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9LFxuICBhcHBCYXI6IHtcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcbiAgfSxcbiAgZHJhd2VyOiB7XG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gIH0sXG4gIGRyYXdlclBhcGVyOiB7XG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICB9LFxuICAvLyBuZWNlc3NhcnkgZm9yIGNvbnRlbnQgdG8gYmUgYmVsb3cgYXBwIGJhclxuICB0b29sYmFyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAvLyBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IDIwLFxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICBmbGV4R3JvdzogMSxcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcbiAgICBtaW5XaWR0aDogXCI0ODBweFwiLFxuICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcbiAgfSxcbn0pO1xuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb21wYW55TmFtZXM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkhvbWVcIik7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8QXBwQmFyXG4gICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn1cbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiaW5oZXJpdFwiLCBjb2xvcjogXCJpbmhlcml0XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CYXIgLz5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfVxuICAgICAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXG4gICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFuY2hvcj1cImxlZnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5TdG9jayBUcmVuZHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTaWRlQmFyIC8+XG4gICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9hYm91dFwiIGNvbXBvbmVudD17QWJvdXR9IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BlcmZvcm1hbmNlXCIgY29tcG9uZW50PXtQZXJmb3JtYW5jZX0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICBwYXRoPVwiL3RvcC86bnVtLzp0eXBlXCJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBudW0sIHR5cGUgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0gPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8VG9wIGtleT17YG51bT0ke251bX0mdHlwZT0ke3R5cGV9YH0gey4uLnByb3BzfSAvPjtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9zZWN0b3JzXCIgY29tcG9uZW50PXtTZWN0b3JzfSAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgIHBhdGg9XCIvY29tcGFueWRldGFpbHMvOmNvbXBhbnlcIlxuICAgICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGNvbXBhbnkgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0gPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb21wYW55RGV0YWlscyBrZXk9e2Bjb21wYW55PSR7Y29tcGFueX1gfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgcGF0aD1cIi9yZXZlbnVlXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9eygpID0+IChcbiAgICAgICAgICAgICAgICAgIDxSZXZlbnVlIGNvbXBhbnlOYW1lcz17dGhpcy5zdGF0ZS5jb21wYW55TmFtZXN9IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc3A1MDBcIiBjb21wb25lbnQ9e1NQNTAwfSAvPlxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9jb21wYXJpc2lvblwiIGNvbXBvbmVudD17Q29tcGFyaXNpb259IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NpbXVsYXRpb25cIiBjb21wb25lbnQ9e1NpbXVsYXRpb259IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e1BhZ2VOb3RGb3VuZH0gLz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKHdpdGhSb3V0ZXIoSG9tZSkpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiTG9naW5cIik7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PkxvZ2luPC9SZWFjdC5GcmFnbWVudD47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJpbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBwYXBlcjoge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgfSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgfSxcbiAgZ3JpZDoge1xuICAgIHBhZGRpbmc6IDIwLFxuICB9LFxufSk7XG5cbmNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzZWxlY3RlZENvbXBhbnk6IFwiIFwiLCBjb21wYW55TmFtZXM6IFtdIH07XG4gIH1cblxuICBzZWxlY3RlZENvbXBhbnkgPSAoZSwgdmFsKSA9PiB7XG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbnk6IHZhbCB9LCAoKSA9PiB7XG4gICAgICBoaXN0b3J5LnB1c2goXCIvY29tcGFueWRldGFpbHMvXCIgKyB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJOYXZpZ2F0aW9uQmFyXCIpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9jb21wYW55TmFtZXNcIilcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogcy5kYXRhIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55TmFtZXM6IFtdIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzcGFjaW5nPXsyfT5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0gdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9hYm91dFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9wZXJmb3JtYW5jZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgUGVyZm9ybWFuY2VcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9jb21wYXJpc2lvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgQ29tcGFyaXNpb25cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9zaW11bGF0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICBTaW11bGF0aW9uXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbXBhbnkoZSwgdmFsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpZD1cInNlYXJjaCBmb3IgY29tcGFuaWVzXCJcbiAgICAgICAgICAgIGZyZWVTb2xvXG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmNvbXBhbnlOYW1lcy5tYXAoKGNvbXBhbnluYW1lKSA9PiBjb21wYW55bmFtZSl9XG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cbiAgICAgICAgICAgICAgICBsYWJlbD1cInNlYXJjaCBmb3IgY29tcGFuaWVzXCJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykod2l0aFJvdXRlcihOYXZpZ2F0aW9uQmFyKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFBhZ2VOb3RGb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUGFnZU5vdEZvdW5kXCIpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8aDE+UGFnZSBOb3QgRm91bmQ8L2gxPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RGb3VuZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgUGVyZm9ybWFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlBlcmZvcm1hbmNlXCIpO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5QZXJmb3JtYW5jZTwvUmVhY3QuRnJhZ21lbnQ+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcmZvcm1hbmNlO1xuIiwiaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5cbmNsYXNzIFJldmVudWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdG9wQ29tcGFuaWVzOiBbXSxcbiAgICAgIG51bTogMzAsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlJldmVudWVcIik7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3ByZXZpb3VzZGF5c3RvY2tkZXRhaWxzXCIpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBjb21wYW55U3RvY2tEZXRhaWxzID0gcy5kYXRhO1xuICAgICAgICAgIGNvbXBhbnlTdG9ja0RldGFpbHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFbXCJSZXZlbnVlXCJdIC0gYltcIlJldmVudWVcIl07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29tcGFueVN0b2NrRGV0YWlscyA9IGNvbXBhbnlTdG9ja0RldGFpbHMuc2xpY2UoMCwgdGhpcy5zdGF0ZS5udW0pO1xuICAgICAgICAgIGxldCB0b3BDb21wYW5pZXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcGFueVN0b2NrRGV0YWlscy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb21wYW55U3RvY2tEZXRhaWxzW2luZGV4XTtcbiAgICAgICAgICAgIHRvcENvbXBhbmllcy5wdXNoKGVsZW1lbnRbXCJDb21wYW55XCJdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHsgdG9wQ29tcGFuaWVzOiB0b3BDb21wYW5pZXMsIGxvYWRpbmc6IGZhbHNlIH0sXG4gICAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcENvbXBhbmllczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcENvbXBhbmllczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17MX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICBUb3Age3RoaXMuc3RhdGUubnVtfSBDb21wYW5pZXMgUmV2ZW51ZSB3aXNlXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS50b3BDb21wYW5pZXMubWFwKChjb21wYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAga2V5PXt1dWlkdjQoKX1cbiAgICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9jb21wYW55ZGV0YWlscy9cIiArIGNvbXBhbnksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249ezF9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgbWFyZ2luOiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57Y29tcGFueX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJldmVudWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmNsYXNzIFNQNTAwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc3A1MDA6IFtdIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTUDUwMFwiKTtcbiAgICAvLyBheGlvc1xuICAgIC8vICAgLmdldChcIi9zcDUwMFwiKVxuICAgIC8vICAgLnRoZW4oKHMpID0+IHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHNwNTAwOiBzLmRhdGEsIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAudGhlbigoKSA9PiB7fSlcbiAgICAvLyAgIC5jYXRjaCgoZSkgPT4ge30pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFBhcGVyXG4gICAgICAgICAgZWxldmF0aW9uPXszfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57XCJTUCA1MDBcIn08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxEYXNoYm9hcmQgY29tcGFueT1cInNwNTAwXCIgLz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTUDUwMDtcbiIsImltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgU2VjdG9ycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWN0b3JzOiBbXSxcbiAgICAgIHNlbGVjdGVkU2VjdG9yOiBcIlwiLFxuICAgICAgc2VsZWN0ZWRTZWN0b3JDb21wYW5pZXM6IFtdLFxuICAgICAgc2VsZWN0ZWRDb21wYW55OiBcIlwiLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNlY3RvcnNcIik7XG4gICAgY29uc3QgeyBoaXN0b3J5LCBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoXCJzdGF0ZVwiIGluIGxvY2F0aW9uICYmIGxvY2F0aW9uLnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgfVxuXG4gICAgYXhpb3MuZ2V0KFwiYXBpL3NlY3RvcnNcIikudGhlbigocykgPT4ge1xuICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlY3RvcnM6IHMuZGF0YSB9LCAoKSA9PiB7fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VjdG9yczogW10gfSwgKCkgPT4ge30pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHNlbGVjdGVkU2VjdG9yID0gKGUsIHZhbCkgPT4ge1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHsgc2VsZWN0ZWRTZWN0b3I6IFwiXCIsIHNlbGVjdGVkU2VjdG9yQ29tcGFuaWVzOiBbXSB9LFxuICAgICAgICAoKSA9PiB7fVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkU2VjdG9yOiB2YWwsXG4gICAgICAgICAgc2VsZWN0ZWRTZWN0b3JDb21wYW5pZXM6IHRoaXMuc3RhdGUuc2VjdG9yc1t2YWxdLFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7fVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgc2VsZWN0ZWRDb21wYW55ID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICBoaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDb21wYW55OiB2YWwgfSwgKCkgPT4ge1xuICAgICAgICBoaXN0b3J5LnB1c2goXCJjb21wYW55ZGV0YWlscy9cIiArIHZhbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5zdGF0ZS5zZWN0b3JzLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIGFsaWduOiBcImNlbnRlclwiIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VjdG9yKGUsIHZhbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaWQ9XCJzZWFyY2ggZm9yIHNlY3RvclwiXG4gICAgICAgICAgICBmcmVlU29sb1xuICAgICAgICAgICAgb3B0aW9ucz17T2JqZWN0LmtleXModGhpcy5zdGF0ZS5zZWN0b3JzKS5tYXAoKHNlY3RvcikgPT4gc2VjdG9yKX1cbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb259XG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cbiAgICAgICAgICAgICAgICBsYWJlbD1cInNlYXJjaCBmb3Igc2VjdG9yXCJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkU2VjdG9yQ29tcGFuaWVzLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIGFsaWduOiBcImNlbnRlclwiIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29tcGFueSh2YWwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGlkPVwic2VhcmNoIGZvciBjb21wYW5pZXNcIlxuICAgICAgICAgICAgZnJlZVNvbG9cbiAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTZWN0b3JDb21wYW5pZXMubWFwKFxuICAgICAgICAgICAgICAoY29tcGFueSkgPT4gY29tcGFueVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb259XG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cbiAgICAgICAgICAgICAgICBsYWJlbD1cInNlYXJjaCBmb3IgY29tcGFueVwiXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3RvcnM7XG4iLCJpbXBvcnQge1xuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvbkRldGFpbHMsXG4gIEFjY29yZGlvblN1bW1hcnksXG4gIFBhcGVyLFxuICB3aXRoU3R5bGVzLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgaGVhZGluZzoge1xuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTUpLFxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXG4gIH0sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgXCImID4gKlwiOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgLy8gbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTaWRlYmFyXCIpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICA8QWNjb3JkaW9uIHN0eWxlPXt7IGJvcmRlcjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeSBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYS1jb250ZW50XCIgaWQ9XCJ0b3AxMFwiPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5UT1AgMTA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdG9wLzEwL2J1eVwiIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+QlVZPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPXt7IHBhdGhuYW1lOiBcIi90b3AvMTAvc2VsbFwiIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+U0VMTDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgPEFjY29yZGlvbj5cbiAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5IGFyaWEtY29udHJvbHM9XCJwYW5lbDFhLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+VE9QIDMwPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxuICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL3RvcC8zMC9idXlcIiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkJVWTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdG9wLzMwL3NlbGxcIiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlNFTEw8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgIDxOYXZMaW5rIHRvPXt7IHBhdGhuYW1lOiBcIi9zZWN0b3JzXCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+U2VjdG9yczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgIDxOYXZMaW5rIHRvPXt7IHBhdGhuYW1lOiBcIi9zcDUwMFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlMgQU5EIFAgNTAwPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89e3sgcGF0aG5hbWU6IFwiL3JldmVudWVcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5UT1AgUkVWRU5VRTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTaWRlQmFyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENoaXAsXG4gIEdyaWQsXG4gIFR5cG9ncmFwaHksXG4gIFRleHRGaWVsZCxcbiAgRm9ybUNvbnRyb2wsXG4gIElucHV0TGFiZWwsXG4gIFNlbGVjdCxcbiAgTWVudUl0ZW0sXG4gIERpdmlkZXIsXG4gIFBhcGVyLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgdW5kZXJzY29yZSBmcm9tIFwidW5kZXJzY29yZVwiO1xuaW1wb3J0IHtcbiAgRGF0YUdyaWQsXG4gIEdyaWRUb29sYmFyQ29udGFpbmVyLFxuICBHcmlkVG9vbGJhckV4cG9ydCxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIjtcbmltcG9ydCBEb3dubG9hZExpbmsgZnJvbSBcInJlYWN0LWRvd25sb2FkLWxpbmtcIjtcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcblxuXG5jbGFzcyBTaW11bGF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkQ29tcGFueTogXCJcIixcbiAgICAgIGNvbXBhbnlOYW1lczogW10sXG4gICAgICBkYXlzOiAxLFxuICAgICAgaW52ZXN0bWVudDogMSxcbiAgICAgIHN0YXJ0ZGF0ZTogXCIyMDE3LTAzLTEwXCIsXG4gICAgICByZXNwb25zZTogW10sXG4gICAgICBjb2xzOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgc2VsZGF5czogXCJcIixcbiAgICAgIHNpbXVsYXRpb250b3A6IFtdLFxuICAgICAgY29tcGFueXNlbGVjdGVkYWZ0ZXJzaW11bGF0aW9uIDogXCJcIixcbiAgICAgIGNvbXBhbnlkZXRhaWxzYWZ0ZXJzaW11bGF0aW9uIDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IFNQNTAwID1cbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS9tYXN0ZXIvRGF0YS9TUDUwMENvbXBhbmllcy5qc29uXCI7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoU1A1MDApXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBTUDUwMENvbXBhbmllcyA9IE9iamVjdC5rZXlzKHVuZGVyc2NvcmUuaW52ZXJ0KHMuZGF0YSkpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55TmFtZXM6IFNQNTAwQ29tcGFuaWVzIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiU2ltdWxhdGlvblwiKTtcbiAgfTtcblxuICBvbkNsaWNrU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPVxuICAgICAgXCJjb21wYW55PVwiICtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55ICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiaW52ZXN0bWVudD1cIiArXG4gICAgICB0aGlzLnN0YXRlLmludmVzdG1lbnQgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJkYXlzPVwiICtcbiAgICAgIHRoaXMuc3RhdGUuZGF5cyArXG4gICAgICBcIiZcIiArXG4gICAgICBcImRhdGU9XCIgK1xuICAgICAgdGhpcy5zdGF0ZS5zdGFydGRhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3NpbXVsYXRpb24/XCIgKyBwYXJhbXMpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCByZXNwID0gcy5kYXRhO1xuICAgICAgICAgIGlmIChyZXNwLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBsZXQgY29scyA9IFtdO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzcFswXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgY29scy5wdXNoKHsgZmllbGQ6IGtleSwgaGVhZGVyTmFtZToga2V5LCB3aWR0aDogMTUwIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhyZXNwW2ldKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNwW2ldW1wiaWRcIl0gPSBpO1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaChyZXNwW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgeyByZXNwb25zZTogcm93cywgY29sczogY29scywgbG9hZGluZzogZmFsc2UgfSxcbiAgICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBvblNlbGVjdERheXMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGRheXMgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAvLyBjb25zdCB0b3B1cmwgPVxuICAgIC8vICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExL21hc3Rlci9EYXRhL1NpbXVsYXRpb24vdG9wX3NlbGRheXMuY3N2XCI7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGRheXM6IGRheXMgfSwgKCkgPT4ge30pO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9zaW11bGF0aW9udG9wXCIgKyBcIj9cIiArIFwiZGF5cz1cIiArIGRheXMpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaW11bGF0aW9udG9wOiBzLmRhdGEgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfSk7XG4gIH07XG5cblxuXG4gIGdldERhdGFGcm9tVVJMID0gKHVybCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpXG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbiAgICB9LCAyMDAwKTtcblxuICBcblxuICBleHBvcnRUb0NTViA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWRUb29sYmFyQ29udGFpbmVyPlxuICAgICAgICA8R3JpZFRvb2xiYXJFeHBvcnQgLz5cbiAgICAgIDwvR3JpZFRvb2xiYXJDb250YWluZXI+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxHcmlkPlxuICAgICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyBtaW5XaWR0aDogXCIxNTBweFwiIH19IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxuICAgICAgICAgICAgPElucHV0TGFiZWw+ZGF5czwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJkYXlzXCJcbiAgICAgICAgICAgICAgaWQ9XCJkYXlzXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3REYXlzfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxkYXlzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7WzMwLCA2MCwgOTAsIDE4MCwgMjcwLCAzNjAsIDU0MCwgNzIwLCA5MDAsIDEwODBdLm1hcChcbiAgICAgICAgICAgICAgICAocGVyaW9kKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIHZhbHVlPXtwZXJpb2R9PntwZXJpb2R9PC9NZW51SXRlbT47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaW11bGF0aW9udG9wLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIC8vIDxHcmlkIHN0eWxlPXt7IGhlaWdodDogXCIyNTBweFwiLCBvdmVyZmxvd1g6IFwic2Nyb2xsXCIgfX0+XG4gICAgICAgICAgICAvLyAgIHsvKiA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj4gQ29tcGFuaWVzIHRvIGludmVzdDwvVHlwb2dyYXBoeT4gKi99XG4gICAgICAgICAgICAvLyAgIHt0aGlzLnN0YXRlLnNpbXVsYXRpb250b3AubWFwKChyb3cpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBjb21wYW55ID0gcm93Wydjb21wYW55J107XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57cm93Wydjb21wYW55J119IHtyb3dbJ2F2ZXJhZ2VfcmV0dXJuX3BlcmNlbnQnXX0gICBcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPERvd25sb2FkTGlua1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWwgPSBcIkRvd25sb2FkIFNpbXVsYXRpb24gUmVzdWx0c1wiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBmaWxlbmFtZSA9IFwiZGV0YWlscy5jc3ZcIlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGFnTmFtZSA9IFwiYnV0dG9uXCJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGV4cG9ydEZpbGUgPSB7KCkgPT4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuIGdldERhdGFGcm9tVVJMKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWluZGV4LXJpc2svbWFzdGVyL0RhdGEvU2ltdWxhdGlvbi81MDAwMDIuY3N2XCIpKX1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAvLyAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAvLyAgICAgPC9SZWFjdC5GcmFnbWVudD4pO1xuICAgICAgICAgICAgLy8gICB9KX1cbiAgICAgICAgICAgIC8vIDwvR3JpZD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwiU2ltdWFsdGlvbiBSZXN1bHRzXCIgbWluV2lkdGg9IFwiNjUwXCIgYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgdmFyaWFudCA9IFwiaDVcIj4gQ29tcGFueTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiB2YXJpYW50ID0gXCJoNVwiPkF2ZXJhZ2UgUmV0dXJucyBQZXJjZW50YWdlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHZhcmlhbnQgPSBcImg1XCI+U2ltdWxhdGlvbiBSZXN1bHRzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaW11bGF0aW9udG9wLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5jb21wYW55fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuY29tcGFueX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmF2ZXJhZ2VfcmV0dXJuX3BlcmNlbnR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlJlc3VsdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBcImRldGFpbHMuY3N2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWUgPSBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRGaWxlID0geygpID0+IFByb21pc2UucmVzb2x2ZSh0aGlzLiBnZXREYXRhRnJvbVVSTChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWlrcjc4OS9zdG9jay1pbmRleC1yaXNrL21hc3Rlci9EYXRhL1NpbXVsYXRpb24vNTAwMDAyLmNzdlwiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICB7LyogPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiB9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiIH19XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgIHsgcmVzcG9uc2U6IFtdLCBzZWxlY3RlZENvbXBhbnk6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbnk6IHZhbCB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpZD1cInNlYXJjaCBmb3IgY29tcGFuaWVzXCJcbiAgICAgICAgICAgICAgZnJlZVNvbG9cbiAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5jb21wYW55TmFtZXMubWFwKFxuICAgICAgICAgICAgICAgIChjb21wYW55bmFtZSkgPT4gY29tcGFueW5hbWVcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzZWFyY2ggZm9yIGNvbXBhbmllc1wiXG4gICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxNXB4XCIgfX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgaWQ9XCJkYXRlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJzdGFydCBkYXRlXCJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIyMDE3LTAzLTEwXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RhcnRkYXRlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnRkYXRlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHsgbWluOiBcIjIwMTctMDMtMTBcIiwgbWF4OiBcIjIwMjEtMDMtMTlcIiB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiBcIjE1cHhcIiB9fVxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IG1pbjogXCIxXCIsIG1heDogXCI4MDBcIiwgc3RlcDogXCIxXCIgfX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJkYXlzXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF5c31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRheXM6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogXCIxNXB4XCIgfX1cbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBtaW46IFwiMVwiLCBtYXg6IFwiMTAwMDAwMFwiLCBzdGVwOiBcIjFcIiB9fVxuICAgICAgICAgICAgICBsYWJlbD1cImludmVzdG1lbnRcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnZlc3RtZW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW52ZXN0bWVudDogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCIxNXB4XCIgfX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrU3VibWl0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPiAqL31cbiAgICAgICAgey8qIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRoaXMuc3RhdGUuY29tcGFueWRldGFpbHNhZnRlcnNpbXVsYXRpb24ubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgIDxEYXRhR3JpZFxuICAgICAgICAgICAgICByb3dzPXt0aGlzLnN0YXRlLmNvbXBhbnlkZXRhaWxzYWZ0ZXJzaW11bGF0aW9ufVxuICAgICAgICAgICAgICBjb2x1bW5zPXt0aGlzLnN0YXRlLmNvbHN9XG4gICAgICAgICAgICAgIGF1dG9IZWlnaHRcbiAgICAgICAgICAgICAgZGlzYWJsZVNlbGVjdGlvbk9uQ2xpY2tcbiAgICAgICAgICAgICAgaGlkZUZvb3RlclBhZ2luYXRpb25cbiAgICAgICAgICAgICAgaGlkZUZvb3RlclxuICAgICAgICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgICAgICAgVG9vbGJhcjogdGhpcy5leHBvcnRUb0NTVixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICApfSAqL31cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW11bGF0aW9uO1xuIiwiaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5cbmNsYXNzIFRvcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIG51bTogMTAsXG4gICAgICB0eXBlOiBcImJ1eVwiLFxuICAgICAgdG9wQ29tcGFuaWVzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJUb3BcIik7XG4gICAgY29uc3QgeyBoaXN0b3J5LCBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoXCJzdGF0ZVwiIGluIGxvY2F0aW9uICYmIGxvY2F0aW9uLnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgfVxuICAgIGNvbnN0IHsgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBudW0sIHR5cGUgfSA9IG1hdGNoLnBhcmFtcztcbiAgICB0aGlzLnNldFN0YXRlKHsgbnVtOiBudW0sIHR5cGU6IHR5cGUsIGxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge30pO1xuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3ByZXZpb3VzZGF5c3RvY2tkZXRhaWxzXCIpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBjb21wYW55U3RvY2tEZXRhaWxzID0gcy5kYXRhO1xuICAgICAgICAgIGlmICh0eXBlID09PSBcInNlbGxcIikge1xuICAgICAgICAgICAgY29tcGFueVN0b2NrRGV0YWlscy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBhW1wiQ2xvc2UgUHJpY2VcIl0gLSBiW1wiQ2xvc2UgUHJpY2VcIl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiYnV5XCIpIHtcbiAgICAgICAgICAgIGNvbXBhbnlTdG9ja0RldGFpbHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYltcIkNsb3NlIFByaWNlXCJdIC0gYVtcIkNsb3NlIFByaWNlXCJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbXBhbnlTdG9ja0RldGFpbHMgPSBjb21wYW55U3RvY2tEZXRhaWxzLnNsaWNlKDAsIG51bSk7XG4gICAgICAgICAgbGV0IHRvcENvbXBhbmllcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wYW55U3RvY2tEZXRhaWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNvbXBhbnlTdG9ja0RldGFpbHNbaW5kZXhdO1xuICAgICAgICAgICAgdG9wQ29tcGFuaWVzLnB1c2goZWxlbWVudFtcIkNvbXBhbnlcIl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgeyB0b3BDb21wYW5pZXM6IHRvcENvbXBhbmllcywgbG9hZGluZzogZmFsc2UgfSxcbiAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9wQ29tcGFuaWVzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9wQ29tcGFuaWVzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgZWxldmF0aW9uPXsxfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIFRvcCB7dGhpcy5zdGF0ZS5udW19IENvbXBhbmllcyBmb3J7XCIgXCJ9XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudHlwZSA9PT0gXCJidXlcIiA/IFwiSW52ZXN0aW5nXCIgOiBcIlRyYWRpbmdcIn1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvcENvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2NvbXBhbnlkZXRhaWxzL1wiICsgY29tcGFueSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBtYXJnaW46IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntjb21wYW55fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5cbi8vIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgPFJlYWN0LlN0cmljdE1vZGU+XG4vLyAgICAgPEFwcCAvPlxuLy8gICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbi8vICk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiA8QXBwIC8+O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvd25sb2FkLWxpbmtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvYWRlci1zcGlubmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuZGVyc2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=