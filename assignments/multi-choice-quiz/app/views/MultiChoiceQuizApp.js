define([

    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Template
    'text!./MultiChoiceQuizApp.html',

    // Models
    'models/Question',
    
    // Collections
    'collections/Quiz'

], function(
		
		Backbone, $, _,
		template,
		Question,
		Quiz
){
	
	var MultiChoiceApp = Backbone.View.extend({
		
		template: _.template(template),
		
		initialize: function() {
			this.quiz = new Quiz();
			this.initializeCollection();
			this.render();
		},
		
		render: function() {
			
			var html = this.template();
			this.$el.html(html);
		},
		
		initializeCollection: function() {
			
			var question1 = new Question(
				{
				    question: 'Which scientist changed the world with research into Theoretical Physics?',
				    options: [ 'Marie Curie', 'Albert Einstein', 'Edwin Hubble' ],
				    correctAnswer: 1,
				    userAnswer: null
				});
				
			var question2 = new Question(
				{
					question: 'Which scientist became famous for breakthrough discoveries in radioactivity?',
				    options: [ 'James Maxwell', 'Nicolaus Copernicus', 'Marie Curie' ],
				    correctAnswer: 2,
				    userAnswer: null
				  });
			
			var question3 = new Question(
				  {
					    question: 'Which scientist is credited with the invention of the first practical telephone?',
					    options: [ 'Alexander Graham Bell', 'Galileo Galilei', 'Stephen Hawking' ],
					    correctAnswer: 0,
					    userAnswer: null
				  });

			this.quiz.add([question1,question2,question3]);
console.log(this.quiz)			
		}
	
	});
	
	return MultiChoiceApp; 
	
});