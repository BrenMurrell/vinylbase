import { SET_ALBUMS } from '../actions/albums'

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
