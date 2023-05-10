const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const findProductService = require('../../services/products/find-product-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await findProductService.findProductById(id);
		return makeOkResponse(res, product);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
