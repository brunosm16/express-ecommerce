const UserModel = require('../../models/UserModel');
const sequelizeConnection = require('../../database/sequelize/connection');
const cryptographyService = require('../cryptography/cryptography-service');
const validateUserService = require('./validate-user-service');
const { InternalServerError } = require('../../errors');

const getUserParams = async (body) => {
	const { first_name, last_name, primary_email, secondary_email, date_of_birth, password, admin } =
		body;

	const password_hash = await cryptographyService.encrypt(password);
	const id = cryptographyService.generateUUID();

	return {
		id,
		first_name,
		last_name,
		primary_email,
		secondary_email,
		date_of_birth,
		password_hash,
		admin,
	};
};

const persistUser = async (body) => {
	const transaction = await sequelizeConnection.transaction();
	const userParams = await getUserParams(body);
	try {
		const userCreated = await UserModel.create({ ...userParams }, { transaction });

		const { id, admin } = userCreated;
		const userToken = cryptographyService.generateTokenByParams({ id, admin });

		validateUserService.validateToken(userToken);

		await transaction.commit();

		return { userCreated, userToken };
	} catch (err) {
		throw new InternalServerError(err?.message);
	}
};

const createUser = async (body) => {
	await validateUserService.validateUserExists(body);
	const userResult = await persistUser(body);
	return userResult;
};
module.exports = { createUser };
