import React from "react";
import { Toolbar, withStyles } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Likes from "./Likes";
import { classes } from "istanbul-lib-coverage";

const styles = theme => ({
  toolbar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "6px 0"
  },
  // likes: {
  //   flex: "0 0 auto"
  // },
  cardContent: {
    padding: 0
  },
  listItem: {
    padding: 0,
    display: "flex",
    flexDirection: "column "
  },
  comments: { width: "100%", flex: "1" },
  icon: {
    marginRight: theme.spacing(1)
  }
});

function PostToolbar(props) {
  const { classes, liked } = props;
  return (
    <Toolbar className={classes.toolbar}>
      <Likes likes={liked.length} className={classes.likes} />
      <div>
        <FavoriteBorderIcon className={classes.icon} />
        {/* <ChatBubbleOutlineIcon className={classes.icon} /> */}
        <ShareIcon className={classes.icon} />
      </div>
    </Toolbar>
  );
}

export default withStyles(styles)(PostToolbar);
