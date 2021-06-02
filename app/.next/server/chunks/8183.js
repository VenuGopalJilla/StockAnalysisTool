exports.id = 8183;
exports.ids = [8183];
exports.modules = {

/***/ 8183:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2164);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(701);
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2302);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9613);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8222);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6847);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3750);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7394);



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
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_5__.GridToolbarContainer, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_5__.GridToolbarExport, {})
      });
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
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "subtitle1",
          style: {
            color: "#05386B"
          },
          children: "Select number of days for simulation : "
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          style: {
            padding: '3px'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
          style: {
            minWidth: "150px"
          },
          variant: "outlined",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {
            style: {
              color: "#5CDB95"
            },
            children: "days"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Select, {
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
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                value: period,
                children: period
              });
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          style: {
            padding: '20px'
          }
        }), this.state.simulationtop.length === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
          component: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Paper,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
            className: "Simualtion Results",
            minWidth: "650",
            "aria-label": "simple table",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
              style: {
                color: "#05386B",
                backgroundColor: "#5CDB95"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                  variant: "h5",
                  children: " Security Id"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                  align: "right",
                  variant: "h5",
                  children: "Company"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                  align: "right",
                  variant: "h5",
                  children: "Actual Average Returns"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                  align: "right",
                  variant: "h5",
                  children: "Minimum Prediction Range"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                  align: "right",
                  variant: "h5",
                  children: "Maximum Prediction Range"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
              children: this.state.simulationtop.map(row => {
                console.log(row);
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                    component: "th",
                    scope: "row",
                    children: row.security_id
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                    align: "right",
                    children: row.company
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                    align: "right",
                    children: row.actual_average_return_percent
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                    align: "right",
                    children: row.minimum_prediction_range
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                    align: "right",
                    children: row.maximum_prediction_range
                  })]
                }, row.Company);
              })
            })]
          })
        })]
      })
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Simulation);

/***/ })

};
;