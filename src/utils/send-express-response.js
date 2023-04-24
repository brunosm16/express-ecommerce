const sendExpressResponse = (res, { statusCode, message }) =>
	res.status(statusCode).json({ message });

module.exports = { sendExpressResponse };
