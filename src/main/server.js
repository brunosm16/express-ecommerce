const { SERVER_PORT } = require('../env/env-values');

const app = require('./app');

const port = SERVER_PORT || 6000;

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Server running on port : ${SERVER_PORT}`);
});
