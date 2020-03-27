const express = require('express')
const app = express()
const serverless = require('serverless-http')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./routes')(app)

module.exports.handler = serverless(app)