define([

	// Libs
	'jquery',
	'underscore',
	'backbone',
	'bootstrap',
	
	// Views
	'views/TODOApp'

],
function(
		
	$, _, Backbone, Bootstrap,
	TODOApp
	
){
	
	var todoApp = new TODOApp();
	
	$('.main').empty().append(todoApp.$el);
	
});

