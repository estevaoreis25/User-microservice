const express = require('express');
const UserController = require('./controllers/UserController')

const routes = express.Router();
routes.get('/', UserController.test)

module.exports = routes