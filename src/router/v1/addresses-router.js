const express = require('express');
const addressesValidator = require('../../validators/addresses');
const addressesController = require('../../controllers/addresses');
const expressHandler = require('../../middlewares/express-handler');

const addressesRouter = express.Router();

addressesRouter.post('/', addressesValidator.create, expressHandler(addressesController.create));
addressesRouter.delete(
	'/:id',
	addressesValidator.remove,
	expressHandler(addressesController.remove)
);
addressesRouter.put('/:id', addressesValidator.update, expressHandler(addressesController.update));

module.exports = addressesRouter;
