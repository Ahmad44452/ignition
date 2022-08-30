import axios from "axios";

import { setDataUser, signOutUser } from "../slices/userSlice";
import showToast from "../../utils/showToast";
import { getAuthHeader, removeTokenCookie } from "../../utils/cookies";

axios.defaults.headers.post['Content-Type'] = "application/json";


export const registerUserApi = (email, password) => {
  return async (dispatch) => {
    try {
      const user = await axios.post('/api/user/register', { email, password });

      dispatch(setDataUser(user.data));
    } catch (error) {
      let errorMessage = error.response.data.message;
      if (errorMessage === "Error") {
        errorMessage = error.response.data.error.message;
      }
      showToast('error', errorMessage);

    }
  }
}

export const signInUserApi = (email, password) => {
  return async (dispatch) => {
    try {
      const user = await axios.post('/api/user/login', { email, password });

      await dispatch(setDataUser(user.data));
    } catch (error) {
      let errorMessage = error.response.data.message;
      if (errorMessage === "Error") {
        errorMessage = error.response.data.error.message;
      }
      showToast('error', errorMessage);
    }
  }
}

export const authUserApi = () => {
  return async (dispatch) => {
    try {
      const user = await axios.get('/api/user/auth', getAuthHeader);
      dispatch(setDataUser(user.data));
    } catch (error) {
      let errorMessage = error.response.data.message;
      if (errorMessage === "Error") {
        errorMessage = error.response.data.error.message;
      }
    }
  }
}

export const signOutUserApi = () => {
  return async (dispatch) => {
    try {
      dispatch(signOutUser());
      removeTokenCookie();
    } catch (error) {
      let errorMessage = error.response.data.message;
      if (errorMessage === "Error") {
        errorMessage = error.response.data.error.message;
      }
    }
  }
}

export const registerUserNumberApi = (userInfoObj, simNumber) => {
  return async (dispatch) => {
    try {
      const user = await axios.patch('/api/user/registerNumber', { ...userInfoObj, simNumber }, getAuthHeader);
      dispatch(setDataUser(user.data));
    } catch (error) {
      let errorMessage = error.response.data.message;
      if (errorMessage === "Error") {
        errorMessage = error.response.data.error.message;
      }
      showToast('error', errorMessage);
    }
  }
}