const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const createOrderService = require('../../services/orders/create-order-service');

module.exports = async (req, res) => {
	try {
		const order = await createOrderService.create(req.body);
		return makeOkResponse(res, order);
	} catch (err) {
		return makeResponseByError(err);
	}
};
