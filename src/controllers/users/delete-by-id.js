const { SOMETHING_WRONG, ENTITY_DELETED } = require('../../constants/error-messages');
const {
	makeOkResponse,
	makeResponseByError,
	makeInternalServerErrorResponse,
} = require('../../http/http-responses');
const deleteUserService = require('../../services/users/delete-user-service');

const OPERATION_ERROR_CODE = 0;
const OPERATION_ERROR_SUCCESS = 1;

const responsesByCode = {
	[OPERATION_ERROR_CODE]: (res) => makeInternalServerErrorResponse(res, SOMETHING_WRONG),
	[OPERATION_ERROR_SUCCESS]: (res) => makeOkResponse(res, ENTITY_DELETED),
};

module.exports = async (req, res) => {
	try {
		const { id } = req.params;

		const deletedUser = await deleteUserService.deleteUser(id);

		return responsesByCode[deletedUser](res);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
