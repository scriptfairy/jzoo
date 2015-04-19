(function(){
  
  'use strict';
  
  angular
    .module('progressBars')
    .controller('ProgressBarsController', ProgressBarsController);

  ProgressBarsController.$inject = ['$scope','ProgressBarsCollection'];

  function ProgressBarsController($scope,progressBarsCollection){

	  $scope.progressBarCount = 3;
	  
	  this.increment = function(bar) {
	  	if(bar.value === bar.max_value) {
				return;
			}
			
	  	bar.value = bar.value + bar.increment_by; 
	  };
	  
	  this.decrement = function(bar) {
	  	if(bar.value === bar.min_value) {
				return;
			}
			
	  	bar.value = bar.value - bar.increment_by; 
	  };
	  
	  $scope.getPercentage = function(bar) {
	  	return bar.value;
	  };
	  
	  $scope.updatePercentageTotal = function() {
	  	var total = 0;
	  	for(var i=0; i<progressBarsCollection.length;i++) {
	  		total = total + progressBarsCollection.at(i).value;
	  	}
	  	return total / progressBarsCollection.length;
	  };
	  
	  function init() {
	  	for (var i=0;i<$scope.progressBarCount;i++) {
	  		var bar = {
	  				'id': i,
	  				'value': 0,
	  				'max_value': 100,
	  				'min_value': 0,
	  				'increment_by' : 20
	  		};
	  		
	  		progressBarsCollection.add(bar);
	  		$scope.bars = progressBarsCollection.all(); 	  		
	  	};
	  	
	  };
	  
	  init();
  }

})();
