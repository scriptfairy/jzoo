requirejs.config({
	
	'baseUrl': './app',
		
    'paths': {
    	'jquery': '../bower_components/jquery/dist/jquery.min',
    	'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    	'underscore': '../bower_components/underscore/underscore-min',
		'backbone': '../bower_components/backbone/backbone'
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
