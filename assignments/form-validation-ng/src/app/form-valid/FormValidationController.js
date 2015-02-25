(function(){
  
  'use strict';
  
  angular
    .module('formvalidation')
    .controller('FormValidationController', FormValidationController);

  FormValidationController.$inject = ['$scope'];

  function FormValidationController($scope){
    
		$scope.user = {};
	    $scope.join = function(form) {
	    	
	    	$scope.submitted = true;

	        if(form.$valid) {
	        	alert('Valid Form');
	        }
	        else {
	        	alert('Invalid Form');
	        }
	        
	    }
  }

})();
