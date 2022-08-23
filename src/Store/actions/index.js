import { Login_Success, Login_Failed, undefinedRes, Logout } from "../types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        toast.error('user not found')
        return 
      }
      dispatch({
        type: Login_Success,
        payload: response.data,
      });
      toast.success('logged in')
      
    } catch (e) {
      dispatch({ type: Login_Failed, payload: e.message });
    }
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: Logout,
  };
};

export const undefinedLogin = (token) => {
  return {
    type: undefinedRes,
    payload: token,
  };
};
