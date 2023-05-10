const OrderModel = require('../../models/OrderModel');

const findAll = async () => {
	return OrderModel.findAll();
};

module.exports = { findAll };
