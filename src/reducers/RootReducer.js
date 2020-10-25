import { combineReducers } from "redux";
import UsersReducers from "./UsersReducer";
import AuthReducer from "./AuthReducer";


const rootReducer = combineReducers({
  usersStore: UsersReducers,
  auth: AuthReducer,


});

export default rootReducer;
