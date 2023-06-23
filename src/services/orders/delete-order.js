const { statusEnumsObject } = require('../../constants/enums/order-status');
const {
	ORDER_ALREADY_CANCELED,
	ORDER_NOT_FOUND,
	ORDER_COMPLETED_CANCEL_ERROR,
} = require('../../constants/messages/entities-messages/orders');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const { EntityNotExistsError, BadRequestError } = require('../../errors/instances');
const OrderModel = require('../../models/OrderModel');
const { findEntityByPk } = require('../entities/find-entity');

const validateOrderStatus = (order) => {
	const { status } = order;

	if (status === statusEnumsObject.canceled) {
		throw new BadRequestError(ORDER_ALREADY_CANCELED);
	}

	if (status === statusEnumsObject.completed) {
		throw new BadRequestError(ORDER_COMPLETED_CANCEL_ERROR);
	}
};

const removeOrderById = async (id) => {
	const order = await findEntityByPk(OrderModel, id);
	if (!order) throw new EntityNotExistsError(ORDER_NOT_FOUND);
	validateOrderStatus(order);
	order.status = statusEnumsObject.canceled;
	const savedOrder = await order.save();
	const resultCode = savedOrder ? 1 : 0;
	return makeTableResultCode(resultCode);
};

module.exports = { removeOrderById };
