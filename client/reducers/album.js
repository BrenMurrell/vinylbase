import { SET_ALBUM } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM:
      return action.album
    default:
      return state
  }
}

export default reducer
