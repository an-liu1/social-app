import {
  GET_POSTS,
  GET_USER_POSTS,
  NEW_POST,
  DELETE_POST,
  UPDATE_USER_LIKED
} from "../constants/actionType";

var initState = { postInfo: {} };

export default (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        postInfo: { ...state.postInfo, [action.data.id]: action.data }
      };
    case GET_USER_POSTS:
      return {
        ...state,
        userPostInfo: action.data
      };
    case NEW_POST:
      return { ...state };
    case DELETE_POST:
      return { ...state };
    case UPDATE_USER_LIKED:
      return { ...state };
    default:
      return state;
  }
};
