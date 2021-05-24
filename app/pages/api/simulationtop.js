const axios = require("axios");
export default async (req, res, next) => {
  try {
    console.log("simulationtop");
    // const topurl =
    //   "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/Simulation/top_seldays.csv";
    const topurl =
      "https://raw.githubusercontent.com/saikr789/stock-index-risk/master/Data/SimulationResult/top_seldays.csv";
    // const topurl =
      // "https://raw.githubusercontent.com/VenuGopalJilla/StockAnalysisTool/main/Data/SP500_simulation_results/top_seldays_Results.csv";
    const days = req.query["days"];
    axios
      .get(topurl.replace("seldays", days))
      .then((s) => {
        if (s.status === 200) {
          
          let response = [];
          let rows = s.data.split("\n");
          const header = rows[0].split(",");
          for (let i = 1; i < rows.length; i++) { 
            const data = rows[i].split(",");
            if (data.length < 3) {
              continue;
            }
            response.push({
              company: data[0],
              security_id: data[1],
              average_return_percent: data[2],
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
