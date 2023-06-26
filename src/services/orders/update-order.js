const { ORDER_NOT_FOUND } = require('../../constants/messages/entities-messages/orders');
const { orderParamsToPersist } = require('../../constants/params/orders-params');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const OrderModel = require('../../models/OrderModel');
const { updateEntity } = require('../entities/persist-entity');
const { entityExistsByPk } = require('../entities/validate-entity');

const persistOrderUpdate = async (userId, body) => {
	await entityExistsByPk(userId, OrderModel, ORDER_NOT_FOUND);
	const resultCode = await updateEntity(OrderModel, body, { id: userId }, orderParamsToPersist);
	return makeTableResultCode(resultCode);
};

module.exports = { persistOrderUpdate };
