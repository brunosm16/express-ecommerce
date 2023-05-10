const { PRODUCTS_PARAMS_TO_CREATE_UPDATE } = require('../../constants/allowed-params');
const { EntityNotExistsError } = require('../../errors/errors-types');
const ProductModel = require('../../models/ProductModel');
const { formatBodyParams } = require('../../utils/format-body-params');
const { validateEmptyBody } = require('../../utils/object-utils');

const validateProduct = (category, body) => {
	if (!category) throw new EntityNotExistsError();
	validateEmptyBody(body);
};

const update = async (id, body) => {
	const order = await ProductModel.findByPk(id);

	validateProduct(order, body);

	const params = formatBodyParams(body, PRODUCTS_PARAMS_TO_CREATE_UPDATE);

	return order.update({ ...params });
};

module.exports = { update };
