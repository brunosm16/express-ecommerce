const ProductModel = require('../../models/ProductModel');

const findAll = async () => {
	return ProductModel.findAll();
};

module.exports = { findAll };
