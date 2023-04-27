const UserModel = require('../../models/UserModel');
const { EntityNotExistsError } = require('../../errors/errors-types');
const { validateNonExistingUserById } = require('./validate-user-service');

const deleteUser = async (id) => {
	await validateNonExistingUserById(id);

	const deleted = await UserModel.destroy({ where: { id } });

	if (!deleted) throw new EntityNotExistsError();

	return deleted;
};

module.exports = { deleteUser };
