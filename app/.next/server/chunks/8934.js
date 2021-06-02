exports.id = 8934;
exports.ids = [8934];
exports.modules = {

/***/ 8934:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3484);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1683);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);



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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [this.state.selectedCompany !== "" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
          elevation: 0,
          style: {
            display: "flex",
            padding: "15px",
            margin: "15px",
            justifyContent: "center",
            backgroundColor: "#05386B",
            color: "#5CDB95"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            variant: "subtitle1",
            children: this.state.selectedCompany
          })
        }), this.state.loading === true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default()), {
          type: "ThreeDots",
          color: "#05386B",
          height: 80,
          width: 80
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
          container: true,
          children: Object.keys(this.state.companyDetails).map(key => {
            if (this.state.companyDetails[key] === null) {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {});
            }

            if (key === "suggest" && (this.state.companyDetails[key] === "buy" || this.state.companyDetails[key] === "sell")) {
              let res = "SUGGESTION " + " -- " + this.state.companyDetails[key].toUpperCase();
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                color: "primary",
                variant: "outlined",
                label: res,
                style: {
                  margin: "5px",
                  backgroundColor: "#05386B",
                  color: "#5CDB95"
                }
              });
            } else {
              let res = key + " : " + this.state.companyDetails[key];
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                color: "primary",
                variant: "outlined",
                label: res,
                style: {
                  margin: "5px",
                  backgroundColor: "#5CDB95",
                  color: "#05386B"
                }
              });
            }
          })
        })]
      }), this.state.stockdetails.length !== 0 && this.state.stockkeys.map(key => {
        let impKeys = ["Open Price", "High Price", "Low Price", "Close Price"];

        if (impKeys.includes(key)) {
          let res = key.toUpperCase() + " : " + this.state.stockdetails[key];
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Chip, {
            color: "primary",
            variant: "outlined",
            label: res,
            style: {
              margin: "5px",
              backgroundColor: "#05386B",
              color: "#5CDB95"
            }
          });
        } else {
          let res = key + " : " + this.state.stockdetails[key];
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Chip, {
            color: "primary",
            variant: "outlined",
            label: res,
            style: {
              margin: "5px",
              backgroundColor: "#5CDB95",
              color: "#05386B"
            }
          });
        }
      }), this.state.selectedCompany !== "" && this.state.stockdetails.length !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dashboard__WEBPACK_IMPORTED_MODULE_4__.default, {
        company: this.state.selectedCompany
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles)(CompanyDetails));

/***/ })

};
;