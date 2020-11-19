import { SET_ARTISTS } from '../actions/artists'

const initialState = []

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ARTISTS:
      return action.artists
    default:
      return state
  }
}

export default reducer