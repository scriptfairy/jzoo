define([

	// Libs
	'jquery',
	'underscore',
	'backbone',
	
	// Views
	'views/TODOApp'

],
function(
		
	$, _, Backbone, 
	TODOApp
	
){
	
	var todoApp = new TODOApp();
	
	$('.main').empty().append(todoApp.$el);
	
});

