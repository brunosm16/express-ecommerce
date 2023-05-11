const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const createResetTokenService = require('../../services/reset-user-password/create-reset-token-service');

module.exports = async (req, res) => {
	try {
		const resetToken = await createResetTokenService.createResetToken(req.body);
		return makeOkResponse(res, resetToken);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
