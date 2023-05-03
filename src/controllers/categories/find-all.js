const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const findCategoryService = require('../../services/categories/find-category-service');

module.exports = async (req, res) => {
	try {
		const categories = await findCategoryService.findAll();
		return makeOkResponse(res, categories);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
