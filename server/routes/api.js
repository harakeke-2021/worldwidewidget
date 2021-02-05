const express = require('express')
const request = require('superagent')

const db = require('../data/db')

const router = express.Router()

module.exports = router

// router.get('/', (req, res) => {
//   res.json({ statement: 'welcome to this api!' })
// })

const weatherURl = 'api.openweathermap.org/data/2.5/weather'
const city = 'Auckland'

router.get('/', (req, res) => {
  request.get(weatherURl)
    .query({ q: city, units: 'metric', appid: apiKey })
    .then(apiRes => {
      res.json(apiRes.body)
    })
    .catch(err => console.error(err))
})
