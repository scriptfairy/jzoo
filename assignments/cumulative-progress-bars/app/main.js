define([

	// Libs
	'jquery',
	'underscore',
	'backbone',
	
	// Views
	'views/ProgressBarApp'

],
function(
		
	$, _, Backbone, 
	ProgressBarApp
	
){
	
	var progressBarApp = new ProgressBarApp({progressBarCount: 3});
	
	$('.main').empty().append(progressBarApp.$el);
	
});

