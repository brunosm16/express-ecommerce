const { makeInternalServerError, makeOkRequest } = require('../../errors/errors-factory');
const UserModel = require('../../models/UserModel');

const findUserByParams = async (first_name, last_name, primary_email) => {
	return UserModel.findOne({ where: { first_name, last_name, primary_email } });
};

const findAllUsers = async () => {
	try {
		const users = await UserModel.findAll({ attributes: { exclude: ['password_hash'] } });

		return makeOkRequest(users);
	} catch (err) {
		return makeInternalServerError(err?.message);
	}
};

module.exports = {
	findUserByParams,
	findAllUsers,
};
