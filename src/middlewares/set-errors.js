const { errors } = require('celebrate');

const setErrors = (app) => {
	app.use(errors());
};

module.exports = setErrors;
