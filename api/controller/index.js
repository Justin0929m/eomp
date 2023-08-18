const express = require('express')
const routes = express.Router()
const { users } = require('../model')
const bodyParser = require('body-parser')

routes.get('/users', bodyParser.json(), (req, res) =>{
    users.fetchUsers(req, res)
})

module.exports = {
    express,
    routes
}

