import {
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_REQUEST,
  LOGOUT,
} from '../actions/auth'

const initState = {
  apiKey: null,
  loggedIn: false,
  message: null,
  loading: false,
}

export const authReducer = (state = initState, action = {}) => {
  switch(action.type) {
    case FETCH_LOGIN_REQUEST:
      return {...state, loading: true}
    case FETCH_LOGIN_SUCCESS:
      return {...state, apiKey: action.apiKey, loading: false, loggedIn: true}
    case FETCH_LOGIN_FAILURE:
      return {...state, message: action.message, loading: false}
    case LOGOUT:
      return {...initState}
    default:
      return state
  }
}
