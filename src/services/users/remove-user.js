const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const { makeEntityNotFoundMessage } = require('../../errors/messages/make-error-messages');
const UserModel = require('../../models/UserModel');
const { removeEntityByKeyValue } = require('../entities/remove-entity');
const { entityExistsByPk } = require('../entities/validate-entity');

const removeUserById = async ({ params }) => {
	const { id } = params;

	await entityExistsByPk(id, UserModel, makeEntityNotFoundMessage('User'));

	const [resultCode] = await removeEntityByKeyValue(UserModel, 'id', id);

	return makeTableResultCode(resultCode);
};

module.exports = { removeUserById };
