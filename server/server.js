const path = require('path')
const express = require('express')

const cards = require('./routes/cards')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/welcome', cards)

module.exports = server
