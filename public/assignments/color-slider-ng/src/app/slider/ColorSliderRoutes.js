(function(){
  
  'use strict';
  
  angular
    .module('colorSlider')
    .config(ColorSliderRoutes);
  
  ColorSliderRoutes.$inject = ['$stateProvider'];
  
  function ColorSliderRoutes($stateProvider){
    
    $stateProvider
      .state('slider',{
        url:'',
        templateUrl: 'app/templates/colorSlider.html',
        controller: 'ColorSliderController',
        controllerAs: 'colorSliderController'
      });
  }

})();
