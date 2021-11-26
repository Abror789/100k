import {combineReducers} from "redux";
import user from './slices/user'
import mail from "./slices/mail";
import taksi from "./slices/taksi";

export default combineReducers({user,mail,taksi})
