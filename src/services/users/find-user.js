const { Op } = require('sequelize');
const UserModel = require('../../models/UserModel');

const findAllUsers = async () => {
	const nowAllowedParams = [
		'password_hash',
		'token_reset_password_expire_date',
		'token_reset_password',
	];
	return UserModel.findAll({ attributes: { exclude: nowAllowedParams } });
};

const findUserByEmails = async (primary_email, secondary_email) => {
	return UserModel.findOne({
		where: {
			[Op.or]: [{ primary_email }, { secondary_email }],
		},
	});
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

const findUserByAssociation = async (userId, associationId, association) => {
	return UserModel.findByPk(userId, {
		include: {
			association,
			where: {
				id: associationId,
			},
			required: false,
		},
	});
};

module.exports = {
	findAllUsers,
	findUserById,
	findUserByEmail,
	findUserByEmails,
	findUserByAssociation,
};
