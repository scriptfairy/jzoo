define([

    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Models
    './ProgressBar'
    
], 
function(

	Backbone, $, _,
	ProgressBar
	
){
	
	var progressBars = Backbone.Collection.extend({
		
		model: ProgressBar,
		
		getValue: function() {
			var total = 0;
			var models = this.models;
			_.each(models,function(model){
				total = total + model.value();
			});
			
			return total;
		}
	});
	
	return progressBars;
});