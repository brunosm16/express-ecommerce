const { loginUserWithToken } = require('../../services/users/login-user');

module.exports = async ({ body }) => loginUserWithToken(body?.email, body?.password);
