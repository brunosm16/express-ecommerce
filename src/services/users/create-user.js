const UserModel = require('../../models/UserModel');
const sequelizeConnection = require('../../database/sequelize/connection');
const cryptographyService = require('../cryptography/cryptography-service');
const { validateEntityExistsByKey } = require('../entities/validate-entity');
const { persistEntity } = require('../entities');
const { userParamsToPersist, userParamsToExpose } = require('../../constants/params/users-params');
const { InternalServerError } = require('../../errors/instances');
const { GENERATE_USER_TOKEN_ERROR } = require('../../constants/messages/errors');
const { USER_EXISTS_EMAIL } = require('../../constants/messages/entities-messages/users');

const generateUserToken = (id, admin) => {
	const token = cryptographyService.generateTokenByParams({ id, admin });
	if (!token) throw new InternalServerError(GENERATE_USER_TOKEN_ERROR);
	return token;
};

const setPasswordHashOnBody = async (body) => {
	const { password } = body;

	const password_hash = await cryptographyService.encrypt(password);

	return { ...body, password_hash };
};

const saveUser = async (body) => {
	const transaction = await sequelizeConnection.transaction();
	try {
		const formattedBody = await setPasswordHashOnBody(body);

		const user = await persistEntity.saveEntity(
			UserModel,
			formattedBody,
			userParamsToPersist,
			userParamsToExpose,
			transaction
		);

		const userToken = generateUserToken(user?.id, body?.is_admin);

		if (!userToken) throw new InternalServerError(GENERATE_USER_TOKEN_ERROR);

		await transaction.commit();

		return { user, userToken };
	} catch (err) {
		await transaction.rollback();
		throw err;
	}
};

const validateUserExists = async ({ email }) => {
	const keyValue = { key: 'email', value: email };
	await validateEntityExistsByKey(keyValue, UserModel, USER_EXISTS_EMAIL, false);
};

const persistUser = async (body) => {
	await validateUserExists(body);
	return saveUser(body);
};
module.exports = { persistUser };
