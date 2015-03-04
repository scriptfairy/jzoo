(function(){
  
  'use strict';
  
  angular
    .module('progressBars')
    .config(ProgressBarsRoutes);
  
  ProgressBarsRoutes.$inject = ['$stateProvider'];
  
  function ProgressBarsRoutes($stateProvider){
    
    $stateProvider
      .state('progressbars',{
        url:'',
        templateUrl: 'app/templates/progressBars.html',
        controller: 'ProgressBarsController',
        controllerAs: 'progressBarsController'
      });
    
  }

})();
