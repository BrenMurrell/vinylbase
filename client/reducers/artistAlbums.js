import { SET_ARTIST_ALBUMS, RESET_ARTIST_ALBUMS } from '../actions/albums'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST_ALBUMS:
      return action.albums
    case RESET_ARTIST_ALBUMS:
      return initialState
    default:
      return state
  }
}

export default reducer
