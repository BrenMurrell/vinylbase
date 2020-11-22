import { getAlbums, getAlbum, getAlbumsByArtist } from '../apis/albums'

export const SET_ALBUMS = 'SET_ALBUMS'
export const SET_ALBUM = 'SET_ALBUM'

export function setAlbum (album) {
  return {
    type: SET_ALBUM,
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
        dispatch(setAlbums(albums))
        return null
      })
  }
}