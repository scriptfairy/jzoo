(function(){
  
  'use strict';
  
  angular
    .module('moviepublisher')
    .config(MoviePublisherRoutes);
  
  movieResolver.$inject = ['MoviePublisherResource'];
  
  function movieResolver(MoviePublisherResource) {
    return MoviePublisherResource.getMovies();
  }
  
  MoviePublisherRoutes.$inject = ['$stateProvider'];
  
  function MoviePublisherRoutes($stateProvider){
    
    // Create an abstract parent state 'app' to load the images
    // Then the 'app.grid' state to handle the view
    $stateProvider
      .state('app',{
        abstract: true,
        template: '<ui-view>',
        resolve: {
          movies: movieResolver
        }
      })
      .state('app.moviepublisher',{
        url:'',
        templateUrl: 'app/templates/moviePublisher.html',
        controller: 'MoviePublisherController',
        controllerAs: 'moviePublisherController'
      });
  }

})();
