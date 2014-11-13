define([

	// Libs
	'jquery',
	'underscore',
	'backbone',
	'bootstrap',
	
	// Views
	'views/MultiChoiceQuizApp'

],
function(
		
	$, _, Backbone, Bootstrap,
	MultiChoiceQuizApp
	
){
	
	var appView = new MultiChoiceQuizApp();
	
	$('.main').empty().append(appView.$el);
	
});

