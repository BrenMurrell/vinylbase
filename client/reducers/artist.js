import { SET_ARTIST } from '../actions/artists'

const initialState = []

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ARTIST:
      return action.artist
    default:
      return state
  }
}

export default reducer