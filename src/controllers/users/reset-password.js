const { resetUserPassword } = require('../../services/users/reset-user-password');

module.exports = async ({ body }) => resetUserPassword(body?.token, body?.password);
