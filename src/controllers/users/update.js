const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const { updateUserService } = require('../../services/users');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const { body } = req;

		const user = await updateUserService.update(id, body);

		return makeOkResponse(res, user);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
