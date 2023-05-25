const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const deleteOrderService = require('../../services/orders/delete-order-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const deleted = await deleteOrderService.deleteOrder(id);
		return makeOkResponse(res, deleted);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
