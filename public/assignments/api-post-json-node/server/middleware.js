var bodyParser = require('body-parser');

module.exports = function(app) {
	
	// Add headers to allow requests from other domains 
	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});

	// Middleware to parse the posted json string
	app.use(bodyParser.json());

	// Middleware to handle errors
	app.use(function(err, req, res, next) {

		var message;
		var status;
		
		if (err.message === 'invalid json') {
			message = 'Could not decode request: JSON parsing failed';
		  status = 400;
		}
		else {
		  message = 'An unknown server error occurred';
		  status = 500;
		}
		
	  res
	  	.status(status)
	  	.json({error: message});
	  
	});
	
};

