const AddressModel = require('../../models/AddressModel');
const { generateUUID } = require('../cryptography/cryptography-service');

const createAddress = async (body) => {
	return AddressModel.create({ id: generateUUID(), ...body });
};

module.exports = { createAddress };
