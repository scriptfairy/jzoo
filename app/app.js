var myApp = angular.module('app',[]);

myApp.controller('MainController', ['$scope', function($scope) {

	var $ = angular.element;
  var currentRowStart = 0;
  var rowDivs = [];
  var currentTallest = 0;
  
	$('.thumbnail').each(function() {
		var $el = $(this);
		var topPosition = $el.position().top;

		if (currentRowStart != topPosition) {
    
       // we just came to a new row.  Set all the heights on the completed row
			for (var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
			}
			// set the variables for the new row
      rowDivs.length = 0; // empty the array
      currentRowStart = topPosition;
      currentTallest = $el.height();
      rowDivs.push($el);
			
		}
    else 
    {

       // another div on the current row.  Add it to the list and check if it's taller
       rowDivs.push($el);
       currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }

	  // do the last row
	  for (var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	    rowDivs[currentDiv].height(currentTallest);
	  }
		
	});


}]);

