const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const upload = multer(uploadConfig)
const connection = require('./database/connection')

const adminController = require('./controllers/adminController')
const salesmanController = require('./controllers/salesmanController')
const profileController = require('./controllers/profilerController')

const clientController = require('./controllers/clientController')
const especificClientController = require('./controllers/especificClientController')

const especificInternetPlanController = require('./controllers/especificInternetPlanController')
const internetPlanController = require('./controllers/internetPlanController')
const sendEmailController = require('./controllers/sendEmailController')

const sessionAdminController = require('./controllers/sessionAdminController')
const sessionSalesmanController = require('./controllers/sessionSalesmanController')
const sessionClientController = require('./controllers/sessionClientController')

const confirmationController = require('./controllers/confirmationController')

const routes = express.Router()

routes.post('/sessionAdmin', sessionAdminController.create)
routes.post('/sessionSalesman', sessionSalesmanController.create)
routes.post('/sessionClient', sessionClientController.create)

routes.get('/admin', adminController.index)
routes.post('/admin', adminController.create)

routes.get('/profile', profileController.index)

routes.get('/salesman', salesmanController.index)
routes.post('/salesman', salesmanController.create)
routes.put('/salesman/:id', salesmanController.update)
routes.delete('/salesman/:id', salesmanController.delete)

routes.get('/client', clientController.index)
routes.post('/client', upload.array('images'), clientController.create)
routes.put('/client/:id', clientController.update)
routes.delete('/client/:id', clientController.delete)

routes.get('/especific-client', especificClientController.show)

routes.get('/internet-plan', internetPlanController.index)
routes.post('/internet-plan', internetPlanController.create)
routes.put('/internet-plan/:id', internetPlanController.update)
routes.delete('/internet-plan/:id', internetPlanController.delete)

routes.get('/especific-plan', especificInternetPlanController.show)

routes.get('/confirmation', confirmationController.index)
routes.put('/confirmation/:id', confirmationController.update)

routes.post('/send-email', sendEmailController.create)


module.exports = routes