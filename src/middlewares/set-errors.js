const { errors } = require('celebrate');

const setErrors = (app) => {
	app.set(errors());
};

module.exports = setErrors;
