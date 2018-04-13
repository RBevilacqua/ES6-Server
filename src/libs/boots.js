module.exports = app => {
	app.listen(app.get('port'), () => {
		console.log(`ES6 application listening on port ${app.get('port')}`);
	});
}
