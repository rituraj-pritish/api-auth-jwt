import axios from 'axios';
import {REGISTER_USER,LOGIN_USER,AUTH_ERROR} from './types';

export const register = (data) => async dispatch => {

    try {
      const res =await axios.post('/users/register', data);

      dispatch({
        type: REGISTER_USER,
        payload: res.data.token
      })

      localStorage.setItem('JWT_TOKEN',res.data.token)
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: 'Email already exists'
      })
    }
  }

export const login = data => async dispatch => {
  try {
    console.log('data',data);
    const res = await axios.post('/users/login',data);

    dispatch({
      type: LOGIN_USER,
      payload: res.data.token
    })
    localStorage.setItem('JWT_TOKEN', res.data.token)
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid Credentials'
    })
  }
}