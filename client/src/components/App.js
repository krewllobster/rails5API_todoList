import React from 'react';
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'

const App = ({ todoId, onClick }) =>
  <div>
    {!todoId
      ? <div>
          <h1>HOME</h1>

          <Link href='/app/todos/123'>Todo 123</Link>
          <Link href={{ type: 'TODO', payload: { id: 456 } }}>User 456</Link>
        </div>
      : <h1>{todoId}</h1>
    }
  </div>

const mapStateToProps = ({ todoId }) => ({ todoId })
const mapDispatchToProps = (dispatch) => ({

})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
