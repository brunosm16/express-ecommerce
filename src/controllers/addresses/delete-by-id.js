const { makeResponseByError, makeDeleteResponse } = require('../../http/http-responses');

const deleteAddress = require('../../services/addresses/delete-address-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;

		const { customer_id } = req.body;

		const deletedAddress = await deleteAddress.deleteAddressById(id, customer_id);

		return makeDeleteResponse(deletedAddress, res);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
