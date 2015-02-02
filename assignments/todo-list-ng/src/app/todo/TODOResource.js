(function(){
  
  'use strict';
  
  angular
    .module('todo')
    .factory('TODOResource', TODOResource);
  
  TODOResource.$inject = ['$q'];
  
  function TODOResource($q) {
    
    var todos = [
      {text:'one', isComplete:false},
      {text:'two', isComplete:false},
      {text:'three', isComplete:false}
    ];
   
    var service = {

      getTodos: function() {
        var defer = $q.defer();
        defer.resolve(todos);
        return defer.promise;
      }
        
    };
    
    return service;
    
  }
  
})();