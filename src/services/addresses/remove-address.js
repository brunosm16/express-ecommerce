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

const formatSoftDeleteResult = (result) => {
	if (result === 0) return 1;
	return result;
};

const removeAddressById = async (req) => {
	const { address_id, user_id } = extractDataFromRequest(req);

	await validateUser(user_id);

	const result = await removeEntity.removeEntityByKeyValue(AddressModel, 'id', address_id);

	return formatSoftDeleteResult(result);
};

module.exports = { removeAddressById };
