const { ADDRESS_PARAMS_TO_CREATE_UPDATE } = require('../../constants/allowed-params');
const AddressModel = require('../../models/AddressModel');
const { formatBodyParams } = require('../../utils/format-body-params');
const { generateUUID } = require('../cryptography/cryptography-service');

const createAddress = async (body) => {
	const params = formatBodyParams(body, ADDRESS_PARAMS_TO_CREATE_UPDATE);

	return AddressModel.create({ id: generateUUID(), ...params });
};

module.exports = { createAddress };
