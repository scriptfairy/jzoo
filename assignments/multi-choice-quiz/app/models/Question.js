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
			question: '',
			options: [],
			correctAnswer: null,
			userAnswer: -1
		}
	});
	
	return Question;
	
});