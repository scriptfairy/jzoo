(function(){
  
  'use strict';
  
  angular
    .module('grid')
    .controller('GridController', GridController);

  GridController.$inject = ['$scope', '$stateParams', 'gridImages'];

  function GridController($scope, $stateParams, gridImages){
    
    $scope.isActive = function(filter) {
      return filter === $stateParams.filter;
    };

    this.isVisible = function(image) {
      if( $stateParams.filter) {
        return image.group === $stateParams.filter;
      }
      return true;
    };
    
    function init() {
      $scope.images = gridImages;
    };
    
    init();
    
  }

})();
