import { getFruits } from '../apis/fruits'
import { getArtists } from '../apis/artists'

export const SET_FRUITS = 'SET_FRUITS'

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
