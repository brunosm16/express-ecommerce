const Sequelize = require('sequelize');

const dbConfig = require('../../config/db/db-config');
const requireBySourceAndDir = require('../../utils/require-by-source-and-dir');

const initializeModels = (models, connection) => {
	Object.keys(models).forEach((key) => {
		const currentModel = models[key];

		if (currentModel) currentModel.init(connection);
	});
};

const associateModels = (models, connection) => {
	Object.keys(models).forEach((key) => {
		const currentModel = models[key];
		const associate = currentModel?.associate;

		if (associate) associate(connection.models);
	});
};

const connection = new Sequelize(dbConfig);

const models = requireBySourceAndDir(__dirname, '../../models');

initializeModels(models, connection);
associateModels(models, connection);

module.exports = connection;
