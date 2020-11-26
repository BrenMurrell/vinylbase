import { SET_TOASTER, CLEAR_TOASTER } from '../actions/toaster'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOASTER:
      return action.toaster
    case CLEAR_TOASTER:
      return initialState
    default:
      return state
  }
}

export default reducer
