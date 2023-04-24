const { makeInternalServerError } = require('../../errors/errors-factory');

const createUserService = require('../../services/users/create-user-service');

module.exports = async (req, res) => {
	try {
		const { statusCode, message } = await createUserService.createUser(req.body);

		res.status(statusCode).json({ message });
	} catch (err) {
		const { statusCode, message } = makeInternalServerError(err?.message);
		res.status(statusCode).json({ message });
	}
};
