(function(){
  
  'use strict';
  
  angular
    .module('quiz')
    .factory('QuizResource', QuizResource);
  
  QuizResource.$inject = ['$q','$http'];
  
  function QuizResource($q,$http) {
    
    var service = {
        getQuestions : function() {
          return $q(function(resolve,reject){
            $http
              .get('data/questions.json')
              .success(resolve);
          });
          
        }
    };
    
    return service;
    
  }
  
})();