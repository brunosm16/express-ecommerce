const { makeInternalServerError } = require('../../errors/errors-factory');
const findUserService = require('../../services/users/find-user-service');
const { sendExpressResponse } = require('../../utils/send-express-response');

module.exports = async (req, res) => {
	try {
		const usersResult = await findUserService.findAllUsers();
		return sendExpressResponse(res, usersResult);
	} catch (err) {
		return sendExpressResponse(res, makeInternalServerError(err?.message));
	}
};
