const findUserService = require('./find-user');
const { EntityNotExistsError, EmptyBodyError } = require('../../errors/errors-types');
const { validateInputPasswordWithHash } = require('./validate-user-service');
const cryptographyService = require('../cryptography/cryptography-service');
const sequelizeConnection = require('../../database/sequelize/connection');
const validateUserService = require('./validate-user-service');
const { filterNullValuesFromObj, filterObjByKeys } = require('../../utils/object-utils');
const { USER_PARAMS_TO_UPDATE } = require('../../constants/allowed-params');

const validatePasswords = async (user, body) => {
	const { current_password } = body;

	const { password_hash } = user;

	await validateInputPasswordWithHash(current_password, password_hash);
};

const validateUserBodyParams = async (user, body) => {
	if (!body || !Object.keys(body)?.length) throw new EmptyBodyError();
	if (!user) throw new EntityNotExistsError();
	await validatePasswords(user, body);
};

const replacePassword = async (body) => {
	const { new_password } = body;
	const password_hash = await cryptographyService.encrypt(new_password);
	const objWithPassword = { ...body, password_hash };
	delete objWithPassword.new_password;

	return objWithPassword;
};

const formatBodyParams = async (body) => {
	const nonNullBody = filterNullValuesFromObj(body);
	const filteredBody = filterObjByKeys(nonNullBody, USER_PARAMS_TO_UPDATE);

	if (filteredBody?.new_password) return replacePassword(filteredBody);

	return filteredBody;
};

const persistUser = async (user, body) => {
	const transaction = await sequelizeConnection.transaction();

	try {
		const formattedParams = await formatBodyParams(body);

		const userResult = await user.update({ ...formattedParams }, { transaction });

		const { id, admin } = userResult;
		const userToken = cryptographyService.generateTokenByParams({ id, admin });

		validateUserService.validateToken(userToken);

		await transaction.commit();

		return { userResult, userToken };
	} catch (err) {
		await transaction.rollback();
		throw err;
	}
};

const update = async (id, body) => {
	const user = await findUserService.findUserById(id);
	await validateUserBodyParams(user, body);

	return persistUser(user, body);
};

module.exports = { update };
