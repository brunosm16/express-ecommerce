const { Joi, Segments } = require('celebrate');

const requiredAuthorizationHeader = {
	[Segments.HEADERS]: Joi.object()
		.keys({
			authorization: Joi.string().required(),
		})
		.unknown(),
};

module.exports = { requiredAuthorizationHeader };
