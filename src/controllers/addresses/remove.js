const { removeAddressById } = require('../../services/addresses/remove-address');

module.exports = async ({ body, params }) => removeAddressById(body?.user_id, params?.id);
