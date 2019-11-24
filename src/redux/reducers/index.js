import { combineReducers } from "redux"
import users from "./user"
import posts from "./posts"
import comments from "./comments"
import session from "./session"
import { reducer as formReducer } from "redux-form"

export default combineReducers({
  users,
  posts,
  comments,
  session,
  form: formReducer
})
