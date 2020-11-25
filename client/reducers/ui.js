import { ARTISTS_LOADED } from '../actions/artists'
import { ALBUMS_LOADED } from '../actions/albums'

const initialState = {
  artistsLoaded: false,
  albumsLoaded: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ARTISTS_LOADED:
      return {...state, artistsLoaded: true }
    case ALBUMS_LOADED:
      return {...state, albumsLoaded: true }
    default:
      return state
  }
}

export default reducer