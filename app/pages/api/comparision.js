const axios = require("axios");

export default async (req, res, next) => {
  try {
    const query = req.query;
    const days = parseInt(query["days"]);
    const rate = parseFloat(query["rate"]) / 100;
    let company = req.query["company"];
    company = company.toUpperCase();
    const companywithidURL =
      "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/companywithid.json";
    const grstockdetailsURL =
      "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/GRStock";
    axios
      .get(companywithidURL)
      .then((s) => {
        if (s.status === 200) {
          const companywithid = s.data;
          const code = parseInt(companywithid[company]);
          axios
            .get(grstockdetailsURL + "/" + "gr" + code + ".csv")
            .then((t) => {
              if (t.status === 200) {
                let nums = 0;
                let stockdetails = [];
                let rows = t.data.split("\n");
                const header = rows[0].split(",");
                const cpgr = header.indexOf("Close Price GR");
                const availdays = Math.min(rows.length, days);
                for (let i = 1; i < availdays; i++) {
                  const row = rows[i];
                  const cols = row.split(",");
                  if (cols[cpgr] > rate) {
                    nums = nums + 1;
                  }
                }
                const response = {
                  company: company,
                  numberOfDays: nums,
                  percentOfDays: ((nums / days) * 100).toFixed(3),
                  totalNumberOfDays: days,
                  rate: rate * 100,
                };
                res.send(response);
              }
            })
            .catch((error) => {
              console.log(error);
              res.status(404).send({ error: "error" });
            });
        } else {
          res.status(404).send({ error: "error" });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(404).send({ error: "error" });
      });
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: "error" });
  }
};
