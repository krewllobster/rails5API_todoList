import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AppContainer from './components/App'
import 'semantic-ui-css/semantic.min.css'

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
