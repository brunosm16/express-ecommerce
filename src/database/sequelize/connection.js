const Sequelize = require('sequelize');

const dbConfig = require('../../config/db/db-config');
const requireBySourceAndDir = require('../../utils/require-by-source-and-dir');

const isModelInstance = (value) => value.prototype instanceof Sequelize.Model;

const initializeModels = (models, connection) => {
	Object.keys(models).forEach((key) => {
		const currentModel = models[key];
		const isValidModel = currentModel && isModelInstance(currentModel);

		if (isValidModel) currentModel.init(connection);
	});
};

const associateModels = (models, connection) => {
	Object.keys(models).forEach((key) => {
		const currentModel = models[key];
		const associate = currentModel?.associate;
		const isValidModel = isModelInstance(currentModel);

		if (isValidModel && associate) associate(connection.models);
	});
};

const connection = new Sequelize(dbConfig);

const models = requireBySourceAndDir(__dirname, '../../models');

initializeModels(models, connection);
associateModels(models, connection);

module.exports = connection;
