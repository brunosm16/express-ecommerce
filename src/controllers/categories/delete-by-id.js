const { makeResponseByError, makeDeleteResponse } = require('../../http/http-responses');
const deleteCategoryService = require('../../services/categories/delete-category-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const { category_to_transfer_id } = req.body;
		const deleted = await deleteCategoryService.deleteById(id, category_to_transfer_id);
		return makeDeleteResponse(deleted, res);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
