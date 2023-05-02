const AddressModel = require('../../models/AddressModel');

const findAll = () => {
	return AddressModel.findAll();
};

const findById = (id) => {
	return AddressModel.findByPk(id);
};

module.exports = { findAll, findById };
