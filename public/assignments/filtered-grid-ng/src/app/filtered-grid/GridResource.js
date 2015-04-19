(function(){
  
  'use strict';
  
  angular
    .module('grid')
    .factory('GridResource', GridResource);
  
  GridResource.$inject = ['$q','$http'];
  
  function GridResource($q,$http) {
    
    var service = {
        
        getImages: function() {
          var $defer = $q.defer();
          $http
            .get('data/images.json')
            .success(function(theImages){
              $defer.resolve(theImages);
            });
          return $defer.promise;
        }
    
    };
    
    return service;
    
  }
  
})();