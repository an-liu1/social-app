import {
  USER_SIGNIN_SUCCESS,
  USER_SESSION_RESTORE,
  USER_SIGNIN_FAIL,
  USER_INVALID_USERNAME_PASSWORD,
  NEW_USER
} from "../constants/actionType";

var initState = { signedIn: false, userId: null };

export default (state = initState, action) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return {
        signedIn: true,
        userId: action.data
      };
    case USER_SESSION_RESTORE:
      return {
        signedIn: true,
        userId: action.data
      };
    case USER_SIGNIN_FAIL:
      return {
        signedIn: false,
        failedSign: true
      };
    case USER_INVALID_USERNAME_PASSWORD:
      return {
        signedIn: false,
        wrongUser: true
      };
    default:
      return state;
  }
};
