const { Joi, Segments } = require('celebrate');

const requiredIdParams = {
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.string().required(),
	}),
};

const requiredUserIdParams = {
	[Segments.PARAMS]: Joi.object().keys({
		user_id: Joi.string().required(),
	}),
};

module.exports = { requiredIdParams, requiredUserIdParams };
