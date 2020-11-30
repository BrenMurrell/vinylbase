import { getUserAlbums } from '../apis/userAlbums'

export const SET_USER_ALBUMS = 'SET_USER_ALBUMS'

export const setUserAlbums = (userAlbums) => {
  return {
    type: SET_USER_ALBUMS,
    albums: userAlbums
  }
}

export const fetchUserAlbums = (userId) => {
  return dispatch => {
    return getUserAlbums(userId)
      .then(userAlbums => {
        dispatch(setUserAlbums(userAlbums))
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
