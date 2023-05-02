const express = require('express');
const addressesValidator = require('../../validators/addresses');
const addressesController = require('../../controllers/addresses');
const { auth, adminAuth } = require('../../middlewares/jwt-auth');

const addressesRouter = express.Router();

addressesRouter.get('/', addressesValidator.findAll, auth, addressesController.findAll);
addressesRouter.get('/:id', addressesValidator.findById, auth, addressesController.findById);
addressesRouter.post('/', addressesValidator.create, adminAuth, addressesController.create);
addressesRouter.delete(
	'/:id',
	addressesValidator.deleteById,
	adminAuth,
	addressesController.deleteById
);

module.exports = addressesRouter;
