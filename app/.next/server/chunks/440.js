exports.id = 440;
exports.ids = [440];
exports.modules = {

/***/ 440:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2164);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6798);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1683);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2146);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3484);



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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        container: true,
        spacing: 2,
        direction: "row",
        justify: "flex-start",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          variant: "subtitle1",
          style: {
            color: "#05386B"
          },
          children: "Parameters for Comparison : "
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          style: {
            padding: '3px'
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          xs: 4,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_8__/* .default */ .ZP, {
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
            renderInput: params => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, _objectSpread(_objectSpread({}, params), {}, {
              label: "Select Multiple Companies",
              margin: "normal",
              variant: "outlined",
              helperText: this.state.error,
              error: this.state.error !== ""
            }))
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
            style: {
              minWidth: "150px"
            },
            variant: "outlined",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.InputLabel, {
              children: "trading period"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Select, {
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
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                  value: this.state.timePeriod[period],
                  children: period
                });
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          xs: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {
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
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            variant: "outlined",
            size: "large",
            onClick: this.onClickSubmit,
            style: {
              backgroundColor: "#05386B",
              color: "#5CDB95"
            },
            children: "Submit"
          })
        })]
      }), this.state.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default()), {
        type: "ThreeDots",
        color: "#05386B",
        height: 80,
        width: 80
      }) : this.state.stockdetails.length !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        container: true,
        spacing: 1,
        direction: "row",
        justify: "flex-start",
        alignItems: "center",
        children: Object.keys(this.state.stockdetails).map(company => {
          const element = this.state.stockdetails[company];
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
            item: true,
            xs: 6,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Paper, {
              style: {
                display: "flex",
                padding: "15px",
                margin: "15px",
                justifyContent: "center"
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
                to: {
                  pathname: "companydetails/" + element["company"]
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                  variant: "h6",
                  children: element["company"]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
              variant: "h6",
              children: ["In the last ", period[element["totalNumberOfDays"]], ", for", " ", element["percentOfDays"], " percent of trading days close price growth rate was more than ", element["rate"], " %"]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dashboard__WEBPACK_IMPORTED_MODULE_7__.default, {
              company: element["company"]
            }), this.state.stockkeys.map((key, i) => {
              let res = key + " : " + element[key];
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Chip, {
                color: "primary",
                variant: "outlined",
                label: res,
                style: {
                  margin: "5px"
                }
              });
            })]
          });
        })
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Comparison);

/***/ })

};
;