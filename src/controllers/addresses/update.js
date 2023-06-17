const { updateAddressById } = require('../../services/addresses/update-address');

module.exports = async ({ body, params }) => updateAddressById(body, body?.user_id, params?.id);
