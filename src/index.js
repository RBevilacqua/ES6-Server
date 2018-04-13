import {app} from './Utilities/consts';
import consign from 'consign';

consign()
	.include('dist/libs/middlewares.js')
	.then('dist/routes')
	.include('dist/libs/boots.js')
	.into(app);



// import express from 'express';
// 

// //here routes defined
// import './routes';

// app.set('port', process.env.PORT || 8080);

// app.listen(app.get('port'), () => {
// 	console.log(`ES6 application listening on port ${app.get('port')}`);
// });
