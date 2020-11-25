import { getArtists, getArtist, addArtist, deleteArtist } from '../apis/artists'

export const SET_ARTISTS = 'SET_ARTISTS'
export const SET_ARTIST = 'SET_ARTIST'
export const ADD_ARTIST = 'ADD_ARTIST'
export const RESET_ARTISTS = 'RESET_ARTISTS'
export const RESET_ARTIST = 'RESET_ARTIST'
export const DELETE_ARTIST = 'DELETE_ARTIST'
export const ARTISTS_LOADED = 'ARTISTS_LOADED'

export function setArtist (artist) {
  return {
    type: SET_ARTIST,
    artist: artist
  }
}

function addArtistToProps (artist) {
  return {
    type: ADD_ARTIST,
    artist
  }
}

function removeArtistFromStore (artistId) {
  return {
    type: DELETE_ARTIST,
    artistId
  }
}

export function insertArtist (artist) {
  return dispatch => {
    return addArtist(artist)
      .then((newArtistId) => {
        artist.id = newArtistId
        // console.log('new artist', newArtist)
        dispatch(addArtistToProps(artist))
        return null
      })
  }
}

export function removeArtist (artistId) {
  return dispatch => {
    return deleteArtist(artistId)
      .then((num) => {
        dispatch(removeArtistFromStore(artistId))
        return null
      })
  }
}
 export const artistsLoaded = () => {
   return {
     type: ARTISTS_LOADED
   }
 }

export function fetchArtist (id) {
  return dispatch => {
    return getArtist(id)
      .then(artist => {
        dispatch(setArtist(artist))
        return null
      })
  }
}

export function setArtists(artists) {
  return {
    type: SET_ARTISTS,
    artists: artists,
  }
}

export function fetchArtists () {
  return dispatch => {
    return getArtists()
      .then(artists => {
        dispatch(setArtists(artists))
        dispatch(artistsLoaded())
        return null
      })
  }
}