import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  List,
  ListItem,
  Divider,
  withStyles,
  TextField,
  Button
} from "@material-ui/core";
import PostToolbar from "./PostToolbar";
import Comment from "./Comment";
import { getUserInfo, getComment, getPost } from "../redux/action/index";

const styles = theme => ({
  card: {
    // maxWidth: 680
  },
  media: { height: 0, paddingTop: "56.25%" },
  cardContent: {
    padding: 0,
    left: 0
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  comments: { width: "100%", flex: "1", marginLeft: "16px" },
  commentbox: { display: "flex" },
  button: {
    margin: "15px 0 10px 2px"
  }
});

class PostCard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.getUserInfo();
    this.props.getComment(this.props.postId);
    this.props.getPost(this.props.postId);
  };

  renderComments = () => {
    const { commentInfo } = this.props;
    const data = commentInfo[this.props.postId];
    if (data) {
      return data.map(comment => (
        <Comment name={comment.name} comment={comment.comment} />
      ));
    } else {
      return null;
    }
  };
  render() {
    const { classes, postInfo } = this.props;
    let post;
    // console.log(postInfo);
    if (postInfo) {
      post = postInfo[this.props.postId];
    }

    if (post) {
      return (
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar aria-label="recipe" src={post.avatar}></Avatar>}
            title={post.name}
            subheader={post.created_at}
          />
          <CardMedia className={classes.media} image={post.image} />
          <CardContent className={classes.content}>
            <PostToolbar liked={post.liked} />
            <Divider />
            <List style={{}}>
              <ListItem className={classes.listItem}>
                {this.renderComments()}
              </ListItem>
            </List>
            <div className={classes.commentbox}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="comment"
                label="Comment"
                name="comment"
              />
              <Button
                color="secondary"
                className={classes.button}
                // onClick={() => {
                //   this.props.getComment2(2);
                // }}
              >
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    } else {
      return null;
    }
  }
}
export default connect(
  state => {
    return {
      userInfo: state.users.userInfo,
      commentInfo: state.comments.commentInfo,
      postInfo: state.posts.postInfo
    };
  },
  { getUserInfo, getComment, getPost }
)(withStyles(styles)(PostCard));
