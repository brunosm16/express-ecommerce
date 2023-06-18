const { Op } = require('sequelize');
const UserModel = require('../../models/UserModel');
const { userParams } = require('../../constants/params');
const { findEntity } = require('../entities');

const findAllUsers = async () =>
	findEntity.findAllEntities(UserModel, userParams.USER_PARAMS_TO_EXPOSE);

const findUserById = async (id) =>
	findEntity.findEntityByPk(UserModel, id, userParams.USER_PARAMS_TO_EXPOSE);

const findUserByEmails = async (primary_email, secondary_email) => {
	return UserModel.findOne({
		where: {
			[Op.or]: [{ primary_email }, { secondary_email }],
		},
	});
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
