define([

    // Libs 
    'backbone',
    'jquery',
    'underscore'
    
], function(
		
	Backbone, $, _
	
){
	
	var Question = Backbone.Model.extend({
		
		defaults: {
			
			question: null,
			options: null,
			correctAnswer: null,
			userAnswer: null
		}
	});
	
	return Question;
	
});