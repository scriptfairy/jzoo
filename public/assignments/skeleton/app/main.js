define([

	// Libs
	'jquery',
	'underscore',
	'backbone',
	'bootstrap',
	
	// Views
	'view/MyView'

],
function(
		
	$, _, Backbone, Bootstrap,
	MyView
	
){
	
	var myView = new MyView();
	
	$('.main').empty().append(myView.$el);
	
});

