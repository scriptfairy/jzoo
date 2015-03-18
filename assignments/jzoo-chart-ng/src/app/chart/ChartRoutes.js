(function(){
  
  'use strict';
  
  angular
    .module('chart')
    .config(ChartRoutes);
  
  ChartRoutes.$inject = ['$stateProvider'];
  
  function ChartRoutes($stateProvider){
    
    $stateProvider
      .state('chart',{
        url:'',
        templateUrl: 'templates/main.html',
        controller: 'ChartController',
        controllerAs: 'chartController'
      });
    
  }

})();
