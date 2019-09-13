import axios from 'axios';
import {
  REGISTER_USER,
  LOGIN_USER,
  AUTH_ERROR,
  LOGOUT_USER,
  OAUTH_LOGIN
} from './types';

export const register = data => async dispatch => {
  try {
    const res = await axios.post('/users/register', data);

    dispatch({
      type: REGISTER_USER,
      payload: res.data.token
    });

    localStorage.setItem('JWT_TOKEN', res.data.token);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email already exists'
    });
  }
};

export const login = data => async dispatch => {
  try {
    const res = await axios.post('/users/login', data);

    dispatch({
      type: LOGIN_USER,
      payload: res.data.token
    });
    localStorage.setItem('JWT_TOKEN', res.data.token);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid Credentials'
    });
  }
};

export const oAuth = () => {
  const token = localStorage.getItem('JWT_TOKEN');
  //login and register are same
  return {
    type: OAUTH_LOGIN,
    payload: token
  };

};

export const logout = data => async dispatch => {
  try {
    localStorage.removeItem('JWT_TOKEN');
    // await axios.post('/users/logout',data);
    dispatch({
      type: LOGOUT_USER
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Not logged in'
    });
  }
};
