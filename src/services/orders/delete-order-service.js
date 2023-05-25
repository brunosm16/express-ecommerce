const { EntityNotExistsError, BadRequestError } = require('../../errors/errors-types');
const OrderModel = require('../../models/OrderModel');

const deleteOrder = async (id) => {
	const order = await OrderModel.findByPk(id);

	if (!order) throw new EntityNotExistsError('Order not exists');
	if (order?.canceled) throw new BadRequestError('Order already canceled');

	order.status = 'canceled';

	return order.save();
};

module.exports = { deleteOrder };
