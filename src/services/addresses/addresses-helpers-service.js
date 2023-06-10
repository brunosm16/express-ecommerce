const extractUserAndAddressIds = (req) => {
	const { params, body } = req;

	const { user_id } = body;
	const { id: address_id } = params;

	return { address_id, user_id };
};

module.exports = { extractUserAndAddressIds };
