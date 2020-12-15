import { USER_DATA, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const getuserdata = () => (dispatch) => {
  axios.get("/api/user/me").then((res) => {
    dispatch({
      type: USER_DATA,
      payload: res.data.data,
    });
  });
};
