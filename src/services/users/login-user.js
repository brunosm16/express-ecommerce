const { USER_NOT_FOUND_EMAIL } = require('../../constants/messages/entities-messages/users');
const { EntityNotExistsError } = require('../../errors/instances');
const { UserModel } = require('../../models');
const { generateTokenByParams } = require('../cryptography/cryptography-service');
const { findEntityByKey } = require('../entities/find-entity');
const { validateUserPassword } = require('./validate-user');

const loginUserWithToken = async (email, password) => {
	const user = await findEntityByKey({ key: 'email', value: email }, UserModel);
	if (!user) throw new EntityNotExistsError(USER_NOT_FOUND_EMAIL);

	const { id, is_admin, password_hash } = user;
	await validateUserPassword(password, password_hash);
	return generateTokenByParams({ id, is_admin });
};

module.exports = { loginUserWithToken };
