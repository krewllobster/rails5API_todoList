import { NOT_FOUND } from 'redux-first-router'

const initState = {
  apiKey: null,
  loggedIn: false,
}

export const authReducer = (state = initState, action = {}) => {
  switch(action.type) {
    case NOT_FOUND:
      return null
    case 'LOGIN':
    case 'REGISTER':
    default:
      return state
  }
}
