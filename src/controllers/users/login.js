const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const loginUserService = require('../../services/users/login-user-service');

module.exports = async (req, res) => {
	try {
		const accessToken = await loginUserService.createAccessToken(req.body);

		return makeOkResponse(res, accessToken);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
