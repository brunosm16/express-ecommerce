const AddressModel = require('../../models/AddressModel');
const { ADDRESS_PARAMS_TO_CREATE_UPDATE } = require('../../constants/allowed-params');
const { persistEntity, validateEntity } = require('../entities');
const { USER_NOT_FOUND } = require('../../constants/error-messages');

const createAddress = async ({ body }) => {
	const { user_id } = body;

	await validateEntity.entityExistsByPk(user_id, AddressModel, USER_NOT_FOUND);

	return persistEntity.saveEntity(AddressModel, body, ADDRESS_PARAMS_TO_CREATE_UPDATE);
};

module.exports = { createAddress };
