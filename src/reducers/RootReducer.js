import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import BoardMessagesReducer from "./BoardMessagesReducer";
import MessagesReducer from "./MessagesReducer";


const rootReducer = combineReducers({
  usersStore: UsersReducer,
  auth: AuthReducer,
  boardMessageStore: BoardMessagesReducer,
  messageStore: MessagesReducer,


});

export default rootReducer;
