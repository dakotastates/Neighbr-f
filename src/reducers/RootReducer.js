import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import BoardMessagesReducer from "./BoardMessagesReducer";


const rootReducer = combineReducers({
  usersStore: UsersReducer,
  auth: AuthReducer,
  boardMessageStore: BoardMessagesReducer,


});

export default rootReducer;
