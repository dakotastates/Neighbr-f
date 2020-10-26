import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";


const rootReducer = combineReducers({
  usersStore: UsersReducer,
  auth: AuthReducer,


});

export default rootReducer;
