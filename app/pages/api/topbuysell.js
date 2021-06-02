const underscore = require("underscore");
const axios = require("axios");

export default async (req, res, next) => {
  try {
    const companywithidURL =
      "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/companywithid.json";
    const topbuyselltockdetailsURL =
      "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011-data/master/Data/Top/bs_180.csv";
    let company = req.query["company"];
    const type = req.query["type"];
    if (company === undefined) {
      axios
        .get(topbuyselltockdetailsURL.replace("bs", type))
        .then((t) => {
          if (t.status === 200) {
            let topbuyselltockdetails = [];
            let rows = t.data.split("\n");
            const header = rows[0].split(",");
            for (let i = 1; i < rows.length; i++) {
              const row = rows[i];
              const cols = row.split(",");
              var result = cols.reduce(function (result, field, index) {
                result[
                  header[index].replace(/(\r\n|\n|\r)/gm, "")
                ] = field.replace(/(\r\n|\n|\r)/gm, "");
                return result;
              }, {});
              topbuyselltockdetails.push(result);
            }
            res.send(topbuyselltockdetails);
          } else {
            res.status(404).send({ error: "error" });
          }
        })
        .catch((error) => {
          console.log(error);
          res.status(404).send({ error: "error" });
        });
    } else {
      company = company.toUpperCase();
      axios
        .get(companywithidURL)
        .then((s) => {
          if (s.status === 200) {
            const companywithid = s.data;
            const code = parseInt(companywithid[company]);
            axios
              .get(previousdaystockdetailsURL)
              .then((t) => {
                if (t.status === 200) {
                  let rows = t.data.split("\n");
                  const header = rows[0].split(",");
                  const codeindex = header.indexOf("Code");
                  for (let i = 0; i < rows.length; i++) {
                    const row = rows[i];
                    const cols = row.split(",");
                    if (parseInt(cols[codeindex]) === code) {
                      var result = cols.reduce(function (result, field, index) {
                        result[
                          header[index].replace(/(\r\n|\n|\r)/gm, "")
                        ] = field.replace(/(\r\n|\n|\r)/gm, "");
                        return result;
                      }, {});
                      res.send(result);
                      break;
                    }
                  }
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
    }
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: "error" });
  }
};
