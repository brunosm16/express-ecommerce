const { Segments, Joi } = require('celebrate');

const requiredUserIdBody = {
	[Segments.BODY]: Joi.object().keys({
		user_id: Joi.string().required(),
	}),
};

module.exports = { requiredUserIdBody };
