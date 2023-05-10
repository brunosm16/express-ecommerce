const { EntityNotExistsError } = require('../../errors/errors-types');
const OrderModel = require('../../models/OrderModel');

const findAll = async () => {
	return OrderModel.findAll();
};

const findOrderById = async (id) => {
	const order = await OrderModel.findByPk(id);

	if (!order) throw new EntityNotExistsError();

	return order;
};

module.exports = { findAll, findOrderById };
