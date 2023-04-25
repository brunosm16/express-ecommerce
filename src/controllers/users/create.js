const { makeOkResponse, makeResponseByError } = require('../../http/http-responses');
const createUserService = require('../../services/users/create-user-service');

module.exports = async (req, res) => {
	try {
		const userCreated = await createUserService.createUser(req.body);
		return makeOkResponse(res, userCreated);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
