const { makeResponseByError, makeDeleteResponse } = require('../../http/http-responses');
const deleteProductService = require('../../services/products/delete-product-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const deleted = await deleteProductService.deleteProduct(id);
		return makeDeleteResponse(deleted, res);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
