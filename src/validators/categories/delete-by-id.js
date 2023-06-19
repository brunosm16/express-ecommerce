const { celebrate, Segments, Joi } = require('celebrate');
const { requiredAuthorizationHeader } = require('../base-validators/authorization');
const { requiredIdParams } = require('../base-validators/params');

module.exports = celebrate({
	...requiredAuthorizationHeader,
	...requiredIdParams,
	[Segments.BODY]: Joi.object().keys({
		category_to_transfer_id: Joi.string().required(),
	}),
});
