const express = require('express')

const connection = require('./database/connection')

const adminController = require('./controllers/adminController')
const salesmanController = require('./controllers/salesmanController')

const routes = express.Router()

routes.post('/admin', adminController.create)

routes.post('/salesman', salesmanController.create)

module.exports = routes