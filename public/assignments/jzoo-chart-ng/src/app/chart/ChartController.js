(function(){
  
  'use strict';
  
  angular
    .module('chart')
    .controller('ChartController', ChartController);

  ChartController.$inject = ['$scope'];

  function ChartController($scope){
  	
  	$scope.myData1 = [
  	               {'label': 2008, 'value': 60},
  	               {'label': 2009, 'value': 80},
  	               {'label': 2010, 'value': 64},
  	               {'label': 2011, 'value': 97}
  	              ];

  	$scope.myData2 = [
  	  	               {'label': 2012, 'value': 50},
  	  	               {'label': 2013, 'value': 70},
  	  	               {'label': 2014, 'value': 74},
  	  	               {'label': 2015, 'value': 17}
  	  	              ];

  }

})();
