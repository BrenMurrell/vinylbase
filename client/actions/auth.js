import {
  isAuthenticated,
  signIn,
  getDecodedToken
} from 'authenticare/client'
import { doRedirect, clearRedirect } from './ui'
import { setToaster } from './toaster'

const baseUrl = '/api/v1/'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

export const logIn = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

export const logOut = () => {
  return {
    type: LOGOUT
  }
}

export const checkAuth = () => {
  return dispatch => {
    const user = getDecodedToken()
    if (user) {
      dispatch(logIn(user))
    }
  }
}

export const doLogin = (username, password) => {
  return dispatch => {
    console.log('action', username, password)
    return signIn({ username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          dispatch(doRedirect('/'))
          dispatch(logIn(token))
          dispatch(clearRedirect())
        }
        return null
      })
      .catch(err => {
        console.log(err.message)
        dispatch(setToaster({
          type: 'error',
          message: 'Login failed. Please try again'
        }))
        return null
      })
  }
}
