(function(){
  
  'use strict';
  
  angular
    .module('moviepublisher')
    .factory('MoviePublisherResource', MoviePublisherResource);
  
  MoviePublisherResource.$inject = ['$q','$http','$timeout'];
  
  function MoviePublisherResource($q,$http,$timeout) {
    
    var service = {
        
        getMovies: function() {
          var $defer = $q.defer();
          $http
            .get('data/movies.json')
            .success(function(theMovies){
              $defer.resolve(theMovies);
            });
          return $defer.promise;
        },
    
    		publishMovie: function(movie) {
          var $defer = $q.defer();
 
          $timeout(function(){
          	$defer.resolve();
    			},2000);
          
          return $defer.promise; 
    		}
    
    };
    
    return service;

  }
  
})();