const { InternalServerError } = require('../../errors');
const UserModel = require('../../models/UserModel');

const findUserByParams = async (first_name, last_name, primary_email) => {
	try {
		return await UserModel.findOne({ where: { first_name, last_name, primary_email } });
	} catch (err) {
		throw new InternalServerError(err?.message);
	}
};

const findAllUsers = async () => {
	try {
		return await UserModel.findAll({ attributes: { exclude: ['password_hash'] } });
	} catch (err) {
		throw new InternalServerError(err?.message);
	}
};

module.exports = {
	findUserByParams,
	findAllUsers,
};
