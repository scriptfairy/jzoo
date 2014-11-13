define([

	// Libs
	'jquery',
	'underscore',
	'backbone',
	'bootstrap',
	
	// Views
	'view/TagListApp'

],
function(
		
	$, _, Backbone, Bootstrap,
	TagListApp
	
){
	
	var tagListApp = new TagListApp();
	
	$('.main').empty().append(tagListApp.$el);
	
});

