const { RESET_TOKEN_MINUTES_TO_EXPIRE } = require('../../constants/cryptography');
const {
	USER_TOKEN_EXISTS,
	USER_NOT_FOUND_EMAIL,
} = require('../../constants/messages/entities-messages/users');
const { userParamsToPersist } = require('../../constants/params/users-params');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const { WrongPasswordError } = require('../../errors/instances');
const { EntityExistsError, EntityNotExistsError } = require('../../errors/instances');
const { UserModel } = require('../../models');
const {
	generateResetTokenById,
	generateTokenExpirationDate,
	comparePasswords,
} = require('../cryptography/cryptography-service');
const { persistEntity } = require('../entities');
const { findEntityByKey } = require('../entities/find-entity');
const { tokenExpired } = require('./validate-user-reset-token');

const generateTokenData = async (id) => {
	return {
		token: await generateResetTokenById(id, RESET_TOKEN_MINUTES_TO_EXPIRE),
		expirationDate: generateTokenExpirationDate(),
	};
};

const persistUserToken = async (userId, token, expirationDate) => {
	const body = {
		token_reset_password: token,
		token_reset_password_expire_date: expirationDate,
	};
	return persistEntity.updateEntity(UserModel, body, { id: userId }, userParamsToPersist);
};

const runValidations = async (user, inputPassword) => {
	const { token_reset_password, token_reset_password_expire_date, password_hash } = user;

	const validInputPassword = await comparePasswords(inputPassword, password_hash);

	if (!validInputPassword) {
		throw new WrongPasswordError();
	}

	if (token_reset_password || !tokenExpired(token_reset_password_expire_date)) {
		throw new EntityExistsError(USER_TOKEN_EXISTS);
	}
};

const findUserByEmail = (email) => {
	const user = findEntityByKey({ key: 'email', value: email }, UserModel);
	if (!user) throw new EntityNotExistsError(USER_NOT_FOUND_EMAIL);
	return user;
};

const formatUserTokenResult = (code, token) => {
	if (!code) return makeTableResultCode(code);
	return {
		result: 'Token successfully generated',
		token,
	};
};

const createResetToken = async (email, password) => {
	const user = await findUserByEmail(email);
	await runValidations(user, password);

	const { token, expirationDate } = await generateTokenData(user?.id);
	const result = await persistUserToken(user?.id, token, expirationDate);
	return formatUserTokenResult(result, token);
};

module.exports = { createResetToken };
