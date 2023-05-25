const { EntityNotExistsError } = require('../../errors/errors-types');
const OrderModel = require('../../models/OrderModel');

const findAll = async (req) => {
	const { query } = req;
	const { limit = 10, offset = 0 } = query;

	const orders = await OrderModel.findAll({
		order: [['id', 'DESC']],
		limit,
		offset,
	});

	const count = await OrderModel.count({ col: 'id' });

	return { orders, count };
};

const findOrderById = async (id) => {
	const order = await OrderModel.findByPk(id);

	if (!order) throw new EntityNotExistsError();

	return order;
};

module.exports = { findAll, findOrderById };
