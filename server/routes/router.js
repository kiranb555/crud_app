const express = require('express');
const { HomeRoute, AddUser, UpdateUser } = require('../services/render');

const route = express.Router();


route.get('/', HomeRoute);

route.get('/add-user', AddUser);

route.get('/update-user', UpdateUser);

module.exports = route;