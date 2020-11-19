const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'

const connection = knex(config[env])

function getArtistsAll(orderField = 'name', db = connection) {
  return db('artists').select()
    .orderBy(orderField)
}

function getArtistById(id, db = connection){
  return db('artists')
    .select()
    .where('artists.id', id)
    .first()
}

function addArtist(artist, db = connection) {
  return db('artists').insert(artist)
}

function updateArtist(id, data, db = connection) {
  return db('artists')
    .update(data)
    .where('id', id)
}

function deleteArtist(id, db = connection) {
  return db('artists')
    .del()
    .where('id', id)
    .then(ids => {
      return ids
    })
}

function getAlbumsAll(orderField = 'name', db = connection) {
  return db('albums')
    .select()
    .orderBy(orderField)
}

function getAlbumById(id, db = connection) {
  return db('albums')
    .select()
    .first()
    .where('id', id)
}

function getAlbumsByArtist(artistId, orderField = 'name', db = connection) {
  return db('albums')
    .select()
    .where('artist', artistId)
    .orderBy(orderField)
}

function updateAlbum(albumId, newData, db = connection) {
  return db('albums')
    .update(newData)
    .where('id', albumId)
}

function addAlbum(newAlbum, db = connection) {
  return db('albums')
    .insert(newAlbum)
}

function deleteAlbum(albumId, db = connection) {
  return db('albums')
    .del()
    .where('id', albumId)
}

const getChangesAll = (db = connection) => {
  return db('changelog')
    .select()
    .orderBy('created_at', 'desc')
}

const getChangesById = (id, db = connection) => {
  return db('changelog')
    .select()
    .where('id', id)
    .first()
}

const addChangelog = (newChangelog, db = connection) => {
  return db('changelog')
    .insert(newChangelog)
}

const updateChangelog = (id, changes, db = connection) => {
  return db('changelog')
    .update(changes)
    .where('id', id)
}

const deleteChangelog = (id, db = connection) => {
  return db('changelog')
    .del()
    .where('id', id)
}

module.exports = {
  addArtist,
  deleteArtist,
  updateArtist,
  getArtistsAll,
  getArtistById,
  getAlbumsAll,
  getAlbumById,
  getAlbumsByArtist,
  updateAlbum,
  addAlbum,
  deleteAlbum,
  getChangesAll,
  getChangesById,
  addChangelog,
  updateChangelog,
  deleteChangelog,
}
