const sendResponse = (res, statusCode, message) => res.status(statusCode).json({ message });

const makeOkResponse = (res, message) => sendResponse(res, 200, message);
const makeBadRequestResponse = (res, message) => sendResponse(res, 400, message);
const makeInternalServerErrorResponse = (res, message) => sendResponse(res, 500, message);

module.exports = { makeOkResponse, makeBadRequestResponse, makeInternalServerErrorResponse };
