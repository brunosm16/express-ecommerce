const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const categoryService = require('../../services/categories/create-category-service');

module.exports = async (req, res) => {
	try {
		const category = await categoryService.createCategory(req.body);
		return makeOkResponse(res, category);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
