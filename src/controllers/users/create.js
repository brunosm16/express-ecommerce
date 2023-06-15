const createUserService = require('../../services/users/create-user-service');

module.exports = async (req) => createUserService.createUser(req);
