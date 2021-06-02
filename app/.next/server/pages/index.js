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
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
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
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Main */ "./pages/Components/Main.jsx");

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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_15__.default, {
          position: "relative",
          className: classes.appBar,
          style: {
            backgroundColor: "#5CDB95",
            color: "#05386B"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16__.default, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationBar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.root,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_17__.default, {
            className: classes.drawer,
            variant: "permanent",
            classes: {
              paper: classes.drawerPaper
            },
            anchor: "left",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
            className: classes.content,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/",
                component: _Main__WEBPACK_IMPORTED_MODULE_14__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/home",
                component: _Main__WEBPACK_IMPORTED_MODULE_14__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/about",
                component: _About__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
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
                    lineNumber: 120,
                    columnNumber: 26
                  }, this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/sectors",
                component: _Sectors__WEBPACK_IMPORTED_MODULE_9__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
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
                    lineNumber: 134,
                    columnNumber: 21
                  }, this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/revenue",
                component: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Revenue__WEBPACK_IMPORTED_MODULE_8__.default, {
                  companyNames: this.state.companyNames
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/sp500",
                component: _SP500__WEBPACK_IMPORTED_MODULE_11__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/comparison",
                component: _Comparison__WEBPACK_IMPORTED_MODULE_5__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                exact: true,
                path: "/simulation",
                component: _Simulation__WEBPACK_IMPORTED_MODULE_13__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
                component: _PageNotFound__WEBPACK_IMPORTED_MODULE_7__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__.withStyles)(styles)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)(Home)));

/***/ }),

/***/ "./pages/Components/Main.jsx":
/*!***********************************!*\
  !*** ./pages/Components/Main.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Main.jsx";

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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "\\images\\stocks3.jpg",
        style: {
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Main);

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
      padding: theme.spacing(3),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9BcHAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9BYm91dC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYW55RGV0YWlscy5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Db21wYXJpc29uLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL0Rhc2hib2FyZC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Ib21lLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL01haW4uanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9QYWdlTm90Rm91bmQuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvUmV2ZW51ZS5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9TUDUwMC5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9TZWN0b3JzLmpzeCIsIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9Db21wb25lbnRzL1NpZGVCYXIuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL0NvbXBvbmVudHMvU2ltdWxhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvQ29tcG9uZW50cy9Ub3AuanN4Iiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicG9wcGVyLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtYXBleGNoYXJ0c1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInVuZGVyc2NvcmVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJyZW5kZXIiLCJBYm91dCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJ0aGVtZSIsImZvcm1Db250cm9sIiwibWFyZ2luIiwic3BhY2luZyIsIm1pbldpZHRoIiwic2VsZWN0RW1wdHkiLCJtYXJnaW5Ub3AiLCJDb21wYW55RGV0YWlscyIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJtYXRjaCIsImNvbXBhbnkiLCJwYXJhbXMiLCJzZXRTdGF0ZSIsInNlbGVjdGVkQ29tcGFueSIsImdldENvbXBhbnlEZXRhaWxzIiwic3RhdGUiLCJheGlvcyIsInRoZW4iLCJzIiwic3RhdHVzIiwiY29tcGFueURldGFpbHMiLCJkYXRhIiwidCIsIk9iamVjdCIsImFzc2lnbiIsImNhdGNoIiwiZSIsImxvYWRpbmciLCJzdG9ja2RldGFpbHMiLCJjb21wYW55Q3VycmVudERheVN0b2NrRGV0YWlscyIsInN0b2Nra2V5cyIsImRpc3BsYXkiLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImtleXMiLCJtYXAiLCJrZXkiLCJyZXMiLCJ0b1VwcGVyQ2FzZSIsImxlbmd0aCIsImltcEtleXMiLCJpbmNsdWRlcyIsIndpdGhTdHlsZXMiLCJDb21wYXJpc29uIiwiY29tcGFueU5hbWVzIiwic2VsZWN0ZWRDb21wYW5pZXMiLCJlcnJvciIsImluZGV4Iiwic2VsZWN0ZWRUaW1lUGVyaW9kIiwicmF0ZSIsInRpbWVQZXJpb2QiLCJudW0iLCJwZXJpb2QiLCJ1bmRlcnNjb3JlIiwiZmlyc3RDb21wYW55IiwicmVhc29uIiwiZGV0YWlsIiwiY29tcGFuaWVzIiwib3B0aW9uIiwiY29tcGFueW5hbWUiLCJ3aWR0aCIsInRhcmdldCIsInZhbHVlIiwibWluIiwibWF4Iiwic3RlcCIsIm9uQ2xpY2tTdWJtaXQiLCJlbGVtZW50IiwicGF0aG5hbWUiLCJpIiwiQ2hhcnQiLCJkeW5hbWljIiwic3NyIiwiY2hhcnQiLCJkaXZjaGFydCIsImFsaWduSXRlbXMiLCJidXR0b25ncm91cCIsIkRhc2hib2FyZCIsImRldGFpbHMiLCJkYXlzIiwiY2xvc2VQcmljZURhdGEiLCJuYW1lIiwib3BlblByaWNlRGF0YSIsImhpZ2hQcmljZURhdGEiLCJsb3dQcmljZURhdGEiLCJ0b0RhdGUiLCJmcm9tRGF0ZSIsInNsaWNlIiwicHVzaCIsIngiLCJ5Iiwib3B0aW9ucyIsInhheGlzIiwic2VyaWVzIiwiY3VycmVudFRhcmdldCIsInNlbGVjdGVkUGVyaW9kIiwiY3JlYXRlR3JhcGgiLCJiYWNrZ3JvdW5kIiwidHlwZSIsImhlaWdodCIsInpvb20iLCJlbmFibGVkIiwiYXV0b1NjYWxlWWF4aXMiLCJ0b29sYmFyIiwiYXV0b1NlbGVjdGVkIiwic3Ryb2tlIiwic2hvdyIsImN1cnZlIiwibGluZUNhcCIsImNvbG9ycyIsInVuZGVmaW5lZCIsImRhc2hBcnJheSIsImRhdGFMYWJlbHMiLCJtYXJrZXJzIiwic2l6ZSIsInRpdGxlIiwidGV4dCIsImFsaWduIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiZmlsbCIsIm9wYWNpdHkiLCJncmFkaWVudCIsInNoYWRlSW50ZW5zaXR5IiwiaW52ZXJzZUNvbG9ycyIsIm9wYWNpdHlGcm9tIiwib3BhY2l0eVRvIiwic3RvcHMiLCJ5YXhpcyIsImxhYmVscyIsImZvcm1hdHRlciIsInZhbCIsInRvRml4ZWQiLCJkdCIsIkRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInRvb2x0aXAiLCJzaGFyZWQiLCJjbGFzc2VzIiwid2l0aFRoZW1lIiwiZHJhd2VyV2lkdGgiLCJyb290IiwiYXBwQmFyIiwibWFyZ2luTGVmdCIsInBhZGRpbmdUb3AiLCJkcmF3ZXIiLCJmbGV4U2hyaW5rIiwiZHJhd2VyUGFwZXIiLCJtaXhpbnMiLCJjb250ZW50IiwiZmxleEdyb3ciLCJmbGV4V3JhcCIsIm92ZXJmbG93WCIsIkhvbWUiLCJwYXBlciIsIk1haW4iLCJTZWN0b3JzIiwiU1A1MDAiLCJTaW11bGF0aW9uIiwiUGFnZU5vdEZvdW5kIiwid2l0aFJvdXRlciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRleHRBbGlnbiIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJsaW5rIiwidGV4dERlY29yYXRpb24iLCJncmlkIiwidHlwb2dyYXBoeSIsIk5hdmlnYXRpb25CYXIiLCJoaXN0b3J5IiwiUmV2ZW51ZSIsImNvbXBhbnlTdG9ja0RldGFpbHMiLCJzb3J0IiwiYSIsImIiLCJ0b3BDb21wYW5pZXMiLCJ1dWlkdjQiLCJzcDUwMCIsImxvY2F0aW9uIiwic2VjdG9ycyIsInNlbGVjdGVkU2VjdG9yIiwic2VsZWN0ZWRTZWN0b3JDb21wYW5pZXMiLCJzZWN0b3IiLCJoZWFkaW5nIiwicHhUb1JlbSIsImZvbnRXZWlnaHRSZWd1bGFyIiwiYm9yZGVyIiwicGFwZXIxIiwiU2lkZUJhciIsIlNQNTAwQ29tcGFuaWVzIiwiaW52ZXN0bWVudCIsInN0YXJ0ZGF0ZSIsInJlc3AiLCJjb2xzIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwicm93cyIsInJlc3BvbnNlIiwic2VsZGF5cyIsInNpbXVsYXRpb250b3AiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJmZXRjaCIsImNvbXBhbnlzZWxlY3RlZGFmdGVyc2ltdWxhdGlvbiIsImNvbXBhbnlkZXRhaWxzYWZ0ZXJzaW11bGF0aW9uIiwidG9kYXkiLCJvblNlbGVjdERheXMiLCJQYXBlciIsInJvdyIsInNlY3VyaXR5X2lkIiwiYWN0dWFsX2F2ZXJhZ2VfcmV0dXJuX3BlcmNlbnQiLCJtaW5pbXVtX3ByZWRpY3Rpb25fcmFuZ2UiLCJtYXhpbXVtX3ByZWRpY3Rpb25fcmFuZ2UiLCJDb21wYW55IiwiVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxHQUFOLFNBQWtCQyx3REFBbEIsQ0FBa0M7QUFDaENDLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLDJEQUFEO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FB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LENBQUM5QyxNQUFELEVBQVM7QUFBRW1KLFdBQVMsRUFBRTtBQUFiLENBQVQsQ0FBVixDQUF3Q2lGLEdBQXhDLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU25FLElBQVQsR0FBZ0I7QUFDN0Isc0JBQU8sOERBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNiRCwrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL0NvbXBvbmVudHMvSG9tZVwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Um91dGVyPlxuICAgICAgICA8SG9tZSAvPlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJBYm91dFwiKVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PkFib3V0PC9SZWFjdC5GcmFnbWVudD47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iLCJpbXBvcnQge1xuICBDaGlwLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBQYXBlcixcbiAgVHlwb2dyYXBoeSxcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBmb3JtQ29udHJvbDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtaW5XaWR0aDogMTUwLFxuICB9LFxuICBzZWxlY3RFbXB0eToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBDb21wYW55RGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb21wYW55RGV0YWlsczogW10sXG4gICAgICBjb21wYW55Q3VycmVudERheVN0b2NrRGV0YWlsczogW10sXG4gICAgICBzZWxlY3RlZENvbXBhbnk6IFwiXCIsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3RvY2trZXlzOiBbXG4gICAgICAgIFwiRGF0ZVwiLFxuICAgICAgICBcIk9wZW4gUHJpY2VcIixcbiAgICAgICAgXCJIaWdoIFByaWNlXCIsXG4gICAgICAgIFwiTG93IFByaWNlXCIsXG4gICAgICAgIFwiQ2xvc2UgUHJpY2VcIixcbiAgICAgICAgXCJXQVBcIixcbiAgICAgICAgXCJOby5vZiBTaGFyZXNcIixcbiAgICAgICAgXCJOby4gb2YgVHJhZGVzXCIsXG4gICAgICAgIFwiVG90YWwgVHVybm92ZXIgKFJzLilcIixcbiAgICAgICAgXCIlIERlbGkuIFF0eSB0byBUcmFkZWQgUXR5XCIsXG4gICAgICAgIFwiU3ByZWFkIEhpZ2gtTG93XCIsXG4gICAgICAgIFwiU3ByZWFkIENsb3NlLU9wZW5cIixcbiAgICAgIF0sXG4gICAgICBzdG9ja2RldGFpbHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXBhbnlEZXRhaWxzXCIpO1xuICAgIGNvbnN0IHsgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcGFueSA9IG1hdGNoLnBhcmFtcy5jb21wYW55O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbnk6IGNvbXBhbnkgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5nZXRDb21wYW55RGV0YWlscyh0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0Q29tcGFueURldGFpbHMgPSBhc3luYyAoY29tcGFueSkgPT4ge1xuICAgIGF3YWl0IGF4aW9zLmdldChcIi9hcGkvY29tcGFueWRldGFpbHM/Y29tcGFueT1cIiArIGNvbXBhbnkpLnRoZW4oKHMpID0+IHtcbiAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGxldCBjb21wYW55RGV0YWlscyA9IHMuZGF0YTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcIi9hcGkvZ2V0c3VnZ2VzdGlvbnM/Y29tcGFueT1cIiArIGNvbXBhbnkpXG4gICAgICAgIC50aGVuKCh0KSA9PiB7XG4gICAgICAgICAgaWYgKHQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbXBhbnlEZXRhaWxzID0gT2JqZWN0LmFzc2lnbihjb21wYW55RGV0YWlscywgdC5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlEZXRhaWxzOiBjb21wYW55RGV0YWlscywgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlEZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9wcmV2aW91c2RheXN0b2NrZGV0YWlscz9jb21wYW55PVwiICsgY29tcGFueSlcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogcy5kYXRhLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnkgIT09IFwiXCIgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgICBjb2xvciA6IFwiIzVDREI5NVwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICB7LyogPERpdmlkZXIgLz4gKi99XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJUaHJlZURvdHNcIiBjb2xvcj1cIiMwNTM4NkJcIiBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5jb21wYW55RGV0YWlscykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29tcGFueURldGFpbHNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4+PC9zcGFuPjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwic3VnZ2VzdFwiICYmICh0aGlzLnN0YXRlLmNvbXBhbnlEZXRhaWxzW2tleV0gPT09IFwiYnV5XCIgfHwgdGhpcy5zdGF0ZS5jb21wYW55RGV0YWlsc1trZXldID09PSBcInNlbGxcIikgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBcIlNVR0dFU1RJT04gXCIgKyBcIiAtLSBcIiArIHRoaXMuc3RhdGUuY29tcGFueURldGFpbHNba2V5XS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBcIiM1Q0RCOTVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTsgXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGtleSArIFwiIDogXCIgKyB0aGlzLnN0YXRlLmNvbXBhbnlEZXRhaWxzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNUNEQjk1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6ICBcIiMwNTM4NkJcIn19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTsgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHsvKiA8RGl2aWRlciAvPlxuICAgICAgICA8RGl2aWRlciAvPiAqL31cbiAgICAgICAge3RoaXMuc3RhdGUuc3RvY2tkZXRhaWxzLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuc3RvY2trZXlzLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgaW1wS2V5cyA9IFtcIk9wZW4gUHJpY2VcIiwgXCJIaWdoIFByaWNlXCIsIFwiTG93IFByaWNlXCIsIFwiQ2xvc2UgUHJpY2VcIl07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChpbXBLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgbGV0IHJlcyA9IGtleS50b1VwcGVyQ2FzZSgpICsgXCIgOiBcIiArIHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzW2tleV07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jlc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvciA6IFwiIzVDREI5NVwifX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcmVzID0ga2V5ICsgXCIgOiBcIiArIHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzW2tleV07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICBsYWJlbD17cmVzfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzVDREI5NVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yIDogIFwiIzA1Mzg2QlwiIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55ICE9PSBcIlwiICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zdG9ja2RldGFpbHMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgIDxEYXNoYm9hcmQgY29tcGFueT17dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnl9IC8+XG4gICAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKENvbXBhbnlEZXRhaWxzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB1bmRlcnNjb3JlIGZyb20gXCJ1bmRlcnNjb3JlXCI7XG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xuXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgR3JpZCxcbiAgSW5wdXRMYWJlbCxcbiAgQnV0dG9uLFxuICBNZW51SXRlbSxcbiAgUGFwZXIsXG4gIFNlbGVjdCxcbiAgVHlwb2dyYXBoeSxcbiAgVGV4dEZpZWxkLFxuICBDaGlwLFxuICBEaXZpZGVyLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XG5cbmNsYXNzIENvbXBhcmlzb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBjb21wYW55TmFtZXM6IFtdLFxuICAgICAgc2VsZWN0ZWRDb21wYW5pZXM6IFtdLFxuICAgICAgc2VsZWN0ZWRUaW1lUGVyaW9kOiBcIjE4MFwiLFxuICAgICAgcmF0ZTogXCIxXCIsXG4gICAgICBzdG9ja2tleXM6IFtcbiAgICAgICAgXCJEYXRlXCIsXG4gICAgICAgIFwiT3BlbiBQcmljZVwiLFxuICAgICAgICBcIkhpZ2ggUHJpY2VcIixcbiAgICAgICAgXCJMb3cgUHJpY2VcIixcbiAgICAgICAgXCJDbG9zZSBQcmljZVwiLFxuICAgICAgICBcIldBUFwiLFxuICAgICAgICBcIk5vLm9mIFNoYXJlc1wiLFxuICAgICAgICBcIk5vLiBvZiBUcmFkZXNcIixcbiAgICAgICAgXCJUb3RhbCBUdXJub3ZlciAoUnMuKVwiLFxuICAgICAgICBcIiUgRGVsaS4gUXR5IHRvIFRyYWRlZCBRdHlcIixcbiAgICAgICAgXCJTcHJlYWQgSGlnaC1Mb3dcIixcbiAgICAgICAgXCJTcHJlYWQgQ2xvc2UtT3BlblwiLFxuICAgICAgXSxcbiAgICAgIHRpbWVQZXJpb2Q6IHtcbiAgICAgICAgXCIxIGRheVwiOiBcIjFcIixcbiAgICAgICAgXCI3IGRheXNcIjogXCI3XCIsXG4gICAgICAgIFwiMSBtb250aFwiOiBcIjMwXCIsXG4gICAgICAgIFwiMyBtb250aHNcIjogXCI5MFwiLFxuICAgICAgICBcIjYgbW9udGhzXCI6IFwiMTgwXCIsXG4gICAgICAgIFwiMSB5ZWFyXCI6IFwiMzYwXCIsXG4gICAgICAgIFwiMiB5ZWFyc1wiOiBcIjcyMFwiLFxuICAgICAgICBcIjUgeWVhcnNcIjogXCIxODAwXCIsXG4gICAgICAgIFwiMTAgeWVhcnNcIjogXCIzNjAwXCIsXG4gICAgICB9LFxuICAgICAgc3RvY2tkZXRhaWxzOiBbXSxcbiAgICAgIG51bTogMTAsXG4gICAgICBlcnJvcjogXCJcIixcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDb21wYXJpc29uXCIpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9jb21wYW55TmFtZXNcIilcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogcy5kYXRhIH0sICgpID0+IHt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueU5hbWVzOiBzLmRhdGEgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tkZXRhaWxzOiBbXSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgb25DbGlja1N1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbmllcy5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IFwic2VsZWN0IGF0bGVhc3QgdHdvIGNvbXBhbmllc1wiIH0sICgpID0+IHt9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBcIlwiLCBsb2FkaW5nOiB0cnVlIH0sICgpID0+IHt9KTtcbiAgICB9XG4gICAgbGV0IHN0b2NrZGV0YWlscyA9IHt9O1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFuaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY29tcGFueSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW5pZXNbaW5kZXhdO1xuICAgICAgc3RvY2tkZXRhaWxzW2NvbXBhbnldID0ge307XG4gICAgfVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFuaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY29tcGFueSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW5pZXNbaW5kZXhdO1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChcIi9hcGkvcHJldmlvdXNkYXlzdG9ja2RldGFpbHM/Y29tcGFueT1cIiArIGNvbXBhbnkpXG4gICAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHN0b2NrZGV0YWlsc1tjb21wYW55XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHN0b2NrZGV0YWlsc1tjb21wYW55XSxcbiAgICAgICAgICAgICAgcy5kYXRhXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChcbiAgICAgICAgICBcIi9hcGkvY29tcGFyaXNvbj9kYXlzPVwiICtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lUGVyaW9kICtcbiAgICAgICAgICAgIFwiJnJhdGU9XCIgK1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yYXRlICtcbiAgICAgICAgICAgIFwiJmNvbXBhbnk9XCIgK1xuICAgICAgICAgICAgY29tcGFueVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHN0b2NrZGV0YWlsc1tjb21wYW55XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHN0b2NrZGV0YWlsc1tjb21wYW55XSxcbiAgICAgICAgICAgICAgcy5kYXRhXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tkZXRhaWxzOiBzdG9ja2RldGFpbHMsIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcGVyaW9kID0gdW5kZXJzY29yZS5pbnZlcnQodGhpcy5zdGF0ZS50aW1lUGVyaW9kKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50ID0gXCJzdWJ0aXRsZTFcIiBzdHlsZSA9IHt7IGNvbG9yIDogXCIjMDUzODZCXCJ9fT5QYXJhbWV0ZXJzIGZvciBDb21wYXJpc29uIDogPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e1xuICAgICAgICAgICAgcGFkZGluZyA6ICczcHgnXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XG4gICAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0Q29tcGFueX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBjb21wYW55LCByZWFzb24sIGRldGFpbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFwicmVtb3ZlLW9wdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgY29tcGFuaWVzID0gdGhpcy5zdGF0ZS5zdG9ja2RldGFpbHM7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgY29tcGFuaWVzW2RldGFpbC5vcHRpb25dO1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZGV0YWlsczogY29tcGFuaWVzIH0sICgpID0+IHt9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ29tcGFuaWVzOiBjb21wYW55IH0sICgpID0+IHt9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGlkPVwic2VsZWN0IG11bHRpcGxlIGNvbXBhbmllc1wiXG4gICAgICAgICAgICAgIGZyZWVTb2xvXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuY29tcGFueU5hbWVzLm1hcChcbiAgICAgICAgICAgICAgICAoY29tcGFueW5hbWUpID0+IGNvbXBhbnluYW1lXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCBNdWx0aXBsZSBDb21wYW5pZXNcIlxuICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXt0aGlzLnN0YXRlLmVycm9yfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3IgIT09IFwiXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgbWluV2lkdGg6IFwiMTUwcHhcIiB9fSB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgICAgICAgICAgPElucHV0TGFiZWw+dHJhZGluZyBwZXJpb2Q8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICBsYWJlbElkPVwidHJhZGluZyBwZXJpb2RcIlxuICAgICAgICAgICAgICAgIGlkPVwidHJhZGluZ1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICB7IHNlbGVjdGVkVGltZVBlcmlvZDogZS50YXJnZXQudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVQZXJpb2R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS50aW1lUGVyaW9kKS5tYXAoKHBlcmlvZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXt0aGlzLnN0YXRlLnRpbWVQZXJpb2RbcGVyaW9kXX0+XG4gICAgICAgICAgICAgICAgICAgICAge3BlcmlvZH1cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBtaW46IFwiLTEwMFwiLCBtYXg6IFwiMTAwXCIsIHN0ZXA6IFwiMC4wMVwiIH19XG4gICAgICAgICAgICAgIGxhYmVsPVwiUmF0ZSBvZiBncm93dGhcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yYXRlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF0ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tTdWJtaXR9XG4gICAgICAgICAgICAgIHN0eWxlID0ge3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yIDogXCIjNUNEQjk1XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgey8qIDxEaXZpZGVyIC8+XG4gICAgICAgIDxEaXZpZGVyIC8+ICovfVxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkZXIgdHlwZT1cIlRocmVlRG90c1wiIGNvbG9yPVwiIzA1Mzg2QlwiIGhlaWdodD17ODB9IHdpZHRoPXs4MH0vPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuc3RvY2tkZXRhaWxzKS5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5zdGF0ZS5zdG9ja2RldGFpbHNbY29tcGFueV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcImNvbXBhbnlkZXRhaWxzL1wiICsgZWxlbWVudFtcImNvbXBhbnlcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudFtcImNvbXBhbnlcIl19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICBJbiB0aGUgbGFzdCB7cGVyaW9kW2VsZW1lbnRbXCJ0b3RhbE51bWJlck9mRGF5c1wiXV19LCBmb3J7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnRbXCJwZXJjZW50T2ZEYXlzXCJdfSBwZXJjZW50IG9mIHRyYWRpbmcgZGF5cyBjbG9zZVxuICAgICAgICAgICAgICAgICAgICAgIHByaWNlIGdyb3d0aCByYXRlIHdhcyBtb3JlIHRoYW4ge2VsZW1lbnRbXCJyYXRlXCJdfSAlXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZCBjb21wYW55PXtlbGVtZW50W1wiY29tcGFueVwiXX0gLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3RvY2trZXlzLm1hcCgoa2V5LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGtleSArIFwiIDogXCIgKyBlbGVtZW50W2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyaXNvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmNvbnN0IENoYXJ0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpLCB7IHNzcjogZmFsc2UgfSk7XG5cbmltcG9ydCB7IEJ1dHRvbkdyb3VwLCBCdXR0b24sIERpdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBjbGFzc25hbWVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIjtcblxuXG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgY2hhcnQ6IHtcbiAgICB3aWR0aDogXCI4MCVcIixcbiAgfSxcbiAgZGl2Y2hhcnQ6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9LFxuICBidXR0b25ncm91cDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gIH0sXG59KTtcblxuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGRldGFpbHM6IFtdLFxuICAgICAgc2VsZWN0ZWRQZXJpb2Q6IFwiXCIsXG4gICAgICBjb21wYW55OiBcIlwiLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgc2VyaWVzOiBbXSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICB0eXBlOiBcImFyZWFcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgIHR5cGU6IFwieFwiLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9TY2FsZVlheGlzOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgYXV0b1NlbGVjdGVkOiBcInpvb21cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIGN1cnZlOiBcInNtb290aFwiLFxuICAgICAgICAgIGxpbmVDYXA6IFwiYnV0dFwiLFxuICAgICAgICAgIGNvbG9yczogdW5kZWZpbmVkLFxuICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgIGRhc2hBcnJheTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICB0ZXh0OiBcIlN0b2NrIFByaWNlIE1vdmVtZW50XCIsXG4gICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgIHR5cGU6IFwic29saWRcIixcbiAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgICAgZ3JhZGllbnQ6IHtcbiAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAxLFxuICAgICAgICAgICAgaW52ZXJzZUNvbG9yczogZmFsc2UsXG4gICAgICAgICAgICBvcGFjaXR5RnJvbTogMSxcbiAgICAgICAgICAgIG9wYWNpdHlUbzogMSxcbiAgICAgICAgICAgIHN0b3BzOiBbMCwgOTAsIDEwMF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsLnRvRml4ZWQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogXCJQcmljZSBpbiBSc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgdHlwZTogXCJkYXRldGltZVwiLFxuICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUodmFsKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBkdC5nZXREYXRlKCkgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICAoZHQuZ2V0TW9udGgoKSArIDEpICtcbiAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgZHQuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlRpbWUgUGVyaW9kXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgc2hhcmVkOiBmYWxzZSxcbiAgICAgICAgICB4OiB7XG4gICAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZHQgPSBuZXcgRGF0ZSh2YWwpO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGR0LmdldERhdGUoKSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIChkdC5nZXRNb250aCgpICsgMSkgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICBkdC5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeToge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkRhc2hib2FyZFwiKTtcbiAgICBpZiAodGhpcy5wcm9wcy5jb21wYW55ICE9PSBcInNwNTAwXCIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55OiB0aGlzLnByb3BzLmNvbXBhbnkgfSwgKCkgPT4ge1xuICAgICAgICBheGlvc1xuICAgICAgICAgIC5nZXQoXCIvYXBpL3N0b2NrZGV0YWlscz9jb21wYW55PVwiICsgdGhpcy5zdGF0ZS5jb21wYW55KVxuICAgICAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogcy5kYXRhLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IHt9KVxuICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiB0cnVlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueTogdGhpcy5wcm9wcy5jb21wYW55IH0sICgpID0+IHtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAuZ2V0KFwiL2FwaS9zcDUwMFwiKVxuICAgICAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogcy5kYXRhLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiB0cnVlIH0sICgpID0+IHt9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjcmVhdGVHcmFwaCA9IChkYXlzKSA9PiB7XG4gICAgbGV0IGNsb3NlUHJpY2VEYXRhID0ge1xuICAgICAgbmFtZTogXCJDbG9zZSBQcmljZVwiLFxuICAgICAgZGF0YTogW10sXG4gICAgfTtcbiAgICBsZXQgb3BlblByaWNlRGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiT3BlbiBQcmljZVwiLFxuICAgICAgZGF0YTogW10sXG4gICAgfTtcbiAgICBsZXQgaGlnaFByaWNlRGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiSGlnaCBQcmljZVwiLFxuICAgICAgZGF0YTogW10sXG4gICAgfTtcbiAgICBsZXQgbG93UHJpY2VEYXRhID0ge1xuICAgICAgbmFtZTogXCJMb3cgUHJpY2VcIixcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG5cbiAgICBkYXlzID1cbiAgICAgIGRheXMgPT09IFwiYWxsXCJcbiAgICAgICAgPyB0aGlzLnN0YXRlLmRldGFpbHMubGVuZ3RoIC0gMVxuICAgICAgICA6IGRheXMgPiB0aGlzLnN0YXRlLmRldGFpbHMubGVuZ3RoIC0gMVxuICAgICAgICA/IHRoaXMuc3RhdGUuZGV0YWlscy5sZW5ndGggLSAxXG4gICAgICAgIDogZGF5cztcbiAgICBjb25zdCB0b0RhdGUgPSB0aGlzLnN0YXRlLmRldGFpbHNbMF1bXCJEYXRlXCJdO1xuICAgIGNvbnN0IGZyb21EYXRlID0gdGhpcy5zdGF0ZS5kZXRhaWxzW2RheXNdW1wiRGF0ZVwiXTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5zdGF0ZS5kZXRhaWxzLnNsaWNlKDAsIGRheXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFbaV07XG4gICAgICBjbG9zZVByaWNlRGF0YS5kYXRhLnB1c2goe1xuICAgICAgICB4OiBlbGVtZW50W1wiRGF0ZVwiXSxcbiAgICAgICAgeTogZWxlbWVudFtcIkNsb3NlIFByaWNlXCJdIHx8IGVsZW1lbnRbXCJDbG9zZVwiXSxcbiAgICAgIH0pO1xuXG4gICAgICBvcGVuUHJpY2VEYXRhLmRhdGEucHVzaCh7XG4gICAgICAgIHg6IGVsZW1lbnRbXCJEYXRlXCJdLFxuICAgICAgICB5OiBlbGVtZW50W1wiT3BlbiBQcmljZVwiXSB8fCBlbGVtZW50W1wiT3BlblwiXSxcbiAgICAgIH0pO1xuXG4gICAgICBoaWdoUHJpY2VEYXRhLmRhdGEucHVzaCh7XG4gICAgICAgIHg6IGVsZW1lbnRbXCJEYXRlXCJdLFxuICAgICAgICB5OiBlbGVtZW50W1wiSGlnaCBQcmljZVwiXSB8fCBlbGVtZW50W1wiSGlnaFwiXSxcbiAgICAgIH0pO1xuXG4gICAgICBsb3dQcmljZURhdGEuZGF0YS5wdXNoKHtcbiAgICAgICAgeDogZWxlbWVudFtcIkRhdGVcIl0sXG4gICAgICAgIHk6IGVsZW1lbnRbXCJMb3cgUHJpY2VcIl0gfHwgZWxlbWVudFtcIkxvd1wiXSxcbiAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLnN0YXRlLm9wdGlvbnM7XG4gICAgb3B0aW9ucy54YXhpc1tcIm1pblwiXSA9IGZyb21EYXRlO1xuICAgIG9wdGlvbnMueGF4aXNbXCJtYXhcIl0gPSB0b0RhdGU7XG4gICAgY29uc3Qgc2VyaWVzID0gW107XG4gICAgc2VyaWVzLnB1c2goY2xvc2VQcmljZURhdGEpO1xuICAgIHNlcmllcy5wdXNoKG9wZW5QcmljZURhdGEpO1xuICAgIHNlcmllcy5wdXNoKGhpZ2hQcmljZURhdGEpO1xuICAgIHNlcmllcy5wdXNoKGxvd1ByaWNlRGF0YSk7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiBzZXJpZXMsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge31cbiAgICApO1xuICB9O1xuXG4gIHNlbGVjdGVkUGVyaW9kID0gKGUpID0+IHtcbiAgICBjb25zdCBkYXlzID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUGVyaW9kID09PSBkYXlzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFBlcmlvZDogZGF5cyB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUdyYXBoKGRheXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJUaHJlZURvdHNcIiBjb2xvcj1cIiMwNTM4NkJcIiBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yICE9PSB0cnVlICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8QnV0dG9uR3JvdXBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uZ3JvdXB9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNvbnRhaW5lZCBwcmltYXJ5IGJ1dHRvbiBncm91cFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiN1wiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9IHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgICAgN0RcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiMzBcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfSBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICAgIDFNXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjkwXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0gc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgICAzTVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFsdWU9XCIxODBcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkUGVyaW9kfSBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5cbiAgICAgICAgICAgICAgICAgIDZNXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIjM2MFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9IHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgICAgMVlcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiMTgwMFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWRQZXJpb2R9IHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgICAgNVlcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhbHVlPVwiYWxsXCIgb25DbGljaz17dGhpcy5zZWxlY3RlZFBlcmlvZH0gc3R5bGUgPSB7eyBjb2xvciA6IFwiIzVDREI5NVwifX0+XG4gICAgICAgICAgICAgICAgICBBbGxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5kaXZjaGFydH0+XG4gICAgICAgICAgICAgIDxDaGFydCBcbiAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5vcHRpb25zfSBcbiAgICAgICAgICAgICAgc2VyaWVzPXt0aGlzLnN0YXRlLnNlcmllc31cbiAgICAgICAgICAgICAga2V5ID0gXCJjaGFydFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmNoYXJ0fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyB3aXRoVGhlbWU6IHRydWUgfSkoRGFzaGJvYXJkKTtcbiIsImltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIHdpdGhSb3V0ZXIsIEhhc2hSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vQWJvdXRcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5cbmltcG9ydCBDb21wYW55RGV0YWlscyBmcm9tIFwiLi9Db21wYW55RGV0YWlsc1wiO1xuaW1wb3J0IENvbXBhcmlzb24gZnJvbSBcIi4vQ29tcGFyaXNvblwiO1xuLy8gaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tIFwiLi9OYXZpZ2F0aW9uQmFyXCI7XG5pbXBvcnQgUGFnZU5vdEZvdW5kIGZyb20gXCIuL1BhZ2VOb3RGb3VuZFwiO1xuLy8gaW1wb3J0IFBlcmZvcm1hbmNlIGZyb20gXCIuL1BlcmZvcm1hbmNlXCI7XG5pbXBvcnQgUmV2ZW51ZSBmcm9tIFwiLi9SZXZlbnVlXCI7XG5pbXBvcnQgU2VjdG9ycyBmcm9tIFwiLi9TZWN0b3JzXCI7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9TaWRlQmFyXCI7XG5pbXBvcnQgU1A1MDAgZnJvbSBcIi4vU1A1MDBcIjtcbmltcG9ydCBUb3AgZnJvbSBcIi4vVG9wXCI7XG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tIFwiLi9TaW11bGF0aW9uXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMzAwO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gIH0sXG4gIGFwcEJhcjoge1xuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICB9LFxuICBkcmF3ZXJQYXBlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgfSxcbiAgLy8gbmVjZXNzYXJ5IGZvciBjb250ZW50IHRvIGJlIGJlbG93IGFwcCBiYXJcbiAgdG9vbGJhcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgcGFkZGluZzogMzAsXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxuICAgIGJhY2tncm91bmRDb2xvciA6IFwid2hpdGVcIixcbiAgICBmbGV4R3JvdzogMSxcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcbiAgICBtaW5XaWR0aDogXCI0ODBweFwiLFxuICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gIH0sXG59KTtcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb21wYW55TmFtZXM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkhvbWVcIik7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SGFzaFJvdXRlcj5cbiAgICAgICAgPEFwcEJhclxuICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9XG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiM1Q0RCOTVcIiwgY29sb3I6IFwiIzA1Mzg2QlwifX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CYXIgLz5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfVxuICAgICAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXG4gICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFuY2hvcj1cImxlZnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+U3RvY2sgVHJlbmRzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPFNpZGVCYXIgLz5cbiAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQgPSB7TWFpbn0vPlxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9ob21lXCIgY29tcG9uZW50ID0ge01haW59Lz5cbiAgICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz4gKi99XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BlcmZvcm1hbmNlXCIgY29tcG9uZW50PXtQZXJmb3JtYW5jZX0gLz4gKi99XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgcGF0aD1cIi90b3AvOm51bS86dHlwZVwiXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgbnVtLCB0eXBlIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9ID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPFRvcCBrZXk9e2BudW09JHtudW19JnR5cGU9JHt0eXBlfWB9IHsuLi5wcm9wc30gLz47XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VjdG9yc1wiIGNvbXBvbmVudD17U2VjdG9yc30gLz5cbiAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICBwYXRoPVwiL2NvbXBhbnlkZXRhaWxzLzpjb21wYW55XCJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBjb21wYW55IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9ID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29tcGFueURldGFpbHMga2V5PXtgY29tcGFueT0ke2NvbXBhbnl9YH0gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgIHBhdGg9XCIvcmV2ZW51ZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UmV2ZW51ZSBjb21wYW55TmFtZXM9e3RoaXMuc3RhdGUuY29tcGFueU5hbWVzfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NwNTAwXCIgY29tcG9uZW50PXtTUDUwMH0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY29tcGFyaXNvblwiIGNvbXBvbmVudD17Q29tcGFyaXNvbn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2ltdWxhdGlvblwiIGNvbXBvbmVudD17U2ltdWxhdGlvbn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17UGFnZU5vdEZvdW5kfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9IYXNoUm91dGVyPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKSh3aXRoUm91dGVyKEhvbWUpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1haW5cIik7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiXFxpbWFnZXNcXHN0b2NrczMuanBnXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47IiwiaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluaywgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBwYXBlcjoge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgfSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcImluaXRpYWxcIixcbiAgfSxcbiAgZ3JpZDoge1xuICAgIC8vIFwiJjpob3ZlclwiOiB7XG4gICAgLy8gICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0FERDhFMFwiLFxuICAgIC8vIH0sXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBmb250U2l6ZSA6IDI0LFxuICB9LFxufSk7XG5cbmNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzZWxlY3RlZENvbXBhbnk6IFwiIFwiLCBjb21wYW55TmFtZXM6IFtdIH07XG4gIH1cblxuICBzZWxlY3RlZENvbXBhbnkgPSAoZSwgdmFsKSA9PiB7XG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENvbXBhbnk6IHZhbCB9LCAoKSA9PiB7XG4gICAgICBoaXN0b3J5LnB1c2goXCIvY29tcGFueWRldGFpbHMvXCIgKyB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDb21wYW55OiBcIlwiIH0sICgpID0+IHt9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb25CYXJcIik7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL2NvbXBhbnlOYW1lc1wiKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueU5hbWVzOiBzLmRhdGEgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhbnlOYW1lczogW10gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHNwYWNpbmc9ezF9PlxuICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeX0gdmFyaWFudD1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvYWJvdXRcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeX0gdmFyaWFudD1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIHsvKiA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3BlcmZvcm1hbmNlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IHZhcmlhbnQ9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgUGVyZm9ybWFuY2VcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD4gKi99XG4gICAgICAgIHsvKiA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPiAqL31cbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvY29tcGFyaXNvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvZ3JhcGh5fSB2YXJpYW50PVwiYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29tcGFyaXNvblxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfT5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9zaW11bGF0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9ID5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvZ3JhcGh5fSB2YXJpYW50PVwiYnV0dG9uXCIgXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpbXVsYXRpb25cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgc3R5bGU9e3sgXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjMwMHB4XCIsXG4gICAgICAgICAgICAgIGNvbG9yOlwiIzA1Mzg2QlwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbXBhbnkoZSwgdmFsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpZD1cInNlYXJjaCBmb3IgY29tcGFuaWVzXCJcbiAgICAgICAgICAgIGZyZWVTb2xvXG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmNvbXBhbnlOYW1lcy5tYXAoKGNvbXBhbnluYW1lKSA9PiBjb21wYW55bmFtZSl9XG4gICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc31cbiAgICAgICAgICAgICAgICBsYWJlbD1cInNlYXJjaCBmb3IgY29tcGFuaWVzXCJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjMDUzODZCXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKSh3aXRoUm91dGVyKE5hdmlnYXRpb25CYXIpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgUGFnZU5vdEZvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJQYWdlTm90Rm91bmRcIik7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxoMT5QYWdlIE5vdCBGb3VuZDwvaDE+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vdEZvdW5kO1xuIiwiaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHksIHdpdGhTdHlsZXMgIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgR1JJRF9IRUFERVJfQ0VMTF9TRVBBUkFUT1JfUkVTSVpBQkxFX0NTU19DTEFTUyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCI7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcGFwZXIgOiB7XG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmNsYXNzIFJldmVudWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdG9wQ29tcGFuaWVzOiBbXSxcbiAgICAgIG51bTogMzAsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlJldmVudWVcIik7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3ByZXZpb3VzZGF5c3RvY2tkZXRhaWxzXCIpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBjb21wYW55U3RvY2tEZXRhaWxzID0gcy5kYXRhO1xuICAgICAgICAgIGNvbXBhbnlTdG9ja0RldGFpbHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFbXCJSZXZlbnVlXCJdIC0gYltcIlJldmVudWVcIl07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29tcGFueVN0b2NrRGV0YWlscyA9IGNvbXBhbnlTdG9ja0RldGFpbHMuc2xpY2UoMCwgdGhpcy5zdGF0ZS5udW0pO1xuICAgICAgICAgIGxldCB0b3BDb21wYW5pZXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcGFueVN0b2NrRGV0YWlscy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb21wYW55U3RvY2tEZXRhaWxzW2luZGV4XTtcbiAgICAgICAgICAgIHRvcENvbXBhbmllcy5wdXNoKGVsZW1lbnRbXCJDb21wYW55XCJdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHsgdG9wQ29tcGFuaWVzOiB0b3BDb21wYW5pZXMsIGxvYWRpbmc6IGZhbHNlIH0sXG4gICAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcENvbXBhbmllczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcENvbXBhbmllczogW10sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICA8TG9hZGVyIHR5cGU9XCJUaHJlZURvdHNcIiBjb2xvcj1cIiMwNTM4NkJcIiBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgICAgY29sb3IgOiBcIiM1Q0RCOTVcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XG4gICAgICAgICAgICAgICAgVG9wIHt0aGlzLnN0YXRlLm51bX0gQ29tcGFuaWVzIFJldmVudWUgd2lzZVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUudG9wQ29tcGFuaWVzLm1hcCgoY29tcGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgIGtleT17dXVpZHY0KCl9XG4gICAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvY29tcGFueWRldGFpbHMvXCIgKyBjb21wYW55LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIG1hcmdpbjogXCIxMHB4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7IGNsYXNzZXMucGFwZXIgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgPntjb21wYW55fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgUmV2ZW51ZTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IHdpdGhUaGVtZTogdHJ1ZSB9KShSZXZlbnVlKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuY2xhc3MgU1A1MDAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzcDUwMDogW10gfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNQNTAwXCIpO1xuICAgIC8vIGF4aW9zXG4gICAgLy8gICAuZ2V0KFwiL3NwNTAwXCIpXG4gICAgLy8gICAudGhlbigocykgPT4ge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgc3A1MDA6IHMuZGF0YSwgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC50aGVuKCgpID0+IHt9KVxuICAgIC8vICAgLmNhdGNoKChlKSA9PiB7fSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8UGFwZXJcbiAgICAgICAgICBlbGV2YXRpb249ezB9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgY29sb3IgOiBcIiM1Q0RCOTVcIlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+e1wiU1AgNTAwXCJ9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8RGFzaGJvYXJkIGNvbXBhbnk9XCJzcDUwMFwiIC8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU1A1MDA7XG4iLCJpbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFNlY3RvcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VjdG9yczogW10sXG4gICAgICBzZWxlY3RlZFNlY3RvcjogXCJcIixcbiAgICAgIHNlbGVjdGVkU2VjdG9yQ29tcGFuaWVzOiBbXSxcbiAgICAgIHNlbGVjdGVkQ29tcGFueTogXCJcIixcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTZWN0b3JzXCIpO1xuICAgIGNvbnN0IHsgaGlzdG9yeSwgbG9jYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKFwic3RhdGVcIiBpbiBsb2NhdGlvbiAmJiBsb2NhdGlvbi5zdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgIH1cblxuICAgIGF4aW9zLmdldChcImFwaS9zZWN0b3JzXCIpLnRoZW4oKHMpID0+IHtcbiAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWN0b3JzOiBzLmRhdGEgfSwgKCkgPT4ge30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlY3RvcnM6IFtdIH0sICgpID0+IHt9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBzZWxlY3RlZFNlY3RvciA9IChlLCB2YWwpID0+IHtcbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7IHNlbGVjdGVkU2VjdG9yOiBcIlwiLCBzZWxlY3RlZFNlY3RvckNvbXBhbmllczogW10gfSxcbiAgICAgICAgKCkgPT4ge31cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZFNlY3RvcjogdmFsLFxuICAgICAgICAgIHNlbGVjdGVkU2VjdG9yQ29tcGFuaWVzOiB0aGlzLnN0YXRlLnNlY3RvcnNbdmFsXSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge31cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGVjdGVkQ29tcGFueSA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ29tcGFueTogdmFsIH0sICgpID0+IHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKFwiY29tcGFueWRldGFpbHMvXCIgKyB2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMuc3RhdGUuc2VjdG9ycy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgIDxBdXRvY29tcGxldGVcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBhbGlnbjogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlY3RvcihlLCB2YWwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGlkPVwic2VhcmNoIGZvciBzZWN0b3JcIlxuICAgICAgICAgICAgZnJlZVNvbG9cbiAgICAgICAgICAgIG9wdGlvbnM9e09iamVjdC5rZXlzKHRoaXMuc3RhdGUuc2VjdG9ycykubWFwKChzZWN0b3IpID0+IHNlY3Rvcil9XG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9ufVxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJzZWFyY2ggZm9yIHNlY3RvclwiXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7dGhpcy5zdGF0ZS5zZWxlY3RlZFNlY3RvckNvbXBhbmllcy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgIDxBdXRvY29tcGxldGVcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBhbGlnbjogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbXBhbnkodmFsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpZD1cInNlYXJjaCBmb3IgY29tcGFuaWVzXCJcbiAgICAgICAgICAgIGZyZWVTb2xvXG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnNlbGVjdGVkU2VjdG9yQ29tcGFuaWVzLm1hcChcbiAgICAgICAgICAgICAgKGNvbXBhbnkpID0+IGNvbXBhbnlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9ufVxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJzZWFyY2ggZm9yIGNvbXBhbnlcIlxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0b3JzO1xuIiwiaW1wb3J0IHtcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25EZXRhaWxzLFxuICBBY2NvcmRpb25TdW1tYXJ5LFxuICBQYXBlcixcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxuICBoZWFkaW5nOiB7XG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNSksXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcbiAgfSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBcbiAgICBcIiYgPiAqXCI6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICBib3JkZXI6ICcwcHgnLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgY29sb3I6IFwiIzVDREI5NVwiXG4gIH0sXG4gIHBhcGVyMToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIFxuICAgIFwiJiA+ICpcIjoge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIC8vIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIGJvcmRlcjogJzBweCcsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICBjb2xvcjogXCIjMDUzODZCXCJcbiAgfSxcbn0pO1xuXG5jbGFzcyBTaWRlQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2lkZWJhclwiKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0gc3R5bGUgPSB7e1xuICAgICAgICAgIHBhZGRpbmcgOiAnMHB4JyxcbiAgICAgICAgfX0+XG4gICAgICAgICAgPEFjY29yZGlvbiBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICAgICAgICAgICAgYm9yZGVyIDogXCJub25lXCJcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgaWQ9XCJ0b3AxMFwiID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlRPUCAxMDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIHRvPXt7IHBhdGhuYW1lOiBcIi90b3AvMTAvYnV5XCIgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXIxfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPkJVWTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdG9wLzEwL3NlbGxcIiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcjF9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+U0VMTDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgPEFjY29yZGlvbiBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDUzODZCXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiM1Q0RCOTVcIixcbiAgICAgICAgICAgICAgYm9yZGVyIDogXCJub25lXCJcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5UT1AgMzA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdG9wLzMwL2J1eVwiIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyMX0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5CVVk8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL3RvcC8zMC9zZWxsXCIgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXIxfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlNFTEw8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgICB7LyogPGRpdiBzdHlsZSA9IHt7XG4gICAgICAgICAgICBwYWRkaW5nIDogJzJweCcsXG4gICAgICAgICAgfX0+PC9kaXY+ICovfVxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgIDxOYXZMaW5rIHRvPXt7IHBhdGhuYW1lOiBcIi9zZWN0b3JzXCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlNFQ1RPUlM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICA8TmF2TGluayB0bz17eyBwYXRobmFtZTogXCIvc3A1MDBcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+UyBBTkQgUCA1MDA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICA8TmF2TGluayB0bz17eyBwYXRobmFtZTogXCIvcmV2ZW51ZVwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj4gVE9QIFJFVkVOVUU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2lkZUJhcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBHcmlkLFxuICBGb3JtQ29udHJvbCxcbiAgSW5wdXRMYWJlbCxcbiAgU2VsZWN0LFxuICBNZW51SXRlbSxcbiAgUGFwZXIsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHVuZGVyc2NvcmUgZnJvbSBcInVuZGVyc2NvcmVcIjtcbmltcG9ydCB7XG4gIEdyaWRUb29sYmFyQ29udGFpbmVyLFxuICBHcmlkVG9vbGJhckV4cG9ydCxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9kYXRhLWdyaWRcIjtcblxuXG5cbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcblxuXG5jbGFzcyBTaW11bGF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkQ29tcGFueTogXCJcIixcbiAgICAgIGNvbXBhbnlOYW1lczogW10sXG4gICAgICBkYXlzOiAxLFxuICAgICAgaW52ZXN0bWVudDogMSxcbiAgICAgIHN0YXJ0ZGF0ZTogXCIyMDE3LTAzLTEwXCIsXG4gICAgICByZXNwb25zZTogW10sXG4gICAgICBjb2xzOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgc2VsZGF5czogXCJcIixcbiAgICAgIHNpbXVsYXRpb250b3A6IFtdLFxuICAgICAgY29tcGFueXNlbGVjdGVkYWZ0ZXJzaW11bGF0aW9uIDogXCJcIixcbiAgICAgIGNvbXBhbnlkZXRhaWxzYWZ0ZXJzaW11bGF0aW9uIDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IFNQNTAwID1cbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhaWtyNzg5L3N0b2NrLWFuYWx5c2lzLXRvb2wtMTAxMS9tYXN0ZXIvRGF0YS9TUDUwMENvbXBhbmllcy5qc29uXCI7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoU1A1MDApXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBTUDUwMENvbXBhbmllcyA9IE9iamVjdC5rZXlzKHVuZGVyc2NvcmUuaW52ZXJ0KHMuZGF0YSkpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYW55TmFtZXM6IFNQNTAwQ29tcGFuaWVzIH0sICgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiU2ltdWxhdGlvblwiKTtcbiAgfTtcblxuICBvbkNsaWNrU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPVxuICAgICAgXCJjb21wYW55PVwiICtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wYW55ICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiaW52ZXN0bWVudD1cIiArXG4gICAgICB0aGlzLnN0YXRlLmludmVzdG1lbnQgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJkYXlzPVwiICtcbiAgICAgIHRoaXMuc3RhdGUuZGF5cyArXG4gICAgICBcIiZcIiArXG4gICAgICBcImRhdGU9XCIgK1xuICAgICAgdGhpcy5zdGF0ZS5zdGFydGRhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3NpbXVsYXRpb24/XCIgKyBwYXJhbXMpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCByZXNwID0gcy5kYXRhO1xuICAgICAgICAgIGlmIChyZXNwLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBsZXQgY29scyA9IFtdO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzcFswXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgY29scy5wdXNoKHsgZmllbGQ6IGtleSwgaGVhZGVyTmFtZToga2V5LCB3aWR0aDogMTUwIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhyZXNwW2ldKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNwW2ldW1wiaWRcIl0gPSBpO1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaChyZXNwW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgeyByZXNwb25zZTogcm93cywgY29sczogY29scywgbG9hZGluZzogZmFsc2UgfSxcbiAgICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBvblNlbGVjdERheXMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGRheXMgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZGF5czogZGF5cyB9LCAoKSA9PiB7fSk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3NpbXVsYXRpb250b3BcIiArIFwiP1wiICsgXCJkYXlzPVwiICsgZGF5cylcbiAgICAgIC50aGVuKChzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHMuZGF0YSk7XG4gICAgICAgIGlmIChzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpbXVsYXRpb250b3A6IHMuZGF0YSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9KTtcbiAgfTtcblxuXG5cbiAgZ2V0RGF0YUZyb21VUkwgPSAodXJsKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xuICAgIH0sIDIwMDApO1xuXG4gIFxuXG4gIGV4cG9ydFRvQ1NWID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZFRvb2xiYXJDb250YWluZXI+XG4gICAgICAgIDxHcmlkVG9vbGJhckV4cG9ydCAvPlxuICAgICAgPC9HcmlkVG9vbGJhckNvbnRhaW5lcj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudCA9IFwic3VidGl0bGUxXCIgc3R5bGUgPSB7eyBjb2xvciA6IFwiIzA1Mzg2QlwifX0+U2VsZWN0IG51bWJlciBvZiBkYXlzIGZvciBzaW11bGF0aW9uIDogPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e1xuICAgICAgICAgICAgcGFkZGluZyA6ICczcHgnXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1pbldpZHRoOiBcIjE1MHB4XCIgfX0gdmFyaWFudD1cIm91dGxpbmVkXCI+XG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBzdHlsZSA9IHt7IGNvbG9yIDogXCIjNUNEQjk1XCJ9fT5kYXlzPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBzdHlsZT17eyBcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUNEQjk1XCJcbiAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJkYXlzXCJcbiAgICAgICAgICAgICAgaWQ9XCJkYXlzXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3REYXlzfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxkYXlzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7WzMwLCA2MCwgOTAsIDE4MCwgMzYwLCA3MjBdLm1hcChcbiAgICAgICAgICAgICAgICAocGVyaW9kKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtIHZhbHVlPXtwZXJpb2R9PntwZXJpb2R9PC9NZW51SXRlbT47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8ZGl2IHN0eWxlID0ge3tcbiAgICAgICAgICAgIHBhZGRpbmcgOiAnMjBweCcsXG4gICAgICAgICAgfX0+PC9kaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUuc2ltdWxhdGlvbnRvcC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9XCJTaW11YWx0aW9uIFJlc3VsdHNcIiBtaW5XaWR0aD0gXCI2NTBcIiBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBzdHlsZSA9IHt7IGNvbG9yIDogXCIjMDUzODZCXCIsIGJhY2tncm91bmRDb2xvcjogXCIjNUNEQjk1XCIsfX0+XG4gICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgdmFyaWFudCA9IFwiaDVcIj4gU2VjdXJpdHkgSWQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgdmFyaWFudCA9IFwiaDVcIj5Db21wYW55PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHZhcmlhbnQgPSBcImg1XCI+QWN0dWFsIEF2ZXJhZ2UgUmV0dXJuczwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiB2YXJpYW50ID0gXCJoNVwiPk1pbmltdW0gUHJlZGljdGlvbiBSYW5nZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiB2YXJpYW50ID0gXCJoNVwiPk1heGltdW0gUHJlZGljdGlvbiBSYW5nZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2ltdWxhdGlvbnRvcC5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuQ29tcGFueX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm93LnNlY3VyaXR5X2lkfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuY29tcGFueX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmFjdHVhbF9hdmVyYWdlX3JldHVybl9wZXJjZW50fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cubWluaW11bV9wcmVkaWN0aW9uX3JhbmdlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cubWF4aW11bV9wcmVkaWN0aW9uX3JhbmdlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWRMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiUmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IHtyb3dbXCJzZWN1cml0eV9pZFwiXSArIFwiX1wiICsgdGhpcy5zdGF0ZS5zZWxkYXlzICsgXCIuY3N2XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lID0gXCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwb3J0RmlsZSA9IHsoKSA9PiAgUHJvbWlzZS5yZXNvbHZlKHRoaXMuIGdldERhdGFGcm9tVVJMKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1ZlbnVHb3BhbEppbGxhL1N0b2NrQW5hbHlzaXNUb29sL21haW4vRGF0YS9TUDUwMF9zaW11bGF0aW9uX3Jlc3VsdHMvXCIgKyByb3dbXCJzZWN1cml0eV9pZFwiXSArIFwiX1wiICsgdGhpcy5zdGF0ZS5zZWxkYXlzICsgXCJkYXlzLmNzdlwiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRGaWxlID0geygpID0+ICBQcm9taXNlLnJlc29sdmUodGhpcy4gZ2V0RGF0YUZyb21VUkwoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Fpa3I3ODkvc3RvY2staW5kZXgtcmlzay9tYXN0ZXIvRGF0YS9TaW11bGF0aW9uUmVzdWx0L1wiICsgcm93W1wic2VjdXJpdHlfaWRcIl0gKyBcIl9cIiArIHRoaXMuc3RhdGUuc2VsZGF5cyArIFwiLmNzdlwiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgKX0pfVxuICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltdWxhdGlvbjtcbiIsImltcG9ydCB7IFBhcGVyLCBUeXBvZ3JhcGh5LCB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCI7XG5cblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBwYXBlciA6IHtcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY2xhc3MgVG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgbnVtOiAxMCxcbiAgICAgIHR5cGU6IFwiYnV5XCIsXG4gICAgICB0b3BDb21wYW5pZXM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlRvcFwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICBjb25zdCB7IG1hdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbnVtLCB0eXBlIH0gPSBtYXRjaC5wYXJhbXM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG51bTogbnVtLCB0eXBlOiB0eXBlLCBsb2FkaW5nOiB0cnVlIH0sICgpID0+IHt9KTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IFxuICAgIFwibnVtPVwiICsgbnVtICtcbiAgICBcIiZcIiArIFxuICAgIFwidHlwZT1cIiArIHR5cGU7XG5cbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXBpL3RvcGJ1eXNlbGw/XCIgKyBwYXJhbXMpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBjb21wYW55U3RvY2tEZXRhaWxzID0gcy5kYXRhO1xuICAgICAgICAgIGNvbXBhbnlTdG9ja0RldGFpbHMgPSBjb21wYW55U3RvY2tEZXRhaWxzLnNsaWNlKDAsIG51bSk7XG4gICAgICAgICAgbGV0IHRvcENvbXBhbmllcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wYW55U3RvY2tEZXRhaWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNvbXBhbnlTdG9ja0RldGFpbHNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgICAgICB0b3BDb21wYW5pZXMucHVzaChlbGVtZW50W1wiY29tcGFueVwiXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7IHRvcENvbXBhbmllczogdG9wQ29tcGFuaWVzLCBsb2FkaW5nOiBmYWxzZSB9LFxuICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3BDb21wYW5pZXM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3BDb21wYW5pZXM6IFtdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7fSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIFxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkZXIgdHlwZT1cIlRocmVlRG90c1wiIGNvbG9yPVwiIzA1Mzg2QlwiIGhlaWdodD17ODB9IHdpZHRoPXs4MH0vPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UGFwZXJcbiAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTM4NkJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PlxuICAgICAgICAgICAgICAgIFRPUCB7dGhpcy5zdGF0ZS5udW19IENPTVBBTklFUyBGT1J7XCIgXCJ9XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudHlwZSA9PT0gXCJidXlcIiA/IFwiSU5WRVNUSU5HXCIgOiBcIlRSQURJTkdcIn1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvcENvbXBhbmllcy5tYXAoKGNvbXBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2NvbXBhbnlkZXRhaWxzL1wiICsgY29tcGFueSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBhcGVyXG4gICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBtYXJnaW46IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHsgY2xhc3Nlcy5wYXBlciB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj57Y29tcGFueX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICBcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywgeyB3aXRoVGhlbWU6IHRydWUgfSkoVG9wKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoXG4vLyAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuLy8gICAgIDxBcHAgLz5cbi8vICAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4vLyApO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gPEFwcCAvPjtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBvcHBlci5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwZXhjaGFydHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvYWRlci1zcGlubmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuZGVyc2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=