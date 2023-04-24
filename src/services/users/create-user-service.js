const {
	makeInternalServerError,
	makeOkRequest,
	makeBadRequest,
} = require('../../errors/errors-factory');
const UserModel = require('../../models/UserModel');
const sequelizeConnection = require('../../database/sequelize/connection');
const { TOKEN_ERROR, ENTITY_EXISTS } = require('../../constants/error-messages');
const cryptographyService = require('../cryptography/cryptography-service');
const findUserService = require('./find-user-service');

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

const getUserToken = ({ id, admin }) => {
	return cryptographyService.generateTokenByParams({ id, admin });
};

const validateToken = (token) => {
	if (!token) {
		throw Error(TOKEN_ERROR);
	}
};

const validateUserExists = async ({ first_name, last_name, primary_email }) => {
	const user = await findUserService.findUserByParams(first_name, last_name, primary_email);
	if (user) throw Error(ENTITY_EXISTS);
};

const persistUser = async (body) => {
	const transaction = await sequelizeConnection.transaction();
	const userParams = await getUserParams(body);
	try {
		const userCreated = await UserModel.create({ ...userParams }, { transaction });
		const userToken = getUserToken(userCreated);

		validateToken(userToken);

		await transaction.commit();

		return { userCreated, userToken };
	} catch (err) {
		return makeBadRequest(err?.message);
	}
};

const createUser = async (body) => {
	try {
		await validateUserExists(body);

		const userResult = await persistUser(body);
		return makeOkRequest(userResult);
	} catch (err) {
		return makeInternalServerError(err?.message);
	}
};

module.exports = { createUser };
