const AddressModel = require('../../models/AddressModel');

const findAll = () => {
	return AddressModel.findAll();
};

module.exports = { findAll };
