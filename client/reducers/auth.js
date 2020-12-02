import { LOGIN_SUCCESS, LOGOUT } from '../actions/auth'

const initialState = {
  loggedIn: false,
  user: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default reducer
