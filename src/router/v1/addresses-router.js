const express = require('express');
const addressesValidator = require('../../validators/addresses');
const addressesController = require('../../controllers/addresses');

const addressesRouter = express.Router();

addressesRouter.get('/', addressesValidator.findAll, addressesController.findAll);
addressesRouter.post('/', addressesValidator.create, addressesController.create);

module.exports = addressesRouter;
