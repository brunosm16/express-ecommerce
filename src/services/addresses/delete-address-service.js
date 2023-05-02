const AddressModel = require('../../models/AddressModel');

const deleteAddressById = async (id) => {
	const deleted = await AddressModel.destroy({ where: { id } });

	return deleted;
};

module.exports = { deleteAddressById };
