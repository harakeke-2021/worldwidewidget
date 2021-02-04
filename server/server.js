const express = require('express')
const api = require('./routes/api')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../dist')))

server.use('/api/v1', api)

module.exports = server
