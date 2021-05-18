const axios = require("axios");
export default async (req, res, next) => {
  try {
    console.log("simulationtop");
    // const topurl =
    //   "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/Simulation/top_seldays.csv";
    // const topurl =
      // "https://raw.githubusercontent.com/saikr789/stock-index-risk/master/Data/Simulation/top_seldays.csv";
    const topurl =
      "https://raw.githubusercontent.com/VenuGopalJilla/StockAnalysisTool/main/Data/SP500_simulation_results/top_seldays_Results.csv";
    const days = req.query["days"];
    console.log(days);
    axios
      .get(topurl.replace("sel", days))
      .then((s) => {
        if (s.status === 200) {
          console.log(s);
          let response = [];
          let rows = s.data.split("\n");
          const header = rows[0].split(",");
          for (let i = 1; i < rows.length; i++) {
            const data = rows[i].split(",");
            response.push({
              company: data[0],
              average_return_percent: data[1],
            });
          }
          res.send(response);
        } else {
          res.status(404).send({ error: "error" });
        }
      })
      .catch((e) => {
        res.status(404).send({ error: "error" });
        console.log(e);
      });
  } catch (error) {
    res.status(404).send({ error: "error" });
  }
};
