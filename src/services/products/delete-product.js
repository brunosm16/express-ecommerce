const {
	PRODUCT_NOT_FOUND,
	FORBIDDEN_PRODUCT_EXCLUSION,
} = require('../../constants/messages/entities-messages/products');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const { EntityNotExistsError, BadRequestError } = require('../../errors/instances');
const { OrderModel } = require('../../models');
const ProductModel = require('../../models/ProductModel');
const { removeEntityByKeyValue } = require('../entities/remove-entity');

const getOrderAssociation = () => ({
	model: OrderModel,
	as: 'orders',
	required: false,
});

const validateProductWithOrder = async (id) => {
	const product = await ProductModel.findByPk(id, {
		include: [getOrderAssociation()],
	});

	if (!product) throw new EntityNotExistsError(PRODUCT_NOT_FOUND);
	if (product.orders?.length) throw new BadRequestError(FORBIDDEN_PRODUCT_EXCLUSION);
};

const deleteProductById = async (id) => {
	await validateProductWithOrder(id);
	const resultCode = await removeEntityByKeyValue(ProductModel, 'id', id);
	return makeTableResultCode(resultCode);
};

module.exports = { deleteProductById };
