var showFilter = require('./modules/showfilter');

function handlePost(req, res) {
	
	var shows = req.body.payload;
	var filteredShows = showFilter(shows);
	
	res.json({response:filteredShows});

}

function handleGet(req, res) {
	res.send('OK');
}

module.exports = function(app) {

	app.post('/', handlePost);
	app.get('/',handleGet);
	
};


