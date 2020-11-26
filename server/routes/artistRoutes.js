const express = require('express')
const router = express.Router()

const db = require('../db/dbFunctions')

router.get('/', (req, res) => {
  return db.getArtistsAll()
    .then(artists => {
      return res.json(artists)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/:id', (req, res) => {
  const artistId = req.params.id

  return db.getArtistById(artistId)
    .then(artist => {
      return res.json(artist)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const artistId = req.params.id

  return db.deleteArtist(artistId)
    .then(artist => {
      return res.json(artist)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/:id/albums', (req, res) => {
  const artistId = req.params.id

  return db.getAlbumsByArtist(artistId)
    .then(artist => {
      return res.json(artist)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/', (req, res) => {
  const artist = req.body
  return db.addArtist(artist)
    .then(ids => {
      return res.json(ids[0])
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router
