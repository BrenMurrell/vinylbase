import { SET_ALBUMS, SET_ALBUM } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUMS:
      return action.albums
    default:
      return state
  }
}

export default reducer
