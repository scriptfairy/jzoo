(function(){
  
  'use strict';
  
  angular
    .module('grid')
    .config(GridRoutes);
  
  GridRoutes.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];
  
  function GridRoutes($stateProvider,$urlRouterProvider,$locationProvider){

    // For any unmatched url, redirect to /filtered-grid
    $urlRouterProvider.otherwise("/");

    // Create an abstract parent state 'app' to load the images
    // Then the 'app.grid' state to handle the view
    $stateProvider
      .state('app',{
        abstract: true,
        template: '<ui-view>',
        resolve: {
          gridImages: function (GridService) {
            return GridService.getImages();
          }
        }
      })
      .state('app.grid',{
        url:'/:filter',
        templateUrl: 'app/filtered-grid/templates/filteredGrid.html',
        controller: 'GridController',
        controllerAs: 'gridController'
      });

  }

})();

