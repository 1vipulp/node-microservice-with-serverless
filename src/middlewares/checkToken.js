'use strict'
const { responseGenerator, statusCode } = require('../utils/utils')
const FILE_CONS = 'NP_CTM_'

const checkPoint = (req, res, next) => {
    console.log('hahaah ', req.query);
    if (req.query && req.query['foo'] === 'bar') {
        next()
        return true
    }
    return res.status(statusCode.FORBIDDEN).send(responseGenerator([], 'You are not allowed to do this action', FILE_CONS + statusCode.FORBIDDEN, true))
}

module.exports = { checkPoint }