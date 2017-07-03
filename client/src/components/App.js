import React from 'react';
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'
import Main from './Main'
import Auth from './Auth'

const App = ({ loggedIn, location, message, activeTodo, todos }) =>
  <div>
    { !loggedIn
        ? <Auth location={location}/>
        : <Main todos = {todos} todoId = {activeTodo} />
    }
  </div>

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.app.auth.loggedIn,
  message: state.app.auth.message,
  location: state.location.type,
  activeTodo: state.app.todos.active,
  todos: state.app.todos.all
})

const mapDispatchToProps = (dispatch) => ({

})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
