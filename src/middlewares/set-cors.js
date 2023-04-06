const cors = require('cors');

const { CORS_ORIGIN_URL } = require('../env/env-values');

const setCors = (app) => {
	app.use(cors(CORS_ORIGIN_URL));
};

module.exports = setCors;
