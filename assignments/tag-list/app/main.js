define([

    	// Libs
    	'jquery',
    	'underscore',
    	'backbone',
    	'bootstrap',
    	
    	// Views
    	'views/TagListApp'
], 

function(
	$, _, Backbone, bootstrap,
	TagListApp

){
	
	var tagListApp = new TagListApp();
	
	$('.main').empty().append(tagListApp.$el);

});