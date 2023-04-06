const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
	res.status(200).json({ message: 'inside users router' });
});

module.exports = usersRouter;
