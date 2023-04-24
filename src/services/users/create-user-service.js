const {
	makeInternalServerError,
	makeOkRequest,
	makeBadRequest,
} = require('../../errors/errors-factory');
const UserModel = require('../../models/UserModel');
const sequelizeConnection = require('../../database/sequelize/connection');
const { TOKEN_ERROR } = require('../../constants/error-message');
const cryptographyService = require('../cryptography/cryptography-service');

const getUserParams = (body) => {
	const { first_name, last_name, primary_email, secondary_email, date_of_birth, password } = body;

	const password_hash = cryptographyService.encrypt(password);

	return { first_name, last_name, primary_email, secondary_email, date_of_birth, password_hash };
};

const getUserToken = ({ id, admin }) => {
	return cryptographyService.generateTokenByParams(id, admin);
};

const persistUser = async (body) => {
	const transaction = await sequelizeConnection.transaction();
	try {
		const userCreated = await UserModel.create({ ...getUserParams(body) }, { transaction });
		const userToken = getUserToken(userCreated);

		if (!userToken) {
			throw Error(TOKEN_ERROR);
		}

		await transaction.commit();

		return { userCreated, userToken };
	} catch (err) {
		return makeBadRequest(err?.message);
	}
};

const createUser = (body) => {
	try {
		const userResult = persistUser(body);
		return makeOkRequest(userResult);
	} catch (err) {
		return makeInternalServerError(err?.message);
	}
};

module.exports = createUser;
