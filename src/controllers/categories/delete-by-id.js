const { makeResponseByError, makeDeleteResponse } = require('../../http/http-responses');
const deleteCategoryService = require('../../services/categories/delete-category-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const deleted = await deleteCategoryService.deleteById(id);
		return makeDeleteResponse(deleted, res);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
