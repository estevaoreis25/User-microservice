const express = require('express');
const UserController = require('./controllers/UserController')

const routes = express.Router();
routes.post('/create', UserController.createUser)

module.exports = routes