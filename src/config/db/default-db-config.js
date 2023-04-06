const {
	DB_DIALECT,
	DB_HOST,
	DB_DATABASE,
	DB_USERNAME,
	DB_PASSWORD,
} = require('../../env/env-values');

module.exports = {
	dialect: DB_DIALECT,
	host: DB_HOST,
	username: DB_USERNAME,
	password: DB_PASSWORD,
	database: DB_DATABASE,
};
