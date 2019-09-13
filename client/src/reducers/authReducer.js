import {
  REGISTER_USER,
  LOGIN_USER,
  AUTH_ERROR,
  OAUTH_LOGIN,
  LOGOUT_USER
} from '../actions/types';

const INITIAL_STATE = {
  isAuthenticated: false,
  token: '',
  errorMessage: ''
};

export const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_USER:
      console.log('register-success');

      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        errorMessage: ''
      };
    case LOGIN_USER:
      console.log('login-user');
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        errorMessage: ''
      };
    case LOGOUT_USER:
    console.log('logout-user ran');
      return {
        ...INITIAL_STATE
      };
    case OAUTH_LOGIN:
      console.log('oauth login');
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        errorMessage: ''
      };
    case AUTH_ERROR:
      console.log('error ran', payload);
      return {
        ...state,
        errorMessage: payload
      };
    default:
      return state;
  }
};
