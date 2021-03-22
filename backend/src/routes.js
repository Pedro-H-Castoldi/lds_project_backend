const express = require('express')

const connection = require('./database/connection')

const adminController = require('./controllers/adminController')
const salesmanController = require('./controllers/salesmanController')
const profileControler = require('./controllers/profilerController')

const routes = express.Router()

routes.get('/admin', adminController.index)
routes.post('/admin', adminController.create)

routes.get('/profile', profileControler.index)

routes.get('/salesman', salesmanController.index)
routes.post('/salesman', salesmanController.create)
routes.delete('/salesman/:id', salesmanController.delete)

module.exports = routes