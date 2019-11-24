import {
  GET_USER_INFO,
  UPDATE_USER_INFO,
  UPDATE_USER_FOLLOWING,
  UPDATE_USER_LIKE,
} from "../constants/actionType"

var initState = {}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        userInfo: action.data
      }
    case UPDATE_USER_INFO:
      return { ...state }
    case UPDATE_USER_FOLLOWING:
      return { ...state }
    case UPDATE_USER_LIKE:
      return { ...state }
    default:
      return state
  }
}
