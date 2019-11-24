import React from "react";
import {
  GET_COMMENT,
  NEW_COMMENT,
  DELETE_COMMENT
} from "../constants/actionType";
import request from "./request";
import axios from "axios";
import { DOMAIN } from "../api";

// export const getComment = post_id => {
//   return async dispatch => {
//     const data = async () => {
//       var comment = await request("get", `comments?post_id=${post_id}`);
//       var commentInfo = [];
//       comment.data.map(async e => {
//         var userInfo = await request("get", `users/${e.user_id}`);
//         e.name = userInfo.data.name;
//         e.avatar = userInfo.data.avatar;
//         commentInfo.push(e);
//       });
//       return commentInfo;
//     };
//     const data1 = await data();

//     dispatch({ type: GET_COMMENT, data: data1 });
//   };
// };

export const getComment = post_id => {
  return dispatch => {
    let data;
    axios
      .get(`${DOMAIN}/comments?post_id=${post_id}`)
      .then(res => {
        data = res.data;
        let promises = [];
        data.map(comment => {
          promises.push(axios.get(`${DOMAIN}/users/${comment.user_id}`));
        });
        return axios.all(promises);
      })
      .then(res => {
        console.log(res);
        res.map((value, index) => {
          data[index].name = value.data.name;
          data[index].avatar = value.data.avatar;
        });
        dispatch({ type: GET_COMMENT, data: data });
      });
  };
};

export const newComment = (post_id, form) => {
  return async dispatch => {
    var myComment = await request("post", "comment", form);
    var myPost = await request("get", `posts/${post_id}`);
    myPost.data.comments.push(myComment.data.id);
    var res = await request("put", `posts/${post_id}`, myPost.data);
    dispatch({ type: NEW_COMMENT, data: res.data });
  };
};

export const deleteComment = (post_id, comment_id) => {
  return async dispatch => {
    await request("delete", `comments/${comment_id}`);
    var myPost = await request("get", `posts/${post_id}`);
    myPost.data.comments.remove(comment_id);
    var res = await request("put", `posts/${post_id}`, myPost.data);
    dispatch({ type: DELETE_COMMENT, data: res.data });
  };
};
