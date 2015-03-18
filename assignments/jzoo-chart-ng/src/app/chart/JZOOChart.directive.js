angular
  .module('chart')
  .directive('jzooChart', function() {
    return {
      
      // Limit to element syntax <jzoochart></jzoochart>
      restrict: 'E',
      
      scope: {
      	data: '='
      },
      
      controller: function($scope) {

      },
      
      link: function($scope, $element, $attrs) {

      },
      
      templateUrl: 'templates/chart.html'
        
    };
    
  });


