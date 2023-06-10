const express = require('express');
const addressesValidator = require('../../validators/addresses');
const addressesController = require('../../controllers/addresses');
const { auth, adminAuth } = require('../../middlewares/jwt-auth');
const expressHandler = require('../../middlewares/express-handler');

const addressesRouter = express.Router();

addressesRouter.get(
	'/:userId',
	addressesValidator.findByUserId,
	auth,
	addressesController.findByUserId
);
addressesRouter.post('/', addressesValidator.create, expressHandler(addressesController.create));
addressesRouter.delete(
	'/:id',
	addressesValidator.deleteById,
	expressHandler(addressesController.remove)
);

addressesRouter.put('/:id', addressesValidator.update, adminAuth, addressesController.update);

module.exports = addressesRouter;
