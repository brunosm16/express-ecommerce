const makeEntityNotFoundMessage = (entity) => `${entity} not found`;
const makeEntityAlreadyExistsMessage = (entity) => `${entity} already exists`;

module.exports = { makeEntityNotFoundMessage, makeEntityAlreadyExistsMessage };
