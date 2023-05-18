const AddressModel = require('../../models/AddressModel');
const { validateUserAddressRelation } = require('../users/validate-user-service');

const deleteAddressById = async (id, userId) => {
	await validateUserAddressRelation(id, userId);

	const deleted = await AddressModel.destroy({ where: { id } });

	return deleted;
};

module.exports = { deleteAddressById };
