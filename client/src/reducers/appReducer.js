import { NOT_FOUND } from 'redux-first-router'
import { combineReducers } from 'redux'
import { authReducer } from './authReducer'

const initState = {
  all: [],
  active: null,
}

const todos = (state = initState, action = {}) => {
  switch(action.type) {
    case 'TODOS':
      return {...state, all: action.payload.todos}
    case 'TODO':
      return {...state, activeTodo: action.payload.id}
    default:
      return state
  }
}

export const appReducer = combineReducers({todos, auth: authReducer})
