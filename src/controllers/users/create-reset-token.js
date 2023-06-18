const { createResetToken } = require('../../services/users/create-reset-token');

module.exports = async ({ body }) => createResetToken(body?.email, body?.password);
