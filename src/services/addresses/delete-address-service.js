const AddressModel = require('../../models/AddressModel');
const { validateEntityNotExistsByPk } = require('../entities/validate-entity');

const deleteAddressById = async (id) => {
	await validateEntityNotExistsByPk(id, AddressModel);

	const deleted = await AddressModel.destroy({ where: { id } });

	return deleted;
};

module.exports = { deleteAddressById };
