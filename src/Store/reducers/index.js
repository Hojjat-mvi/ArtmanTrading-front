import { combineReducers } from "redux";
import { Login_Success, Login_Failed, undefinedRes } from "../types";

const AuthState = { authentication: false };
const loginReducer = (state = AuthState, action) => {
  switch (action.type) {
    case Login_Success:
      return { authentication: true };
    case undefinedRes:
      return { authentication: false };
    case Login_Failed:
      return { authentication: false };
    default:
      return state;
  }
};

const undefinedReducer = (state = AuthState, action) => {
  switch (action.type) {
    case undefinedRes:
      return { authentication: false };
    default:
      return state;
  }
};

export default combineReducers({
  authentication: loginReducer,
  undefinedAuth: undefinedReducer
});
