(function(){
  
  'use strict';
  
  angular
    .module('quiz')
    .controller('QuizWelcomeController', QuizWelcomeController);

  QuizWelcomeController.$inject = ['$scope','$state','QuizService'];

  function QuizWelcomeController($scope,$state,QuizService){

    this.start = function() {
      $scope.quiz.start();
      $state.go('question',{questionNumber:1}); // this change the url
    };
    
    function init() {
      var promise = QuizService.getQuiz();
      promise.then(function(quiz){
        $scope.quiz = quiz;
      });
      
    }

    init();
    
  }

})();
