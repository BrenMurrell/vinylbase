import { combineReducers } from 'redux'

import albums from './albums'
import album from './album'
import artists from './artists'
import artist from './artist'
import artistAlbums from './artistAlbums'
import auth from './auth'
import toaster from './toaster'
import ui from './ui'

export default combineReducers({
  albums,
  album,
  artists,
  artist,
  auth,
  toaster,
  artistAlbums,
  ui
})
