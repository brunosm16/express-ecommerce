const AddressModel = require('../../models/AddressModel');
const { validateEntityNotExistsByPk } = require('../entities/validate-entity');

const findAll = () => {
	return AddressModel.findAll();
};

const findById = async (id) => {
	await validateEntityNotExistsByPk(id, AddressModel);
	return AddressModel.findByPk(id);
};

module.exports = { findAll, findById };
