const {
	ADDRESS_NOT_FOUND,
	ADDRESS_NOT_FOUND_TO_USER,
} = require('../../constants/messages/entities-messages/addresses');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const { UserModel, AddressModel } = require('../../models');
const { validateEntity, removeEntity } = require('../entities');

const validateUser = async (user_id) => {
	await validateEntity.entityExistsByPk(user_id, UserModel, ADDRESS_NOT_FOUND_TO_USER);
};

const validateAddress = async (address_id) => {
	await validateEntity.entityExistsByPk(address_id, AddressModel, ADDRESS_NOT_FOUND);
};

const removeAddressById = async (user_id, address_id) => {
	await validateUser(user_id);

	await validateAddress(address_id);

	const [resultCode] = await removeEntity.removeEntityByKeyValue(AddressModel, 'id', address_id);

	return makeTableResultCode(resultCode);
};

module.exports = { removeAddressById };
