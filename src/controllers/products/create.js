const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const createProductService = require('../../services/products/create-product-service');

module.exports = async (req, res) => {
	try {
		const product = await createProductService.createProduct(req.body);
		return makeOkResponse(res, product);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
