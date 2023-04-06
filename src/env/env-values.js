require('./config-env');

const { SERVER_PORT } = process.env;

module.exports = Object.freeze({
	SERVER_PORT,
});
