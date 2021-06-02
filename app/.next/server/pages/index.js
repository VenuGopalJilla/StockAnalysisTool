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
          let companyDetails = s.data;
          axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/getsuggestions?company=" + company).then(t => {
            if (t.status === 200) {
              companyDetails = Object.assign(companyDetails, t.data);
            }
          }).catch(e => {
            console.log(e);
          });
          this.setState({
            companyDetails: companyDetails,
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
          elevation: 0,
          style: {
            display: "flex",
            padding: "15px",
            margin: "15px",
            justifyContent: "center",
            backgroundColor: "#05386B",
            color: "#5CDB95"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            variant: "subtitle1",
            children: this.state.selectedCompany
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, this), this.state.loading === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default()), {
          type: "ThreeDots",
          color: "#05386B",
          height: 80,
          width: 80
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 15
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
          container: true,
          children: Object.keys(this.state.companyDetails).map(key => {
            if (this.state.companyDetails[key] === null) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 28
              }, this);
            }

            if (key === "suggest" && (this.state.companyDetails[key] === "buy" || this.state.companyDetails[key] === "sell")) {
              let res = "SUGGESTION " + " -- " + this.state.companyDetails[key].toUpperCase();
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                color: "primary",
                variant: "outlined",
                label: res,
                style: {
                  margin: "5px",
                  backgroundColor: "#05386B",
                  color: "#5CDB95"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 23
              }, this);
            } else {
              let res = key + " : " + this.state.companyDetails[key];
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                color: "primary",
                variant: "outlined",
                label: res,
                style: {
                  margin: "5px",
                  backgroundColor: "#5CDB95",
                  color: "#05386B"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 23
              }, this);
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }, this), this.state.stockdetails.length !== 0 && this.state.stockkeys.map(key => {
        let impKeys = ["Open Price", "High Price", "Low Price", "Close Price"];

        if (impKeys.includes(key)) {
          let res = key.toUpperCase() + " : " + this.state.stockdetails[key];
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Chip, {
            color: "primary",
            variant: "outlined",
            label: res,
            style: {
              margin: "5px",
              backgroundColor: "#05386B",
              color: "#5CDB95"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 17
          }, this);
        } else {
          let res = key + " : " + this.state.stockdetails[key];
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Chip, {
            color: "primary",
            variant: "outlined",
            label: res,
            style: {
              margin: "5px",
              backgroundColor: "#5CDB95",
              color: "#05386B"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 15
          }, this);
        }
      }), this.state.selectedCompany !== "" && this.state.stockdetails.length !== 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_4__.default, {
        company: this.state.selectedCompany
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles)(CompanyDetails));

/***/ }),

/***/ "./pages/Components/Comparison.jsx":
/*!*****************************************!*\
  !*** ./pages/Components/Comparison.jsx ***!
  \*****************************************/
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
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dashboard */ "./pages/Components/Dashboard.jsx");

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Comparison.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Comparison extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      console.log("Comparison");
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
        await axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/comparison?days=" + this.state.selectedTimePeriod + "&rate=" + this.state.rate + "&company=" + company).then(s => {
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        container: true,
        spacing: 2,
        direction: "row",
        justify: "flex-start",
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          xs: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_8__.default, {
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
            renderInput: params => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, _objectSpread(_objectSpread({}, params), {}, {
              label: "Select Multiple Companies",
              margin: "normal",
              variant: "outlined",
              helperText: this.state.error,
              error: this.state.error !== ""
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
            style: {
              minWidth: "150px"
            },
            variant: "outlined",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.InputLabel, {
              children: "trading period"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Select, {
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
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                  value: this.state.timePeriod[period],
                  children: period
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 21
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          xs: 2,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {
            type: "number",
            style: {
              width: "100%"
            },
            inputProps: {
              min: "-100",
              max: "100",
              step: "0.01"
            },
            label: "Rate of growth",
            variant: "outlined",
            value: this.state.rate,
            onChange: e => {
              this.setState({
                rate: e.target.value
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            variant: "outlined",
            size: "large",
            onClick: this.onClickSubmit,
            style: {
              backgroundColor: "#05386B",
              color: "#5CDB95"
            },
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default()), {
        type: "ThreeDots",
        color: "#05386B",
        height: 80,
        width: 80
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 11
      }, this) : this.state.stockdetails.length !== 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        container: true,
        spacing: 1,
        direction: "row",
        justify: "flex-start",
        alignItems: "center",
        children: Object.keys(this.state.stockdetails).map(company => {
          const element = this.state.stockdetails[company];
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
            item: true,
            xs: 6,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Paper, {
              style: {
                display: "flex",
                padding: "15px",
                margin: "15px",
                justifyContent: "center"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
                to: {
                  pathname: "companydetails/" + element["company"]
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                  variant: "h6",
                  children: element["company"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
              variant: "h6",
              children: ["In the last ", period[element["totalNumberOfDays"]], ", for", " ", element["percentOfDays"], " percent of trading days close price growth rate was more than ", element["rate"], " %"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_7__.default, {
              company: element["company"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 21
            }, this), this.state.stockkeys.map((key, i) => {
              let res = key + " : " + element[key];
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Chip, {
                color: "primary",
                variant: "outlined",
                label: res,
                style: {
                  margin: "5px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 25
              }, this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 19
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Comparison);

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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/data-grid */ "@material-ui/data-grid");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_6__);

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




const styles = theme => ({
  chart: {
    width: "80%"
  },
  divchart: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  buttongroup: {
    display: "flex",
    justifyContent: "center",
    margin: "10px"
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
      let openPriceData = {
        name: "Open Price",
        data: []
      };
      let highPriceData = {
        name: "High Price",
        data: []
      };
      let lowPriceData = {
        name: "Low Price",
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
        openPriceData.data.push({
          x: element["Date"],
          y: element["Open Price"] || element["Open"]
        });
        highPriceData.data.push({
          x: element["Date"],
          y: element["High Price"] || element["High"]
        });
        lowPriceData.data.push({
          x: element["Date"],
          y: element["Low Price"] || element["Low"]
        });
      }

      let options = this.state.options;
      options.xaxis["min"] = fromDate;
      options.xaxis["max"] = toDate;
      const series = [];
      series.push(closePriceData);
      series.push(openPriceData);
      series.push(highPriceData);
      series.push(lowPriceData);
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
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Sans-serif",
            color: "black",
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
    const {
      classes
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default()), {
        type: "ThreeDots",
        color: "#05386B",
        height: 80,
        width: 80
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 11
      }, this) : this.state.error !== true && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
          className: classes.buttongroup,
          "aria-label": "contained primary button group",
          variant: "outlined",
          style: {
            display: "flex",
            justifyContent: "center",
            margin: "10px",
            backgroundColor: "#05386B"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "7",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "7D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "30",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "1M"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "90",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "3M"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "180",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "6M"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "360",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "1Y"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "1800",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "5Y"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "all",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "All"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.divchart,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {
            options: this.state.options,
            series: this.state.series,
            className: classes.chart
          }, "chart", false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.withStyles)(styles, {
  withTheme: true
})(Dashboard));

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
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About */ "./pages/Components/About.jsx");
/* harmony import */ var _CompanyDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompanyDetails */ "./pages/Components/CompanyDetails.jsx");
/* harmony import */ var _Comparison__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comparison */ "./pages/Components/Comparison.jsx");
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavigationBar */ "./pages/Components/NavigationBar.jsx");
/* harmony import */ var _PageNotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageNotFound */ "./pages/Components/PageNotFound.jsx");
/* harmony import */ var _Revenue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Revenue */ "./pages/Components/Revenue.jsx");
/* harmony import */ var _Sectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Sectors */ "./pages/Components/Sectors.jsx");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SideBar */ "./pages/Components/SideBar.jsx");
/* harmony import */ var _SP500__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SP500 */ "./pages/Components/SP500.jsx");
/* harmony import */ var _Top__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Top */ "./pages/Components/Top.jsx");
/* harmony import */ var _Simulation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Simulation */ "./pages/Components/Simulation.jsx");

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Home.jsx";

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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.HashRouter, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_14__.default, {
          position: "relative",
          className: classes.appBar,
          style: {
            backgroundColor: "#5CDB95",
            color: "#05386B"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__.default, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationBar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.root,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_16__.default, {
            className: classes.drawer,
            variant: "permanent",
            classes: {
              paper: classes.drawerPaper
            },
            anchor: "left",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
            className: classes.content,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/about",
                component: _About__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
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
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Top__WEBPACK_IMPORTED_MODULE_12__.default, _objectSpread({}, props), `num=${num}&type=${type}`, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 26
                  }, this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/sectors",
                component: _Sectors__WEBPACK_IMPORTED_MODULE_9__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
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
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CompanyDetails__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, props), `company=${company}`, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 21
                  }, this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/revenue",
                component: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Revenue__WEBPACK_IMPORTED_MODULE_8__.default, {
                  companyNames: this.state.companyNames
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/sp500",
                component: _SP500__WEBPACK_IMPORTED_MODULE_11__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/comparison",
                component: _Comparison__WEBPACK_IMPORTED_MODULE_5__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/simulation",
                component: _Simulation__WEBPACK_IMPORTED_MODULE_13__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                component: _PageNotFound__WEBPACK_IMPORTED_MODULE_7__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__.withStyles)(styles)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)(Home)));

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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      container: true,
      className: classes.root,
      spacing: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
        item: true,
        className: classes.grid,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
          to: "/",
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
            className: classes.typography,
            variant: "button",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
        item: true,
        className: classes.grid,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
          to: "/about",
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
            className: classes.typography,
            variant: "button",
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
        item: true,
        className: classes.grid,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
          to: "/comparison",
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
            className: classes.typography,
            variant: "button",
            children: "Comparison"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
        item: true,
        className: classes.grid,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
          to: "/simulation",
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
            className: classes.typography,
            variant: "button",
            children: "Simulation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
        item: true,
        className: classes.grid,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_6__.default, {
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
          renderInput: params => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({}, params), {}, {
            label: "search for companies",
            margin: "normal",
            variant: "outlined",
            color: "#05386B"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
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
      lineNumber: 67,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.withStyles)(styles)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)(NavigationBar)));

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
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/data-grid */ "@material-ui/data-grid");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Revenue.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const styles = theme => ({
  paper: {
    "&:hover": {
      color: "blue"
    }
  }
});

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
    const {
      classes
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default()), {
        type: "ThreeDots",
        color: "#05386B",
        height: 80,
        width: 80
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
          elevation: 0,
          style: {
            display: "flex",
            padding: "15px",
            margin: "15px",
            justifyContent: "center",
            backgroundColor: "#05386B",
            color: "#5CDB95"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            variant: "subtitle1",
            children: ["Top ", this.state.num, " Companies Revenue wise"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
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
              elevation: 0,
              style: {
                display: "flex",
                padding: "10px",
                margin: "10px",
                justifyContent: "center"
              },
              className: classes.paper,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "subtitle2",
                children: company
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 19
            }, this)
          }, (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(), false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }, this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this);
  }

} // export default Revenue;


/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles, {
  withTheme: true
})(Revenue));

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
        elevation: 0,
        style: {
          display: "flex",
          padding: "15px",
          margin: "15px",
          justifyContent: "center",
          backgroundColor: "#05386B",
          color: "#5CDB95"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          variant: "subtitle1",
          children: "SP 500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
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
        lineNumber: 36,
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
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Sectors.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Sectors extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
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

      axios__WEBPACK_IMPORTED_MODULE_2___default().get("api/sectors").then(s => {
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: [this.state.sectors.length !== 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__.default, {
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
      }, this), this.state.selectedSectorCompanies.length !== 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__.default, {
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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);

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
      padding: theme.spacing(3.6),
      border: '0px',
      width: "100%",
      height: "100%"
    },
    backgroundColor: "#05386B",
    color: "#5CDB95"
  },
  paper1: {
    display: "flex",
    "& > *": {
      padding: theme.spacing(1),
      // margin: theme.spacing(1),
      border: '0px',
      width: "100%",
      height: "100%"
    },
    backgroundColor: "#5CDB95",
    color: "#05386B"
  }
});

class SideBar extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        className: classes.paper,
        elevation: 0,
        style: {
          padding: '0px'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Accordion, {
          style: {
            backgroundColor: "#05386B",
            color: "#5CDB95",
            border: "none"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AccordionSummary, {
            id: "top10",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
              variant: "subtitle1",
              children: "TOP 10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AccordionDetails, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
              to: {
                pathname: "/top/10/buy"
              },
              className: classes.link,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                className: classes.paper1,
                elevation: 0,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
                  variant: "subtitle2",
                  children: "BUY"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this)
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
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
              to: {
                pathname: "/top/10/sell"
              },
              className: classes.link,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                className: classes.paper1,
                elevation: 0,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
                  variant: "subtitle2",
                  children: "SELL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        className: classes.paper,
        elevation: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Accordion, {
          style: {
            backgroundColor: "#05386B",
            color: "#5CDB95",
            border: "none"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AccordionSummary, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
              variant: "subtitle1",
              children: "TOP 30"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AccordionDetails, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
              to: {
                pathname: "/top/30/buy"
              },
              className: classes.link,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                className: classes.paper1,
                elevation: 0,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
                  variant: "subtitle2",
                  children: "BUY"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AccordionDetails, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
              to: {
                pathname: "/top/30/sell"
              },
              className: classes.link,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                className: classes.paper1,
                elevation: 0,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
                  variant: "subtitle2",
                  children: "SELL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        className: classes.paper,
        elevation: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          to: {
            pathname: "/sectors"
          },
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
            className: classes.paper,
            elevation: 0,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
              variant: "subtitle1",
              children: "SECTORS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        className: classes.paper,
        elevation: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          to: {
            pathname: "/sp500"
          },
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
            className: classes.paper,
            elevation: 0,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
              variant: "subtitle1",
              children: "S AND P 500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        className: classes.paper,
        elevation: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          to: {
            pathname: "/revenue"
          },
          className: classes.link,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
            className: classes.paper,
            elevation: 0,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
              variant: "subtitle1",
              children: " TOP REVENUE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/data-grid */ "@material-ui/data-grid");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Simulation.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class Simulation extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      const SP500 = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/SP500Companies.json";
      axios__WEBPACK_IMPORTED_MODULE_3___default().get(SP500).then(s => {
        if (s.status === 200) {
          let SP500Companies = Object.keys(underscore__WEBPACK_IMPORTED_MODULE_4___default().invert(s.data));
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
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/simulation?" + params).then(s => {
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
      const days = e.target.value;
      this.setState({
        seldays: days
      }, () => {});
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/simulationtop" + "?" + "days=" + days).then(s => {
        console.log(s.data);

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
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_5__.GridToolbarContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_5__.GridToolbarExport, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
          style: {
            minWidth: "150px"
          },
          variant: "outlined",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {
            style: {
              color: "#5CDB95"
            },
            children: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Select, {
            style: {
              width: "100%",
              backgroundColor: "#05386B",
              color: "#5CDB95"
            },
            labelId: "days",
            id: "days",
            onChange: this.onSelectDays,
            value: this.state.seldays,
            children: [30, 60, 90, 180, 360, 720].map(period => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                value: period,
                children: period
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 26
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            padding: '20px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, this), this.state.simulationtop.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__.default, {
          component: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Paper,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__.default, {
            className: "Simualtion Results",
            minWidth: "650",
            "aria-label": "simple table",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__.default, {
              style: {
                color: "#05386B",
                backgroundColor: "#5CDB95"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__.default, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                  variant: "h5",
                  children: " Security Id"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                  align: "right",
                  variant: "h5",
                  children: "Company"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                  align: "right",
                  variant: "h5",
                  children: "Actual Average Returns"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                  align: "right",
                  variant: "h5",
                  children: "Minimum Prediction Range"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                  align: "right",
                  variant: "h5",
                  children: "Maximum Prediction Range"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__.default, {
              children: this.state.simulationtop.map(row => {
                console.log(row);
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__.default, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    component: "th",
                    scope: "row",
                    children: row.security_id
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    align: "right",
                    children: row.company
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    align: "right",
                    children: row.actual_average_return_percent
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    align: "right",
                    children: row.minimum_prediction_range
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    align: "right",
                    children: row.maximum_prediction_range
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 23
                  }, this)]
                }, row.Company, true, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 21
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
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
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/data-grid */ "@material-ui/data-grid");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Top.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const styles = theme => ({
  paper: {
    "&:hover": {
      color: "blue"
    }
  }
});

class Top extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      console.log("Top");
      console.log(this.props);
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
      const params = "num=" + num + "&" + "type=" + type;
      console.log(params);
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/topbuysell?" + params).then(s => {
        if (s.status === 200) {
          let companyStockDetails = s.data;
          companyStockDetails = companyStockDetails.slice(0, num);
          let topCompanies = [];

          for (let index = 0; index < companyStockDetails.length; index++) {
            const element = companyStockDetails[index];
            console.log(element);
            topCompanies.push(element["company"]);
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
    const {
      classes
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loader_spinner__WEBPACK_IMPORTED_MODULE_6___default()), {
        type: "ThreeDots",
        color: "#05386B",
        height: 80,
        width: 80
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
          elevation: 0,
          style: {
            display: "flex",
            padding: "15px",
            margin: "15px",
            justifyContent: "center",
            backgroundColor: "#05386B"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            variant: "subtitle1",
            style: {
              color: "#5CDB95"
            },
            children: ["TOP ", this.state.num, " COMPANIES FOR", " ", this.state.type === "buy" ? "INVESTING" : "TRADING"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
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
              elevation: 0,
              style: {
                display: "flex",
                padding: "10px",
                margin: "10px"
              },
              className: classes.paper,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "subtitle2",
                children: company
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 19
            }, this)
          }, (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(), false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }, this);
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

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles, {
  withTheme: true
})(Top));

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

/***/ "@material-ui/data-grid":
/*!*****************************************!*\
  !*** external "@material-ui/data-grid" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/data-grid");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "popper.js":
/*!****************************!*\
  !*** external "popper.js" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("popper.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_AppBar_index_js-node_modules_material-ui_core_esm_D-d87981"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9BcHAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9BYm91dC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYW55RGV0YWlscy5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYXJpc29uLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL0Rhc2hib2FyZC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Ib21lLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL05hdmlnYXRpb25CYXIuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvUGFnZU5vdEZvdW5kLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1JldmVudWUuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvU1A1MDAuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvU2VjdG9ycy5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9TaWRlQmFyLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1NpbXVsYXRpb24uanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvVG9wLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS91dGlsc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInBvcHBlci5qc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LWFwZXhjaGFydHNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LWxvYWRlci1zcGlubmVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwicmVuZGVyIiwiQWJvdXQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwidGhlbWUiLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsInNwYWNpbmciLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwibWFyZ2luVG9wIiwiQ29tcGFueURldGFpbHMiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwibWF0Y2giLCJjb21wYW55IiwicGFyYW1zIiwic2V0U3RhdGUiLCJzZWxlY3RlZENvbXBhbnkiLCJnZXRDb21wYW55RGV0YWlscyIsInN0YXRlIiwiYXhpb3MiLCJ0aGVuIiwicyIsInN0YXR1cyIsImNvbXBhbnlEZXRhaWxzIiwiZGF0YSIsInQiLCJPYmplY3QiLCJhc3NpZ24iLCJjYXRjaCIsImUiLCJsb2FkaW5nIiwic3RvY2tkZXRhaWxzIiwiY29tcGFueUN1cnJlbnREYXlTdG9ja0RldGFpbHMiLCJzdG9ja2tleXMiLCJkaXNwbGF5IiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJrZXlzIiwibWFwIiwia2V5IiwicmVzIiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJpbXBLZXlzIiwiaW5jbHVkZXMiLCJ3aXRoU3R5bGVzIiwiQ29tcGFyaXNvbiIsImNvbXBhbnlOYW1lcyIsInNlbGVjdGVkQ29tcGFuaWVzIiwiZXJyb3IiLCJpbmRleCIsInNlbGVjdGVkVGltZVBlcmlvZCIsInJhdGUiLCJ0aW1lUGVyaW9kIiwibnVtIiwicGVyaW9kIiwidW5kZXJzY29yZSIsImZpcnN0Q29tcGFueSIsInJlYXNvbiIsImRldGFpbCIsImNvbXBhbmllcyIsIm9wdGlvbiIsImNvbXBhbnluYW1lIiwid2lkdGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsInN0ZXAiLCJvbkNsaWNrU3VibWl0IiwiZWxlbWVudCIsInBhdGhuYW1lIiwiaSIsIkNoYXJ0IiwiZHluYW1pYyIsInNzciIsImNoYXJ0IiwiZGl2Y2hhcnQiLCJhbGlnbkl0ZW1zIiwiYnV0dG9uZ3JvdXAiLCJEYXNoYm9hcmQiLCJkZXRhaWxzIiwiZGF5cyIsImNsb3NlUHJpY2VEYXRhIiwibmFtZSIsIm9wZW5QcmljZURhdGEiLCJoaWdoUHJpY2VEYXRhIiwibG93UHJpY2VEYXRhIiwidG9EYXRlIiwiZnJvbURhdGUiLCJzbGljZSIsInB1c2giLCJ4IiwieSIsIm9wdGlvbnMiLCJ4YXhpcyIsInNlcmllcyIsImN1cnJlbnRUYXJnZXQiLCJzZWxlY3RlZFBlcmlvZCIsImNyZWF0ZUdyYXBoIiwiYmFja2dyb3VuZCIsInR5cGUiLCJoZWlnaHQiLCJ6b29tIiwiZW5hYmxlZCIsImF1dG9TY2FsZVlheGlzIiwidG9vbGJhciIsImF1dG9TZWxlY3RlZCIsInN0cm9rZSIsInNob3ciLCJjdXJ2ZSIsImxpbmVDYXAiLCJjb2xvcnMiLCJ1bmRlZmluZWQiLCJkYXNoQXJyYXkiLCJkYXRhTGFiZWxzIiwibWFya2VycyIsInNpemUiLCJ0aXRsZSIsInRleHQiLCJhbGlnbiIsInN0eWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImZpbGwiLCJvcGFjaXR5IiwiZ3JhZGllbnQiLCJzaGFkZUludGVuc2l0eSIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIiwieWF4aXMiLCJsYWJlbHMiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJ0b0ZpeGVkIiwiZHQiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0b29sdGlwIiwic2hhcmVkIiwiY2xhc3NlcyIsIndpdGhUaGVtZSIsImRyYXdlcldpZHRoIiwicm9vdCIsImFwcEJhciIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nVG9wIiwiZHJhd2VyIiwiZmxleFNocmluayIsImRyYXdlclBhcGVyIiwibWl4aW5zIiwiY29udGVudCIsImZsZXhHcm93IiwiZmxleFdyYXAiLCJvdmVyZmxvd1giLCJIb21lIiwicGFwZXIiLCJTZWN0b3JzIiwiU1A1MDAiLCJTaW11bGF0aW9uIiwiUGFnZU5vdEZvdW5kIiwid2l0aFJvdXRlciIsInRleHRBbGlnbiIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJsaW5rIiwidGV4dERlY29yYXRpb24iLCJncmlkIiwidHlwb2dyYXBoeSIsIk5hdmlnYXRpb25CYXIiLCJoaXN0b3J5IiwiUmV2ZW51ZSIsImNvbXBhbnlTdG9ja0RldGFpbHMiLCJzb3J0IiwiYSIsImIiLCJ0b3BDb21wYW5pZXMiLCJ1dWlkdjQiLCJzcDUwMCIsImxvY2F0aW9uIiwic2VjdG9ycyIsInNlbGVjdGVkU2VjdG9yIiwic2VsZWN0ZWRTZWN0b3JDb21wYW5pZXMiLCJzZWN0b3IiLCJoZWFkaW5nIiwicHhUb1JlbSIsImZvbnRXZWlnaHRSZWd1bGFyIiwiYm9yZGVyIiwicGFwZXIxIiwiU2lkZUJhciIsIlNQNTAwQ29tcGFuaWVzIiwiaW52ZXN0bWVudCIsInN0YXJ0ZGF0ZSIsInJlc3AiLCJjb2xzIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwicm93cyIsInJlc3BvbnNlIiwic2VsZGF5cyIsInNpbXVsYXRpb250b3AiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJmZXRjaCIsImNvbXBhbnlzZWxlY3RlZGFmdGVyc2ltdWxhdGlvbiIsImNvbXBhbnlkZXRhaWxzYWZ0ZXJzaW11bGF0aW9uIiwidG9kYXkiLCJvblNlbGVjdERheXMiLCJQYXBlciIsInJvdyIsInNlY3VyaXR5X2lkIiwiYWN0dWFsX2F2ZXJhZ2VfcmV0dXJuX3BlcmNlbnQiLCJtaW5pbXVtX3ByZWRpY3Rpb25fcmFuZ2UiLCJtYXhpbXVtX3ByZWRpY3Rpb25fcmFuZ2UiLCJDb21wYW55IiwiVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxHQUFOLFNBQWtCQyx3REFBbEIsQ0FBa0M7QUFDaENDLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLDJEQUFEO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQVArQjs7QUFVbEMsK0RBQWVGLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FD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QUFDRCxDOzs7Ozs7Ozs7OztBQ2JELCtDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vQ29tcG9uZW50cy9Ib21lXCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxIb21lIC8+XG4gICAgICA8L1JvdXRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkFib3V0XCIpXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+QWJvdXQ8L1JlYWN0LkZyYWdtZW50PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsImltcG9ydCB7XG4gIENoaXAsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIFBhcGVyLFxuICBUeXBvZ3JhcGh5LFxuICB3aXRoU3R5bGVzLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGZvcm1Db250cm9sOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIG1pbldpZHRoOiAxNTAsXG4gIH0sXG4gIHNlbGVjdEVtcHR5OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxufSk7XG5cbmNsYXNzIENvbXBhbnlEZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbXBhbnlEZXRhaWxzOiBbXSxcbiAgICAgIGNvbXBhbnlDdXJyZW50RGF5U3RvY2tEZXRhaWxzOiBbXSxcbiAgICAgIHNlbGVjdGVkQ29tcGFueTogXCJcIixcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzdG9ja2tleXM6IFtcbiAgICAgICAgXCJEYXRlXCIsXG4gICAgICAgIFwiT3BlbiBQcmljZVwiLFxuICAgICAgICBcIkhpZ2ggUHJpY2VcIixcbiAgICAgICAgXCJMb3cgUHJpY2VcIixcbiAgICAgICAgXCJDbG9zZSBQcmljZVwiLFxuICAgICAgICBcIldBUFwiLFxuICAgICAgICBcIk5vLm9mIFNoYXJlc1wiLFxuICAgICAgICBcIk5vLiBvZiBUcmFkZXNcIixcbiAgICAgICAgXCJUb3RhbCBUdXJub3ZlciAoUnMuKVwiLFxuICAgICAgICBcIiUgRGVsaS4gUXR5IHRvIFRyYWRlZCBRdHlcIixcbiAgICAgICAgXCJTcHJlYWQgSGlnaC1Mb3dcIixcbiAgICAgICAgXCJTcHJlYWQgQ2xvc2UtT3BlblwiLFxuICAgICAgXSxcbiAgICAgIHN0b2NrZGV0YWlsczogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tcGFueURldGFpbHNcIik7XG4gICAgY29uc3QgeyBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb21wYW55ID0gbWF0Y2gucGFyYW1zLmNvbXBhbnk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ29tcGFueTogY29tcGFueSB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmdldENvbXBhbnlEZXRhaWxzKHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRDb21wYW55RGV0YWlscyA9IGFzeW5jIChjb21wYW55KSA9PiB7XG4gICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9jb21wYW55ZGV0YWlscz9jb21wYW55PVwiICsgY29tcGFueSkudGhlbigocykgPT4ge1xuICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgbGV0IGNvbXBhbnlEZXRhaWxzID0gcy5kYXRhO1xuICAgICAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiL2FwaS9nZXRzdWdnZXN0aW9ucz9jb21wYW55PVwiICsgY29tcGFueSlcbiAgICAgICAgLnRoZW4oKHQpID0+IHtcbiAgICAgICAgICBpZiAodC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY29tcGFueURldGFpbHMgPSBPYmplY3QuYXNzaWduKGNvbXBhbnlEZXRhaWxzLCB0LmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueURldGFpbHM6IGNvbXBhbnlEZXRhaWxzLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueURldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3ByZXZpb3VzZGF5c3RvY2tkZXRhaWxzP2NvbXBhbnk9XCIgKyBjb21wYW55KVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tkZXRhaWxzOiBzLmRhdGEsIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tkZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tkZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yIDogXCIjNUNEQjk1XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiID57dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgIHsvKiA8RGl2aWRlciAvPiAqL31cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPT09IHRydWUgPyAoXG4gICAgICAgICAgICAgIDxMb2FkZXIgdHlwZT1cIlRocmVlRG90c1wiIGNvbG9yPVwiIzA1Mzg2QlwiIGhlaWdodD17ODB9IHdpZHRoPXs4MH0vPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmNvbXBhbnlEZXRhaWxzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb21wYW55RGV0YWlsc1trZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3Bhbj48L3NwYW4+O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJzdWdnZXN0XCIgJiYgKHRoaXMuc3RhdGUuY29tcGFueURldGFpbHNba2V5XSA9PT0gXCJidXlcIiB8fCB0aGlzLnN0YXRlLmNvbXBhbnlEZXRhaWxzW2tleV0gPT09IFwic2VsbFwiKSApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IFwiU1VHR0VTVElPTiBcIiArIFwiIC0tIFwiICsgdGhpcy5zdGF0ZS5jb21wYW55RGV0YWlsc1trZXldLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IFwiIzVDREI5NVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApOyBcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0ga2V5ICsgXCIgOiBcIiArIHRoaXMuc3RhdGUuY29tcGFueURldGFpbHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cmVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogIFwiIzA1Mzg2QlwifX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApOyBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgey8qIDxEaXZpZGVyIC8+XG4gICAgICAgIDxEaXZpZGVyIC8+ICovfVxuICAgICAgICB7dGhpcy5zdGF0ZS5zdG9ja2RldGFpbHMubGVuZ3RoICE9PSAwICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zdG9ja2tleXMubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCBpbXBLZXlzID0gW1wiT3BlbiBQcmljZVwiLCBcIkhpZ2ggUHJpY2VcIiwgXCJMb3cgUHJpY2VcIiwgXCJDbG9zZSBQcmljZVwiXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGltcEtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICBsZXQgcmVzID0ga2V5LnRvVXBwZXJDYXNlKCkgKyBcIiA6IFwiICsgdGhpcy5zdGF0ZS5zdG9ja2RldGFpbHNba2V5XTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD17cmVzfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yIDogXCIjNUNEQjk1XCJ9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBrZXkgKyBcIiA6IFwiICsgdGhpcy5zdGF0ZS5zdG9ja2RldGFpbHNba2V5XTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPXtyZXN9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNUNEQjk1XCIsXG4gICAgICAgICAgICAgICAgY29sb3IgOiAgXCIjMDUzODZCXCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICB7dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnkgIT09IFwiXCIgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLnN0b2NrZGV0YWlscy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgPERhc2hib2FyZCBjb21wYW55PXt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueX0gLz5cbiAgICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQ29tcGFueURldGFpbHMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHVuZGVyc2NvcmUgZnJvbSBcInVuZGVyc2NvcmVcIjtcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCI7XG5cbmltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBHcmlkLFxuICBJbnB1dExhYmVsLFxuICBCdXR0b24sXG4gIE1lbnVJdGVtLFxuICBQYXBlcixcbiAgU2VsZWN0LFxuICBUeXBvZ3JhcGh5LFxuICBUZXh0RmllbGQsXG4gIENoaXAsXG4gIERpdmlkZXIsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9EYXNoYm9hcmRcIjtcblxuY2xhc3MgQ29tcGFyaXNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGNvbXBhbnlOYW1lczogW10sXG4gICAgICBzZWxlY3RlZENvbXBhbmllczogW10sXG4gICAgICBzZWxlY3RlZFRpbWVQZXJpb2Q6IFwiMTgwXCIsXG4gICAgICByYXRlOiBcIjFcIixcbiAgICAgIHN0b2Nra2V5czogW1xuICAgICAgICBcIkRhdGVcIixcbiAgICAgICAgXCJPcGVuIFByaWNlXCIsXG4gICAgICAgIFwiSGlnaCBQcmljZVwiLFxuICAgICAgICBcIkxvdyBQcmljZVwiLFxuICAgICAgICBcIkNsb3NlIFByaWNlXCIsXG4gICAgICAgIFwiV0FQXCIsXG4gICAgICAgIFwiTm8ub2YgU2hhcmVzXCIsXG4gICAgICAgIFwiTm8uIG9mIFRyYWRlc1wiLFxuICAgICAgICBcIlRvdGFsIFR1cm5vdmVyIChScy4pXCIsXG4gICAgICAgIFwiJSBEZWxpLiBRdHkgdG8gVHJhZGVkIFF0eVwiLFxuICAgICAgICBcIlNwcmVhZCBIaWdoLUxvd1wiLFxuICAgICAgICBcIlNwcmVhZCBDbG9zZS1PcGVuXCIsXG4gICAgICBdLFxuICAgICAgdGltZVBlcmlvZDoge1xuICAgICAgICBcIjEgZGF5XCI6IFwiMVwiLFxuICAgICAgICBcIjcgZGF5c1wiOiBcIjdcIixcbiAgICAgICAgXCIxIG1vbnRoXCI6IFwiMzBcIixcbiAgICAgICAgXCIzIG1vbnRoc1wiOiBcIjkwXCIsXG4gICAgICAgIFwiNiBtb250aHNcIjogXCIxODBcIixcbiAgICAgICAgXCIxIHllYXJcIjogXCIzNjBcIixcbiAgICAgICAgXCIyIHllYXJzXCI6IFwiNzIwXCIsXG4gICAgICAgIFwiNSB5ZWFyc1wiOiBcIjE4MDBcIixcbiAgICAgICAgXCIxMCB5ZWFyc1wiOiBcIjM2MDBcIixcbiAgICAgIH0sXG4gICAgICBzdG9ja2RldGFpbHM6IFtdLFxuICAgICAgbnVtOiAxMCxcbiAgICAgIGVycm9yOiBcIlwiLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBhcmlzb25cIik7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL2NvbXBhbnlOYW1lc1wiKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueU5hbWVzOiBzLmRhdGEgfSwgKCkgPT4ge30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55TmFtZXM6IHMuZGF0YSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2RldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBvbkNsaWNrU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFuaWVzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogXCJzZWxlY3QgYXRsZWFzdCB0d28gY29tcGFuaWVzXCIgfSwgKCkgPT4ge30pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IFwiXCIsIGxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge30pO1xuICAgIH1cbiAgICBsZXQgc3RvY2tkZXRhaWxzID0ge307XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW5pZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBjb21wYW55ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbmllc1tpbmRleF07XG4gICAgICBzdG9ja2RldGFpbHNbY29tcGFueV0gPSB7fTtcbiAgICB9XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW5pZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBjb21wYW55ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbmllc1tpbmRleF07XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0KFwiL2FwaS9wcmV2aW91c2RheXN0b2NrZGV0YWlscz9jb21wYW55PVwiICsgY29tcGFueSlcbiAgICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgc3RvY2tkZXRhaWxzW2NvbXBhbnldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgc3RvY2tkZXRhaWxzW2NvbXBhbnldLFxuICAgICAgICAgICAgICBzLmRhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0KFxuICAgICAgICAgIFwiL2FwaS9jb21wYXJpc29uP2RheXM9XCIgK1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVQZXJpb2QgK1xuICAgICAgICAgICAgXCImcmF0ZT1cIiArXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJhdGUgK1xuICAgICAgICAgICAgXCImY29tcGFueT1cIiArXG4gICAgICAgICAgICBjb21wYW55XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgc3RvY2tkZXRhaWxzW2NvbXBhbnldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgc3RvY2tkZXRhaWxzW2NvbXBhbnldLFxuICAgICAgICAgICAgICBzLmRhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2RldGFpbHM6IHN0b2NrZGV0YWlscywgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwZXJpb2QgPSB1bmRlcnNjb3JlLmludmVydCh0aGlzLnN0YXRlLnRpbWVQZXJpb2QpO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdENvbXBhbnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgY29tcGFueSwgcmVhc29uLCBkZXRhaWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVhc29uID09PSBcInJlbW92ZS1vcHRpb25cIikge1xuICAgICAgICAgICAgICAgICAgbGV0IGNvbXBhbmllcyA9IHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzO1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbXBhbmllc1tkZXRhaWwub3B0aW9uXTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2RldGFpbHM6IGNvbXBhbmllcyB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbmllczogY29tcGFueSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpZD1cInNlbGVjdCBtdWx0aXBsZSBjb21wYW5pZXNcIlxuICAgICAgICAgICAgICBmcmVlU29sb1xuICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmNvbXBhbnlOYW1lcy5tYXAoXG4gICAgICAgICAgICAgICAgKGNvbXBhbnluYW1lKSA9PiBjb21wYW55bmFtZVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3QgTXVsdGlwbGUgQ29tcGFuaWVzXCJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17dGhpcy5zdGF0ZS5lcnJvcn1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yICE9PSBcIlwifVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1pbldpZHRoOiBcIjE1MHB4XCIgfX0gdmFyaWFudD1cIm91dGxpbmVkXCI+XG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsPnRyYWRpbmcgcGVyaW9kPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgbGFiZWxJZD1cInRyYWRpbmcgcGVyaW9kXCJcbiAgICAgICAgICAgICAgICBpZD1cInRyYWRpbmdcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgeyBzZWxlY3RlZFRpbWVQZXJpb2Q6IGUudGFyZ2V0LnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lUGVyaW9kfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUudGltZVBlcmlvZCkubWFwKChwZXJpb2QpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17dGhpcy5zdGF0ZS50aW1lUGVyaW9kW3BlcmlvZF19PlxuICAgICAgICAgICAgICAgICAgICAgIHtwZXJpb2R9XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgbWluOiBcIi0xMDBcIiwgbWF4OiBcIjEwMFwiLCBzdGVwOiBcIjAuMDFcIiB9fVxuICAgICAgICAgICAgICBsYWJlbD1cIlJhdGUgb2YgZ3Jvd3RoXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhdGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrU3VibWl0fVxuICAgICAgICAgICAgICBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgICBjb2xvciA6IFwiIzVDREI5NVwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIHsvKiA8RGl2aWRlciAvPlxuICAgICAgICA8RGl2aWRlciAvPiAqL31cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJUaHJlZURvdHNcIiBjb2xvcj1cIiMwNTM4NkJcIiBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB0aGlzLnN0YXRlLnN0b2NrZGV0YWlscy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnN0b2NrZGV0YWlscykubWFwKChjb21wYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzW2NvbXBhbnldO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCJjb21wYW55ZGV0YWlscy9cIiArIGVsZW1lbnRbXCJjb21wYW55XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnRbXCJjb21wYW55XCJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgSW4gdGhlIGxhc3Qge3BlcmlvZFtlbGVtZW50W1widG90YWxOdW1iZXJPZkRheXNcIl1dfSwgZm9ye1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50W1wicGVyY2VudE9mRGF5c1wiXX0gcGVyY2VudCBvZiB0cmFkaW5nIGRheXMgY2xvc2VcbiAgICAgICAgICAgICAgICAgICAgICBwcmljZSBncm93dGggcmF0ZSB3YXMgbW9yZSB0aGFuIHtlbGVtZW50W1wicmF0ZVwiXX0gJVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmQgY29tcGFueT17ZWxlbWVudFtcImNvbXBhbnlcIl19IC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN0b2Nra2V5cy5tYXAoKGtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBrZXkgKyBcIiA6IFwiICsgZWxlbWVudFtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cmVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmlzb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtYXBleGNoYXJ0c1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5pbXBvcnQgeyBCdXR0b25Hcm91cCwgQnV0dG9uLCBEaXZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCI7XG5cblxuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGNoYXJ0OiB7XG4gICAgd2lkdGg6IFwiODAlXCIsXG4gIH0sXG4gIGRpdmNoYXJ0OiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgfSxcbiAgYnV0dG9uZ3JvdXA6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBtYXJnaW46IFwiMTBweFwiLFxuICB9LFxufSk7XG5cblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBkZXRhaWxzOiBbXSxcbiAgICAgIHNlbGVjdGVkUGVyaW9kOiBcIlwiLFxuICAgICAgY29tcGFueTogXCJcIixcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIHNlcmllczogW10sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgdHlwZTogXCJhcmVhXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICB0eXBlOiBcInhcIixcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBhdXRvU2NhbGVZYXhpczogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgIGF1dG9TZWxlY3RlZDogXCJ6b29tXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBjdXJ2ZTogXCJzbW9vdGhcIixcbiAgICAgICAgICBsaW5lQ2FwOiBcImJ1dHRcIixcbiAgICAgICAgICBjb2xvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICBkYXNoQXJyYXk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgIHNpemU6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgdGV4dDogXCJTdG9jayBQcmljZSBNb3ZlbWVudFwiLFxuICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIlNhbnMtc2VyaWZcIixcbiAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICB0eXBlOiBcInNvbGlkXCIsXG4gICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICAgIGdyYWRpZW50OiB7XG4gICAgICAgICAgICBzaGFkZUludGVuc2l0eTogMSxcbiAgICAgICAgICAgIGludmVyc2VDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgICAgb3BhY2l0eUZyb206IDEsXG4gICAgICAgICAgICBvcGFjaXR5VG86IDEsXG4gICAgICAgICAgICBzdG9wczogWzAsIDkwLCAxMDBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbC50b0ZpeGVkKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiUHJpY2UgaW4gUnNcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB4YXhpczoge1xuICAgICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkdCA9IG5ldyBEYXRlKHZhbCk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZHQuZ2V0RGF0ZSgpICtcbiAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgKGR0LmdldE1vbnRoKCkgKyAxKSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIGR0LmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogXCJUaW1lIFBlcmlvZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgIHNoYXJlZDogZmFsc2UsXG4gICAgICAgICAgeDoge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUodmFsKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkdC5nZXREYXRlKCkgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICAoZHQuZ2V0TW9udGgoKSArIDEpICtcbiAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgZHQuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJEYXNoYm9hcmRcIik7XG4gICAgaWYgKHRoaXMucHJvcHMuY29tcGFueSAhPT0gXCJzcDUwMFwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueTogdGhpcy5wcm9wcy5jb21wYW55IH0sICgpID0+IHtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAuZ2V0KFwiL2FwaS9zdG9ja2RldGFpbHM/Y29tcGFueT1cIiArIHRoaXMuc3RhdGUuY29tcGFueSlcbiAgICAgICAgICAudGhlbigocykgPT4ge1xuICAgICAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IHMuZGF0YSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7fSlcbiAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogdHJ1ZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnk6IHRoaXMucHJvcHMuY29tcGFueSB9LCAoKSA9PiB7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgLmdldChcIi9hcGkvc3A1MDBcIilcbiAgICAgICAgICAudGhlbigocykgPT4ge1xuICAgICAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IHMuZGF0YSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogdHJ1ZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY3JlYXRlR3JhcGggPSAoZGF5cykgPT4ge1xuICAgIGxldCBjbG9zZVByaWNlRGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiQ2xvc2UgUHJpY2VcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG4gICAgbGV0IG9wZW5QcmljZURhdGEgPSB7XG4gICAgICBuYW1lOiBcIk9wZW4gUHJpY2VcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG4gICAgbGV0IGhpZ2hQcmljZURhdGEgPSB7XG4gICAgICBuYW1lOiBcIkhpZ2ggUHJpY2VcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG4gICAgbGV0IGxvd1ByaWNlRGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiTG93IFByaWNlXCIsXG4gICAgICBkYXRhOiBbXSxcbiAgICB9O1xuXG4gICAgZGF5cyA9XG4gICAgICBkYXlzID09PSBcImFsbFwiXG4gICAgICAgID8gdGhpcy5zdGF0ZS5kZXRhaWxzLmxlbmd0aCAtIDFcbiAgICAgICAgOiBkYXlzID4gdGhpcy5zdGF0ZS5kZXRhaWxzLmxlbmd0aCAtIDFcbiAgICAgICAgPyB0aGlzLnN0YXRlLmRldGFpbHMubGVuZ3RoIC0gMVxuICAgICAgICA6IGRheXM7XG4gICAgY29uc3QgdG9EYXRlID0gdGhpcy5zdGF0ZS5kZXRhaWxzWzBdW1wiRGF0ZVwiXTtcbiAgICBjb25zdCBmcm9tRGF0ZSA9IHRoaXMuc3RhdGUuZGV0YWlsc1tkYXlzXVtcIkRhdGVcIl07XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RhdGUuZGV0YWlscy5zbGljZSgwLCBkYXlzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhW2ldO1xuICAgICAgY2xvc2VQcmljZURhdGEuZGF0YS5wdXNoKHtcbiAgICAgICAgeDogZWxlbWVudFtcIkRhdGVcIl0sXG4gICAgICAgIHk6IGVsZW1lbnRbXCJDbG9zZSBQcmljZVwiXSB8fCBlbGVtZW50W1wiQ2xvc2VcIl0sXG4gICAgICB9KTtcblxuICAgICAgb3BlblByaWNlRGF0YS5kYXRhLnB1c2goe1xuICAgICAgICB4OiBlbGVtZW50W1wiRGF0ZVwiXSxcbiAgICAgICAgeTogZWxlbWVudFtcIk9wZW4gUHJpY2VcIl0gfHwgZWxlbWVudFtcIk9wZW5cIl0sXG4gICAgICB9KTtcblxuICAgICAgaGlnaFByaWNlRGF0YS5kYXRhLnB1c2goe1xuICAgICAgICB4OiBlbGVtZW50W1wiRGF0ZVwiXSxcbiAgICAgICAgeTogZWxlbWVudFtcIkhpZ2ggUHJpY2VcIl0gfHwgZWxlbWVudFtcIkhpZ2hcIl0sXG4gICAgICB9KTtcblxuICAgICAgbG93UHJpY2VEYXRhLmRhdGEucHVzaCh7XG4gICAgICAgIHg6IGVsZW1lbnRbXCJEYXRlXCJdLFxuICAgICAgICB5OiBlbGVtZW50W1wiTG93IFByaWNlXCJdIHx8IGVsZW1lbnRbXCJMb3dcIl0sXG4gICAgICB9KTtcblxuXG4gICAgfVxuICAgIGxldCBvcHRpb25zID0gdGhpcy5zdGF0ZS5vcHRpb25zO1xuICAgIG9wdGlvbnMueGF4aXNbXCJtaW5cIl0gPSBmcm9tRGF0ZTtcbiAgICBvcHRpb25zLnhheGlzW1wibWF4XCJdID0gdG9EYXRlO1xuICAgIGNvbnN0IHNlcmllcyA9IFtdO1xuICAgIHNlcmllcy5wdXNoKGNsb3NlUHJpY2VEYXRhKTtcbiAgICBzZXJpZXMucHVzaChvcGVuUHJpY2VEYXRhKTtcbiAgICBzZXJpZXMucHVzaChoaWdoUHJpY2VEYXRhKTtcbiAgICBzZXJpZXMucHVzaChsb3dQcmljZURhdGEpO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNlcmllczogc2VyaWVzLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgfSxcbiAgICAgICgpID0+IHt9XG4gICAgKTtcbiAgfTtcblxuICBzZWxlY3RlZFBlcmlvZCA9IChlKSA9PiB7XG4gICAgY29uc3QgZGF5cyA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFBlcmlvZCA9PT0gZGF5cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRQZXJpb2Q6IGRheXMgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVHcmFwaChkYXlzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlciB0eXBlPVwiVGhyZWVEb3RzXCIgY29sb3I9XCIjMDUzODZCXCIgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfS8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciAhPT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbmdyb3VwfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjb250YWluZWQgcHJpbWFyeSBidXR0b24gZ3JvdXBcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjdcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfSBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICAgIDdEXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjMwXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0gc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgICAxTVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCI5MFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9IHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgICAgM01cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiMTgwXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0gc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgICA2TVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCIzNjBcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfSBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICAgIDFZXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjE4MDBcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfSBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICAgIDVZXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cImFsbFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9IHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgICAgQWxsXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZGl2Y2hhcnR9PlxuICAgICAgICAgICAgICA8Q2hhcnQgXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUub3B0aW9uc30gXG4gICAgICAgICAgICAgIHNlcmllcz17dGhpcy5zdGF0ZS5zZXJpZXN9XG4gICAgICAgICAgICAgIGtleSA9IFwiY2hhcnRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5jaGFydH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgd2l0aFRoZW1lOiB0cnVlIH0pKERhc2hib2FyZCk7XG4iLCJpbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCB3aXRoUm91dGVyLCBIYXNoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL0Fib3V0XCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuXG5pbXBvcnQgQ29tcGFueURldGFpbHMgZnJvbSBcIi4vQ29tcGFueURldGFpbHNcIjtcbmltcG9ydCBDb21wYXJpc29uIGZyb20gXCIuL0NvbXBhcmlzb25cIjtcbi8vIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4vTmF2aWdhdGlvbkJhclwiO1xuaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tIFwiLi9QYWdlTm90Rm91bmRcIjtcbi8vIGltcG9ydCBQZXJmb3JtYW5jZSBmcm9tIFwiLi9QZXJmb3JtYW5jZVwiO1xuaW1wb3J0IFJldmVudWUgZnJvbSBcIi4vUmV2ZW51ZVwiO1xuaW1wb3J0IFNlY3RvcnMgZnJvbSBcIi4vU2VjdG9yc1wiO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vU2lkZUJhclwiO1xuaW1wb3J0IFNQNTAwIGZyb20gXCIuL1NQNTAwXCI7XG5pbXBvcnQgVG9wIGZyb20gXCIuL1RvcFwiO1xuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSBcIi4vU2ltdWxhdGlvblwiO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDMwMDtcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9LFxuICBhcHBCYXI6IHtcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgZmxleFNocmluazogMCxcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gIH0sXG4gIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXG4gIHRvb2xiYXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IDMwLFxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOiBcIndoaXRlXCIsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgbWluV2lkdGg6IFwiNDgwcHhcIixcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICB9LFxufSk7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29tcGFueU5hbWVzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJIb21lXCIpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgIDxBcHBCYXJcbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfVxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjNUNEQjk1XCIsIGNvbG9yOiBcIiMwNTM4NkJcIn19XG4gICAgICAgID5cbiAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIC8+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxuICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhbmNob3I9XCJsZWZ0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlN0b2NrIFRyZW5kczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDxTaWRlQmFyIC8+XG4gICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgLz5cbiAgICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz4gKi99XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BlcmZvcm1hbmNlXCIgY29tcG9uZW50PXtQZXJmb3JtYW5jZX0gLz4gKi99XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgcGF0aD1cIi90b3AvOm51bS86dHlwZVwiXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgbnVtLCB0eXBlIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9ID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPFRvcCBrZXk9e2BudW09JHtudW19JnR5cGU9JHt0eXBlfWB9IHsuLi5wcm9wc30gLz47XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VjdG9yc1wiIGNvbXBvbmVudD17U2VjdG9yc30gLz5cbiAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICBwYXRoPVwiL2NvbXBhbnlkZXRhaWxzLzpjb21wYW55XCJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBjb21wYW55IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9ID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29tcGFueURldGFpbHMga2V5PXtgY29tcGFueT0ke2NvbXBhbnl9YH0gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgIHBhdGg9XCIvcmV2ZW51ZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UmV2ZW51ZSBjb21wYW55TmFtZXM9e3RoaXMuc3RhdGUuY29tcGFueU5hbWVzfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NwNTAwXCIgY29tcG9uZW50PXtTUDUwMH0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY29tcGFyaXNvblwiIGNvbXBvbmVudD17Q29tcGFyaXNvbn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2ltdWxhdGlvblwiIGNvbXBvbmVudD17U2ltdWxhdGlvbn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17UGFnZU5vdEZvdW5kfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9IYXNoUm91dGVyPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKSh3aXRoUm91dGVyKEhvbWUpKTtcbiIsImltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmssIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gIH0sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJpbml0aWFsXCIsXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICAvLyBcIiY6aG92ZXJcIjoge1xuICAgIC8vICAgYmFja2dyb3VuZENvbG9yOiBcIiNBREQ4RTBcIixcbiAgICAvLyB9LFxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgcGFkZGluZzogMjAsXG4gICAgZm9udFNpemUgOiAyNCxcbiAgfSxcbn0pO1xuXG5jbGFzcyBOYXZpZ2F0aW9uQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2VsZWN0ZWRDb21wYW55OiBcIiBcIiwgY29tcGFueU5hbWVzOiBbXSB9O1xuICB9XG5cbiAgc2VsZWN0ZWRDb21wYW55ID0gKGUsIHZhbCkgPT4ge1xuICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICBoaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDb21wYW55OiB2YWwgfSwgKCkgPT4ge1xuICAgICAgaGlzdG9yeS5wdXNoKFwiL2NvbXBhbnlkZXRhaWxzL1wiICsgdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ29tcGFueTogXCJcIiB9LCAoKSA9PiB7fSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJOYXZpZ2F0aW9uQmFyXCIpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9jb21wYW55TmFtZXNcIilcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogcy5kYXRhIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55TmFtZXM6IFtdIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzcGFjaW5nPXsxfT5cbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9ncmFwaHl9IHZhcmlhbnQ9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9ncmFwaHl9IHZhcmlhbnQ9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICB7LyogPEdyaWQgaXRlbT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9wZXJmb3JtYW5jZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSB2YXJpYW50PVwiYnV0dG9uXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0gdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIFBlcmZvcm1hbmNlXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0dyaWQ+ICovfVxuICAgICAgICB7LyogPEdyaWQgaXRlbT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD4gKi99XG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2NvbXBhcmlzb25cIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeX0gdmFyaWFudD1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbXBhcmlzb25cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvc2ltdWxhdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeX0gdmFyaWFudD1cImJ1dHRvblwiIFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaW11bGF0aW9uXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxuICAgICAgICAgIDxBdXRvY29tcGxldGVcbiAgICAgICAgICAgIHN0eWxlPXt7IFxuICAgICAgICAgICAgICB3aWR0aDogXCIzMDBweFwiLFxuICAgICAgICAgICAgICBjb2xvcjpcIiMwNTM4NkJcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21wYW55KGUsIHZhbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaWQ9XCJzZWFyY2ggZm9yIGNvbXBhbmllc1wiXG4gICAgICAgICAgICBmcmVlU29sb1xuICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5jb21wYW55TmFtZXMubWFwKChjb21wYW55bmFtZSkgPT4gY29tcGFueW5hbWUpfVxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJzZWFyY2ggZm9yIGNvbXBhbmllc1wiXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzA1Mzg2QlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykod2l0aFJvdXRlcihOYXZpZ2F0aW9uQmFyKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFBhZ2VOb3RGb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUGFnZU5vdEZvdW5kXCIpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8aDE+UGFnZSBOb3QgRm91bmQ8L2gxPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RGb3VuZDtcbiIsImltcG9ydCB7IFBhcGVyLCBUeXBvZ3JhcGh5LCB3aXRoU3R5bGVzICB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IEdSSURfSEVBREVSX0NFTExfU0VQQVJBVE9SX1JFU0laQUJMRV9DU1NfQ0xBU1MgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZFwiO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHBhcGVyIDoge1xuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBSZXZlbnVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvcENvbXBhbmllczogW10sXG4gICAgICBudW06IDMwLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSZXZlbnVlXCIpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9wcmV2aW91c2RheXN0b2NrZGV0YWlsc1wiKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgY29tcGFueVN0b2NrRGV0YWlscyA9IHMuZGF0YTtcbiAgICAgICAgICBjb21wYW55U3RvY2tEZXRhaWxzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhW1wiUmV2ZW51ZVwiXSAtIGJbXCJSZXZlbnVlXCJdO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbXBhbnlTdG9ja0RldGFpbHMgPSBjb21wYW55U3RvY2tEZXRhaWxzLnNsaWNlKDAsIHRoaXMuc3RhdGUubnVtKTtcbiAgICAgICAgICBsZXQgdG9wQ29tcGFuaWVzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXBhbnlTdG9ja0RldGFpbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY29tcGFueVN0b2NrRGV0YWlsc1tpbmRleF07XG4gICAgICAgICAgICB0b3BDb21wYW5pZXMucHVzaChlbGVtZW50W1wiQ29tcGFueVwiXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7IHRvcENvbXBhbmllczogdG9wQ29tcGFuaWVzLCBsb2FkaW5nOiBmYWxzZSB9LFxuICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3BDb21wYW5pZXM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3BDb21wYW5pZXM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlciB0eXBlPVwiVGhyZWVEb3RzXCIgY29sb3I9XCIjMDUzODZCXCIgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfS8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yIDogXCIjNUNEQjk1XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxuICAgICAgICAgICAgICAgIFRvcCB7dGhpcy5zdGF0ZS5udW19IENvbXBhbmllcyBSZXZlbnVlIHdpc2VcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvcENvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2NvbXBhbnlkZXRhaWxzL1wiICsgY29tcGFueSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBtYXJnaW46IFwiMTBweFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0geyBjbGFzc2VzLnBhcGVyIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiID57Y29tcGFueX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFJldmVudWU7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyB3aXRoVGhlbWU6IHRydWUgfSkoUmV2ZW51ZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmNsYXNzIFNQNTAwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc3A1MDA6IFtdIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTUDUwMFwiKTtcbiAgICAvLyBheGlvc1xuICAgIC8vICAgLmdldChcIi9zcDUwMFwiKVxuICAgIC8vICAgLnRoZW4oKHMpID0+IHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHNwNTAwOiBzLmRhdGEsIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAudGhlbigoKSA9PiB7fSlcbiAgICAvLyAgIC5jYXRjaCgoZSkgPT4ge30pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFBhcGVyXG4gICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgIGNvbG9yIDogXCIjNUNEQjk1XCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPntcIlNQIDUwMFwifTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPERhc2hib2FyZCBjb21wYW55PVwic3A1MDBcIiAvPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNQNTAwO1xuIiwiaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBTZWN0b3JzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlY3RvcnM6IFtdLFxuICAgICAgc2VsZWN0ZWRTZWN0b3I6IFwiXCIsXG4gICAgICBzZWxlY3RlZFNlY3RvckNvbXBhbmllczogW10sXG4gICAgICBzZWxlY3RlZENvbXBhbnk6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2VjdG9yc1wiKTtcbiAgICBjb25zdCB7IGhpc3RvcnksIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChcInN0YXRlXCIgaW4gbG9jYXRpb24gJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICB9XG5cbiAgICBheGlvcy5nZXQoXCJhcGkvc2VjdG9yc1wiKS50aGVuKChzKSA9PiB7XG4gICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VjdG9yczogcy5kYXRhIH0sICgpID0+IHt9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWN0b3JzOiBbXSB9LCAoKSA9PiB7fSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgc2VsZWN0ZWRTZWN0b3IgPSAoZSwgdmFsKSA9PiB7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgeyBzZWxlY3RlZFNlY3RvcjogXCJcIiwgc2VsZWN0ZWRTZWN0b3JDb21wYW5pZXM6IFtdIH0sXG4gICAgICAgICgpID0+IHt9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTZWN0b3I6IHZhbCxcbiAgICAgICAgICBzZWxlY3RlZFNlY3RvckNvbXBhbmllczogdGhpcy5zdGF0ZS5zZWN0b3JzW3ZhbF0sXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHt9XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBzZWxlY3RlZENvbXBhbnkgPSAodmFsKSA9PiB7XG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbnk6IHZhbCB9LCAoKSA9PiB7XG4gICAgICAgIGhpc3RvcnkucHVzaChcImNvbXBhbnlkZXRhaWxzL1wiICsgdmFsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlY3RvcnMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgYWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZWN0b3IoZSwgdmFsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpZD1cInNlYXJjaCBmb3Igc2VjdG9yXCJcbiAgICAgICAgICAgIGZyZWVTb2xvXG4gICAgICAgICAgICBvcHRpb25zPXtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnNlY3RvcnMpLm1hcCgoc2VjdG9yKSA9PiBzZWN0b3IpfVxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbn1cbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwic2VhcmNoIGZvciBzZWN0b3JcIlxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWRTZWN0b3JDb21wYW5pZXMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgYWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21wYW55KHZhbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaWQ9XCJzZWFyY2ggZm9yIGNvbXBhbmllc1wiXG4gICAgICAgICAgICBmcmVlU29sb1xuICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlY3RvckNvbXBhbmllcy5tYXAoXG4gICAgICAgICAgICAgIChjb21wYW55KSA9PiBjb21wYW55XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbn1cbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwic2VhcmNoIGZvciBjb21wYW55XCJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdG9ycztcbiIsImltcG9ydCB7XG4gIEFjY29yZGlvbixcbiAgQWNjb3JkaW9uRGV0YWlscyxcbiAgQWNjb3JkaW9uU3VtbWFyeSxcbiAgUGFwZXIsXG4gIHdpdGhTdHlsZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgaGVhZGluZzoge1xuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTUpLFxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXG4gIH0sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgXG4gICAgXCImID4gKlwiOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMuNiksXG4gICAgICBib3JkZXI6ICcwcHgnLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgY29sb3I6IFwiIzVDREI5NVwiXG4gIH0sXG4gIHBhcGVyMToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIFxuICAgIFwiJiA+ICpcIjoge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIC8vIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIGJvcmRlcjogJzBweCcsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICBjb2xvcjogXCIjMDUzODZCXCJcbiAgfSxcbn0pO1xuXG5jbGFzcyBTaWRlQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2lkZWJhclwiKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0gc3R5bGUgPSB7e1xuICAgICAgICAgIHBhZGRpbmcgOiAnMHB4JyxcbiAgICAgICAgfX0+XG4gICAgICAgICAgPEFjY29yZGlvbiBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICAgICAgICAgICAgYm9yZGVyIDogXCJub25lXCJcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgaWQ9XCJ0b3AxMFwiID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlRPUCAxMDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPXt7IHBhdGhuYW1lOiBcIi90b3AvMTAvYnV5XCIgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXIxfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPkJVWTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdG9wLzEwL3NlbGxcIiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcjF9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+U0VMTDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgPEFjY29yZGlvbiBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICAgICAgICAgICAgYm9yZGVyIDogXCJub25lXCJcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5UT1AgMzA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdG9wLzMwL2J1eVwiIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyMX0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5CVVk8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL3RvcC8zMC9zZWxsXCIgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXIxfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlNFTEw8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgICB7LyogPGRpdiBzdHlsZSA9IHt7XG4gICAgICAgICAgICBwYWRkaW5nIDogJzJweCcsXG4gICAgICAgICAgfX0+PC9kaXY+ICovfVxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgIDxOYXZMaW5rIHRvPXt7IHBhdGhuYW1lOiBcIi9zZWN0b3JzXCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlNFQ1RPUlM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICA8TmF2TGluayB0bz17eyBwYXRobmFtZTogXCIvc3A1MDBcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+UyBBTkQgUCA1MDA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICA8TmF2TGluayB0bz17eyBwYXRobmFtZTogXCIvcmV2ZW51ZVwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj4gVE9QIFJFVkVOVUU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2lkZUJhcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBHcmlkLFxuICBGb3JtQ29udHJvbCxcbiAgSW5wdXRMYWJlbCxcbiAgU2VsZWN0LFxuICBNZW51SXRlbSxcbiAgUGFwZXIsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHVuZGVyc2NvcmUgZnJvbSBcInVuZGVyc2NvcmVcIjtcbmltcG9ydCB7XG4gIEdyaWRUb29sYmFyQ29udGFpbmVyLFxuICBHcmlkVG9vbGJhckV4cG9ydCxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIjtcblxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuXG5cbmNsYXNzIFNpbXVsYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRDb21wYW55OiBcIlwiLFxuICAgICAgY29tcGFueU5hbWVzOiBbXSxcbiAgICAgIGRheXM6IDEsXG4gICAgICBpbnZlc3RtZW50OiAxLFxuICAgICAgc3RhcnRkYXRlOiBcIjIwMTctMDMtMTBcIixcbiAgICAgIHJlc3BvbnNlOiBbXSxcbiAgICAgIGNvbHM6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBzZWxkYXlzOiBcIlwiLFxuICAgICAgc2ltdWxhdGlvbnRvcDogW10sXG4gICAgICBjb21wYW55c2VsZWN0ZWRhZnRlcnNpbXVsYXRpb24gOiBcIlwiLFxuICAgICAgY29tcGFueWRldGFpbHNhZnRlcnNpbXVsYXRpb24gOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgU1A1MDAgPVxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2stYW5hbHlzaXMtdG9vbC0xMDExL21hc3Rlci9EYXRhL1NQNTAwQ29tcGFuaWVzLmpzb25cIjtcbiAgICBheGlvc1xuICAgICAgLmdldChTUDUwMClcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgbGV0IFNQNTAwQ29tcGFuaWVzID0gT2JqZWN0LmtleXModW5kZXJzY29yZS5pbnZlcnQocy5kYXRhKSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogU1A1MDBDb21wYW5pZXMgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJTaW11bGF0aW9uXCIpO1xuICB9O1xuXG4gIG9uQ2xpY2tTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55ID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9XG4gICAgICBcImNvbXBhbnk9XCIgK1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnkgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJpbnZlc3RtZW50PVwiICtcbiAgICAgIHRoaXMuc3RhdGUuaW52ZXN0bWVudCArXG4gICAgICBcIiZcIiArXG4gICAgICBcImRheXM9XCIgK1xuICAgICAgdGhpcy5zdGF0ZS5kYXlzICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiZGF0ZT1cIiArXG4gICAgICB0aGlzLnN0YXRlLnN0YXJ0ZGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICBheGlvc1xuICAgICAgLmdldChcIi9hcGkvc2ltdWxhdGlvbj9cIiArIHBhcmFtcylcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgbGV0IHJlc3AgPSBzLmRhdGE7XG4gICAgICAgICAgaWYgKHJlc3AubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIGxldCBjb2xzID0gW107XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyZXNwWzBdKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICBjb2xzLnB1c2goeyBmaWVsZDoga2V5LCBoZWFkZXJOYW1lOiBrZXksIHdpZHRoOiAxNTAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCByb3dzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHJlc3BbaV0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3BbaV1bXCJpZFwiXSA9IGk7XG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKHJlc3BbaV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICB7IHJlc3BvbnNlOiByb3dzLCBjb2xzOiBjb2xzLCBsb2FkaW5nOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIG9uU2VsZWN0RGF5cyA9IChlKSA9PiB7XG4gICAgY29uc3QgZGF5cyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxkYXlzOiBkYXlzIH0sICgpID0+IHt9KTtcbiAgICBheGlvc1xuICAgICAgLmdldChcIi9hcGkvc2ltdWxhdGlvbnRvcFwiICsgXCI/XCIgKyBcImRheXM9XCIgKyBkYXlzKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocy5kYXRhKTtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2ltdWxhdGlvbnRvcDogcy5kYXRhIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH0pO1xuICB9O1xuXG5cblxuICBnZXREYXRhRnJvbVVSTCA9ICh1cmwpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgfSwgMjAwMCk7XG5cbiAgXG5cbiAgZXhwb3J0VG9DU1YgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHcmlkVG9vbGJhckNvbnRhaW5lcj5cbiAgICAgICAgPEdyaWRUb29sYmFyRXhwb3J0IC8+XG4gICAgICA8L0dyaWRUb29sYmFyQ29udGFpbmVyPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgbWluV2lkdGg6IFwiMTUwcHhcIiB9fSB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgICAgICAgIDxJbnB1dExhYmVsIHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PmRheXM8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHN0eWxlPXt7IFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1Q0RCOTVcIlxuICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgbGFiZWxJZD1cImRheXNcIlxuICAgICAgICAgICAgICBpZD1cImRheXNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdERheXN9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGRheXN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtbMzAsIDYwLCA5MCwgMTgwLCAzNjAsIDcyMF0ubWFwKFxuICAgICAgICAgICAgICAgIChwZXJpb2QpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8TWVudUl0ZW0gdmFsdWU9e3BlcmlvZH0+e3BlcmlvZH08L01lbnVJdGVtPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e1xuICAgICAgICAgICAgcGFkZGluZyA6ICcyMHB4JyxcbiAgICAgICAgICB9fT48L2Rpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaW11bGF0aW9udG9wLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cIlNpbXVhbHRpb24gUmVzdWx0c1wiIG1pbldpZHRoPSBcIjY1MFwiIGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkIHN0eWxlID0ge3sgY29sb3IgOiBcIiMwNTM4NkJcIiwgYmFja2dyb3VuZENvbG9yOiBcIiM1Q0RCOTVcIix9fT5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCB2YXJpYW50ID0gXCJoNVwiPiBTZWN1cml0eSBJZDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiB2YXJpYW50ID0gXCJoNVwiPkNvbXBhbnk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgdmFyaWFudCA9IFwiaDVcIj5BY3R1YWwgQXZlcmFnZSBSZXR1cm5zPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHZhcmlhbnQgPSBcImg1XCI+TWluaW11bSBQcmVkaWN0aW9uIFJhbmdlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHZhcmlhbnQgPSBcImg1XCI+TWF4aW11bSBQcmVkaWN0aW9uIFJhbmdlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaW11bGF0aW9udG9wLm1hcCgocm93KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5Db21wYW55fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuc2VjdXJpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jb21wYW55fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuYWN0dWFsX2F2ZXJhZ2VfcmV0dXJuX3BlcmNlbnR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5taW5pbXVtX3ByZWRpY3Rpb25fcmFuZ2V9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5tYXhpbXVtX3ByZWRpY3Rpb25fcmFuZ2V9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJSZXN1bHRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0ge3Jvd1tcInNlY3VyaXR5X2lkXCJdICsgXCJfXCIgKyB0aGlzLnN0YXRlLnNlbGRheXMgKyBcIi5jc3ZcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWUgPSBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBvcnRGaWxlID0geygpID0+ICBQcm9taXNlLnJlc29sdmUodGhpcy4gZ2V0RGF0YUZyb21VUkwoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVmVudUdvcGFsSmlsbGEvU3RvY2tBbmFseXNpc1Rvb2wvbWFpbi9EYXRhL1NQNTAwX3NpbXVsYXRpb25fcmVzdWx0cy9cIiArIHJvd1tcInNlY3VyaXR5X2lkXCJdICsgXCJfXCIgKyB0aGlzLnN0YXRlLnNlbGRheXMgKyBcImRheXMuY3N2XCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydEZpbGUgPSB7KCkgPT4gIFByb21pc2UucmVzb2x2ZSh0aGlzLiBnZXREYXRhRnJvbVVSTChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWlrcjc4OS9zdG9jay1pbmRleC1yaXNrL21hc3Rlci9EYXRhL1NpbXVsYXRpb25SZXN1bHQvXCIgKyByb3dbXCJzZWN1cml0eV9pZFwiXSArIFwiX1wiICsgdGhpcy5zdGF0ZS5zZWxkYXlzICsgXCIuY3N2XCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICApfSl9XG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW11bGF0aW9uO1xuIiwiaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHksIHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBjbGFzc25hbWVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIjtcblxuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHBhcGVyIDoge1xuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBUb3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBudW06IDEwLFxuICAgICAgdHlwZTogXCJidXlcIixcbiAgICAgIHRvcENvbXBhbmllczogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiVG9wXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IHsgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBudW0sIHR5cGUgfSA9IG1hdGNoLnBhcmFtcztcbiAgICB0aGlzLnNldFN0YXRlKHsgbnVtOiBudW0sIHR5cGU6IHR5cGUsIGxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge30pO1xuXG4gICAgY29uc3QgcGFyYW1zID0gXG4gICAgXCJudW09XCIgKyBudW0gK1xuICAgIFwiJlwiICsgXG4gICAgXCJ0eXBlPVwiICsgdHlwZTtcblxuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgICBheGlvc1xuICAgICAgLmdldChcIi9hcGkvdG9wYnV5c2VsbD9cIiArIHBhcmFtcylcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgbGV0IGNvbXBhbnlTdG9ja0RldGFpbHMgPSBzLmRhdGE7XG4gICAgICAgICAgY29tcGFueVN0b2NrRGV0YWlscyA9IGNvbXBhbnlTdG9ja0RldGFpbHMuc2xpY2UoMCwgbnVtKTtcbiAgICAgICAgICBsZXQgdG9wQ29tcGFuaWVzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXBhbnlTdG9ja0RldGFpbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY29tcGFueVN0b2NrRGV0YWlsc1tpbmRleF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgICAgIHRvcENvbXBhbmllcy5wdXNoKGVsZW1lbnRbXCJjb21wYW55XCJdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHsgdG9wQ29tcGFuaWVzOiB0b3BDb21wYW5pZXMsIGxvYWRpbmc6IGZhbHNlIH0sXG4gICAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcENvbXBhbmllczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcENvbXBhbmllczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgXG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlciB0eXBlPVwiVGhyZWVEb3RzXCIgY29sb3I9XCIjMDUzODZCXCIgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfS8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgVE9QIHt0aGlzLnN0YXRlLm51bX0gQ09NUEFOSUVTIEZPUntcIiBcIn1cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50eXBlID09PSBcImJ1eVwiID8gXCJJTlZFU1RJTkdcIiA6IFwiVFJBRElOR1wifVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUudG9wQ29tcGFuaWVzLm1hcCgoY29tcGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgIGtleT17dXVpZHY0KCl9XG4gICAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvY29tcGFueWRldGFpbHMvXCIgKyBjb21wYW55LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIG1hcmdpbjogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0geyBjbGFzc2VzLnBhcGVyIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPntjb21wYW55fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIFxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IHdpdGhUaGVtZTogdHJ1ZSB9KShUb3ApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5cbi8vIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgPFJlYWN0LlN0cmljdE1vZGU+XG4vLyAgICAgPEFwcCAvPlxuLy8gICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbi8vICk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiA8QXBwIC8+O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zdHlsZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS91dGlsc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicG9wcGVyLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBleGNoYXJ0c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5kZXJzY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==