'use strict';

var Joi = require('joi');

module.exports = {
	header: {
		Authorization: Joi.string().required()
	}
};