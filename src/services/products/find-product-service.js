const { EntityNotExistsError } = require('../../errors/errors-types');
const ProductModel = require('../../models/ProductModel');

const findAll = async () => {
	return ProductModel.findAll();
};

const findProductById = async (id) => {
	const product = await ProductModel.findByPk(id);

	if (!product) throw new EntityNotExistsError();

	return product;
};

module.exports = { findAll, findProductById };
