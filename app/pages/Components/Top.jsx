import { Paper, Typography, withStyles } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";
import { classnames } from "@material-ui/data-grid";


const styles = (theme) => ({
  paper : {
    "&:hover": {
      color: "blue",
    },
  },
});

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      num: 10,
      type: "buy",
      topCompanies: [],
    };
  }

  componentDidMount = () => {
    console.log("Top");
    console.log(this.props);
    const { match } = this.props;
    const { num, type } = match.params;
    this.setState({ num: num, type: type, loading: true }, () => {});

    const params = 
    "num=" + num +
    "&" + 
    "type=" + type;

    console.log(params);

    axios
      .get("/api/topbuysell?" + params)
      .then((s) => {
        if (s.status === 200) {
          let companyStockDetails = s.data;
          companyStockDetails = companyStockDetails.slice(0, num);
          let topCompanies = [];
          for (let index = 0; index < companyStockDetails.length; index++) {
            const element = companyStockDetails[index];
            console.log(element);
            topCompanies.push(element["company"]);
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
              }}
            >
              <Typography variant="subtitle1" style = {{ color : "#5CDB95"}}>
                TOP {this.state.num} COMPANIES FOR{" "}
                {this.state.type === "buy" ? "INVESTING" : "TRADING"}
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
                    style={{ display: "flex", padding: "10px", margin: "10px" }}
                    className = { classes.paper }
                  >
                    <Typography variant="subtitle2">{company}</Typography>
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

export default withStyles(styles, { withTheme: true })(Top);
