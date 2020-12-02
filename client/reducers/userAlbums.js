import { SET_USER_ALBUMS, ADDED_USER_ALBUM } from '../actions/userAlbums'

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_USER_ALBUMS:
      return action.albums
    case ADDED_USER_ALBUM:
      return [...state, action.album]
    default:
      return state
  }
}

export default reducer
