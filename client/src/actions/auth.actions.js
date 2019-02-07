import { SET_CURRENT_USER } from "./types"
import axios from "axios"
import jwt_decode from 'jwt-decode'
import setAuthToken from "./setAuthToken"

export const authLogin = (username, password) => dispatch => {
  axios.post("/user/auth/login", {username, password})
  .then(res => {
    const token = res.data.token
    localStorage.setItem('token', token);
    setAuthToken(token);
    const decoded = jwt_decode(token)
    dispatch(setCurrentUser(decoded))
  }).catch(err => {
    console.log(err)
  });
} 

export const setCurrentUser = decoded => {
  return {
      type: SET_CURRENT_USER,
      payload: decoded
  }
}

export const logoutUser = (history) => dispatch => {
  localStorage.removeItem('token');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push('/');
}