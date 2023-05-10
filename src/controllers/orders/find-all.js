const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const findOrderService = require('../../services/orders/find-order-service');

module.exports = async (req, res) => {
	try {
		const orders = await findOrderService.findAll();
		return makeOkResponse(res, orders);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
