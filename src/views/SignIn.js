import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { userSignIn } from "../redux/action";
import { Collapse } from "@material-ui/core";
import { newUser } from "../redux/action";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Social App
      {" " + new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class SignIn extends Component {
  state = { signIn: true };
  componentDidMount() {}
  handleClick = () => {
    // console.log("clicked")
    // console.log(this.props)
    this.props.login();
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const addion = {
      likes: [],
      followings: [],
      followers: []
    };
    const data = { ..._.omit(this.state, ["signIn"]), ...addion };
    console.log(data);
    if (this.state.signIn) {
      this.props.signin(data.username, data.password);
    } else {
      // this.props.signup(formData);
    }

    // this.props.login(username, password);
    // this.props.history.push("/");
  };

  handleSignUp = e => {
    this.setState({ signIn: !this.state.signIn });
  };
  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  render() {
    const { classes } = this.props;
    if (this.props.signInSuccess) {
      this.props.history.push("/");
    }
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {this.state.signIn ? "Sign in" : "Sign up"}
            </Typography>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={this.state.username}
              onChange={this.handleChange("username")}
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={this.state.password}
              onChange={this.handleChange("password")}
              id="password"
              name="password"
              label="Password"
              type="password"
            />
            <Collapse in={!this.state.signIn}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={this.state.password2}
                onChange={this.handleChange("password2")}
                id="password2"
                name="password2"
                label="Re-enter"
                type="password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={this.state.name}
                onChange={this.handleChange("name")}
                id="name"
                label="Name"
                name="name"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={this.state.email}
                onChange={this.handleChange("email")}
                id="email"
                label="Email"
                name="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={this.state.phone}
                onChange={this.handleChange("phone")}
                name="phone"
                label="Phone"
                id="phone"
              />
            </Collapse>

            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              {this.state.signIn ? "Sign In" : "Sign Up"}
            </Button>

            <Grid container>
              <Grid item>
                {this.state.signIn ? (
                  <Link variant="body2" onClick={this.handleSignUp}>
                    {"Don't have an account? Sign up"}
                  </Link>
                ) : (
                  <Link variant="body2" onClick={this.handleSignUp}>
                    {"Have an account? Sign in now"}
                  </Link>
                )}
              </Grid>
            </Grid>

            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    signInSuccess: state.session.signedIn,
    failedSign: state.session.failedSign,
    wrongUser: state.session.wrongUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: (username, password) => dispatch(userSignIn(username, password)),
    signup: data => dispatch(newUser(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignIn));
