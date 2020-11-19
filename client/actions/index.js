import { getFruits } from '../apis/fruits'
import { getAlbums, getAlbum } from '../apis/albums'
import { getArtists } from '../apis/artists'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_ALBUMS = 'SET_ALBUMS'
export const SET_ALBUM = 'SET_ALBUM'
export const SET_ARTISTS = 'SET_ARTISTS'

export function setArtists (artists) {
  return {
    type: SET_ARTISTS,
    artists
  }
}

export function fetchArtists () {
  return dispatch => {
    return getArtists()
      .then(artists => {
        dispatch(setArtists(artists))
        return null
      })
  }
}

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
        console.log(album)
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

export function setFruits (fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}
