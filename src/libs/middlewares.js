import bodyParser from 'body-parser';

module.exports = app => {
	app.set('port', process.env.PORT || 8080);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: false}));
}