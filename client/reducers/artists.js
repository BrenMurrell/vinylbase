import { SET_ARTISTS, ADD_ARTIST, RESET_ARTISTS, DELETE_ARTIST } from '../actions/artists'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTISTS:
      return action.artists
    case ADD_ARTIST:
      return [action.artist, ...state]
    case DELETE_ARTIST:
      return state.filter(artist => artist.id !== action.artistId)
    case RESET_ARTISTS:
      return initialState
    default:
      return state
  }
}

export default reducer
