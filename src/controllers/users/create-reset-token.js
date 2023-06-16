const { createResetToken } = require('../../services/users/create-reset-token');

const extractDataFromBody = ({ email, password }) => ({ email, password });
module.exports = async ({ body }) => createResetToken(extractDataFromBody(body));
