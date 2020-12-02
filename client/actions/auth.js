import { firebaseApp, authRef } from '../config/firebase'

import { setToaster } from './toaster'
import { fetchUserAlbums } from './userAlbums'

// const baseUrl = '/api/v1/'
export const AUTH_LOADED = 'AUTH_LOADED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

export const logIn = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

export const authLoaded = () => {
  return {
    type: AUTH_LOADED
  }
}

export const logOut = () => {
  return {
    type: LOGOUT
  }
}

export const fetchUser = () => {
  return dispatch => {
    authRef.onAuthStateChanged(user => {
      if (user) {
        dispatch(logIn(user))
        dispatch(authLoaded())
        dispatch(fetchUserAlbums(user.uid))
      } else {
        dispatch(authLoaded())
      }
    })
  }
}

export const signOut = () => dispatch => {
  firebaseApp.auth().signOut()
    .then(result => {
      dispatch(logOut())
      return null
    })
    .catch(error => {
      console.log(error.message)
    })
}

export const signInWithProvider = (provider) => dispatch => {
  firebaseApp.auth().signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken
      var user = result.user
      dispatch(logIn(user))
      dispatch(setToaster({
        type: 'normal',
        message: 'Logged in successfully.'
      }))
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
