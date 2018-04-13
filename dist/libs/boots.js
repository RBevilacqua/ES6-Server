'use strict';

module.exports = function (app) {
	app.listen(app.get('port'), function () {
		console.log('ES6 application listening on port ' + app.get('port'));
	});
};