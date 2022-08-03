const express = require('express');
const UserController = require('./controllers/UserController')

const routes = express.Router();
routes.post('/user/create', UserController.createUser)
routes.get('/users', UserController.getAll)
routes.put('/user/update/:id', UserController.updateUser)

module.exports = routes