define([
        
    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Models
    'models/Question'

],function(

	Backbone, $, _,
	Question
	
){
	
	var Quiz = Backbone.Collection.extend({
		
		model: Question,

		initialize: function(options) {
			this.currentQuestionIndex = 0;
		},
		
		getCurrentQuestionNumber: function() {
			
			return this.currentQuestionIndex + 1;
		},
		
		getTotalQuestions: function() {
			
			return this.length;
		},
		
		getCurrentQuestion: function() {
			
			return this.at(this.currentQuestionIndex);
		},
		
		gotoNextQuestion: function() {
			
			if(this.currentQuestionIndex < this.length) {
				this.currentQuestionIndex++;
				this.fireIndexChanged();
			}

		},
		
		gotoPreviousQuestion: function() {

			if(this.currentQuestionIndex > 0) {
				this.currentQuestionIndex--;
				this.fireIndexChanged();
			}
			
		},
				
		isOnLastQuestion: function() {
			
			return this.currentQuestionIndex === (this.getTotalQuestions() - 1);
		},
		
		isOnFirstQueston: function() {
		
			return this.currentQuestionIndex === 0;
		},
		
		isFinished: function() {
			
			return this.currentQuestionIndex === this.length;
		},
		
		start: function() {
			
			_.each(this.models, function(model){
				model.set('userAnswer', -1);
			});
			
			this.currentQuestionIndex = 0;
			this.fireIndexChanged();
		},
		
		fireIndexChanged: function() {
			
			this.trigger('newQuestion');
		},
		
		getResult: function() {
			var result = 0;
			_.each(this.models, function(model){
				if(model.get('userAnswer') == model.get('correctAnswer')) {
	
					result++;
				}
			});
			
			return result;
		}
		
	});
	
	return Quiz;
	
});