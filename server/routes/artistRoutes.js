const express = require('express')
const router = express.Router()

const db = require('../db/dbFunctions')

router.get('/', (req, res) => {
  return db.getArtistsAll()
    .then(artists => {
      res.json(artists)
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router