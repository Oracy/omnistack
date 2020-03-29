const express = require('express')
const OngController = require('../controllers/OngController')
const IncidentController = require('../controllers/IncidentController')
const ProfileController = require('../controllers/ProfileController')
const SessionController = require('../controllers/SessionController')
const { headerAuthentication, incidentCreate, incidentDelete, incidentsList, ongRegister, sessionAuthorization } = require('../validators/validator')
const routes = express.Router()

routes.post('/sessions', sessionAuthorization(), SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', ongRegister(), OngController.create)

routes.post('/incidents', headerAuthentication(), incidentCreate(), IncidentController.create)
routes.get('/incidents', incidentsList(), IncidentController.index)
routes.delete('/incidents/:id', headerAuthentication(), incidentDelete(), IncidentController.delete)

routes.get('/profile', headerAuthentication(), ProfileController.index)

module.exports = routes