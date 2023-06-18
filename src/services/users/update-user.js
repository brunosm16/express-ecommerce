const { EntityNotExistsError, UnauthorizedError } = require('../../errors/instances');
const cryptographyService = require('../cryptography/cryptography-service');
const sequelizeConnection = require('../../database/sequelize/connection');
const { validateUserPassword } = require('./validate-user');
const { findEntityByPk } = require('../entities/find-entity');
const UserModel = require('../../models/UserModel');
const { persistEntity } = require('../entities');
const { userParamsToPersist } = require('../../constants/params/users-params');
const { InternalServerError } = require('../../errors/instances');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const { GENERATE_USER_TOKEN_ERROR } = require('../../constants/messages/errors');

const setNewPasswordOnBody = async (body) => {
	const { new_password } = body;
	if (!new_password) return body;
	const password_hash = await cryptographyService.encrypt(new_password);
	return { ...body, password_hash };
};

const updateUser = async (userId, body) => {
	const transaction = await sequelizeConnection.transaction();

	try {
		const formattedBody = await setNewPasswordOnBody(body);

		const [resultCode] = await persistEntity.updateEntity(
			UserModel,
			formattedBody,
			{ id: userId },
			userParamsToPersist,
			transaction
		);

		const userToken = cryptographyService.generateTokenByParams(userId, body?.is_admin);

		if (!userToken) throw new InternalServerError(GENERATE_USER_TOKEN_ERROR);

		await transaction.commit();

		return { resultCode, userToken };
	} catch (err) {
		await transaction.rollback();
		throw err;
	}
};

const runUserValidations = async (user, body) => {
	if (!user) throw new EntityNotExistsError();

	const { new_password, current_password } = body;

	if (new_password) {
		await validateUserPassword(current_password, user?.password_hash);
	}
};

const formatUpdateUserResult = (result) => {
	if (!result?.resultCode) makeTableResultCode(result);

	const { userToken } = result;

	return {
		userToken,
		result: 'Successfully updated',
	};
};

const persistUserUpdate = async (body, id, tokenId) => {
	if (tokenId !== id) throw new UnauthorizedError();
	const user = await findEntityByPk(UserModel, id);
	await runUserValidations(user, body);
	const result = await updateUser(id, body);

	return formatUpdateUserResult(result);
};

module.exports = { persistUserUpdate };
