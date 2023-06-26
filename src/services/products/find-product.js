const { PRODUCT_NOT_FOUND } = require('../../constants/messages/entities-messages/products');
const { productsParamsToExpose } = require('../../constants/params/products-params');
const { EntityNotExistsError } = require('../../errors/instances');
const ProductModel = require('../../models/ProductModel');
const { findAllEntities, findEntityByPk } = require('../entities/find-entity');

const findAllProducts = async () => findAllEntities(ProductModel, productsParamsToExpose);

const findProductById = async (id) => {
	const product = await findEntityByPk(ProductModel, id);
	if (!product) throw new EntityNotExistsError(PRODUCT_NOT_FOUND);
	return product;
};

module.exports = { findAllProducts, findProductById };
