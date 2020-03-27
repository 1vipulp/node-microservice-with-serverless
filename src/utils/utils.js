'use strict'
const statusCode = require('http-status-codes')

const responseGenerator = (data, msg, statusCode, status, additioanlData) => {
    const json = {}
    json.data = data
    json.message = msg
    json.errorStatus = status
    json.status = statusCode
    json.additionalData = additioanlData || []
    return json
}

module.exports = {
    statusCode,
    responseGenerator
}