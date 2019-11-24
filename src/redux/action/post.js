import React from "react";
import {
  GET_POSTS,
  GET_USER_POSTS,
  NEW_POST,
  DELETE_POST,
  UPDATE_USER_LIKE
} from "../constants/actionType";
import request from "./request";

export const getPost = post_id => {
  return async dispatch => {
    var postInfo = await request("get", `posts/${post_id}`);
    var userInfo = await request("get", `users/${postInfo.data.user_id}`);
    const data = postInfo.data;
    data.name = userInfo.data.name;
    data.avatar = userInfo.data.avatar;
    dispatch({ type: GET_POSTS, data: data });
  };
};

export const getUserPost = user_id => {
  return async dispatch => {
    var postInfo = await request("get", `posts?user_id=${user_id}`);
    var postInfos = [];
    postInfo.data.map(async e => {
      var userInfo = await request("get", `users/${e.user_id}`);
      e.name = userInfo.data.name;
      e.avatar = userInfo.data.avatar;
      postInfos.push(e);
    });
    dispatch({ type: GET_USER_POSTS, data: postInfos });
  };
};

export const newPost = (user_id, form) => {
  return async dispatch => {
    var myPost = await request("post", "posts", form);
    var myInfo = await request("get", `users/${user_id}`);
    myInfo.data.posts.push(myPost.data.id);
    var res = await request("put", `users/${user_id}`, myInfo.data);
    dispatch({ type: NEW_POST, data: res.data });
  };
};

export const deletePost = (user_id, post_id) => {
  return async dispatch => {
    await request("delete", `posts/${post_id}`);
    var myPost = await request("get", `users/${user_id}`);
    myPost.data.posts.remove(post_id);
    var res = await request("put", `users/${user_id}`, myPost.data);
    dispatch({ type: DELETE_POST, data: res.data });
  };
};

export const updateUserLiked = (user_id, post_id) => {
  return async dispatch => {
    var myPost = await request("get", `posts`);
    myPost.data.liked.push(user_id);
    var res = await request("put", `posts/${post_id}`, myPost.data);
    dispatch({ type: UPDATE_USER_LIKE, data: res.data });
  };
};
