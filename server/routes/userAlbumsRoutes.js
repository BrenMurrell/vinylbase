/* eslint-disable promise/no-nesting */
const express = require('express')
const router = express.Router()

const db = require('../db/dbUserAlbums')

router.get('/:id', (req, res) => {
  const userId = req.params.id
  return db.getUserAlbums(userId)
    .then(userAlbums => {
      return res.json(userAlbums)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/', (req, res) => {
  const album = req.body
  return db.addUserAlbum(album)
    .then(id => {
      return db.getUserAlbumEntry(id)
        .then(album => {
          return res.json(album)
        })
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router
