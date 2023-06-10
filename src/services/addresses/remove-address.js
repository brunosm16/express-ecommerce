const ParanoidTableOperation = require('../../database/instances/paranoid-table-operation');
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

	const operationCode = await removeEntity.removeEntityByKeyValue(AddressModel, 'id', address_id);

	const softOperation = new ParanoidTableOperation(true, operationCode);

	return softOperation;
};

module.exports = { removeAddressById };
