import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_INVALID_USERNAME_PASSWORD,
  NEW_USER,
  USER_EXIST,
  USER_SESSION_RESTORE

} from "../constants/actionType";
import request from "./request";

export const userSignIn = (username, password) => {
  return async dispatch => {
    if (username && password) {
      var res = await request(
        "get",
        `users?username=${username}&password=${password}`
      );
      if (res.data.length > 0) {
        dispatch({ type: USER_SIGNIN_SUCCESS, data: res.data[0].id });
        localStorage.setItem("userId", res.data[0].id);
      } else {

        dispatch({ type: USER_SIGNIN_FAIL, data: false });
      }
    } else {
      dispatch({ type: USER_INVALID_USERNAME_PASSWORD, data: false });

    }
  };
};


export const userSessionRestore = userId => ({
  type: USER_SESSION_RESTORE,
  data: userId
});


export const newUser = form => {
  return async dispatch => {
    var checkUser = await request("get", `users?username=${form.username}`);
    if (!checkUser.data) {
      var res = await request("post", `users`, form);
      dispatch({ type: NEW_USER, data: res.data });
    } else {
      dispatch({ type: USER_EXIST });
    }
  };
};

