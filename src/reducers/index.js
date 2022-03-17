import { combineReducers } from "redux";
import myReducer from "../reducers/myReducer";
import userReducer from "../reducers/userReducer";

export default combineReducers({ myReducer, userReducer });
