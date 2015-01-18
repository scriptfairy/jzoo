(function(){
  
  'use strict';
  
  angular
    .module('grid')
    .controller('GridController', GridController);

  GridController.$inject = ['$scope','$state','gridImages','$location'];

  function GridController($scope, $state, gridImages,$location){

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    this.isVisible = function(image) {
      var page = $location.path().substring(1);

      if( page !== 'all' ) {
        return image.group === $location.path().substring(1);
      }
      
      return true;
    };
    
    function init() {
      $scope.images = gridImages;
    };
    
    init();
    
  }

})();
