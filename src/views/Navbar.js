import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: { textDecoration: "none" }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="white" elevation={1}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Social App
          </Typography>
          <div>
            <Link to="/" className={classes.link}>
              <Button color="inherit">Home</Button>
            </Link>
          </div>
          <div>
            <Link to="/p" className={classes.link}>
              <Button color="inherit">Posts</Button>
            </Link>
          </div>
          <div>
            <Link to="/profile" className={classes.link}>
              <Button color="inherit">Profile</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
