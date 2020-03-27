'use strict'
const express = require('express')
const router = require('express').Router()
const { healthCheckStatus } = require('../controllers/healthCheck')
const { checkPoint } = require('../middlewares/checkToken')

/**
* @api {GET} /{env}/api 1. Get Health Check Status
* @apiName Get Health Check Status
* @apiGroup 1. Healthcheck
* @apiDescription Check whether service is up and running or not ?
* @apiExample {cURL} cURL Script
curl --location --request GET 'localhost:3000/dev/api?foo=bar1'
* @apiHeaderExample {json} Headers:
foo:bar
Authorization:Bearer 1234****
userId:1234-2345-3456-4556
* @apiSuccessExample {json} Success-Response:
{
    "data": {
        "msg": "Service is running"
    },
    "message": "Health Check Success",
    "errorStatus": false,
    "status": "NP_HCC_200",
    "additionalData": []
}
* @apiErrorExample {json} Error-Response:
{
    "data": [],
    "message": "You are not allowed to do this action",
    "errorStatus": true,
    "status": "NP_CTM_403",
    "additionalData": []
}
* @apiVersion 1.0.0
*/
router.get('/', healthCheckStatus)

/**
* @api {GET} /{env}/api 1. Get Health Check Status
* @apiName Get Health Check Status
* @apiGroup 1. Healthcheck
* @apiDescription Check whether service is up and running or not ?
* @apiExample {cURL} cURL Script
curl --location --request GET 'localhost:3000/dev/api/serviceStatus?foo=bar'
* @apiHeaderExample {json} Headers:
foo:bar
Authorization:Bearer 1234****
userId:1234-2345-3456-4556
* @apiSuccessExample {json} Success-Response:
{
    "data": {
        "msg": "Service is running"
    },
    "message": "Health Check Success",
    "errorStatus": false,
    "status": "NP_HCC_200",
    "additionalData": []
}
* @apiErrorExample {json} Error-Response:
{
    "data": [],
    "message": "You are not allowed to do this action",
    "errorStatus": true,
    "status": "NP_CTM_403",
    "additionalData": []
}
* @apiVersion 1.0.0
*/
router.get('/serviceStatus', checkPoint, healthCheckStatus)

module.exports = router