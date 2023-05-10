const { makeResponseByError, makeDeleteResponse } = require('../../http/http-responses');
const deleteOrderService = require('../../services/orders/delete-order-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const deleted = await deleteOrderService.deleteOrder(id);
		return makeDeleteResponse(deleted, res);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
