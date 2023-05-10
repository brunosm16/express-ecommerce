const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const updateProductService = require('../../services/products/update-product-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedProduct = await updateProductService.update(id, req.body);
		return makeOkResponse(res, updatedProduct);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
