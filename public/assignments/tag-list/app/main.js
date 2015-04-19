define([

    	// Libs
    	'jquery',
    	'underscore',
    	'backbone',
    	
    	// Views
    	'views/TagListApp'
], 

function(
	$, _, Backbone, 
	TagListApp

){
	
	var tagListApp = new TagListApp();
	
	$('.main').empty().append(tagListApp.$el);

});