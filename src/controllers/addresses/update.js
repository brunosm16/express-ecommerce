const { makeResponseByError, makeResponseByOperationCode } = require('../../http/http-responses');
const { ENTITY_UPDATED } = require('../../constants/error-messages');
const updateAddressService = require('../../services/addresses/update-address-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const resultCode = await updateAddressService.update(id, req.body);
		return makeResponseByOperationCode(resultCode, ENTITY_UPDATED, res);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
