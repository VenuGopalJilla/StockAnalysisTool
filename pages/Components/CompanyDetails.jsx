import {
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import Loader from "react-loader-spinner";

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class CompanyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyDetails: [],
      companyCurrentDayStockDetails: [],
      selectedCompany: "",
      loading: true,
      stockkeys: [
        "Date",
        "Open Price",
        "High Price",
        "Low Price",
        "Close Price",
        "WAP",
        "No.of Shares",
        "No. of Trades",
        "Total Turnover (Rs.)",
        "% Deli. Qty to Traded Qty",
        "Spread High-Low",
        "Spread Close-Open",
      ],
      stockdetails: [],
    };
  }

  componentDidMount = () => {
    console.log("CompanyDetails");
    const { match } = this.props;
    const company = match.params.company;
    this.setState({ selectedCompany: company }, () => {
      this.getCompanyDetails(this.state.selectedCompany);
    });
  };

  getCompanyDetails = async (company) => {
    await axios.get("/api/companydetails?company=" + company).then((s) => {
      if (s.status === 200) {
        this.setState({ companyDetails: s.data, loading: false }, () => {});
      } else {
        this.setState({ companyDetails: [], loading: false }, () => {});
      }
    });
    await axios
      .get("/api/previousdaystockdetails?company=" + company)
      .then((s) => {
        if (s.status === 200) {
          this.setState({ stockdetails: s.data, loading: false }, () => {});
        } else {
          this.setState({ stockdetails: [], loading: false }, () => {});
        }
      })
      .catch((e) => {
        console.log(e);
        this.setState({ stockdetails: [], loading: false }, () => {});
      });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.selectedCompany !== "" && (
          <div>
            <Paper
              elevation={3}
              style={{
                display: "flex",
                padding: "15px",
                margin: "15px",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">{this.state.selectedCompany}</Typography>
            </Paper>
            <Divider />
            {this.state.loading === true ? (
              <Loader />
            ) : (
              <Grid container>
                {Object.keys(this.state.companyDetails).map((key) => {
                  if (this.state.companyDetails[key] === null) {
                    return <span></span>;
                  }
                  let res = key + " : " + this.state.companyDetails[key];
                  return (
                    <Chip
                      color="primary"
                      variant="outlined"
                      label={res}
                      style={{ margin: "5px" }}
                    />
                  );
                })}
              </Grid>
            )}
          </div>
        )}
        <Divider />
        <Divider />
        {this.state.stockdetails.length !== 0 &&
          this.state.stockkeys.map((key) => {
            let res = key + " : " + this.state.stockdetails[key];
            return (
              <Chip
                color="primary"
                variant="outlined"
                label={res}
                style={{ margin: "5px" }}
              />
            );
          })}
        {this.state.selectedCompany !== "" &&
          this.state.stockdetails.length !== 0 && (
            <Dashboard company={this.state.selectedCompany} />
          )}
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(CompanyDetails);
