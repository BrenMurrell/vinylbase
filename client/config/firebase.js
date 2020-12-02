import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from './keys'

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const authRef = firebase.auth()
export const google = new firebase.auth.GoogleAuthProvider()
export const facebook = new firebase.auth.FacebookAuthProvider()
export const twitter = new firebase.auth.TwitterAuthProvider()
