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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          variant: "subtitle1",
          style: {
            color: "#05386B"
          },
          children: "Parameters for Comparison : "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            padding: '3px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
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
              lineNumber: 167,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
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
              lineNumber: 180,
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
                  lineNumber: 195,
                  columnNumber: 21
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
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
            lineNumber: 204,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
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
            lineNumber: 217,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
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
        lineNumber: 233,
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
                  lineNumber: 260,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
              variant: "h6",
              children: ["In the last ", period[element["totalNumberOfDays"]], ", for", " ", element["percentOfDays"], " percent of trading days close price growth rate was more than ", element["rate"], " %"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_7__.default, {
              company: element["company"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
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
                lineNumber: 274,
                columnNumber: 25
              }, this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 19
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
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
          lineNumber: 149,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "subtitle1",
          style: {
            color: "#05386B"
          },
          children: "Select number of days for simulation : "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            padding: '3px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
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
            lineNumber: 165,
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
                lineNumber: 179,
                columnNumber: 26
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            padding: '20px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this), this.state.simulationtop.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
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
                  lineNumber: 194,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                  align: "right",
                  variant: "h5",
                  children: "Company"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                  align: "right",
                  variant: "h5",
                  children: "Actual Average Returns"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                  align: "right",
                  variant: "h5",
                  children: "Minimum Prediction Range"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                  align: "right",
                  variant: "h5",
                  children: "Maximum Prediction Range"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
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
                    lineNumber: 206,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    align: "right",
                    children: row.company
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    align: "right",
                    children: row.actual_average_return_percent
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    align: "right",
                    children: row.minimum_prediction_range
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__.default, {
                    align: "right",
                    children: row.maximum_prediction_range
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 23
                  }, this)]
                }, row.Company, true, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 21
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9BcHAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9BYm91dC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYW55RGV0YWlscy5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYXJpc29uLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL0Rhc2hib2FyZC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Ib21lLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL05hdmlnYXRpb25CYXIuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvUGFnZU5vdEZvdW5kLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1JldmVudWUuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvU1A1MDAuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvU2VjdG9ycy5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9TaWRlQmFyLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1NpbXVsYXRpb24uanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvVG9wLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS91dGlsc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInBvcHBlci5qc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LWFwZXhjaGFydHNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LWxvYWRlci1zcGlubmVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwicmVuZGVyIiwiQWJvdXQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwidGhlbWUiLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsInNwYWNpbmciLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwibWFyZ2luVG9wIiwiQ29tcGFueURldGFpbHMiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwibWF0Y2giLCJjb21wYW55IiwicGFyYW1zIiwic2V0U3RhdGUiLCJzZWxlY3RlZENvbXBhbnkiLCJnZXRDb21wYW55RGV0YWlscyIsInN0YXRlIiwiYXhpb3MiLCJ0aGVuIiwicyIsInN0YXR1cyIsImNvbXBhbnlEZXRhaWxzIiwiZGF0YSIsInQiLCJPYmplY3QiLCJhc3NpZ24iLCJjYXRjaCIsImUiLCJsb2FkaW5nIiwic3RvY2tkZXRhaWxzIiwiY29tcGFueUN1cnJlbnREYXlTdG9ja0RldGFpbHMiLCJzdG9ja2tleXMiLCJkaXNwbGF5IiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJrZXlzIiwibWFwIiwia2V5IiwicmVzIiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJpbXBLZXlzIiwiaW5jbHVkZXMiLCJ3aXRoU3R5bGVzIiwiQ29tcGFyaXNvbiIsImNvbXBhbnlOYW1lcyIsInNlbGVjdGVkQ29tcGFuaWVzIiwiZXJyb3IiLCJpbmRleCIsInNlbGVjdGVkVGltZVBlcmlvZCIsInJhdGUiLCJ0aW1lUGVyaW9kIiwibnVtIiwicGVyaW9kIiwidW5kZXJzY29yZSIsImZpcnN0Q29tcGFueSIsInJlYXNvbiIsImRldGFpbCIsImNvbXBhbmllcyIsIm9wdGlvbiIsImNvbXBhbnluYW1lIiwid2lkdGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsInN0ZXAiLCJvbkNsaWNrU3VibWl0IiwiZWxlbWVudCIsInBhdGhuYW1lIiwiaSIsIkNoYXJ0IiwiZHluYW1pYyIsInNzciIsImNoYXJ0IiwiZGl2Y2hhcnQiLCJhbGlnbkl0ZW1zIiwiYnV0dG9uZ3JvdXAiLCJEYXNoYm9hcmQiLCJkZXRhaWxzIiwiZGF5cyIsImNsb3NlUHJpY2VEYXRhIiwibmFtZSIsIm9wZW5QcmljZURhdGEiLCJoaWdoUHJpY2VEYXRhIiwibG93UHJpY2VEYXRhIiwidG9EYXRlIiwiZnJvbURhdGUiLCJzbGljZSIsInB1c2giLCJ4IiwieSIsIm9wdGlvbnMiLCJ4YXhpcyIsInNlcmllcyIsImN1cnJlbnRUYXJnZXQiLCJzZWxlY3RlZFBlcmlvZCIsImNyZWF0ZUdyYXBoIiwiYmFja2dyb3VuZCIsInR5cGUiLCJoZWlnaHQiLCJ6b29tIiwiZW5hYmxlZCIsImF1dG9TY2FsZVlheGlzIiwidG9vbGJhciIsImF1dG9TZWxlY3RlZCIsInN0cm9rZSIsInNob3ciLCJjdXJ2ZSIsImxpbmVDYXAiLCJjb2xvcnMiLCJ1bmRlZmluZWQiLCJkYXNoQXJyYXkiLCJkYXRhTGFiZWxzIiwibWFya2VycyIsInNpemUiLCJ0aXRsZSIsInRleHQiLCJhbGlnbiIsInN0eWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImZpbGwiLCJvcGFjaXR5IiwiZ3JhZGllbnQiLCJzaGFkZUludGVuc2l0eSIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIiwieWF4aXMiLCJsYWJlbHMiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJ0b0ZpeGVkIiwiZHQiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0b29sdGlwIiwic2hhcmVkIiwiY2xhc3NlcyIsIndpdGhUaGVtZSIsImRyYXdlcldpZHRoIiwicm9vdCIsImFwcEJhciIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nVG9wIiwiZHJhd2VyIiwiZmxleFNocmluayIsImRyYXdlclBhcGVyIiwibWl4aW5zIiwiY29udGVudCIsImZsZXhHcm93IiwiZmxleFdyYXAiLCJvdmVyZmxvd1giLCJIb21lIiwicGFwZXIiLCJTZWN0b3JzIiwiU1A1MDAiLCJTaW11bGF0aW9uIiwiUGFnZU5vdEZvdW5kIiwid2l0aFJvdXRlciIsInRleHRBbGlnbiIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJsaW5rIiwidGV4dERlY29yYXRpb24iLCJncmlkIiwidHlwb2dyYXBoeSIsIk5hdmlnYXRpb25CYXIiLCJoaXN0b3J5IiwiUmV2ZW51ZSIsImNvbXBhbnlTdG9ja0RldGFpbHMiLCJzb3J0IiwiYSIsImIiLCJ0b3BDb21wYW5pZXMiLCJ1dWlkdjQiLCJzcDUwMCIsImxvY2F0aW9uIiwic2VjdG9ycyIsInNlbGVjdGVkU2VjdG9yIiwic2VsZWN0ZWRTZWN0b3JDb21wYW5pZXMiLCJzZWN0b3IiLCJoZWFkaW5nIiwicHhUb1JlbSIsImZvbnRXZWlnaHRSZWd1bGFyIiwiYm9yZGVyIiwicGFwZXIxIiwiU2lkZUJhciIsIlNQNTAwQ29tcGFuaWVzIiwiaW52ZXN0bWVudCIsInN0YXJ0ZGF0ZSIsInJlc3AiLCJjb2xzIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwicm93cyIsInJlc3BvbnNlIiwic2VsZGF5cyIsInNpbXVsYXRpb250b3AiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJmZXRjaCIsImNvbXBhbnlzZWxlY3RlZGFmdGVyc2ltdWxhdGlvbiIsImNvbXBhbnlkZXRhaWxzYWZ0ZXJzaW11bGF0aW9uIiwidG9kYXkiLCJvblNlbGVjdERheXMiLCJQYXBlciIsInJvdyIsInNlY3VyaXR5X2lkIiwiYWN0dWFsX2F2ZXJhZ2VfcmV0dXJuX3BlcmNlbnQiLCJtaW5pbXVtX3ByZWRpY3Rpb25fcmFuZ2UiLCJtYXhpbXVtX3ByZWRpY3Rpb25fcmFuZ2UiLCJDb21wYW55IiwiVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxHQUFOLFNBQWtCQyx3REFBbEIsQ0FBa0M7QUFDaENDLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLDJEQUFEO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQVArQjs7QUFVbEMsK0RBQWVGLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixhQUVPMkssd0NBQU0sRUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBaUJELFNBbEJBLENBaEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQThDRDs7QUFuRytCOztBQXNHbEMsK0RBQWV6SSw2REFBVSxDQUFDOUMsTUFBRCxFQUFTO0FBQUVtSixXQUFTLEVBQUU7QUFBYixDQUFULENBQVYsQ0FBd0M2RSxHQUF4QyxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVMvRCxJQUFULEdBQWdCO0FBQzdCLHNCQUFPLDhEQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDYkQsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Db21wb25lbnRzL0hvbWVcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdXRlcj5cbiAgICAgICAgPEhvbWUgLz5cbiAgICAgIDwvUm91dGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQWJvdXRcIilcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5BYm91dDwvUmVhY3QuRnJhZ21lbnQ+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIiwiaW1wb3J0IHtcbiAgQ2hpcCxcbiAgRGl2aWRlcixcbiAgR3JpZCxcbiAgUGFwZXIsXG4gIFR5cG9ncmFwaHksXG4gIHdpdGhTdHlsZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9EYXNoYm9hcmRcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgZm9ybUNvbnRyb2w6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWluV2lkdGg6IDE1MCxcbiAgfSxcbiAgc2VsZWN0RW1wdHk6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG59KTtcblxuY2xhc3MgQ29tcGFueURldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29tcGFueURldGFpbHM6IFtdLFxuICAgICAgY29tcGFueUN1cnJlbnREYXlTdG9ja0RldGFpbHM6IFtdLFxuICAgICAgc2VsZWN0ZWRDb21wYW55OiBcIlwiLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHN0b2Nra2V5czogW1xuICAgICAgICBcIkRhdGVcIixcbiAgICAgICAgXCJPcGVuIFByaWNlXCIsXG4gICAgICAgIFwiSGlnaCBQcmljZVwiLFxuICAgICAgICBcIkxvdyBQcmljZVwiLFxuICAgICAgICBcIkNsb3NlIFByaWNlXCIsXG4gICAgICAgIFwiV0FQXCIsXG4gICAgICAgIFwiTm8ub2YgU2hhcmVzXCIsXG4gICAgICAgIFwiTm8uIG9mIFRyYWRlc1wiLFxuICAgICAgICBcIlRvdGFsIFR1cm5vdmVyIChScy4pXCIsXG4gICAgICAgIFwiJSBEZWxpLiBRdHkgdG8gVHJhZGVkIFF0eVwiLFxuICAgICAgICBcIlNwcmVhZCBIaWdoLUxvd1wiLFxuICAgICAgICBcIlNwcmVhZCBDbG9zZS1PcGVuXCIsXG4gICAgICBdLFxuICAgICAgc3RvY2tkZXRhaWxzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDb21wYW55RGV0YWlsc1wiKTtcbiAgICBjb25zdCB7IG1hdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNvbXBhbnkgPSBtYXRjaC5wYXJhbXMuY29tcGFueTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDb21wYW55OiBjb21wYW55IH0sICgpID0+IHtcbiAgICAgIHRoaXMuZ2V0Q29tcGFueURldGFpbHModGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldENvbXBhbnlEZXRhaWxzID0gYXN5bmMgKGNvbXBhbnkpID0+IHtcbiAgICBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2NvbXBhbnlkZXRhaWxzP2NvbXBhbnk9XCIgKyBjb21wYW55KS50aGVuKChzKSA9PiB7XG4gICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBsZXQgY29tcGFueURldGFpbHMgPSBzLmRhdGE7XG4gICAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXCIvYXBpL2dldHN1Z2dlc3Rpb25zP2NvbXBhbnk9XCIgKyBjb21wYW55KVxuICAgICAgICAudGhlbigodCkgPT4ge1xuICAgICAgICAgIGlmICh0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb21wYW55RGV0YWlscyA9IE9iamVjdC5hc3NpZ24oY29tcGFueURldGFpbHMsIHQuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55RGV0YWlsczogY29tcGFueURldGFpbHMsIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55RGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhd2FpdCBheGlvc1xuICAgICAgLmdldChcIi9hcGkvcHJldmlvdXNkYXlzdG9ja2RldGFpbHM/Y29tcGFueT1cIiArIGNvbXBhbnkpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2RldGFpbHM6IHMuZGF0YSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2RldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2RldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55ICE9PSBcIlwiICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgICAgY29sb3IgOiBcIiM1Q0RCOTVcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgPnt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgey8qIDxEaXZpZGVyIC8+ICovfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgPExvYWRlciB0eXBlPVwiVGhyZWVEb3RzXCIgY29sb3I9XCIjMDUzODZCXCIgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfS8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuY29tcGFueURldGFpbHMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbXBhbnlEZXRhaWxzW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuPjwvc3Bhbj47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcInN1Z2dlc3RcIiAmJiAodGhpcy5zdGF0ZS5jb21wYW55RGV0YWlsc1trZXldID09PSBcImJ1eVwiIHx8IHRoaXMuc3RhdGUuY29tcGFueURldGFpbHNba2V5XSA9PT0gXCJzZWxsXCIpICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gXCJTVUdHRVNUSU9OIFwiICsgXCIgLS0gXCIgKyB0aGlzLnN0YXRlLmNvbXBhbnlEZXRhaWxzW2tleV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cmVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogXCIjNUNEQjk1XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7IFxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBrZXkgKyBcIiA6IFwiICsgdGhpcy5zdGF0ZS5jb21wYW55RGV0YWlsc1trZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzVDREI5NVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiAgXCIjMDUzODZCXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7IFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7LyogPERpdmlkZXIgLz5cbiAgICAgICAgPERpdmlkZXIgLz4gKi99XG4gICAgICAgIHt0aGlzLnN0YXRlLnN0b2NrZGV0YWlscy5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLnN0b2Nra2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IGltcEtleXMgPSBbXCJPcGVuIFByaWNlXCIsIFwiSGlnaCBQcmljZVwiLCBcIkxvdyBQcmljZVwiLCBcIkNsb3NlIFByaWNlXCJdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaW1wS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgIGxldCByZXMgPSBrZXkudG9VcHBlckNhc2UoKSArIFwiIDogXCIgKyB0aGlzLnN0YXRlLnN0b2NrZGV0YWlsc1trZXldO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtyZXN9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgICAgY29sb3IgOiBcIiM1Q0RCOTVcIn19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTsgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGtleSArIFwiIDogXCIgKyB0aGlzLnN0YXRlLnN0b2NrZGV0YWlsc1trZXldO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9e3Jlc31cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICAgICAgICAgICAgICBjb2xvciA6ICBcIiMwNTM4NkJcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSAhPT0gXCJcIiAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICA8RGFzaGJvYXJkIGNvbXBhbnk9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55fSAvPlxuICAgICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDb21wYW55RGV0YWlscyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdW5kZXJzY29yZSBmcm9tIFwidW5kZXJzY29yZVwiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIjtcblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEdyaWQsXG4gIElucHV0TGFiZWwsXG4gIEJ1dHRvbixcbiAgTWVudUl0ZW0sXG4gIFBhcGVyLFxuICBTZWxlY3QsXG4gIFR5cG9ncmFwaHksXG4gIFRleHRGaWVsZCxcbiAgQ2hpcCxcbiAgRGl2aWRlcixcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuXG5jbGFzcyBDb21wYXJpc29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgY29tcGFueU5hbWVzOiBbXSxcbiAgICAgIHNlbGVjdGVkQ29tcGFuaWVzOiBbXSxcbiAgICAgIHNlbGVjdGVkVGltZVBlcmlvZDogXCIxODBcIixcbiAgICAgIHJhdGU6IFwiMVwiLFxuICAgICAgc3RvY2trZXlzOiBbXG4gICAgICAgIFwiRGF0ZVwiLFxuICAgICAgICBcIk9wZW4gUHJpY2VcIixcbiAgICAgICAgXCJIaWdoIFByaWNlXCIsXG4gICAgICAgIFwiTG93IFByaWNlXCIsXG4gICAgICAgIFwiQ2xvc2UgUHJpY2VcIixcbiAgICAgICAgXCJXQVBcIixcbiAgICAgICAgXCJOby5vZiBTaGFyZXNcIixcbiAgICAgICAgXCJOby4gb2YgVHJhZGVzXCIsXG4gICAgICAgIFwiVG90YWwgVHVybm92ZXIgKFJzLilcIixcbiAgICAgICAgXCIlIERlbGkuIFF0eSB0byBUcmFkZWQgUXR5XCIsXG4gICAgICAgIFwiU3ByZWFkIEhpZ2gtTG93XCIsXG4gICAgICAgIFwiU3ByZWFkIENsb3NlLU9wZW5cIixcbiAgICAgIF0sXG4gICAgICB0aW1lUGVyaW9kOiB7XG4gICAgICAgIFwiMSBkYXlcIjogXCIxXCIsXG4gICAgICAgIFwiNyBkYXlzXCI6IFwiN1wiLFxuICAgICAgICBcIjEgbW9udGhcIjogXCIzMFwiLFxuICAgICAgICBcIjMgbW9udGhzXCI6IFwiOTBcIixcbiAgICAgICAgXCI2IG1vbnRoc1wiOiBcIjE4MFwiLFxuICAgICAgICBcIjEgeWVhclwiOiBcIjM2MFwiLFxuICAgICAgICBcIjIgeWVhcnNcIjogXCI3MjBcIixcbiAgICAgICAgXCI1IHllYXJzXCI6IFwiMTgwMFwiLFxuICAgICAgICBcIjEwIHllYXJzXCI6IFwiMzYwMFwiLFxuICAgICAgfSxcbiAgICAgIHN0b2NrZGV0YWlsczogW10sXG4gICAgICBudW06IDEwLFxuICAgICAgZXJyb3I6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tcGFyaXNvblwiKTtcbiAgICBheGlvc1xuICAgICAgLmdldChcIi9hcGkvY29tcGFueU5hbWVzXCIpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55TmFtZXM6IHMuZGF0YSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogcy5kYXRhIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIG9uQ2xpY2tTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW5pZXMubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBcInNlbGVjdCBhdGxlYXN0IHR3byBjb21wYW5pZXNcIiB9LCAoKSA9PiB7fSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogXCJcIiwgbG9hZGluZzogdHJ1ZSB9LCAoKSA9PiB7fSk7XG4gICAgfVxuICAgIGxldCBzdG9ja2RldGFpbHMgPSB7fTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbmllcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNvbXBhbnkgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFuaWVzW2luZGV4XTtcbiAgICAgIHN0b2NrZGV0YWlsc1tjb21wYW55XSA9IHt9O1xuICAgIH1cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbmllcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNvbXBhbnkgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFuaWVzW2luZGV4XTtcbiAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoXCIvYXBpL3ByZXZpb3VzZGF5c3RvY2tkZXRhaWxzP2NvbXBhbnk9XCIgKyBjb21wYW55KVxuICAgICAgICAudGhlbigocykgPT4ge1xuICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBzdG9ja2RldGFpbHNbY29tcGFueV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICBzdG9ja2RldGFpbHNbY29tcGFueV0sXG4gICAgICAgICAgICAgIHMuZGF0YVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcbiAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoXG4gICAgICAgICAgXCIvYXBpL2NvbXBhcmlzb24/ZGF5cz1cIiArXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVBlcmlvZCArXG4gICAgICAgICAgICBcIiZyYXRlPVwiICtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucmF0ZSArXG4gICAgICAgICAgICBcIiZjb21wYW55PVwiICtcbiAgICAgICAgICAgIGNvbXBhbnlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigocykgPT4ge1xuICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBzdG9ja2RldGFpbHNbY29tcGFueV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICBzdG9ja2RldGFpbHNbY29tcGFueV0sXG4gICAgICAgICAgICAgIHMuZGF0YVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogc3RvY2tkZXRhaWxzLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBlcmlvZCA9IHVuZGVyc2NvcmUuaW52ZXJ0KHRoaXMuc3RhdGUudGltZVBlcmlvZCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudCA9IFwic3VidGl0bGUxXCIgc3R5bGUgPSB7eyBjb2xvciA6IFwiIzA1Mzg2QlwifX0+UGFyYW1ldGVycyBmb3IgQ29tcGFyaXNvbiA6IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8ZGl2IHN0eWxlID0ge3tcbiAgICAgICAgICAgIHBhZGRpbmcgOiAnM3B4J1xuICAgICAgICAgIH19PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdENvbXBhbnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgY29tcGFueSwgcmVhc29uLCBkZXRhaWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVhc29uID09PSBcInJlbW92ZS1vcHRpb25cIikge1xuICAgICAgICAgICAgICAgICAgbGV0IGNvbXBhbmllcyA9IHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzO1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbXBhbmllc1tkZXRhaWwub3B0aW9uXTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2RldGFpbHM6IGNvbXBhbmllcyB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbmllczogY29tcGFueSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpZD1cInNlbGVjdCBtdWx0aXBsZSBjb21wYW5pZXNcIlxuICAgICAgICAgICAgICBmcmVlU29sb1xuICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmNvbXBhbnlOYW1lcy5tYXAoXG4gICAgICAgICAgICAgICAgKGNvbXBhbnluYW1lKSA9PiBjb21wYW55bmFtZVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3QgTXVsdGlwbGUgQ29tcGFuaWVzXCJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17dGhpcy5zdGF0ZS5lcnJvcn1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yICE9PSBcIlwifVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1pbldpZHRoOiBcIjE1MHB4XCIgfX0gdmFyaWFudD1cIm91dGxpbmVkXCI+XG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsPnRyYWRpbmcgcGVyaW9kPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgbGFiZWxJZD1cInRyYWRpbmcgcGVyaW9kXCJcbiAgICAgICAgICAgICAgICBpZD1cInRyYWRpbmdcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgeyBzZWxlY3RlZFRpbWVQZXJpb2Q6IGUudGFyZ2V0LnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lUGVyaW9kfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUudGltZVBlcmlvZCkubWFwKChwZXJpb2QpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17dGhpcy5zdGF0ZS50aW1lUGVyaW9kW3BlcmlvZF19PlxuICAgICAgICAgICAgICAgICAgICAgIHtwZXJpb2R9XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgbWluOiBcIi0xMDBcIiwgbWF4OiBcIjEwMFwiLCBzdGVwOiBcIjAuMDFcIiB9fVxuICAgICAgICAgICAgICBsYWJlbD1cIlJhdGUgb2YgZ3Jvd3RoXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhdGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrU3VibWl0fVxuICAgICAgICAgICAgICBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgICBjb2xvciA6IFwiIzVDREI5NVwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIHsvKiA8RGl2aWRlciAvPlxuICAgICAgICA8RGl2aWRlciAvPiAqL31cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJUaHJlZURvdHNcIiBjb2xvcj1cIiMwNTM4NkJcIiBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB0aGlzLnN0YXRlLnN0b2NrZGV0YWlscy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnN0b2NrZGV0YWlscykubWFwKChjb21wYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzW2NvbXBhbnldO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCJjb21wYW55ZGV0YWlscy9cIiArIGVsZW1lbnRbXCJjb21wYW55XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnRbXCJjb21wYW55XCJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgSW4gdGhlIGxhc3Qge3BlcmlvZFtlbGVtZW50W1widG90YWxOdW1iZXJPZkRheXNcIl1dfSwgZm9ye1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50W1wicGVyY2VudE9mRGF5c1wiXX0gcGVyY2VudCBvZiB0cmFkaW5nIGRheXMgY2xvc2VcbiAgICAgICAgICAgICAgICAgICAgICBwcmljZSBncm93dGggcmF0ZSB3YXMgbW9yZSB0aGFuIHtlbGVtZW50W1wicmF0ZVwiXX0gJVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmQgY29tcGFueT17ZWxlbWVudFtcImNvbXBhbnlcIl19IC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN0b2Nra2V5cy5tYXAoKGtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBrZXkgKyBcIiA6IFwiICsgZWxlbWVudFtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cmVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmlzb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtYXBleGNoYXJ0c1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5pbXBvcnQgeyBCdXR0b25Hcm91cCwgQnV0dG9uLCBEaXZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCI7XG5cblxuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGNoYXJ0OiB7XG4gICAgd2lkdGg6IFwiODAlXCIsXG4gIH0sXG4gIGRpdmNoYXJ0OiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgfSxcbiAgYnV0dG9uZ3JvdXA6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBtYXJnaW46IFwiMTBweFwiLFxuICB9LFxufSk7XG5cblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBkZXRhaWxzOiBbXSxcbiAgICAgIHNlbGVjdGVkUGVyaW9kOiBcIlwiLFxuICAgICAgY29tcGFueTogXCJcIixcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIHNlcmllczogW10sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgdHlwZTogXCJhcmVhXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICB0eXBlOiBcInhcIixcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBhdXRvU2NhbGVZYXhpczogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgIGF1dG9TZWxlY3RlZDogXCJ6b29tXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBjdXJ2ZTogXCJzbW9vdGhcIixcbiAgICAgICAgICBsaW5lQ2FwOiBcImJ1dHRcIixcbiAgICAgICAgICBjb2xvcnM6IHVuZGVmaW5lZCxcbiAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICBkYXNoQXJyYXk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgIHNpemU6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgdGV4dDogXCJTdG9jayBQcmljZSBNb3ZlbWVudFwiLFxuICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIlNhbnMtc2VyaWZcIixcbiAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICB0eXBlOiBcInNvbGlkXCIsXG4gICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICAgIGdyYWRpZW50OiB7XG4gICAgICAgICAgICBzaGFkZUludGVuc2l0eTogMSxcbiAgICAgICAgICAgIGludmVyc2VDb2xvcnM6IGZhbHNlLFxuICAgICAgICAgICAgb3BhY2l0eUZyb206IDEsXG4gICAgICAgICAgICBvcGFjaXR5VG86IDEsXG4gICAgICAgICAgICBzdG9wczogWzAsIDkwLCAxMDBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbC50b0ZpeGVkKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiUHJpY2UgaW4gUnNcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB4YXhpczoge1xuICAgICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkdCA9IG5ldyBEYXRlKHZhbCk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZHQuZ2V0RGF0ZSgpICtcbiAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgKGR0LmdldE1vbnRoKCkgKyAxKSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIGR0LmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogXCJUaW1lIFBlcmlvZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgIHNoYXJlZDogZmFsc2UsXG4gICAgICAgICAgeDoge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUodmFsKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkdC5nZXREYXRlKCkgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICAoZHQuZ2V0TW9udGgoKSArIDEpICtcbiAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgZHQuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJEYXNoYm9hcmRcIik7XG4gICAgaWYgKHRoaXMucHJvcHMuY29tcGFueSAhPT0gXCJzcDUwMFwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueTogdGhpcy5wcm9wcy5jb21wYW55IH0sICgpID0+IHtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAuZ2V0KFwiL2FwaS9zdG9ja2RldGFpbHM/Y29tcGFueT1cIiArIHRoaXMuc3RhdGUuY29tcGFueSlcbiAgICAgICAgICAudGhlbigocykgPT4ge1xuICAgICAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IHMuZGF0YSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7fSlcbiAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogdHJ1ZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnk6IHRoaXMucHJvcHMuY29tcGFueSB9LCAoKSA9PiB7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgLmdldChcIi9hcGkvc3A1MDBcIilcbiAgICAgICAgICAudGhlbigocykgPT4ge1xuICAgICAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IHMuZGF0YSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogdHJ1ZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY3JlYXRlR3JhcGggPSAoZGF5cykgPT4ge1xuICAgIGxldCBjbG9zZVByaWNlRGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiQ2xvc2UgUHJpY2VcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG4gICAgbGV0IG9wZW5QcmljZURhdGEgPSB7XG4gICAgICBuYW1lOiBcIk9wZW4gUHJpY2VcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG4gICAgbGV0IGhpZ2hQcmljZURhdGEgPSB7XG4gICAgICBuYW1lOiBcIkhpZ2ggUHJpY2VcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG4gICAgbGV0IGxvd1ByaWNlRGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiTG93IFByaWNlXCIsXG4gICAgICBkYXRhOiBbXSxcbiAgICB9O1xuXG4gICAgZGF5cyA9XG4gICAgICBkYXlzID09PSBcImFsbFwiXG4gICAgICAgID8gdGhpcy5zdGF0ZS5kZXRhaWxzLmxlbmd0aCAtIDFcbiAgICAgICAgOiBkYXlzID4gdGhpcy5zdGF0ZS5kZXRhaWxzLmxlbmd0aCAtIDFcbiAgICAgICAgPyB0aGlzLnN0YXRlLmRldGFpbHMubGVuZ3RoIC0gMVxuICAgICAgICA6IGRheXM7XG4gICAgY29uc3QgdG9EYXRlID0gdGhpcy5zdGF0ZS5kZXRhaWxzWzBdW1wiRGF0ZVwiXTtcbiAgICBjb25zdCBmcm9tRGF0ZSA9IHRoaXMuc3RhdGUuZGV0YWlsc1tkYXlzXVtcIkRhdGVcIl07XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RhdGUuZGV0YWlscy5zbGljZSgwLCBkYXlzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhW2ldO1xuICAgICAgY2xvc2VQcmljZURhdGEuZGF0YS5wdXNoKHtcbiAgICAgICAgeDogZWxlbWVudFtcIkRhdGVcIl0sXG4gICAgICAgIHk6IGVsZW1lbnRbXCJDbG9zZSBQcmljZVwiXSB8fCBlbGVtZW50W1wiQ2xvc2VcIl0sXG4gICAgICB9KTtcblxuICAgICAgb3BlblByaWNlRGF0YS5kYXRhLnB1c2goe1xuICAgICAgICB4OiBlbGVtZW50W1wiRGF0ZVwiXSxcbiAgICAgICAgeTogZWxlbWVudFtcIk9wZW4gUHJpY2VcIl0gfHwgZWxlbWVudFtcIk9wZW5cIl0sXG4gICAgICB9KTtcblxuICAgICAgaGlnaFByaWNlRGF0YS5kYXRhLnB1c2goe1xuICAgICAgICB4OiBlbGVtZW50W1wiRGF0ZVwiXSxcbiAgICAgICAgeTogZWxlbWVudFtcIkhpZ2ggUHJpY2VcIl0gfHwgZWxlbWVudFtcIkhpZ2hcIl0sXG4gICAgICB9KTtcblxuICAgICAgbG93UHJpY2VEYXRhLmRhdGEucHVzaCh7XG4gICAgICAgIHg6IGVsZW1lbnRbXCJEYXRlXCJdLFxuICAgICAgICB5OiBlbGVtZW50W1wiTG93IFByaWNlXCJdIHx8IGVsZW1lbnRbXCJMb3dcIl0sXG4gICAgICB9KTtcblxuXG4gICAgfVxuICAgIGxldCBvcHRpb25zID0gdGhpcy5zdGF0ZS5vcHRpb25zO1xuICAgIG9wdGlvbnMueGF4aXNbXCJtaW5cIl0gPSBmcm9tRGF0ZTtcbiAgICBvcHRpb25zLnhheGlzW1wibWF4XCJdID0gdG9EYXRlO1xuICAgIGNvbnN0IHNlcmllcyA9IFtdO1xuICAgIHNlcmllcy5wdXNoKGNsb3NlUHJpY2VEYXRhKTtcbiAgICBzZXJpZXMucHVzaChvcGVuUHJpY2VEYXRhKTtcbiAgICBzZXJpZXMucHVzaChoaWdoUHJpY2VEYXRhKTtcbiAgICBzZXJpZXMucHVzaChsb3dQcmljZURhdGEpO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNlcmllczogc2VyaWVzLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgfSxcbiAgICAgICgpID0+IHt9XG4gICAgKTtcbiAgfTtcblxuICBzZWxlY3RlZFBlcmlvZCA9IChlKSA9PiB7XG4gICAgY29uc3QgZGF5cyA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFBlcmlvZCA9PT0gZGF5cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRQZXJpb2Q6IGRheXMgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVHcmFwaChkYXlzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlciB0eXBlPVwiVGhyZWVEb3RzXCIgY29sb3I9XCIjMDUzODZCXCIgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfS8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciAhPT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbmdyb3VwfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjb250YWluZWQgcHJpbWFyeSBidXR0b24gZ3JvdXBcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjdcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfSBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICAgIDdEXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjMwXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0gc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgICAxTVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCI5MFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9IHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgICAgM01cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiMTgwXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0gc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgICA2TVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCIzNjBcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfSBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICAgIDFZXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjE4MDBcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfSBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICAgIDVZXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cImFsbFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9IHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgICAgQWxsXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuZGl2Y2hhcnR9PlxuICAgICAgICAgICAgICA8Q2hhcnQgXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUub3B0aW9uc30gXG4gICAgICAgICAgICAgIHNlcmllcz17dGhpcy5zdGF0ZS5zZXJpZXN9XG4gICAgICAgICAgICAgIGtleSA9IFwiY2hhcnRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5jaGFydH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHsgd2l0aFRoZW1lOiB0cnVlIH0pKERhc2hib2FyZCk7XG4iLCJpbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCB3aXRoUm91dGVyLCBIYXNoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL0Fib3V0XCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuXG5pbXBvcnQgQ29tcGFueURldGFpbHMgZnJvbSBcIi4vQ29tcGFueURldGFpbHNcIjtcbmltcG9ydCBDb21wYXJpc29uIGZyb20gXCIuL0NvbXBhcmlzb25cIjtcbi8vIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4vTmF2aWdhdGlvbkJhclwiO1xuaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tIFwiLi9QYWdlTm90Rm91bmRcIjtcbi8vIGltcG9ydCBQZXJmb3JtYW5jZSBmcm9tIFwiLi9QZXJmb3JtYW5jZVwiO1xuaW1wb3J0IFJldmVudWUgZnJvbSBcIi4vUmV2ZW51ZVwiO1xuaW1wb3J0IFNlY3RvcnMgZnJvbSBcIi4vU2VjdG9yc1wiO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vU2lkZUJhclwiO1xuaW1wb3J0IFNQNTAwIGZyb20gXCIuL1NQNTAwXCI7XG5pbXBvcnQgVG9wIGZyb20gXCIuL1RvcFwiO1xuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSBcIi4vU2ltdWxhdGlvblwiO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDMwMDtcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9LFxuICBhcHBCYXI6IHtcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgZmxleFNocmluazogMCxcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gIH0sXG4gIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXG4gIHRvb2xiYXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IDMwLFxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOiBcIndoaXRlXCIsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgbWluV2lkdGg6IFwiNDgwcHhcIixcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICB9LFxufSk7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29tcGFueU5hbWVzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJIb21lXCIpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgIDxBcHBCYXJcbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfVxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjNUNEQjk1XCIsIGNvbG9yOiBcIiMwNTM4NkJcIn19XG4gICAgICAgID5cbiAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIC8+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxuICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhbmNob3I9XCJsZWZ0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlN0b2NrIFRyZW5kczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDxTaWRlQmFyIC8+XG4gICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgLz5cbiAgICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz4gKi99XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BlcmZvcm1hbmNlXCIgY29tcG9uZW50PXtQZXJmb3JtYW5jZX0gLz4gKi99XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgcGF0aD1cIi90b3AvOm51bS86dHlwZVwiXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgbnVtLCB0eXBlIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9ID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPFRvcCBrZXk9e2BudW09JHtudW19JnR5cGU9JHt0eXBlfWB9IHsuLi5wcm9wc30gLz47XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VjdG9yc1wiIGNvbXBvbmVudD17U2VjdG9yc30gLz5cbiAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICBwYXRoPVwiL2NvbXBhbnlkZXRhaWxzLzpjb21wYW55XCJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBjb21wYW55IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9ID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29tcGFueURldGFpbHMga2V5PXtgY29tcGFueT0ke2NvbXBhbnl9YH0gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgIHBhdGg9XCIvcmV2ZW51ZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UmV2ZW51ZSBjb21wYW55TmFtZXM9e3RoaXMuc3RhdGUuY29tcGFueU5hbWVzfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NwNTAwXCIgY29tcG9uZW50PXtTUDUwMH0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY29tcGFyaXNvblwiIGNvbXBvbmVudD17Q29tcGFyaXNvbn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2ltdWxhdGlvblwiIGNvbXBvbmVudD17U2ltdWxhdGlvbn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17UGFnZU5vdEZvdW5kfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9IYXNoUm91dGVyPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKSh3aXRoUm91dGVyKEhvbWUpKTtcbiIsImltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmssIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gIH0sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJpbml0aWFsXCIsXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICAvLyBcIiY6aG92ZXJcIjoge1xuICAgIC8vICAgYmFja2dyb3VuZENvbG9yOiBcIiNBREQ4RTBcIixcbiAgICAvLyB9LFxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgcGFkZGluZzogMjAsXG4gICAgZm9udFNpemUgOiAyNCxcbiAgfSxcbn0pO1xuXG5jbGFzcyBOYXZpZ2F0aW9uQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2VsZWN0ZWRDb21wYW55OiBcIiBcIiwgY29tcGFueU5hbWVzOiBbXSB9O1xuICB9XG5cbiAgc2VsZWN0ZWRDb21wYW55ID0gKGUsIHZhbCkgPT4ge1xuICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICBoaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDb21wYW55OiB2YWwgfSwgKCkgPT4ge1xuICAgICAgaGlzdG9yeS5wdXNoKFwiL2NvbXBhbnlkZXRhaWxzL1wiICsgdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ29tcGFueTogXCJcIiB9LCAoKSA9PiB7fSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJOYXZpZ2F0aW9uQmFyXCIpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9jb21wYW55TmFtZXNcIilcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogcy5kYXRhIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55TmFtZXM6IFtdIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzcGFjaW5nPXsxfT5cbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9ncmFwaHl9IHZhcmlhbnQ9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9ncmFwaHl9IHZhcmlhbnQ9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICB7LyogPEdyaWQgaXRlbT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9wZXJmb3JtYW5jZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSB2YXJpYW50PVwiYnV0dG9uXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0gdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIFBlcmZvcm1hbmNlXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0dyaWQ+ICovfVxuICAgICAgICB7LyogPEdyaWQgaXRlbT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD4gKi99XG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2NvbXBhcmlzb25cIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeX0gdmFyaWFudD1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbXBhcmlzb25cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvc2ltdWxhdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeX0gdmFyaWFudD1cImJ1dHRvblwiIFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaW11bGF0aW9uXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxuICAgICAgICAgIDxBdXRvY29tcGxldGVcbiAgICAgICAgICAgIHN0eWxlPXt7IFxuICAgICAgICAgICAgICB3aWR0aDogXCIzMDBweFwiLFxuICAgICAgICAgICAgICBjb2xvcjpcIiMwNTM4NkJcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21wYW55KGUsIHZhbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaWQ9XCJzZWFyY2ggZm9yIGNvbXBhbmllc1wiXG4gICAgICAgICAgICBmcmVlU29sb1xuICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5jb21wYW55TmFtZXMubWFwKChjb21wYW55bmFtZSkgPT4gY29tcGFueW5hbWUpfVxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJzZWFyY2ggZm9yIGNvbXBhbmllc1wiXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzA1Mzg2QlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykod2l0aFJvdXRlcihOYXZpZ2F0aW9uQmFyKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFBhZ2VOb3RGb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUGFnZU5vdEZvdW5kXCIpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8aDE+UGFnZSBOb3QgRm91bmQ8L2gxPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RGb3VuZDtcbiIsImltcG9ydCB7IFBhcGVyLCBUeXBvZ3JhcGh5LCB3aXRoU3R5bGVzICB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IEdSSURfSEVBREVSX0NFTExfU0VQQVJBVE9SX1JFU0laQUJMRV9DU1NfQ0xBU1MgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZFwiO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHBhcGVyIDoge1xuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBSZXZlbnVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvcENvbXBhbmllczogW10sXG4gICAgICBudW06IDMwLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSZXZlbnVlXCIpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9wcmV2aW91c2RheXN0b2NrZGV0YWlsc1wiKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgY29tcGFueVN0b2NrRGV0YWlscyA9IHMuZGF0YTtcbiAgICAgICAgICBjb21wYW55U3RvY2tEZXRhaWxzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhW1wiUmV2ZW51ZVwiXSAtIGJbXCJSZXZlbnVlXCJdO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbXBhbnlTdG9ja0RldGFpbHMgPSBjb21wYW55U3RvY2tEZXRhaWxzLnNsaWNlKDAsIHRoaXMuc3RhdGUubnVtKTtcbiAgICAgICAgICBsZXQgdG9wQ29tcGFuaWVzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXBhbnlTdG9ja0RldGFpbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY29tcGFueVN0b2NrRGV0YWlsc1tpbmRleF07XG4gICAgICAgICAgICB0b3BDb21wYW5pZXMucHVzaChlbGVtZW50W1wiQ29tcGFueVwiXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7IHRvcENvbXBhbmllczogdG9wQ29tcGFuaWVzLCBsb2FkaW5nOiBmYWxzZSB9LFxuICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3BDb21wYW5pZXM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3BDb21wYW5pZXM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlciB0eXBlPVwiVGhyZWVEb3RzXCIgY29sb3I9XCIjMDUzODZCXCIgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfS8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQYXBlclxuICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yIDogXCIjNUNEQjk1XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxuICAgICAgICAgICAgICAgIFRvcCB7dGhpcy5zdGF0ZS5udW19IENvbXBhbmllcyBSZXZlbnVlIHdpc2VcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvcENvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2NvbXBhbnlkZXRhaWxzL1wiICsgY29tcGFueSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBtYXJnaW46IFwiMTBweFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0geyBjbGFzc2VzLnBhcGVyIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiID57Y29tcGFueX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFJldmVudWU7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyB3aXRoVGhlbWU6IHRydWUgfSkoUmV2ZW51ZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmNsYXNzIFNQNTAwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc3A1MDA6IFtdIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTUDUwMFwiKTtcbiAgICAvLyBheGlvc1xuICAgIC8vICAgLmdldChcIi9zcDUwMFwiKVxuICAgIC8vICAgLnRoZW4oKHMpID0+IHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHNwNTAwOiBzLmRhdGEsIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAudGhlbigoKSA9PiB7fSlcbiAgICAvLyAgIC5jYXRjaCgoZSkgPT4ge30pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFBhcGVyXG4gICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgIGNvbG9yIDogXCIjNUNEQjk1XCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPntcIlNQIDUwMFwifTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPERhc2hib2FyZCBjb21wYW55PVwic3A1MDBcIiAvPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNQNTAwO1xuIiwiaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBTZWN0b3JzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlY3RvcnM6IFtdLFxuICAgICAgc2VsZWN0ZWRTZWN0b3I6IFwiXCIsXG4gICAgICBzZWxlY3RlZFNlY3RvckNvbXBhbmllczogW10sXG4gICAgICBzZWxlY3RlZENvbXBhbnk6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2VjdG9yc1wiKTtcbiAgICBjb25zdCB7IGhpc3RvcnksIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChcInN0YXRlXCIgaW4gbG9jYXRpb24gJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICB9XG5cbiAgICBheGlvcy5nZXQoXCJhcGkvc2VjdG9yc1wiKS50aGVuKChzKSA9PiB7XG4gICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VjdG9yczogcy5kYXRhIH0sICgpID0+IHt9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWN0b3JzOiBbXSB9LCAoKSA9PiB7fSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgc2VsZWN0ZWRTZWN0b3IgPSAoZSwgdmFsKSA9PiB7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgeyBzZWxlY3RlZFNlY3RvcjogXCJcIiwgc2VsZWN0ZWRTZWN0b3JDb21wYW5pZXM6IFtdIH0sXG4gICAgICAgICgpID0+IHt9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTZWN0b3I6IHZhbCxcbiAgICAgICAgICBzZWxlY3RlZFNlY3RvckNvbXBhbmllczogdGhpcy5zdGF0ZS5zZWN0b3JzW3ZhbF0sXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHt9XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBzZWxlY3RlZENvbXBhbnkgPSAodmFsKSA9PiB7XG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbnk6IHZhbCB9LCAoKSA9PiB7XG4gICAgICAgIGhpc3RvcnkucHVzaChcImNvbXBhbnlkZXRhaWxzL1wiICsgdmFsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlY3RvcnMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgYWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZWN0b3IoZSwgdmFsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpZD1cInNlYXJjaCBmb3Igc2VjdG9yXCJcbiAgICAgICAgICAgIGZyZWVTb2xvXG4gICAgICAgICAgICBvcHRpb25zPXtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnNlY3RvcnMpLm1hcCgoc2VjdG9yKSA9PiBzZWN0b3IpfVxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbn1cbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwic2VhcmNoIGZvciBzZWN0b3JcIlxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWRTZWN0b3JDb21wYW5pZXMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgYWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb21wYW55KHZhbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaWQ9XCJzZWFyY2ggZm9yIGNvbXBhbmllc1wiXG4gICAgICAgICAgICBmcmVlU29sb1xuICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlY3RvckNvbXBhbmllcy5tYXAoXG4gICAgICAgICAgICAgIChjb21wYW55KSA9PiBjb21wYW55XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbn1cbiAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwic2VhcmNoIGZvciBjb21wYW55XCJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdG9ycztcbiIsImltcG9ydCB7XG4gIEFjY29yZGlvbixcbiAgQWNjb3JkaW9uRGV0YWlscyxcbiAgQWNjb3JkaW9uU3VtbWFyeSxcbiAgUGFwZXIsXG4gIHdpdGhTdHlsZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgaGVhZGluZzoge1xuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTUpLFxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXG4gIH0sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgXG4gICAgXCImID4gKlwiOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMuNiksXG4gICAgICBib3JkZXI6ICcwcHgnLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgY29sb3I6IFwiIzVDREI5NVwiXG4gIH0sXG4gIHBhcGVyMToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIFxuICAgIFwiJiA+ICpcIjoge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIC8vIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIGJvcmRlcjogJzBweCcsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICBjb2xvcjogXCIjMDUzODZCXCJcbiAgfSxcbn0pO1xuXG5jbGFzcyBTaWRlQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2lkZWJhclwiKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0gc3R5bGUgPSB7e1xuICAgICAgICAgIHBhZGRpbmcgOiAnMHB4JyxcbiAgICAgICAgfX0+XG4gICAgICAgICAgPEFjY29yZGlvbiBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICAgICAgICAgICAgYm9yZGVyIDogXCJub25lXCJcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgaWQ9XCJ0b3AxMFwiID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlRPUCAxMDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPXt7IHBhdGhuYW1lOiBcIi90b3AvMTAvYnV5XCIgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXIxfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPkJVWTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdG9wLzEwL3NlbGxcIiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcjF9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+U0VMTDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgPEFjY29yZGlvbiBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICAgICAgICAgICAgYm9yZGVyIDogXCJub25lXCJcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5UT1AgMzA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdG9wLzMwL2J1eVwiIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyMX0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5CVVk8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL3RvcC8zMC9zZWxsXCIgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXIxfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlNFTEw8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgICB7LyogPGRpdiBzdHlsZSA9IHt7XG4gICAgICAgICAgICBwYWRkaW5nIDogJzJweCcsXG4gICAgICAgICAgfX0+PC9kaXY+ICovfVxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgIDxOYXZMaW5rIHRvPXt7IHBhdGhuYW1lOiBcIi9zZWN0b3JzXCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlNFQ1RPUlM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICA8TmF2TGluayB0bz17eyBwYXRobmFtZTogXCIvc3A1MDBcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+UyBBTkQgUCA1MDA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICA8TmF2TGluayB0bz17eyBwYXRobmFtZTogXCIvcmV2ZW51ZVwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj4gVE9QIFJFVkVOVUU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2lkZUJhcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBHcmlkLFxuICBGb3JtQ29udHJvbCxcbiAgSW5wdXRMYWJlbCxcbiAgU2VsZWN0LFxuICBNZW51SXRlbSxcbiAgUGFwZXIsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHVuZGVyc2NvcmUgZnJvbSBcInVuZGVyc2NvcmVcIjtcbmltcG9ydCB7XG4gIEdyaWRUb29sYmFyQ29udGFpbmVyLFxuICBHcmlkVG9vbGJhckV4cG9ydCxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIjtcblxuXG5cbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcblxuXG5jbGFzcyBTaW11bGF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkQ29tcGFueTogXCJcIixcbiAgICAgIGNvbXBhbnlOYW1lczogW10sXG4gICAgICBkYXlzOiAxLFxuICAgICAgaW52ZXN0bWVudDogMSxcbiAgICAgIHN0YXJ0ZGF0ZTogXCIyMDE3LTAzLTEwXCIsXG4gICAgICByZXNwb25zZTogW10sXG4gICAgICBjb2xzOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgc2VsZGF5czogXCJcIixcbiAgICAgIHNpbXVsYXRpb250b3A6IFtdLFxuICAgICAgY29tcGFueXNlbGVjdGVkYWZ0ZXJzaW11bGF0aW9uIDogXCJcIixcbiAgICAgIGNvbXBhbnlkZXRhaWxzYWZ0ZXJzaW11bGF0aW9uIDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IFNQNTAwID1cbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS9tYXN0ZXIvRGF0YS9TUDUwMENvbXBhbmllcy5qc29uXCI7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoU1A1MDApXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBTUDUwMENvbXBhbmllcyA9IE9iamVjdC5rZXlzKHVuZGVyc2NvcmUuaW52ZXJ0KHMuZGF0YSkpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55TmFtZXM6IFNQNTAwQ29tcGFuaWVzIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiU2ltdWxhdGlvblwiKTtcbiAgfTtcblxuICBvbkNsaWNrU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPVxuICAgICAgXCJjb21wYW55PVwiICtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55ICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiaW52ZXN0bWVudD1cIiArXG4gICAgICB0aGlzLnN0YXRlLmludmVzdG1lbnQgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJkYXlzPVwiICtcbiAgICAgIHRoaXMuc3RhdGUuZGF5cyArXG4gICAgICBcIiZcIiArXG4gICAgICBcImRhdGU9XCIgK1xuICAgICAgdGhpcy5zdGF0ZS5zdGFydGRhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3NpbXVsYXRpb24/XCIgKyBwYXJhbXMpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCByZXNwID0gcy5kYXRhO1xuICAgICAgICAgIGlmIChyZXNwLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBsZXQgY29scyA9IFtdO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzcFswXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgY29scy5wdXNoKHsgZmllbGQ6IGtleSwgaGVhZGVyTmFtZToga2V5LCB3aWR0aDogMTUwIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhyZXNwW2ldKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNwW2ldW1wiaWRcIl0gPSBpO1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaChyZXNwW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgeyByZXNwb25zZTogcm93cywgY29sczogY29scywgbG9hZGluZzogZmFsc2UgfSxcbiAgICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBvblNlbGVjdERheXMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGRheXMgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZGF5czogZGF5cyB9LCAoKSA9PiB7fSk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3NpbXVsYXRpb250b3BcIiArIFwiP1wiICsgXCJkYXlzPVwiICsgZGF5cylcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHMuZGF0YSk7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpbXVsYXRpb250b3A6IHMuZGF0YSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9KTtcbiAgfTtcblxuXG5cbiAgZ2V0RGF0YUZyb21VUkwgPSAodXJsKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xuICAgIH0sIDIwMDApO1xuXG4gIFxuXG4gIGV4cG9ydFRvQ1NWID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZFRvb2xiYXJDb250YWluZXI+XG4gICAgICAgIDxHcmlkVG9vbGJhckV4cG9ydCAvPlxuICAgICAgPC9HcmlkVG9vbGJhckNvbnRhaW5lcj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudCA9IFwic3VidGl0bGUxXCIgc3R5bGUgPSB7eyBjb2xvciA6IFwiIzA1Mzg2QlwifX0+U2VsZWN0IG51bWJlciBvZiBkYXlzIGZvciBzaW11bGF0aW9uIDogPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e1xuICAgICAgICAgICAgcGFkZGluZyA6ICczcHgnXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1pbldpZHRoOiBcIjE1MHB4XCIgfX0gdmFyaWFudD1cIm91dGxpbmVkXCI+XG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5kYXlzPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBzdHlsZT17eyBcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUNEQjk1XCJcbiAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJkYXlzXCJcbiAgICAgICAgICAgICAgaWQ9XCJkYXlzXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3REYXlzfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxkYXlzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7WzMwLCA2MCwgOTAsIDE4MCwgMzYwLCA3MjBdLm1hcChcbiAgICAgICAgICAgICAgICAocGVyaW9kKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIHZhbHVlPXtwZXJpb2R9PntwZXJpb2R9PC9NZW51SXRlbT47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8ZGl2IHN0eWxlID0ge3tcbiAgICAgICAgICAgIHBhZGRpbmcgOiAnMjBweCcsXG4gICAgICAgICAgfX0+PC9kaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUuc2ltdWxhdGlvbnRvcC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9XCJTaW11YWx0aW9uIFJlc3VsdHNcIiBtaW5XaWR0aD0gXCI2NTBcIiBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBzdHlsZSA9IHt7IGNvbG9yIDogXCIjMDUzODZCXCIsIGJhY2tncm91bmRDb2xvcjogXCIjNUNEQjk1XCIsfX0+XG4gICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgdmFyaWFudCA9IFwiaDVcIj4gU2VjdXJpdHkgSWQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgdmFyaWFudCA9IFwiaDVcIj5Db21wYW55PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHZhcmlhbnQgPSBcImg1XCI+QWN0dWFsIEF2ZXJhZ2UgUmV0dXJuczwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiB2YXJpYW50ID0gXCJoNVwiPk1pbmltdW0gUHJlZGljdGlvbiBSYW5nZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiB2YXJpYW50ID0gXCJoNVwiPk1heGltdW0gUHJlZGljdGlvbiBSYW5nZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2ltdWxhdGlvbnRvcC5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuQ29tcGFueX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm93LnNlY3VyaXR5X2lkfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuY29tcGFueX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmFjdHVhbF9hdmVyYWdlX3JldHVybl9wZXJjZW50fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cubWluaW11bV9wcmVkaWN0aW9uX3JhbmdlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cubWF4aW11bV9wcmVkaWN0aW9uX3JhbmdlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWRMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiUmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IHtyb3dbXCJzZWN1cml0eV9pZFwiXSArIFwiX1wiICsgdGhpcy5zdGF0ZS5zZWxkYXlzICsgXCIuY3N2XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lID0gXCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwb3J0RmlsZSA9IHsoKSA9PiAgUHJvbWlzZS5yZXNvbHZlKHRoaXMuIGdldERhdGFGcm9tVVJMKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1ZlbnVHb3BhbEppbGxhL1N0b2NrQW5hbHlzaXNUb29sL21haW4vRGF0YS9TUDUwMF9zaW11bGF0aW9uX3Jlc3VsdHMvXCIgKyByb3dbXCJzZWN1cml0eV9pZFwiXSArIFwiX1wiICsgdGhpcy5zdGF0ZS5zZWxkYXlzICsgXCJkYXlzLmNzdlwiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRGaWxlID0geygpID0+ICBQcm9taXNlLnJlc29sdmUodGhpcy4gZ2V0RGF0YUZyb21VUkwoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2staW5kZXgtcmlzay9tYXN0ZXIvRGF0YS9TaW11bGF0aW9uUmVzdWx0L1wiICsgcm93W1wic2VjdXJpdHlfaWRcIl0gKyBcIl9cIiArIHRoaXMuc3RhdGUuc2VsZGF5cyArIFwiLmNzdlwiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgKX0pfVxuICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltdWxhdGlvbjtcbiIsImltcG9ydCB7IFBhcGVyLCBUeXBvZ3JhcGh5LCB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCI7XG5cblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBwYXBlciA6IHtcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY2xhc3MgVG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgbnVtOiAxMCxcbiAgICAgIHR5cGU6IFwiYnV5XCIsXG4gICAgICB0b3BDb21wYW5pZXM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlRvcFwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICBjb25zdCB7IG1hdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbnVtLCB0eXBlIH0gPSBtYXRjaC5wYXJhbXM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG51bTogbnVtLCB0eXBlOiB0eXBlLCBsb2FkaW5nOiB0cnVlIH0sICgpID0+IHt9KTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IFxuICAgIFwibnVtPVwiICsgbnVtICtcbiAgICBcIiZcIiArIFxuICAgIFwidHlwZT1cIiArIHR5cGU7XG5cbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3RvcGJ1eXNlbGw/XCIgKyBwYXJhbXMpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBjb21wYW55U3RvY2tEZXRhaWxzID0gcy5kYXRhO1xuICAgICAgICAgIGNvbXBhbnlTdG9ja0RldGFpbHMgPSBjb21wYW55U3RvY2tEZXRhaWxzLnNsaWNlKDAsIG51bSk7XG4gICAgICAgICAgbGV0IHRvcENvbXBhbmllcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wYW55U3RvY2tEZXRhaWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNvbXBhbnlTdG9ja0RldGFpbHNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgICAgICB0b3BDb21wYW5pZXMucHVzaChlbGVtZW50W1wiY29tcGFueVwiXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7IHRvcENvbXBhbmllczogdG9wQ29tcGFuaWVzLCBsb2FkaW5nOiBmYWxzZSB9LFxuICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3BDb21wYW5pZXM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3BDb21wYW5pZXM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIFxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkZXIgdHlwZT1cIlRocmVlRG90c1wiIGNvbG9yPVwiIzA1Mzg2QlwiIGhlaWdodD17ODB9IHdpZHRoPXs4MH0vPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgIFRPUCB7dGhpcy5zdGF0ZS5udW19IENPTVBBTklFUyBGT1J7XCIgXCJ9XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudHlwZSA9PT0gXCJidXlcIiA/IFwiSU5WRVNUSU5HXCIgOiBcIlRSQURJTkdcIn1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvcENvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2NvbXBhbnlkZXRhaWxzL1wiICsgY29tcGFueSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBtYXJnaW46IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHsgY2xhc3Nlcy5wYXBlciB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj57Y29tcGFueX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICBcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyB3aXRoVGhlbWU6IHRydWUgfSkoVG9wKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoXG4vLyAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuLy8gICAgIDxBcHAgLz5cbi8vICAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4vLyApO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gPEFwcCAvPjtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBvcHBlci5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwZXhjaGFydHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvYWRlci1zcGlubmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuZGVyc2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=