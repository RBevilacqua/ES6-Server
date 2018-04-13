
'use strict';

var validate = require('express-validation');
var notification = require('../utilities/validations/notifications.js');
var headers = require('../utilities/validations/headers.js');

// import './Utilities/consts';

// import {app} from './Utilities/consts';

module.exports = app => {
	
	app.get('/', function (req, res) {
		res.json({
			response: 'API Works ES6'
		});
	});

	app.post('/register', validate(notification.validateRegisters), function (req, res) {

		res.json({
			response: 'Success'
		});
	});
};

