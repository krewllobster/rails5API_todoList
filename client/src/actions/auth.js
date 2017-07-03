export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST'
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS'
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const logout = () => ({
  type: LOGOUT,
})

export const fetchLoginRequest = () => ({
  type: FETCH_LOGIN_REQUEST,
})

export const fetchLoginSuccess = (apiKey) => ({
  type: FETCH_LOGIN_SUCCESS,
  apiKey,
})

export const fetchLoginFailure = (message) => ({
  type: FETCH_LOGIN_FAILURE,
  message,
})

export const fetchLogin = (urlQueryParams) => {
  return async (dispatch) => {
    dispatch(fetchLoginRequest())

    const data = await fetch(`/auth/login?${urlQueryParams}`, {
      method: 'post',
    })
    const response = await data.json()
    if(response.auth_token) {
      dispatch(fetchLoginSuccess(response.auth_token))
      dispatch({type: 'TODOS'})
    } else {
      dispatch(fetchLoginFailure(response.message))
    }
  }
}
