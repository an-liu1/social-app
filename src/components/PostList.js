import React from "react";
import PostCard from "./PostCard";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Navbar from "./../views/Navbar";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const data = {
  name: "Ethan",
  time: moment().format("MM/DD/YYYY"),
  likes: 312,
  image:
    "https://www.nationalgeographic.com/content/dam/travel/2018-digital/day-of-the-dead-ys/day-of-the-dead-12511007.jpg",
  comments: [
    { name: "Andy", comment: "Wow, awesome!" },
    { name: "Emmy", comment: "Wanna see more" },
    { name: "Emmy", comment: "Wanna see more" }
  ]
};

const styles = theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed"
  }
});

function PostList(props) {
  const { classes } = props;
  console.log(props);
  return (
    <React.Fragment>
      <Navbar />
      <Container component="main" maxWidth="sm">
        <PostCard postId={1} />
        <PostCard postId={2} />
      </Container>
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fab}
        onClick={() => {
          alert("!!");
        }}
      >
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
}

export default withStyles(styles)(PostList);
