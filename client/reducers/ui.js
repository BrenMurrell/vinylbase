import { ARTISTS_LOADED } from '../actions/artists'
import { ALBUMS_LOADED } from '../actions/albums'
import { REDIRECT_TO, CLEAR_REDIRECT } from '../actions/ui'

const initialState = {
  artistsLoaded: false,
  albumsLoaded: false,
  redirectTo: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTISTS_LOADED:
      return { ...state, artistsLoaded: true }
    case ALBUMS_LOADED:
      return { ...state, albumsLoaded: true }
    case REDIRECT_TO:
      return { ...state, redirectTo: action.url }
    case CLEAR_REDIRECT:
      return { ...state, redirectTo: null }
    default:
      return state
  }
}

export default reducer
