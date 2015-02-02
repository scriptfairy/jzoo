(function(){
  
  'use strict';
  
  angular
    .module('player')
    .controller('PlayerController', PlayerController);

  PlayerController.$inject = ['$scope','$state','$location','PlayerService'];

  function PlayerController($scope, $state, $location,PlayerService){
    
    this.label = 'paused';
    this.updateModelStatus = function(status) {
      $scope.playerModel.status = status;
      $scope.playerModel.isPaused = (status === 'pause') ? true : false;
    };
    
    this.pauseLabel = function() {
      if($scope.playerModel.status === 'pause') {
        return '[Paused]';
      }
      
      return '';
    };
    
    function init() {
      var promise = PlayerService.getPlayerModel();
      promise.then(function(playerModel){
        $scope.playerModel = playerModel;
      });
    };
    
    init();
    
  }

})();
