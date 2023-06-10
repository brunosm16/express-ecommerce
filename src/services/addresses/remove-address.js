const ParanoidTableOperation = require('../../database/instances/paranoid-table-operation');
const { UserModel, AddressModel } = require('../../models');
const { validateEntity, removeEntity } = require('../entities');

const extractDataFromRequest = (req) => {
	const { params, body } = req;

	const { user_id } = body;
	const { id: address_id } = params;

	return { address_id, user_id };
};

const validateUser = async (user_id) => {
	const message = 'User not found to this address';
	await validateEntity.entityExistsByPk(user_id, UserModel, message);
};

const removeAddressById = async (req) => {
	const { address_id, user_id } = extractDataFromRequest(req);

	await validateUser(user_id);

	const operationCode = await removeEntity.removeEntityByKeyValue(AddressModel, 'id', address_id);

	const softOperation = new ParanoidTableOperation(true, operationCode);

	return softOperation;
};

module.exports = { removeAddressById };
