const express = require('express');
const http = require('http');
const { setCors, setJson, setErrors } = require('../middlewares');
const setRouter = require('../router/set-router');

const app = express();
const server = http.createServer(app);

require('../database/sequelize/connection');

setCors(app);
setJson(app);
setRouter(app);
setErrors(app);

module.exports = server;
