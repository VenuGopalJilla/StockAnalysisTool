import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  link: {
    textDecoration: "initial",
  },
  grid: {
    // "&:hover": {
    //   backgroundColor: "#ADD8E0",
    // },
  },
  typography: {
    padding: 20,
    fontSize : 24,
  },
});

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedCompany: " ", companyNames: [] };
  }

  selectedCompany = (e, val) => {
    const { history } = this.props;
    if (val === null) {
      history.push("/");
      return;
    }
    this.setState({ selectedCompany: val }, () => {
      history.push("/companydetails/" + this.state.selectedCompany);
      this.setState({ selectedCompany: "" }, () => {});
    });
  };

  componentDidMount = () => {
    console.log("NavigationBar");
    axios
      .get("/api/companyNames")
      .then((s) => {
        if (s.status === 200) {
          this.setState({ companyNames: s.data });
        } else {
          this.setState({ companyNames: [] });
        }
      })
      .catch((e) => console.log(e));
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={1}>
        <Grid item className={classes.grid}>
          <NavLink to="/" className={classes.link}>
            <Typography className={classes.typography} variant="button"
            >
              Home
            </Typography>
          </NavLink>
        </Grid>
        <Grid item className={classes.grid}>
          <NavLink to="/about" className={classes.link}>
            <Typography className={classes.typography} variant="button"
            >
              About
            </Typography>
          </NavLink>
        </Grid>
        {/* <Grid item>
          <NavLink to="/performance" className={classes.link} variant="button">
            <Typography className={classes.grid} variant="h4">
              Performance
            </Typography>
          </NavLink>
        </Grid> */}
        {/* <Grid item>
          <NavLink to="/login" className={classes.link}>
            <Typography className={classes.grid} variant="h4">
              Login
            </Typography>
          </NavLink>
        </Grid> */}
        <Grid item className={classes.grid}>
          <NavLink to="/comparison" className={classes.link}>
            <Typography className={classes.typography} variant="button"
            >
              Comparison
            </Typography>
          </NavLink>
        </Grid>
        <Grid item className={classes.grid}>
          <NavLink to="/simulation" className={classes.link} >
            <Typography className={classes.typography} variant="button" 
            >
              Simulation
            </Typography>
          </NavLink>
        </Grid>
        <Grid item className={classes.grid}>
          <Autocomplete
            style={{ 
              width: "300px",
              color:"#05386B"
            }}
            value={this.state.selectedCompany}
            onChange={(e, val) => {
              this.selectedCompany(e, val);
            }}
            id="search for companies"
            freeSolo
            options={this.state.companyNames.map((companyname) => companyname)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="search for companies"
                margin="normal"
                variant="outlined"
                color="#05386B"
              />
            )}
          />
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(withRouter(NavigationBar));
