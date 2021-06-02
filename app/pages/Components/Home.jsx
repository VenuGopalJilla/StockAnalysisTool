import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Route, Switch, withRouter, HashRouter} from "react-router-dom";
import About from "./About";
import Typography from "@material-ui/core/Typography";

import CompanyDetails from "./CompanyDetails";
import Comparison from "./Comparison";
// import Login from "./Login";
import NavigationBar from "./NavigationBar";
import PageNotFound from "./PageNotFound";
// import Performance from "./Performance";
import Revenue from "./Revenue";
import Sectors from "./Sectors";
import SideBar from "./SideBar";
import SP500 from "./SP500";
import Top from "./Top";
import Simulation from "./Simulation";

const drawerWidth = 300;
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    paddingTop: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    ...theme.mixins.toolbar,
  },
  content: {
    // backgroundColor: theme.palette.background.default,
    backgroundColor : "white",
    flexGrow: 1,
    flexWrap: "wrap",
    padding: theme.spacing(3),
    minWidth: "480px",
    width: "auto",
    height: "100%",
    overflowX: "hidden",
    alignItems: "center"
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyNames: [],
    };
  }

  componentDidMount = () => {
    console.log("Home");
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <HashRouter>
        <AppBar
          position="relative"
          className={classes.appBar}
          style={{ backgroundColor: "#5CDB95", color: "#05386B"}}
        >
          <Toolbar>
            <NavigationBar />
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            {/* <div className={classes.toolbar}>
              <Typography variant="h4">Stock Trends</Typography>
            </div> */}
            <SideBar />
          </Drawer>
          <main className={classes.content}>
            <Switch>
              <Route exact path="/" />
              {/* <Route exact path="/login" component={Login} /> */}
              <Route exact path="/about" component={About} />
              {/* <Route exact path="/performance" component={Performance} /> */}
              <Route
                exact
                path="/top/:num/:type"
                render={(props) => {
                  const {
                    match: {
                      params: { num, type },
                    },
                  } = props;
                  return <Top key={`num=${num}&type=${type}`} {...props} />;
                }}
              />
              <Route exact path="/sectors" component={Sectors} />
              <Route
                exact
                path="/companydetails/:company"
                render={(props) => {
                  const {
                    match: {
                      params: { company },
                    },
                  } = props;
                  return (
                    <CompanyDetails key={`company=${company}`} {...props} />
                  );
                }}
              />
              <Route
                exact
                path="/revenue"
                component={() => (
                  <Revenue companyNames={this.state.companyNames} />
                )}
              />
              <Route exact path="/sp500" component={SP500} />
              <Route exact path="/comparison" component={Comparison} />
              <Route exact path="/simulation" component={Simulation} />
              <Route component={PageNotFound} />
            </Switch>
          </main>
        </div>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(Home));
