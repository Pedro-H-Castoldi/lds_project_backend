const express = require('express')

const connection = require('./database/connection')

const adminController = require('./controllers/adminController')
const salesmanController = require('./controllers/salesmanController')
const profileController = require('./controllers/profilerController')
const clientController = require('./controllers/clientController')
const internetPlanController = require('./controllers/internetPlanController')
const sendEmailController = require('./controllers/sendEmailController')

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
routes.put('/salesman/:id', salesmanController.update)
routes.delete('/salesman/:id', salesmanController.delete)

routes.get('/client', clientController.index)
routes.post('/client', clientController.create)
routes.put('/client/:id', clientController.update)
routes.delete('/client/:id', clientController.delete)

routes.get('/internet-plan', internetPlanController.index)
routes.post('/internet-plan', internetPlanController.create)
routes.put('/internet-plan/:id', internetPlanController.update)
routes.delete('/internet-plan/:id', internetPlanController.delete)

routes.post('/send-email', sendEmailController.create)


module.exports = routes