const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const { findCategoryById } = require('../../services/categories/find-category');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const category = await findCategoryById(id);
		return makeOkResponse(res, category);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
