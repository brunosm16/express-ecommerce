const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const updateAddressService = require('../../services/addresses/update-address-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const address = await updateAddressService.update(id, req.body);
		return makeOkResponse(res, address);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
