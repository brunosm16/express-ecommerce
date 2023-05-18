const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const { resetPassword } = require('../../services/reset-user-password/reset-password-service');

module.exports = async (req, res) => {
	try {
		const { token, password } = req.body;
		const updatedUser = await resetPassword(token, password);
		return makeOkResponse(res, updatedUser);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
