const { EntityNotExistsError } = require('../../errors/errors-types');
const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const { findUserById } = require('../../services/users/find-user');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;

		const user = await findUserById(id);

		if (!user) throw new EntityNotExistsError();

		return makeOkResponse(res, user);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
