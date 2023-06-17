const {
	EntityExistsError,
	InternalServerError,
	WrongPasswordError,
} = require('../../errors/errors-types');
const { EntityNotExistsError } = require('../../errors/instances');
const { comparePasswords } = require('../cryptography/cryptography-service');
const findUserService = require('./find-user');

const validateUserExists = async ({ primary_email, secondary_email }) => {
	const user = await findUserService.findUserByEmails(primary_email, secondary_email);
	if (user) throw new EntityExistsError();
};

const validateNonExistingUserById = async (id) => {
	const user = await findUserService.findUserById(id);
	if (!user) throw new EntityNotExistsError('User Not Found');
};

const validateToken = (token) => {
	if (!token) throw new InternalServerError('Token not provided');
};

const validateUserExistsByEmail = async (email) => {
	const user = await findUserService.findUserByEmail(email);
	if (!user) throw new EntityNotExistsError('No user found with this email');
};

const validateUserPassword = async (password, hash) => {
	const isEqual = await comparePasswords(password, hash);
	if (!isEqual) throw new WrongPasswordError();
};

const validateUserAddressRelation = async (addressId, userId) => {
	const user = await findUserService.findUserByAssociation(userId, addressId, 'addresses');

	if (!user) {
		throw new EntityNotExistsError('User Not Found');
	}

	if (!user?.addresses?.length) {
		throw new EntityNotExistsError('Addresses not associated to this user');
	}
};

module.exports = {
	validateUserExists,
	validateToken,
	validateNonExistingUserById,
	validateUserExistsByEmail,
	validateUserPassword,
	validateUserAddressRelation,
};
