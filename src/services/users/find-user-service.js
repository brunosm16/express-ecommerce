const { InternalServerError } = require('../../errors');
const UserModel = require('../../models/UserModel');

const findUserByParams = async (first_name, last_name, primary_email) => {
	try {
		return await UserModel.findOne({ where: { first_name, last_name, primary_email } });
	} catch (err) {
		throw new InternalServerError(err?.message);
	}
};

// const findAllUsers = async () => {
// 	try {
// 		const users = await UserModel.findAll({ attributes: { exclude: ['password_hash'] } });

// 		return makeOkRequest(users);
// 	} catch (err) {
// 		return makeInternalServerError(err?.message);
// 	}
// };

module.exports = {
	findUserByParams,
	// findAllUsers,
};
