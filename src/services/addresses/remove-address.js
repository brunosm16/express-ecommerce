const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const { UserModel, AddressModel } = require('../../models');
const { validateEntity, removeEntity } = require('../entities');
const { extractUserAndAddressIds } = require('./addresses-helpers-service');

const validateUser = async (user_id) => {
	const message = 'User not found to this address';
	await validateEntity.entityExistsByPk(user_id, UserModel, message);
};

const validateAddress = async (address_id) => {
	const message = 'Address not found';
	await validateEntity.entityExistsByPk(address_id, AddressModel, message);
};

const removeAddressById = async (req) => {
	const { address_id, user_id } = extractUserAndAddressIds(req);

	await validateUser(user_id);

	await validateAddress(address_id);

	const resultCode = await removeEntity.removeEntityByKeyValue(AddressModel, 'id', address_id);

	return makeTableResultCode(resultCode);
};

module.exports = { removeAddressById };
