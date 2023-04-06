const routerV1 = require('./v1/router-v1');

const setRouter = (app) => {
	app.use('/api/v1', routerV1);
};

module.exports = setRouter;
