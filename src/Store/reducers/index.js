import { combineReducers } from "redux";
import { Login_Success, Login_Failed, undefinedRes,Logout } from "../types";

const AuthState = { authentication: false };
const loginReducer = (state = AuthState, action) => {
  switch (action.type) {
    case Login_Success:
      return { authentication: true };
    case undefinedRes:
      return { authentication: false };
    case Login_Failed:
      return { authentication: false };
      case Logout:
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

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const logOutReducer = (state = AuthState, action) => {
  switch (action.type) {
    case Logout:
      return { authentication: false };
    default:
      return state;
  }
};

export default combineReducers({
  authentication: loginReducer,
  undefinedAuth: undefinedReducer,
  sidebarToggle: changeState,
  logout:logOutReducer
});
