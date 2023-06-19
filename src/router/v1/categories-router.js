const express = require('express');
const categoriesValidator = require('../../validators/categories');
const categoriesController = require('../../controllers/categories');
const { auth, adminAuth } = require('../../middlewares/jwt-auth');
const expressHandler = require('../../middlewares/express-handler');

const categoriesRouter = express.Router();

categoriesRouter.post(
	'/',
	categoriesValidator.create,
	adminAuth,
	expressHandler(categoriesController.create)
);
categoriesRouter.delete(
	'/:id',
	categoriesValidator.deleteById,
	adminAuth,
	expressHandler(categoriesController.deleteById)
);
categoriesRouter.get(
	'/',
	categoriesValidator.findAll,
	auth,
	expressHandler(categoriesController.findAll)
);
categoriesRouter.get(
	'/:id',
	categoriesValidator.findById,
	auth,
	expressHandler(categoriesController.findById)
);
categoriesRouter.put(
	'/:id',
	categoriesValidator.update,
	adminAuth,
	expressHandler(categoriesController.update)
);

module.exports = categoriesRouter;
