require('./config-env');

const {
	SERVER_PORT,
	NODE_ENV,
	DB_DIALECT,
	DB_HOST,
	DB_DATABASE,
	DB_USERNAME,
	DB_PASSWORD,
	DB_URL,
	CORS_ORIGIN_URL,
} = process.env;

module.exports = Object.freeze({
	SERVER_PORT,
	NODE_ENV,
	DB_DIALECT,
	DB_HOST,
	DB_DATABASE,
	DB_USERNAME,
	DB_PASSWORD,
	DB_URL,
	CORS_ORIGIN_URL,
});
