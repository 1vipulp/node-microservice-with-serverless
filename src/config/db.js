const { Client } = require('pg')

const env = process.env
const user = process.env[`${env}_DB_USER`]
const host = process.env[`${env}_DB_HOST`]
const database = process.env[`${env}_DB_DATABASE`]
const password = process.env[`${env}_DB_PASSWORD`]
const port = process.env[`${env}_DB_PORT`]

const client = new Client({
    user, host, database, password, port
})

global.client = client