import {
  isAuthenticated,
  signIn,
  getDecodedToken,
  logOff
} from 'authenticare/client'
import { doRedirect, clearRedirect } from './ui'
import { setToaster } from './toaster'
import { fetchUserAlbums } from './userAlbums'

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
      dispatch(fetchUserAlbums(user.id))
    }
  }
}

export const doLogin = (username, password) => {
  return dispatch => {
    return signIn({ username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          dispatch(doRedirect('/'))
          dispatch(logIn(token))
          dispatch(fetchUserAlbums(token.id))
          dispatch(setToaster({ type: '', message: 'Successfully logged in as ' + token.username }))
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

export const doLogout = () => {
  return dispatch => {
    logOff()
    dispatch(logOut())
    dispatch(setToaster({
      type: 'normal',
      message: 'Logged out successfully.'
    }))
    return null
  }
}
