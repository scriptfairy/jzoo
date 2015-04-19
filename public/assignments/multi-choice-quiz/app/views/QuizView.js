define([
    
    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Views
    './QuestionView',
    './ResultView'
    
], 
function(

	Backbone, $, _,
	QuestionView, ResultView 

){
	
	var QuizView = Backbone.View.extend({
	
		initialize: function(options) {
			this.quiz = options.quiz;
			this.listenTo(this.quiz,'newQuestion',this.onQuizChange);
		},
		
		
		onQuizChange: function() {
			
			if(this.quiz.isFinished()) {
				this.renderResult();
			}
			else {
				this.renderQuestion();
			}
		},
		
		renderResult: function() {
			
			this.currentView = new ResultView({quiz: this.quiz});
			this.$el.empty().append(this.currentView.$el);
			
		},
		
		renderQuestion: function() {

			this.currentView = new QuestionView({quiz: this.quiz});
			this.$el.empty().append(this.currentView.$el);
			
		},
		
		closeCurrentView: function() {
			
			if(this.currentView) {
				this.currentView.close();
			}
		}

	});
	
	return QuizView;
	
});