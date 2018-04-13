
'use strict';
// import './Utilities/consts';

// import {app} from './Utilities/consts';

module.exports = function (app) {

	app.post('/register', function (req, res) {
		console.log(req.body);
		res.json({
			response: 'Success'
		});
	});

	app.get('/', function (req, res) {
		res.json({
			response: 'API Works ES6'
		});
	});


	
};