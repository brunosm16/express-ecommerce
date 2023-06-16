const { resetUserPassword } = require('../../services/users/reset-user-password');

const extractDataFromRequest = ({ token, password }) => ({ token, password });

module.exports = async ({ body }) => resetUserPassword(extractDataFromRequest(body));
