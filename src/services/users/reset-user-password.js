const { CredentialsError, EntityNotExistsError } = require('../../errors/instances');
const cryptographyService = require('../cryptography/cryptography-service');
const { findEntityByPk } = require('../entities/find-entity');
const { validateInputResetToken } = require('./validate-user-reset-token');
const { UserModel } = require('../../models');
const { persistEntity } = require('../entities');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const { INVALID_TOKEN_CREDENTIAL_ERROR } = require('../../constants/messages/errors');
const { USER_NOT_FOUND } = require('../../constants/messages/entities-messages/users');
const usersParams = require('../../constants/params/users-params');

const findUserById = async (id) => {
	const user = await findEntityByPk(UserModel, id);
	if (!user) throw new EntityNotExistsError(USER_NOT_FOUND);
	return user;
};

const extractIdFromToken = (inputToken) => {
	if (!inputToken) throw new CredentialsError(INVALID_TOKEN_CREDENTIAL_ERROR);
	// eslint-disable-next-line no-unused-vars
	const [_, id] = inputToken.split('&=');

	if (!id) throw new CredentialsError(INVALID_TOKEN_CREDENTIAL_ERROR);
	return id;
};

const updateUserPassword = async (userId, password) => {
	const password_hash = await cryptographyService.encrypt(password);
	return persistEntity.updateEntity(
		UserModel,
		{ password_hash, token_reset_password: null, token_reset_password_expire_date: null },
		{ id: userId },
		usersParams.userParamsToPersist
	);
};

const resetUserPassword = async (token, password) => {
	const id = extractIdFromToken(token);

	const user = await findUserById(id);

	await validateInputResetToken(token, user);

	const resultCode = await updateUserPassword(user?.id, password);

	return makeTableResultCode(resultCode);
};

module.exports = { resetUserPassword };
