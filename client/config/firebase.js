import firebase from 'firebase/app'
import 'firebase/auth'
// import { firebaseConfig } from './keys'

// Initialize Firebase
const firebaseConfig = {
  // apiKey: 'AIzaSyAW7mpkTz9K4i633KW5SPsj9uIc2ubcaRk',
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DB_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_BUCKER,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const authRef = firebase.auth()
export const google = new firebase.auth.GoogleAuthProvider()
export const github = new firebase.auth.GithubAuthProvider()
