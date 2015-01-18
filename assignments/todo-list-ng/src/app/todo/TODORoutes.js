(function(){
  
  'use strict';
  
  angular
    .module('todo')
    .config(TODORoutes);
  
  TODORoutes.$inject = ['$stateProvider'];
  
  function TODORoutes($stateProvider){
    
    $stateProvider
      .state('todoList',{
        url:'',
        templateUrl: 'templates/todo/todo-list.html',
        controller: 'TODOListController',
        controllerAs: 'todoListController'
      });
    
  }

})();
