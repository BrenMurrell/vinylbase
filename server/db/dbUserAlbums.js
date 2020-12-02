const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'

const connection = knex(config[env])

function getUserAlbums (userId, db = connection) {
  return db('user_albums')
    .select()
    .where('user_id', userId)
}

function getUserAlbumEntry (userAlbumId, db = connection) {
  return db('user_albums')
    .select()
    .where('id', userAlbumId)
    .first()
}

function addUserAlbum (userAlbum, db = connection) {
  return db('user_albums')
    .insert(userAlbum)
}

module.exports = {
  addUserAlbum,
  getUserAlbumEntry,
  getUserAlbums
}
