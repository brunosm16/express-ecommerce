const express = require('express');
const addressesValidator = require('../../validators/addresses');
const addressesController = require('../../controllers/addresses');
const expressHandler = require('../../middlewares/express-handler');
const { adminAuth, auth } = require('../../middlewares/jwt-auth');

const addressesRouter = express.Router();

addressesRouter.post(
	'/',
	addressesValidator.create,
	adminAuth,
	expressHandler(addressesController.create)
);
addressesRouter.delete(
	'/:id',
	addressesValidator.remove,
	auth,
	expressHandler(addressesController.remove)
);
addressesRouter.put(
	'/:id',
	addressesValidator.update,
	auth,
	expressHandler(addressesController.update)
);

module.exports = addressesRouter;
