(function(){
  
  'use strict';
  
  angular
    .module('quiz')
    .config(QuizRoutes);
  
  QuizRoutes.$inject = ['$stateProvider'];
  
  function QuizRoutes($stateProvider){
    
    $stateProvider
      .state('welcome',{
        url:'',
        templateUrl: 'app/quiz/templates/welcome.html',
        controller: 'QuizWelcomeController',
        controllerAs: 'quizWelcomeController'
      })
      .state('question',{
        url:'/question/{questionNumber:int}',
        templateUrl: 'app/quiz/templates/question.html',
        controller: 'QuizQuestionController',
        controllerAs: 'questionController'
      })
      .state('result',{
        url:'/result',
        templateUrl:'app/quiz/templates/result.html',
        controller: 'QuizResultController',
        controllerAs: 'resultController'
      });
    
  }

})();

