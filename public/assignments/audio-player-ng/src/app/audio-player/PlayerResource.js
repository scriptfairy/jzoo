(function(){
  
  'use strict';
  
  angular
    .module('player')
    .factory('PlayerResource', PlayerResource);
  
  PlayerResource.$inject = ['$q','$http'];
  
  function PlayerResource($q,$http) {
    
    var service = {
        getTracks : function() {
          return $q(function(resolve,reject){
            $http
              .get('data/tracks.json')
              .success(resolve);
          });
          
        }
    };
    
    return service;
    
  }
  
})();