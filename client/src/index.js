import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory, startListener, Router } from 'redux-json-router'
import configureStore from './store'
import routes from './routes.js'
import AppContainer from './components/App'

const history = createBrowserHistory()

const store = configureStore(history)

startListener(history, store)

render(
  <Provider store={store}>
    <Router routes = {routes}/>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
