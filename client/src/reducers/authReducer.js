import {
  REGISTER_USER,
  LOGIN_USER,
  AUTH_ERROR,
  OAUTH_LOGIN,
  LOGOUT_USER
} from '../actions/types';

const jwtToken = localStorage.getItem('JWT_TOKEN');

const INITIAL_STATE = {
  token: jwtToken ,
  isAuthenticated: jwtToken ? true : false,
  errorMessage: ''
};

export const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_USER:

      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        errorMessage: ''
      };
    case LOGIN_USER:
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        errorMessage: ''
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        errorMessage: ''

      };
    case OAUTH_LOGIN:
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        errorMessage: ''
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: payload
      };
    default:
      return state;
  }
};
