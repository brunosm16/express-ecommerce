const { ROUTE_NOT_FOUND } = require('../constants/error-messages');
const { STATUS_CODE_400 } = require('../constants/http-status-codes');
const v1Router = require('./v1');

const setRouters = (app) => {
	app.use('/api/v1', v1Router);
	app.use((req, res) => res.status(STATUS_CODE_400).json({ message: ROUTE_NOT_FOUND }));
};

module.exports = setRouters;
