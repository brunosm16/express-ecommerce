const { persistEntity, validateEntity } = require('../entities');
const { UserModel, AddressModel } = require('../../models');
const {
	addressParamsToPersist,
	addressParamsToExpose,
} = require('../../constants/params/addresses-params');
const { USER_NOT_FOUND } = require('../../constants/messages/entities-messages/users');

const persistAddress = async (body) => {
	const { user_id } = body;

	await validateEntity.entityExistsByPk(user_id, UserModel, USER_NOT_FOUND);

	return persistEntity.saveEntity(
		AddressModel,
		body,
		addressParamsToPersist,
		addressParamsToExpose
	);
};

module.exports = { persistAddress };
