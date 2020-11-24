import { getAlbums, getAlbum, getAlbumsByArtist, addAlbumArt, addAlbumData, deleteAlbum } from '../apis/albums'

export const SET_ALBUMS = 'SET_ALBUMS'
export const SET_ALBUM = 'SET_ALBUM'
export const SET_ARTIST_ALBUMS = 'SET_ARTIST_ALBUMS'
export const ADD_ALBUM = 'ADD_ALBUM'
export const DELETE_ALBUM = 'DELETE_ALBUM'

export function setAlbum (album) {
  return {
    type: SET_ALBUM,
    album: album,
  }
}

export function pushAlbum (album) {
  return {
    type: ADD_ALBUM,
    album: album,
  }
}


export function fetchAlbum(id) {
  return dispatch => {
    return getAlbum(id)
      .then(album => {
        dispatch(setAlbum(album))
        return null
      })
  }
}

export function setAlbums (albums) {
  return {
    type: SET_ALBUMS,
    albums
  }
}

export function setArtistAlbums (albums) {
  return {
    type: SET_ARTIST_ALBUMS,
    albums
  }
}

export function fetchAlbums() {
  return dispatch => {
    return getAlbums()
      .then(albums => {
        dispatch(setAlbums(albums))
        return null
      })
  }
}

export function fetchAlbumsByArtist(artistId) {
  return dispatch => {
    return getAlbumsByArtist(artistId)
      .then(albums => {
        dispatch(setArtistAlbums(albums))
        return null
      })
  }
}

export function addAlbum (formImage, formData) {
  return dispatch => {
    return addAlbumArt(formImage)
      .then(fileUrl => {
        formData.image = fileUrl
        return addAlbumData(formData)
          .then(albumId => {
            formData.id = albumId
            dispatch(pushAlbum(formData))
            return null
          })
      })
      .catch(err => {
        console.log('error in actions: ', err.message)
      })
  }
}

export function removeAlbumFromState(albumId) {
  return {
    type: DELETE_ALBUM,
    albumId
  }
}

export function removeAlbum (albumId) {
  return dispatch => {
    return deleteAlbum(albumId)
      .then((num) => {
        dispatch(removeAlbumFromState(albumId))
        return null
      })
  }
}