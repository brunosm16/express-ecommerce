const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const updateCategoryService = require('../../services/categories/update-category-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const category = await updateCategoryService.update(id, req.body);
		return makeOkResponse(res, category);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
