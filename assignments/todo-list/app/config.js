requirejs.config({
	
	'baseUrl': './app',
		
    'paths': {
    	'jquery': '/assignments/todo-list/bower_components/jquery/dist/jquery.min',
    	'bootstrap': '/assignments/todo-list/bower_components/bootstrap/dist/js/bootstrap.min',
    	'underscore': '/assignments/todo-list/bower_components/underscore/underscore-min',
		'backbone': '/assignments/todo-list/bower_components/backbone/backbone'
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
