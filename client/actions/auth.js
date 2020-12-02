import {
  isAuthenticated,
  signIn,
  getDecodedToken,
  logOff
} from 'authenticare/client'

import { firebaseApp, authRef } from '../config/firebase'

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

export const fetchUser = () => {
  return dispatch => {
    console.log('fetching user')
    authRef.onAuthStateChanged(user => {
      if (user) {
        console.log('found a user', user)
      } else {
        console.log('no user found')
      }
    })
  }
}

export const signInWithProvider = (provider) => dispatch => {
  firebaseApp.auth().signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken
      // The signed-in user info.
      var user = result.user
      console.log('token', token, 'user', user)
      return null
    })
    .catch(error => {
    // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // The email of the user's account used.
      var email = error.email
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential
      console.log(
        'errorCode', errorCode,
        'errorMessage', errorMessage,
        'email', email,
        'credential', credential
      )
    })
}
