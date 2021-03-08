import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import ModalReducer from "./ModalReducer";
// import BoardMessagesReducer from "./BoardMessagesReducer";
import MessagesReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";
import BulletinsReducer from "./BulletinsReducer";



const rootReducer = combineReducers({
  usersStore: UsersReducer,
  auth: AuthReducer,
  modalStore: ModalReducer,
  messagesStore: MessagesReducer,
  profileStore: ProfileReducer,
  bulletinsStore: BulletinsReducer


});

export default rootReducer;
