import { SET_ALBUM, RESET_ALBUM } from '../actions/albums'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM:
      return action.album
    case RESET_ALBUM:
      return initialState
    default:
      return state
  }
}

export default reducer
