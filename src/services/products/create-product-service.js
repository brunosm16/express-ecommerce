const ProductModel = require('../../models/ProductModel');
const { productsParams } = require('../../constants/params');
const { formatBodyParams } = require('../../utils/format-body-params');
const { generateUUID } = require('../cryptography/cryptography-service');

const createProduct = async (body) => {
	const params = formatBodyParams(body, productsParams.productsParamsToPersist);

	return ProductModel.create({ id: generateUUID(), ...params });
};

module.exports = { createProduct };
