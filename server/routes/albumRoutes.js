const express = require('express')
const router = express.Router()

const db = require('../db/dbFunctions')

router.get('/', (req, res) => {
  return db.getAlbumsAll()
    .then(albums => {
      res.json(albums)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return db.getAlbumById(id)
    .then(album => {
      res.json(album)
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router