define([

	// Libs
	'jquery',
	'underscore',
	'backbone',
	
	// Views
	'views/QuizApp'

],
function(
		
	$, _, Backbone, 
	QuizApp
	
){
	
	var questions = [
 		{
 			question : "Which scientist changed the world with research into Theoretical Physics?",
 			options : [ "Marie Curie", "Albert Einstein", "Edwin Hubble" ],
 			correctAnswer : 1
 		},

 		{
 			question : "Which scientist became famous for breakthrough discoveries in radioactivity?",
 			options : [ "James Maxwell", "Nicolaus Copernicus",	"Marie Curie" ],
 			correctAnswer : 2
 		},

 		{
 			question : "Which scientist is credited with the invention of the first practical telephone?",
 			options : [ "Alexander Graham Bell", "Galileo Galilei", "Stephen Hawking" ],
 			correctAnswer : 0
 		}
 	];
 	
	var appView = new QuizApp({questions:questions});
	
	$('.main').empty().append(appView.$el);
	
});

