exports.id = 3484;
exports.ids = [3484];
exports.modules = {

/***/ 3484:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2543);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1683);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(701);
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_6__);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import Chart from "react-apexcharts";



const Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4188, 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4188)],
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
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: this.state.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default()), {
        type: "ThreeDots",
        color: "#05386B",
        height: 80,
        width: 80
      }) : this.state.error !== true && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
          className: classes.buttongroup,
          "aria-label": "contained primary button group",
          variant: "outlined",
          style: {
            display: "flex",
            justifyContent: "center",
            margin: "10px",
            backgroundColor: "#05386B"
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "7",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "7D"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "30",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "1M"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "90",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "3M"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "180",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "6M"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "360",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "1Y"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "1800",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "5Y"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
            value: "all",
            onClick: this.selectedPeriod,
            style: {
              color: "#5CDB95"
            },
            children: "All"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: classes.divchart,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Chart, {
            options: this.state.options,
            series: this.state.series,
            className: classes.chart
          }, "chart")
        })]
      })
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(styles, {
  withTheme: true
})(Dashboard));

/***/ })

};
;