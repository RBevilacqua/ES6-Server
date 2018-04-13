'use strict';
var Joi = require('joi');

module.exports = {
    validateRegisters: {
        body: {
            token: Joi.string().required(),
            rut: Joi.string().required(),
            platform: Joi.string().required()
        }
    }
};