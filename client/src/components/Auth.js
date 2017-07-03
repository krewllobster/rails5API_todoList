import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'

class Auth extends Component {

  render() {

    switch(this.props.location) {
      case 'REGISTER':
        return <Register />
      case 'LOGIN':
      default:
        return <Login />
    }

  }
}

export default Auth
