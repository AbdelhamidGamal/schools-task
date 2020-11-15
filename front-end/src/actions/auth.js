import { SET_USER, SIGN_OUT, AUTH_ERROR, SIGNING_IN } from "./types";

import axios from "axios";
axios.defaults.withCredentials = true;

const API = process.env.REACT_APP_API;

const signingIn = () => ({
  type: SIGNING_IN,
});

const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

const signOut = () => ({
  type: SIGN_OUT,
});

const authError = (data) => ({
  type: AUTH_ERROR,
  payload: data,
});

export const handleSignIn = (data) => async (dispatch) => {
  dispatch(signingIn());

  try {
    const res = await axios.post(`${API}/api/auth/login`, data);

    console.log(res);

    dispatch(handleFetchProfile());
  } catch (e) {
    console.log(e);
    dispatch(authError("Invalid Credentials"));
  }
};

export const handleFetchProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API}/api/auth`);

    dispatch(setUser(res.data));
  } catch (e) {
    dispatch(signOut());
  }
};

export const handleSignOut = () => async (dispatch) => {
  try {
    await axios.get(`${API}/api/auth/logout`);
    dispatch(signOut());
  } catch (e) {
    console.log(e);
  }
};
