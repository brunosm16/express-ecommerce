const { loginUserWithToken } = require('../../services/users/login-user');

module.exports = async (req) => loginUserWithToken(req);
