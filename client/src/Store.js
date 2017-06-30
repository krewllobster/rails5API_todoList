import thunk from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'redux-json-router'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import { todoIdReducer } from './reducers/todoIdReducer'
import { authReducer } from './reducers/authReducer'

const loggerMiddleware = createLogger()

const makeRootReducer = () => combineReducers({
  todoId: todoIdReducer,
  auth: authReducer,
  router: routerReducer,
})

function configureStore(history, initialState = {}) {

  const middlewares = [loggerMiddleware, thunk, routerMiddleware(history)]

  const enhancers = [applyMiddleware(...middlewares)]

  return createStore(makeRootReducer(), initialState, enhancers)

}
