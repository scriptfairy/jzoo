
(function(){
  
  'use strict';
  
  angular
    .module('colorSlider')
    .controller('ColorSliderController', ColorSliderController);

  ColorSliderController.$inject = ['$scope'];

  function ColorSliderController($scope){
  	
  	$scope.data = {'redValue':0, 'greenValue':0, 'blueValue':0};
  	
//  	$scope.bgColor = function() {
//  		
//  		var style =  "background-color: rgb(" + $scope.data.redValue + "," + $scope.data.greenValue + "," + $scope.data.blueValue + ")";
//console.log(style);  		
//  	}
  	
  	$scope.bgColor = function() {
  		return {
  			backgroundColor: 'rgb(' + $scope.data.redValue + ',' + $scope.data.greenValue + ',' + $scope.data.blueValue + ')'
  		};
  	}

  
  }

})();
