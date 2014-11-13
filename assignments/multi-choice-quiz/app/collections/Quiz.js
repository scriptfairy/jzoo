define([
        
    // Libs
    'backbone',
    'jquery',
    'underscore'

],function(

	Backbone, $, _
){
	
	var Quiz = Backbone.Collection.extend({
		
		model: Question
	});
	
	return Quiz;
	
});