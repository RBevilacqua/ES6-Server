'use strict';

var _consts = require('./Utilities/consts');

var _consign = require('consign');

var _consign2 = _interopRequireDefault(_consign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _consign2.default)().include('dist/libs/middlewares.js').then('dist/routes').include('dist/libs/boots.js').into(_consts.app);

// import express from 'express';
// 

// //here routes defined
// import './routes';

// app.set('port', process.env.PORT || 8080);

// app.listen(app.get('port'), () => {
// 	console.log(`ES6 application listening on port ${app.get('port')}`);
// });