(function(){
  
  'use strict';
  
  angular
    .module('quiz')
    .controller('QuizQuestionController', QuizQuestionController);

  QuizQuestionController.$inject = ['$scope','$state','$stateParams','QuizService'];

  function QuizQuestionController($scope,$state,$stateParams,quizService){

    this.goToNextQuestion= function() {
      $state.go('question',{
        questionNumber: $scope.quiz.getCurrentQuestionNumber() + 1
      });
    };
    
    this.goToPreviousQuestion = function() {
      $state.go('question',{
        questionNumber: $scope.quiz.getCurrentQuestionNumber() - 1
      });
    };
    
    this.goToResult = function() {
      $state.go('result');
    };
    
    function init() {
      var promise = quizService.getQuiz();
      promise.then(function(quiz){
        $scope.quiz = quiz;
        $scope.quiz.goToQuestionNumber($stateParams.questionNumber);
        $scope.question = $scope.quiz.getCurrentQuestion();
      });
    }
    
    init();
    
  }

})();
