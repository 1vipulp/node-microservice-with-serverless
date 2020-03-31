'use strict'
const { statusCode, responseGenerator } = require('../utils/utils')
const { healthCheckStatusService } = require('../services/healthCheck')
// Service name + File name with File Type (here it is controller)
const CTRL_CONS = 'NP_HCC_'

const healthCheckStatus = async (event, context) => {
    try {
        const response = await healthCheckStatusService()
        const finalResult = responseGenerator(response, `Health Check Success`, CTRL_CONS + statusCode.OK, false)
        return {
            statusCode: 200,
            body: JSON.stringify(finalResult)
        }
    } catch (error) {
        console.error(`Error while checking health check: %j %s`, error, error)
        let errorToSend = responseGenerator(error, `Error while checking health status`, CTRL_CONS + statusCode.INTERNAL_SERVER_ERROR, true)
        if (error && error.msg && error.statusCode) {
            errorToSend = responseGenerator([], error.msg, CTRL_CONS + error.statusCode, true)
        }
        return {
            statusCode: error.statusCode,
            body: JSON.stringify(errorToSend)
        }
    }
}

module.exports = {
    healthCheckStatus
}