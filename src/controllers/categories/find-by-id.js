const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const findCategoryService = require('../../services/categories/find-category-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const category = await findCategoryService.findCategoryById(id);
		return makeOkResponse(res, category);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
