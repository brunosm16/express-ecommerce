const { makeResponseByError, makeDeleteResponse } = require('../../http/http-responses');
const deleteUserService = require('../../services/users/delete-user-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;

		const deletedUser = await deleteUserService.deleteUser(id);

		return makeDeleteResponse(deletedUser, res);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
