const express = require('express');
const addressesValidator = require('../../validators/addresses');
const addressesController = require('../../controllers/addresses');
const { auth, adminAuth } = require('../../middlewares/jwt-auth');

const addressesRouter = express.Router();

addressesRouter.get('/', addressesValidator.findAll, auth, addressesController.findAll);
addressesRouter.post('/', addressesValidator.create, adminAuth, addressesController.create);

module.exports = addressesRouter;
