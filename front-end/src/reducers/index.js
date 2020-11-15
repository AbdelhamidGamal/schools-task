import { combineReducers } from "redux";
import auth from "./auth";
import school from "./school";

export default combineReducers({ auth, school });
