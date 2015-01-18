(function(){
  
  'use strict';
  
  angular
    .module('quiz')
    .factory('QuizService', QuizService);
  
  QuizService.$inject = ['$q', 'QuizResource','Quiz'];
  
  function QuizService($q, QuizResource,Quiz) {
    
   
    var service = {
        
      questions : null,
      quiz: null,
      
      getQuestions: function() {
        
        var that = this;
        var defer = $q.defer(); // create deferred object
        
        if(this.questions) {
          defer.resolve(this.questions); // immediately resolve it
        }
        else {
          var questionPromise = QuizResource.getQuestions();
          questionPromise.then(function(questions){
            that.questions = questions;
            defer.resolve(that.questions); 
          });
        }
        return defer.promise; // and then return the promise
      },
      
      getQuiz: function() {
        var that = this;
        var defer = $q.defer();
        if(this.quiz) {
          defer.resolve(this.quiz);
        }
        else {
          this.getQuestions()
            .then(function(questions){
              that.quiz = new Quiz();
              that.quiz.addQuestions(questions);
              defer.resolve(that.quiz);
            }); 
        }
        return defer.promise;
      }
      
    };
    
    return service;
    
  }
  
})();