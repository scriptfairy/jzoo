(function(){
  
  'use strict';
  
  angular
    .module('quiz')
    .controller('QuizResultController', QuizResultController);

  QuizResultController.$inject = ['$scope','$state','$stateParams','QuizService'];

  function QuizResultController($scope,$state,$stateParams,quizService){

    this.restart = function() {
      $state.go('welcome');
    };
    
    function init() {
      var promise = quizService.getQuiz();
      promise.then(function(quiz){
        $scope.quiz = quiz;
      });
    }
    
    init();
    
  }

})();
