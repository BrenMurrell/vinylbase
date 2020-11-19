import { combineReducers } from 'redux'

import fruits from './fruits'
import albums from './albums'
import album from './album'

export default combineReducers({
  fruits,
  albums,
  album,
})
