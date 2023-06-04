const express = require('express');
const http = require('http');
const { setCors, setJson, setErrors } = require('../middlewares');
const setRouters = require('../router');

const app = express();
const server = http.createServer(app);

require('../database/sequelize/connection');

setCors(app);
setJson(app);
setRouters(app);
setErrors(app);

module.exports = server;
