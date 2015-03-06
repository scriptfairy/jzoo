
(function(){
  
  'use strict';
  
  angular
    .module('moviepublisher')
    .controller('MoviePublisherController', MoviePublisherController);

  MoviePublisherController.$inject = ['$scope','MoviePublisherResource','movies'];

  function MoviePublisherController($scope, MoviePublisherResource, movies){
  	
  	$scope.movies = movies;
  	
  	var publishIndex = 0;
  	
  	function publishNext() {
  		if (publishIndex >= movies.length) {
  			$scope.processingFinished = true;
    		$scope.processingStarted = false;
  			return;
  		}
  		$scope.processedCount = publishIndex + 1; 
			$scope.movies[publishIndex].status = 'Publishing';
  		var moviePromise = MoviePublisherResource.publishMovie(movies[publishIndex]);
  		moviePromise.then(function(){
  			$scope.movies[publishIndex].status = 'Done';
  			publishIndex += 1;
  			publishNext();
  		});
  	}
  	
  	this.publish = function() {
  		$scope.isProcessing = true;
  		$scope.processingStarted = true;
  		publishIndex = 0;
  		publishNext();
  	}
  
  }

})();
