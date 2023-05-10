const { ORDER_PARAMS_TO_CREATE_UPDATE } = require('../../constants/allowed-params');
const { EntityNotExistsError } = require('../../errors/errors-types');
const OrderModel = require('../../models/OrderModel');
const { formatBodyParams } = require('../../utils/format-body-params');
const { validateEmptyBody } = require('../../utils/object-utils');

const validateOrder = (category, body) => {
	if (!category) throw new EntityNotExistsError();
	validateEmptyBody(body);
};

const update = async (id, body) => {
	const order = await OrderModel.findByPk(id);

	validateOrder(order, body);

	const params = formatBodyParams(body, ORDER_PARAMS_TO_CREATE_UPDATE);

	return order.update({ ...params });
};

module.exports = { update };
