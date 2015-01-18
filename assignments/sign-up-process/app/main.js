define([

	// Libs
	'jquery',
	'underscore',
	'backbone',
	
	// Views
	'views/SignUpApp'

],
function(
		
	$, _, Backbone, 
	SignUpApp
	
){
	
	var signUpView = new SignUpApp();
	
	$('.main').empty().append(signUpView.$el);
	
});