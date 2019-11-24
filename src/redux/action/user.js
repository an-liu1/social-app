import {
  GET_USER_INFO,
  UPDATE_USER_INFO,
  UPDATE_USER_FOLLOWING,
  UPDATE_USER_LIKE
} from "../constants/actionType"
import request from "./request"

export const getUserInfo = id => {
  return async dispatch => {
    if (id) {
      var res = await request("get", `users/${id}`)
    } else {
      var res = await request("get", `users`)
    }
    dispatch({ type: GET_USER_INFO, data: res.data })
  }
}

export const updateUserInfo = form => {
  return async dispatch => {
    var res = await request("put", `users`, form)
    dispatch({ type: UPDATE_USER_INFO, data: res.data })
  }
}

export const updateUserFollowing = (my_id, follow_id) => {
  return async dispatch => {
    var myInfo = await request("get", `users/${my_id}`)
    myInfo.data.followings.push(follow_id)
    myInfo.data.followings = [...new Set(myInfo.data.followings)]
    var res1 = await request("put", `users/${my_id}`, myInfo.data)

    var followInfo = await request("get", `users/${follow_id}`)
    followInfo.data.followers.push(my_id)
    followInfo.data.followers = [...new Set(followInfo.data.followers)]
    var res2 = await request("put", `users/${follow_id}`, followInfo.data)
    if (res1 && res2) {
      dispatch({ type: UPDATE_USER_FOLLOWING })
    }
  }
}

export const updateUserLike = (my_id, post_id) => {
  return async dispatch => {
    var myLike = await request("get", `user/${my_id}`)
    myLike.data.likes.push(post_id)
    var res = await request("put", `user/${my_id}`, myLike.data)
    dispatch({ type: UPDATE_USER_LIKE, data: res.data })
  }
}
