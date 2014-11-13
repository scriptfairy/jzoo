requirejs.config({
	'baseUrl' : './app',
	
	'paths' : {
    	'jquery': '/assignments/tag-list/bower_components/jquery/dist/jquery.min',
    	'bootstrap': '/assignments/tag-list/bower_components/bootstrap/dist/js/bootstrap.min',
    	'underscore': '/assignments/tag-list/bower_components/underscore/underscore-min',
		'backbone': '/assignments/tag-list/bower_components/backbone/backbone'
	},
	
	'shim' : {
		
		'backbone' : {
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

requirejs(['main']);
