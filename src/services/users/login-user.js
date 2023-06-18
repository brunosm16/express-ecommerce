const { UserModel } = require('../../models');
const { generateTokenByParams } = require('../cryptography/cryptography-service');
const { findEntityByKey } = require('../entities/find-entity');
const { validateUserPassword } = require('./validate-user');

const loginUserWithToken = async (email, password) => {
	const { id, is_admin, password_hash } = await findEntityByKey(
		{ key: 'email', value: email },
		UserModel
	);
	await validateUserPassword(password, password_hash);
	return generateTokenByParams({ id, is_admin });
};

module.exports = { loginUserWithToken };