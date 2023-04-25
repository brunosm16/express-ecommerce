const { makeOkResponse, makeResponseByError } = require('../../http/http-responses');
const findUserService = require('../../services/users/find-user-service');

module.exports = async (req, res) => {
	try {
		const users = await findUserService.findAllUsers();
		return makeOkResponse(res, users);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
