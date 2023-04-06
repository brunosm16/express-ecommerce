const express = require('express');

const setJson = (app) => {
	app.use(express.json());
};

module.exports = setJson;
