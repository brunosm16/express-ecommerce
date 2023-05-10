const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const updateOrderService = require('../../services/orders/update-order-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const order = await updateOrderService.update(id, req.body);
		return makeOkResponse(res, order);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
