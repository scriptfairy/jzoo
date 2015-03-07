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
