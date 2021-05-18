import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  Button,
  Chip,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Paper,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Loader from "react-loader-spinner";
import underscore from "underscore";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import DownloadLink from "react-download-link";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class Simulation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCompany: "",
      companyNames: [],
      days: 1,
      investment: 1,
      startdate: "2017-03-10",
      response: [],
      cols: [],
      loading: false,
      seldays: "",
      simulationtop: [],
      companyselectedaftersimulation : "",
      companydetailsaftersimulation : [],
    };
  }

  componentDidMount = () => {
    const SP500 =
      "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/SP500Companies.json";
    axios
      .get(SP500)
      .then((s) => {
        if (s.status === 200) {
          let SP500Companies = Object.keys(underscore.invert(s.data));
          this.setState({ companyNames: SP500Companies }, () => {});
        }
      })
      .catch((e) => {
        console.log(e);
      });
    console.log("Simulation");
  };

  onClickSubmit = () => {
    if (this.state.selectedCompany === "") {
      return;
    }
    const params =
      "company=" +
      this.state.selectedCompany +
      "&" +
      "investment=" +
      this.state.investment +
      "&" +
      "days=" +
      this.state.days +
      "&" +
      "date=" +
      this.state.startdate;
    this.setState({ loading: true });
    axios
      .get("/api/simulation?" + params)
      .then((s) => {
        if (s.status === 200) {
          let resp = s.data;
          if (resp.length != 0) {
            let cols = [];
            Object.keys(resp[0]).map((key) => {
              cols.push({ field: key, headerName: key, width: 150 });
            });
            let rows = [];
            for (let i = 0; i < resp.length; i++) {
              if (Object.keys(resp[i]).length === 0) {
              } else {
                resp[i]["id"] = i;
                rows.push(resp[i]);
              }
            }
            this.setState(
              { response: rows, cols: cols, loading: false },
              () => {}
            );
          } else {
            this.setState({ loading: false }, () => {});
          }
        } else {
          this.setState({ loading: false }, () => {});
        }
      })
      .catch((e) => {
        console.log(e);
        this.setState({ loading: false }, () => {});
      });
  };

  onSelectDays = (e) => {
    const days = e.target.value;
    // const topurl =
    //   "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/Simulation/top_seldays.csv";
    this.setState({ seldays: days }, () => {});
    axios
      .get("/api/simulationtop" + "?" + "days=" + days)
      .then((s) => {
        if (s.status === 200) {
          this.setState({ simulationtop: s.data }, () => {});
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };



  getDataFromURL = (url) => new Promise((resolve, reject) => {
    setTimeout(() => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                resolve(data)
            });
    });
    }, 2000);

  

  exportToCSV = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };

  render() {
    const today = new Date();
    return (
      <React.Fragment>
        <Grid>
          <FormControl style={{ minWidth: "150px" }} variant="outlined">
            <InputLabel>days</InputLabel>
            <Select
              style={{ width: "100%" }}
              labelId="days"
              id="days"
              onChange={this.onSelectDays}
              value={this.state.seldays}
            >
              {[30, 60, 90, 180, 270, 360, 540, 720, 900, 1080].map(
                (period) => {
                  return <MenuItem value={period}>{period}</MenuItem>;
                }
              )}
            </Select>
          </FormControl>
          {this.state.simulationtop.length === 0 ? (
            <span />
          ) : (
            // <Grid style={{ height: "250px", overflowX: "scroll" }}>
            //   {/* <Typography variant="h4"> Companies to invest</Typography> */}
            //   {this.state.simulationtop.map((row) => {
            //     const company = row['company'];
            //     return (
            //       <React.Fragment>
            //           <Typography variant="h6">{row['company']} {row['average_return_percent']}   
                     
            //             <DownloadLink
            //             label = "Download Simulation Results"
            //             filename = "details.csv"
            //             tagName = "button"
            //             exportFile = {() => Promise.resolve(this. getDataFromURL("https://raw.githubusercontent.com/saikr789/stock-index-risk/master/Data/Simulation/500002.csv"))}
            //             />
            //          </Typography>
            //     </React.Fragment>);
            //   })}
            // </Grid>
            
            <TableContainer component={Paper}>
              <Table className="Simualtion Results" minWidth= "650" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell variant = "h5"> Company</TableCell>
                    <TableCell align="right" variant = "h5">Average Returns Percentage</TableCell>
                    <TableCell align="right" variant = "h5">Simulation Results</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.simulationtop.map((row) => (
                    <TableRow key={row.company}>
                      <TableCell component="th" scope="row">
                        {row.company}
                      </TableCell>
                      <TableCell align="right">{row.average_return_percent}</TableCell>
                      <TableCell align="right">
                      <DownloadLink
                        label = "Results"
                        filename = "details.csv"
                        tagName = "button"
                        exportFile = {() => Promise.resolve(this. getDataFromURL("https://raw.githubusercontent.com/saikr789/stock-index-risk/master/Data/Simulation/500002.csv"))}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>

        {/* <Grid container spacing={2} style={{ marginTop: "5px" }}>
          <Grid item>
            <Autocomplete
              style={{ width: "200px" }}
              value={this.state.selectedCompany}
              onChange={(e, val) => {
                if (val == null) {
                  this.setState(
                    { response: [], selectedCompany: "" },
                    () => {}
                  );
                } else {
                  this.setState({ selectedCompany: val }, () => {});
                }
              }}
              id="search for companies"
              freeSolo
              options={this.state.companyNames.map(
                (companyname) => companyname
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="search for companies"
                  margin="normal"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item>
            <TextField
              style={{ paddingTop: "15px" }}
              variant="outlined"
              id="date"
              label="start date"
              type="date"
              defaultValue="2017-03-10"
              value={this.state.startdate}
              onChange={(e) => {
                this.setState({ startdate: e.target.value });
              }}
              InputProps={{
                inputProps: { min: "2017-03-10", max: "2021-03-19" },
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              type="number"
              style={{ width: "100%", paddingTop: "15px" }}
              inputProps={{ min: "1", max: "800", step: "1" }}
              label="days"
              variant="outlined"
              value={this.state.days}
              onChange={(e) => {
                this.setState({ days: e.target.value });
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              type="number"
              style={{ width: "100%", paddingTop: "15px" }}
              inputProps={{ min: "1", max: "1000000", step: "1" }}
              label="investment"
              variant="outlined"
              value={this.state.investment}
              onChange={(e) => {
                this.setState({ investment: e.target.value });
              }}
            />
          </Grid>
          <Grid item>
            <Button
              style={{ width: "100%", marginTop: "15px" }}
              variant="outlined"
              size="large"
              onClick={this.onClickSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid> */}
        {/* {this.state.loading ? (
          <Loader />
        ) : (
          this.state.companydetailsaftersimulation.length !== 0 && (
            <DataGrid
              rows={this.state.companydetailsaftersimulation}
              columns={this.state.cols}
              autoHeight
              disableSelectionOnClick
              hideFooterPagination
              hideFooter
              components={{
                Toolbar: this.exportToCSV,
              }}
            />
          )
        )} */}
      </React.Fragment>
    );
  }
}

export default Simulation;
