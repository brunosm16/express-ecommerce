const UserModel = require('../../models/UserModel');

const deleteAddressById = async (id) => {
	const deleted = await UserModel.destroy({ where: { id } });

	return deleted;
};

module.exports = { deleteAddressById };
