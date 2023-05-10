const ProductModel = require('../../models/ProductModel');
const { PRODUCTS_PARAMS_TO_CREATE_UPDATE } = require('../../constants/allowed-params');
const { formatBodyParams } = require('../../utils/format-body-params');
const { generateUUID } = require('../cryptography/cryptography-service');

const createProduct = async (body) => {
	const params = formatBodyParams(body, PRODUCTS_PARAMS_TO_CREATE_UPDATE);

	return ProductModel.create({ id: generateUUID(), ...params });
};

module.exports = { createProduct };
