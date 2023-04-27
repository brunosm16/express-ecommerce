const { Op } = require('sequelize');
const UserModel = require('../../models/UserModel');

const findUserByParams = async (primary_email, secondary_email) => {
	return UserModel.findOne({ where: { primary_email, secondary_email } });
};

const findUserByEmails = async (primary_email, secondary_email) => {
	return UserModel.findOne({
		where: {
			[Op.or]: [{ primary_email }, { secondary_email }],
		},
	});
};

const findAllUsers = async () => {
	return UserModel.findAll({ attributes: { exclude: ['password_hash'] } });
};

const findUserById = async (id) => {
	return UserModel.findByPk(id);
};

const findUserByEmail = async (email) => {
	return UserModel.findOne({
		where: {
			[Op.or]: [{ primary_email: email }, { secondary_email: email }],
		},
	});
};

module.exports = {
	findUserByParams,
	findAllUsers,
	findUserById,
	findUserByEmail,
	findUserByEmails,
};
