(function(){
  
  'use strict';
  
  angular
    .module('taglist')
    .factory('TaglistResource', TaglistResource);
  
  TaglistResource.$inject = ['$q'];
  
  function TaglistResource($q) {
    
    var tags = [
      {text:'one'},
      {text:'two'},
      {text:'three'}
    ];
   
    var service = {

      getTags: function() {
        var defer = $q.defer();
        defer.resolve(tags);
        return defer.promise;
      }
        
    };
    
    return service;
    
  }
  
})();