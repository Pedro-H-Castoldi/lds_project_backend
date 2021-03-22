const express = require('express')

const connection = require('./database/connection')

const adminController = require('./controllers/adminController')
const salesmanController = require('./controllers/salesmanController')
const profileController = require('./controllers/profilerController')
const sessionAdminController = require('./controllers/sessionAdminController')
const sessionSalesmanController = require('./controllers/sessionSalesmanController')

const routes = express.Router()

routes.post('/sessionAdmin', sessionAdminController.create)
routes.post('/sessionSalesman', sessionSalesmanController.create)

routes.get('/admin', adminController.index)
routes.post('/admin', adminController.create)

routes.get('/profile', profileController.index)

routes.get('/salesman', salesmanController.index)
routes.post('/salesman', salesmanController.create)
routes.delete('/salesman/:id', salesmanController.delete)

module.exports = routes