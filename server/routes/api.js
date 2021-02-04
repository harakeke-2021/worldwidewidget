const express = require('express')

const db = require('../data/db')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  res.json({ statement: 'welcome to this api!' })
})
