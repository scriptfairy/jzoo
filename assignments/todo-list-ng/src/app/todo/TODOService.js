(function(){
  
  'use strict';
  
  angular
    .module('todo')
    .factory('TODOService', TODOService);
  
  TODOService.$inject = ['$q', 'TODOCollection', 'TODOResource'];
  
  function TODOService($q, todoCollection, TODOResource) {
    
   
    var service = {

      getTodos: function() {
        var collectionDefer = $q.defer();
        var arrayDefer = TODOResource.getTodos();
        arrayDefer.then(function(todosArr){
          todoCollection.addAll(todosArr);
          collectionDefer.resolve(todoCollection);
        });
        return collectionDefer.promise;
      },
      
      newTodo: function(text) {
        return {text:text, isComplete:false};
      }
        
    };
    
    return service;
    
  }
  
})();