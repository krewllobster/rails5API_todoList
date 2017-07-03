import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import { connectRoutes, redirect } from 'redux-first-router'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { appReducer } from './reducers/appReducer'

const loggerMiddleware = createLogger()

const history = createHistory()

const authThunk = (dispatch, getState) => {
  const loggedIn = getState().app.auth.loggedIn

  if (!loggedIn) {
    const action = redirect({type: 'LOGIN'})
    dispatch(action)
  }
}

const todosThunk = async (dispatch, getState) => {
  const loggedIn = getState().app.auth.loggedIn
  const apiKey = getState().app.auth.apiKey
  const hasTodos = getState().app.todos.all

  if (!loggedIn) {
    const action = redirect({type: 'LOGIN'})
    dispatch(action)
  }

  if (loggedIn && !hasTodos) {
    console.log('logged in')
    const data = await fetch('/todos', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })

    const todos = await data.json()
    const action = {type: 'TODOS', payload: { todos } }
    dispatch(action)
  }
}

const routesMap = {
  LOGIN: {path: '/auth/login'},
  REGISTER: '/auth/register',
  TODOS: {path: '/todos', thunk: todosThunk},
  TODO: {path: '/todos/:id', thunk: authThunk},
  OTHER: {path: '*', thunk: authThunk}
}

const {
  reducer,
  middleware,
  enhancer
} = connectRoutes(history, routesMap)

const rootReducer = combineReducers({
  location: reducer,
  app: appReducer,
})

const middlewares = applyMiddleware(middleware, loggerMiddleware, thunk)

const store = createStore(rootReducer, compose(enhancer, middlewares))

export default store
