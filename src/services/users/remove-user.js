const { USER_NOT_FOUND } = require('../../constants/messages/entities-messages/users');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const UserModel = require('../../models/UserModel');
const { removeEntityByKeyValue } = require('../entities/remove-entity');
const { entityExistsByPk } = require('../entities/validate-entity');

const removeUserById = async (id) => {
	await entityExistsByPk(id, UserModel, USER_NOT_FOUND);

	const resultCode = await removeEntityByKeyValue(UserModel, 'id', id);

	return makeTableResultCode(resultCode);
};

module.exports = { removeUserById };
