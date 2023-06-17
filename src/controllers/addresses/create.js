const { persistAddress } = require('../../services/addresses/create-address');

module.exports = async ({ body }) => persistAddress(body);
