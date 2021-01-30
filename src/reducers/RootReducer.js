import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import ModalReducer from "./ModalReducer";
// import BoardMessagesReducer from "./BoardMessagesReducer";
// import MessagesReducer from "./MessagesReducer";


const rootReducer = combineReducers({
  usersStore: UsersReducer,
  auth: AuthReducer,
  modalStore: ModalReducer,


});

export default rootReducer;
