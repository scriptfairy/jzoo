var express = require('express')

var app = express()

require('./server/middleware')(app);
require('./server/routes')(app);

var server = app.listen(3000, function () {

	var address = server.address();
  var host = address.address;
  var port = address.port;

  console.log('Example app listening at http://%s:%s', host, port)

});

