const express = require('express')

const db = require('../db/fruits')
// require('dotenv').config()

const router = express.Router()

router.get('/', (req, res) => {
  db.getFruits()
    .then(results => {
      res.json({ fruits: results.map(fruit => fruit.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong', error: err.message })
    })
})
router.get('/id', (req, res) => {
  res.json(process.env.AWS_ACCESS_KEY_ID)
})

module.exports = router
