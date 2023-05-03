const { ORDER_PARAMS_TO_CREATE_UPDATE } = require('../../constants/allowed-params');
const OrderModel = require('../../models/OrderModel');
const { formatBodyParams } = require('../../utils/format-body-params');
const { generateUUID } = require('../cryptography/cryptography-service');

const create = async (body) => {
	return OrderModel.create({
		id: generateUUID(),
		...formatBodyParams(body, ORDER_PARAMS_TO_CREATE_UPDATE),
	});
};

module.exports = { create };
