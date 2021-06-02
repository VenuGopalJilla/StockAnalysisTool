(function() {
var exports = {};
exports.id = 6170;
exports.ids = [6170];
exports.modules = {

/***/ 3319:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fs = __webpack_require__(5747);

const axios = __webpack_require__(2376);

const csv = __webpack_require__(1198);

const moment = __webpack_require__(2470);

const underscore = __webpack_require__(2164);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res, next) => {
  try {
    let filepath = "F:\\PracticumProject\\stock-analysis-tool-1011\\Data\\simulation\\secid_Next_30_days.csv";
    const companywithidURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/SP500Companies.json";
    let simulationURL = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/Simulation/secid.csv";
    const date = moment(req.query["date"], "YYYY-MM-DD").unix();
    const days = parseInt(req.query["days"]);
    const investment = parseFloat(req.query["investment"]);
    const company = req.query["company"].toUpperCase();
    axios.get(companywithidURL).then(async s => {
      if (s.status === 200) {
        const resp = underscore.invert(s.data);
        const secid = resp[company];
        await computeFromURL(simulationURL.replace("secid", secid), date, days, investment).then(s => {
          res.send(s);
        }).catch(e => {
          res.status(404).send({
            error: "error"
          });
          console.log(e);
        }); // await compute(
        //   filepath.replace("secid", secid),
        //   date,
        //   days,
        //   investment
        // )
        //   .then((s) => {
        //     res.send(s);
        //   })
        //   .catch((e) => {
        //     res.status(404).send({ error: "error" });
        //     console.log(e);
        //   });
      } else {
        res.status(404).send({
          error: "error"
        });
      }
    }).catch(e => {
      res.status(404).send({
        error: "error"
      });
      console.log(e);
    });
  } catch (error) {
    res.status(404).send({
      error: "error"
    });
  }
});

const compute = async (filepath, date, days, investment) => {
  return new Promise((resolve, reject) => {
    try {
      if (fs.existsSync(filepath)) {
        let response = [];
        let stream = fs.createReadStream(filepath);
        let start = false;
        let num = 0;
        let invested = false;
        let shares = 0;
        let enddata = {};
        csv.parseStream(stream, {
          headers: true
        }).on("data", data => {
          enddata = data;
          const cur = moment(data["date"], "YYYY-MM-DD").unix();

          if (cur >= date) {
            start = true;
          }

          if (start) {
            num = num + 1;

            if (data["invest"] === "True") {
              if (invested == false) {
                if (investment < parseFloat(data["close"])) {
                  response.push({});
                } else {
                  shares = Math.floor(investment / parseFloat(data["close"]));
                  invested = true;
                  response.push({
                    investment: investment.toFixed(3),
                    invest: true,
                    exit: false,
                    date: data["date"],
                    shares: shares,
                    close: parseFloat(data["close"])
                  });
                  investment = investment - shares * parseFloat(data["close"]);
                }
              }
            }

            if (data["exit"] === "True") {
              if (invested) {
                investment = investment + parseFloat(data["close"]) * shares;
                response.push({
                  investment: investment.toFixed(3),
                  invest: false,
                  exit: true,
                  date: data["date"],
                  shares: shares,
                  close: parseFloat(data["close"]),
                  investment: investment.toFixed(3)
                });
                invested = false;
              }
            }

            if (num == days) {
              if (invested) {
                investment = investment + parseFloat(data["close"]) * shares;
                investment = parseFloat(data["close"]) * shares;
                invested = false;
                response.push({
                  investment: investment.toFixed(3),
                  invest: false,
                  exit: true,
                  date: data["date"],
                  shares: shares,
                  close: parseFloat(data["close"]),
                  investment: investment.toFixed(3)
                });
              }

              throw "reached";
            }
          }
        }).on("end", () => {
          console.log("end");

          if (invested) {
            investment = parseFloat(enddata["close"]) * shares;
            invested = false;
            response.push({
              investment: investment.toFixed(3),
              invest: false,
              exit: true,
              date: enddata["date"],
              shares: shares,
              close: parseFloat(enddata["close"]),
              investment: investment.toFixed(3)
            });
          }

          resolve(response);
        }).on("error", e => {
          if (e === "reached") {
            resolve(response);
          } else {
            reject({});
          }

          console.log(e);
        });
      } else {
        reject({});
      }
    } catch (error) {
      console.log(error);
      reject({});
    }
  });
};

const computeFromURL = async (simulationURL, date, days, investment) => {
  return new Promise((resolve, reject) => {
    try {
      axios.get(simulationURL).then(s => {
        if (s.status == 200) {
          let response = [];
          let start = false;
          let num = 0;
          let invested = false;
          let shares = 0;
          let rows = s.data.split("\n");
          const header = rows[0].split(",");
          const investindex = header.indexOf("invest");
          const exitindex = header.indexOf("exit");
          const dateindex = header.indexOf("date");
          const closeindex = header.indexOf("close");

          for (let i = 1; i < rows.length; i++) {
            const data = rows[i].split(",");
            const cur = moment(data[dateindex], "YYYY-MM-DD").unix();

            if (cur >= date) {
              start = true;
            }

            if (start) {
              num = num + 1;

              if (data[investindex] === "True") {
                if (invested == false) {
                  if (investment < parseFloat(data[closeindex])) {
                    response.push({// investment: "not enough",
                    });
                  } else {
                    shares = Math.floor(investment / parseFloat(data[closeindex]));
                    invested = true;
                    response.push({
                      investment: investment.toFixed(3),
                      invest: true,
                      exit: false,
                      date: data[dateindex],
                      shares: shares,
                      close: parseFloat(data[closeindex])
                    });
                    investment = investment - parseFloat(data[closeindex]) * shares;
                  }
                }
              }

              if (data[exitindex] === "True") {
                if (invested) {
                  investment = investment + parseFloat(data[closeindex]) * shares;
                  response.push({
                    investment: investment.toFixed(3),
                    invest: false,
                    exit: true,
                    date: data[dateindex],
                    shares: shares,
                    close: parseFloat(data[closeindex])
                  });
                  invested = false;
                }
              }

              if (num == days) {
                if (invested) {
                  investment = investment + parseFloat(data[closeindex]) * shares;
                  invested = false;
                  response.push({
                    investment: investment.toFixed(3),
                    invest: false,
                    exit: true,
                    date: data[dateindex],
                    shares: shares,
                    close: parseFloat(data[closeindex])
                  });
                }

                break;
              }

              if (i == rows.length - 2) {
                if (invested) {
                  investment = investment + parseFloat(data[closeindex]) * shares;
                  response.push({
                    investment: investment.toFixed(3),
                    invest: false,
                    exit: true,
                    date: data[dateindex],
                    shares: shares,
                    close: parseFloat(data[closeindex])
                  });
                  invested = false;
                }
              }
            }
          }

          resolve(response);
        } else {
          reject({});
        }
      }).catch(e => {
        console.log(e);
        reject({});
      });
    } catch (error) {
      console.log(error);
      reject({});
    }
  });
};

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 1198:
/***/ (function(module) {

"use strict";
module.exports = require("fast-csv");;

/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ 2164:
/***/ (function(module) {

"use strict";
module.exports = require("underscore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(3319));
module.exports = __webpack_exports__;

})();