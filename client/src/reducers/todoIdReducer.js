import { NOT_FOUND } from 'redux-first-router'

export const todoIdReducer = (state = null, action = {}) => {
  switch(action.type) {
    case 'LOGIN':
    case 'REGISTER':
    case 'LIST':
    case NOT_FOUND:
      return null
    case 'TODO':
      return action.payload.id
    default:
      return state
  }
}
