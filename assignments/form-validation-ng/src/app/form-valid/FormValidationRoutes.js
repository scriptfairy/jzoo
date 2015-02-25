(function(){
  
  'use strict';
  
  angular
    .module('formvalidation')
    .config(FormValidationRoutes);
  
  FormValidationRoutes.$inject = ['$stateProvider'];
  
  function FormValidationRoutes($stateProvider){
    
    $stateProvider
      .state('main',{
        url:'',
        templateUrl: 'app/templates/main.html',
        controller: 'FormValidationController',
        controllerAs: 'formValidationController'
      });
    
  }

})();
