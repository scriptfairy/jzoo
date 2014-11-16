define([

    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Template
    'text!./QuizApp.html',

    // Views
    './QuizView',
    './ControlsView',
    
    // Models
    'models/Question',
    'models/Quiz'

], function(
		
	Backbone, $, _,
	template,
	QuizView, ControlsView, 
	Question, Quiz

){

	var QuizApp = Backbone.View.extend({
		
		template: _.template(template),
		
		initialize: function(options) {
			
			var questions = options.questions || [];
			_.map(questions, function(question){
				return new Question(question);
			});
			
			this.quiz = new Quiz();
			this.quiz.add(questions);
			
			this.render();
		},
		
		render: function() {
			
			var html = this.template();
			this.$el.html(html);
			
			this.renderControlsView();
			this.renderQuizView();
			
			this.quiz.start();
			
		},

		renderControlsView: function() {
			
			this.controlsView = new ControlsView({quiz: this.quiz});
			this.$('.controls-panel').append(this.controlsView.$el);
		},
		
		renderQuizView: function() {
			
			this.quizView = new QuizView({quiz: this.quiz});
			this.$('.quiz-panel').append(this.quizView.$el);
			
		}
		
	});
	
	return QuizApp; 
	
});