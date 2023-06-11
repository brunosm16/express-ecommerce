const { persistEntity, validateEntity } = require('../entities');
const { UserModel, AddressModel } = require('../../models');
const {
	addressParamsToPersist,
	addressParamsToExpose,
} = require('../../constants/params/addresses-params');
const { makeEntityNotFoundMessage } = require('../../errors/messages/make-error-messages');

const persistAddress = async ({ body }) => {
	const { user_id } = body;

	await validateEntity.entityExistsByPk(user_id, UserModel, makeEntityNotFoundMessage('User'));

	return persistEntity.saveEntity(
		AddressModel,
		body,
		addressParamsToPersist,
		addressParamsToExpose
	);
};

module.exports = { persistAddress };
