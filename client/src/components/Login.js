import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'
import { Grid, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react';
import { fetchLogin } from '../actions/auth'

class LoginComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    const params = {
      email: this.state.email,
      password: this.state.password,
    }

    let urlQueryParams = encodeURI(Object.keys(params).reduce((url, key) => {
      return url + `${key}=${params[key]}&`
    }, ''))

    this.props.fetchLogin(urlQueryParams)
  }

  handleChange(e, { name, value }) {
    this.setState({[name]: value})
  }

  render() {
    const loginStyle = {maxWidth: '35rem', margin: 'auto', marginTop: '5rem'}
    const { email, password } = this.state

    return (
      <Grid centered verticalAlign="middle" style={loginStyle}>
        <Grid.Column textAlign="center">
          <Header as='h2' color='teal'>
            Log-in to your account
          </Header>
          <Form size="large"
            onSubmit={this.handleSubmit}
          >
            <Segment stacked>
              <Form.Field>
                <Input fluid
                  icon='envelope'
                  iconPosition='left'
                  placeholder='E-mail address'
                  name='email'
                  type='email'
                  value={email}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Input fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type="password"
                  name='password'
                  value={password}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button fluid color="teal" size="large">LOGIN</Button>
            </Segment>
            <Message>
              New to us? <Link href='/register' to='/register'>Sign Up</Link>
            </Message>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = ({fetchLogin: fetchLogin})

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)

export default Login
