const { celebrate, Segments, Joi } = require('celebrate');
const { requiredAuthorizationHeader } = require('../base-validators/authorization');

module.exports = celebrate({
	...requiredAuthorizationHeader,
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		parent_category_id: Joi.string().optional(),
	}),
});
