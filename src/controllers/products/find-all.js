const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const findProductService = require('../../services/products/find-product-service');

module.exports = async (req, res) => {
	try {
		const products = await findProductService.findAll();
		return makeOkResponse(res, products);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
