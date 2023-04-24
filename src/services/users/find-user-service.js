const UserModel = require('../../models/UserModel');

const findUserByParams = async (first_name, last_name, primary_email) => {
	return UserModel.findOne({ where: { first_name, last_name, primary_email } });
};

module.exports = {
	findUserByParams,
};
