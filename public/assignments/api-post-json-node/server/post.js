var https = require('https');

var fs = require('fs');

var filename = '../client/data.json';

fs.readFile(filename, 'utf8', function(err, data) {
	  if (err) throw err;
	  
	  var headers = {
	  	  'Content-Type': 'application/json',
	  	  'Content-Length': data.length
	  };
	  
//	  var options = {
//	  	  host: 'localhost',
//	  	  port: 5000,
//	  	  path: '/',
//	  	  method: 'POST',
//	  	  headers: headers
//	  };

	  var options = {
	  	  host: 'scriptfairy-mi9.herokuapp.com',
	  	  port: 443,
	  	  path: '/',
	  	  method: 'POST',
	  	  headers: headers
	  };

	  var req = https.request(options, function(res) {
		  	res.setEncoding('utf-8');

	    var responseString = '';

	    res.on('data', function(data) {
				responseString += data;
	
	    });

	    res.on('end', function() {
	      var resultObject = JSON.parse(responseString);
	      console.log( resultObject );
	    });
	    
	  });

	  req.on('error', function(e) {
	  	console.log( e );
	  });

	  req.write(data);
	  req.end();	  
});