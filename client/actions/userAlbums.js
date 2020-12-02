import { getUserAlbums, addUserAlbum } from '../apis/userAlbums'

export const SET_USER_ALBUMS = 'SET_USER_ALBUMS'
export const ADDED_USER_ALBUM = 'ADDED_USER_ALBUM'

export const setUserAlbums = (userAlbums) => {
  return {
    type: SET_USER_ALBUMS,
    albums: userAlbums
  }
}

export const setUserAlbum = (album) => {
  return {
    type: ADDED_USER_ALBUM,
    album
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

export const createUserAlbum = (userId, albumId) => {
  return dispatch => {
    const newUserAlbum = {
      user_id: userId,
      album_id: albumId
    }
    return addUserAlbum(newUserAlbum)
      .then(newRecord => {
        dispatch(setUserAlbum(newRecord))
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
