import {
  GET_COMMENT,
  NEW_COMMENT,
  DELETE_COMMENT
} from "../constants/actionType";

var initState = { commentInfo: {} };

export default (state = initState, action) => {
  switch (action.type) {
    case GET_COMMENT:
      const  data = action.data;
      console.log(data[0]);
      // console.log(action.data["0"]);
      // debugger;
      if (action.data && action.data[0]) {
        const postId = action.data[0].post_id;
        console.log(postId);
        return {
          ...state,
          commentInfo: {
            ...state.commentInfo,
            [action.data[0].post_id]: action.data
          }
        };
      } else {
        return {
          ...state
        };
      }

    case NEW_COMMENT:
      return { ...state };
    case DELETE_COMMENT:
      return { ...state };
    default:
      return state;
  }
};
