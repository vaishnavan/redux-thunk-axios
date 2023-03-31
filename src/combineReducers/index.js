import { combineReducers } from "redux";
import userReducers from "../reducers/userReducers";

export const rootReducer = combineReducers({
  users: userReducers
});
