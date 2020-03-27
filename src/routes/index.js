'use strict'

const healthCheckRoutes = require('./healthCheck')

module.exports = (app) => {
    app.use('/api', healthCheckRoutes)
}

