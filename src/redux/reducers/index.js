import { combineReducers } from "redux";
import likedReducer from "./likedReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  liked: likedReducer,
  search: searchReducer,
  user: userReducer,
});

export default rootReducer;
