import { SET_ARTIST, RESET_ARTIST } from '../actions/artists'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ARTIST:
      return action.artist
    case RESET_ARTIST:
      return initialState
    default:
      return state
  }
}

export default reducer