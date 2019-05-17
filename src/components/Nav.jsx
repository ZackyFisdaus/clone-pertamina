import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./nav.css";
const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      borderRadius: 50
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

function SearchAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <Link to="/">
                <img
                  src="https://www.pertamina.com/Media/logo.png"
                  style={{ width: 200 }}
                />
              </Link>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                style={{ backgroundColor: "#eeeeee" }}
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <AppBar position="static" style={{ backgroundColor: "red" }}>
          <Toolbar>
            <Toolbar style={{ marginLeft: 80 }}>
              <Link to="/">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/feather/24/home-128.png"
                  width="45"
                  height="45"
                />
              </Link>
            </Toolbar>
            <div class="dropdown">
              <Toolbar class="dropbtn" style={{ marginLeft: 1 }}>
                Tentang Kami
                <img
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png"
                  width="16"
                  height="16"
                />
              </Toolbar>
              <div class="dropdown-content">
                <a href="https://www.pertamina.com/id/siapa-kami">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672349-nav-right-128.png"
                    width="16"
                    height="16"
                  />
                  Siapa Kami
                </a>
                <a href="https://www.pertamina.com/id/sejarah-pertamina">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672349-nav-right-128.png"
                    width="16"
                    height="16"
                  />
                  Sejarah Pertamina
                </a>
              </div>
            </div>
            <div class="dropdown">
              <Toolbar style={{ marginLeft: 1 }}>
                Bisnis Kami
                <img
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png"
                  width="16"
                  height="16"
                />
              </Toolbar>
              <div class="dropdown-content">
                <a href="#">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672349-nav-right-128.png"
                    width="16"
                    height="16"
                  />
                  Petrochemicals
                </a>
                <a href="#">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672349-nav-right-128.png"
                    width="16"
                    height="16"
                  />
                  Fuel Retail
                </a>
              </div>
            </div>
            <div class="dropdown">
              <Toolbar style={{ marginLeft: 1 }}>
                Hubungan Investor
                <img
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png"
                  width="16"
                  height="16"
                />
              </Toolbar>
              <div class="dropdown-content">
                <a href="#">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672349-nav-right-128.png"
                    width="16"
                    height="16"
                  />
                  Pemegang Saham
                </a>
                <a href="#">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672349-nav-right-128.png"
                    width="16"
                    height="16"
                  />
                  Obligasi Pertamina
                </a>
              </div>
            </div>
            <div class="dropdown">
              <Toolbar style={{ marginLeft: 1 }}>
                Media & Informasi
                <img
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png"
                  width="16"
                  height="16"
                />
              </Toolbar>
              <div class="dropdown-content">
                <a href="#">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672349-nav-right-128.png"
                    width="16"
                    height="16"
                  />
                  Press Release
                </a>
                <a href="#">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672349-nav-right-128.png"
                    width="16"
                    height="16"
                  />
                  Energia News
                </a>
              </div>
            </div>
            <div class="dropdown">
              <Toolbar style={{ marginLeft: 1 }}>
                Responsibility
                <img
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png"
                  width="16"
                  height="16"
                />
              </Toolbar>
              <div class="dropdown-content">
                <a href="#">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672349-nav-right-128.png"
                    width="16"
                    height="16"
                  />
                  Tanggung Jawab Sosial
                </a>
                <a href="#">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672349-nav-right-128.png"
                    width="16"
                    height="16"
                  />
                  PKBL
                </a>
              </div>
            </div>
            <div class="dropdown">
              <Toolbar style={{ marginLeft: 1 }}>
                Karir
                <img
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png"
                  width="16"
                  height="16"
                />
              </Toolbar>
              <div class="dropdown-content">
                <a href="#">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672349-nav-right-128.png"
                    width="16"
                    height="16"
                  />
                  Magang
                </a>
                <a href="#">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672349-nav-right-128.png"
                    width="16"
                    height="16"
                  />
                  Lulusan Baru
                </a>
              </div>
            </div>
            <div class="dropdown" />
            <Toolbar style={{ marginLeft: 1 }}>Hubungan Kami</Toolbar>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchAppBar);
