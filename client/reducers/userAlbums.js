import { SET_USER_ALBUMS } from '../actions/userAlbums'

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_USER_ALBUMS:
      return action.albums
    default:
      return state
  }
}

export default reducer
