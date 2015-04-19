requirejs.config({
	
	'baseUrl': './app',
		
    'paths': {
    	'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
    	'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min',
    	'underscore': 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min',
		'backbone': 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min'
    },

	'shim': {
		
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		
		'underscore': {
			exports: '_'
		},
		
		'bootstrap': {
			deps: ['jquery'],
			exports: '$.fn.popover' 
		}
		
	}

});

//Load the main app module to start the app
requirejs(['main']);
