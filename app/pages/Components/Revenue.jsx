import { Paper, Typography, withStyles  } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Loader from "react-loader-spinner";
import { GRID_HEADER_CELL_SEPARATOR_RESIZABLE_CSS_CLASS } from "@material-ui/data-grid";

const styles = (theme) => ({
  paper : {
    "&:hover": {
      color: "blue",
    },
  },
});

class Revenue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topCompanies: [],
      num: 30,
      loading: true,
    };
  }

  componentDidMount = () => {
    console.log("Revenue");
    axios
      .get("/api/previousdaystockdetails")
      .then((s) => {
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
          this.setState(
            { topCompanies: topCompanies, loading: false },
            () => {}
          );
        } else {
          this.setState({ topCompanies: [], loading: false }, () => {});
        }
      })
      .catch((e) => {
        console.log(e);
        this.setState({ topCompanies: [], loading: false }, () => {});
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Loader type="ThreeDots" color="#05386B" height={80} width={80}/>
        ) : (
          <div>
            <Paper
              elevation={0}
              style={{
                display: "flex",
                padding: "15px",
                margin: "15px",
                justifyContent: "center",
                backgroundColor: "#05386B",
                color : "#5CDB95"
              }}
            >
              <Typography variant="subtitle1">
                Top {this.state.num} Companies Revenue wise
              </Typography>
            </Paper>
            {this.state.topCompanies.map((company) => {
              return (
                <NavLink
                  style={{ textDecoration: "none" }}
                  key={uuidv4()}
                  to={{
                    pathname: "/companydetails/" + company,
                  }}
                >
                  <Paper
                    elevation={0}
                    style={{ display: "flex", padding: "10px", margin: "10px", justifyContent: "center", }}
                    className = { classes.paper }
                  >
                    <Typography variant="subtitle2" >{company}</Typography>
                  </Paper>
                </NavLink>
              );
            })}
          </div>
        )}
      </React.Fragment>
    );
  }
}

// export default Revenue;
export default withStyles(styles, { withTheme: true })(Revenue);
