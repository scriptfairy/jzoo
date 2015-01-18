(function(){
  
  'use strict';
  
  angular
    .module('player')
    .config(PlayerRoutes);
  
  PlayerRoutes.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];
  
  function PlayerRoutes($stateProvider,$urlRouterProvider,$locationProvider){

    $stateProvider
      .state('player',{
          url:'',
          templateUrl: 'app/audio-player/templates/audioPlayer.html',
          controller: 'PlayerController',
          controllerAs: 'playerController'
        });
  }

})();

