const { persistUserUpdate } = require('../../services/users/update-user');

module.exports = async ({ body, params, tokenId }) => persistUserUpdate(body, params?.id, tokenId);
