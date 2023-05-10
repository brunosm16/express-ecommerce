const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const findOrderService = require('../../services/orders/find-order-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const order = await findOrderService.findOrderById(id);
		return makeOkResponse(res, order);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
