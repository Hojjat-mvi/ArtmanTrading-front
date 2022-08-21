import { Login_Success, Login_Failed, undefinedRes } from "../types";
import axios from "axios";

export const login = (values) => {
  return async (dispatch, store) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        values
      );
      const { token } = response.data;

      localStorage.setItem("token", token);

      if (token === undefined) {
        dispatch(undefinedLogin(token));
        return
      }
      
      dispatch({
        type: Login_Success,
        payload: response.data,
      });
    } catch (e) {
      dispatch({ type: Login_Failed, payload: e.message });
    }
  };
};

export const undefinedLogin = (token) => {
  return {
    type: undefinedRes,
    payload: token
  };
};

