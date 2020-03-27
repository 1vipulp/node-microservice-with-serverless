'use strict'
const { statusCode, responseGenerator } = require('../utils/utils')
const { healthCheckStatusService } = require('../services/healthCheck')
// Service name + File name with File Type (here it is controller)
const CTRL_CONS = 'NP_HCC_'

const healthCheckStatus = async (req, res) => {
    try {
        const response = await healthCheckStatusService()
        return res.status(statusCode.OK).send(responseGenerator(response, `Health Check Success`, CTRL_CONS + statusCode.OK, false))
    } catch (error) {
        console.error(`Error while checking health check: %j %s`, error, error)
        if (error && error.msg && error.statusCode) {
            return res.status(error.statusCode).send(responseGenerator([], error.msg, CTRL_CONS + error.statusCode, true))
        }
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(responseGenerator(error, `Error while checking health status`, CTRL_CONS + statusCode.INTERNAL_SERVER_ERROR, true))
    }
}

module.exports = {
    healthCheckStatus
}