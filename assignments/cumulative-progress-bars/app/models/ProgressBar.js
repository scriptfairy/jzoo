define([

    // Libs
    'backbone',
    'jquery',
    'underscore'
    
], 
function(
		
	Backbone, $, _
		
){
	
	var progressBar = Backbone.Model.extend({
	
		defaults: {
			
			'value': 0,
			'max_value': 100,
			'min_value': 0,
			'increment_by' : 20
		},
		
		increment: function() {
			
			if(this.get('value') == this.get('max_value') ) {
				return;
			}
			
			this.set('value',this.get('value') + this.get('increment_by')); 
		},
		
		decrement: function() {

			if(this.get('value') == this.get('min_value') ) {
				return;
			}
			
			this.set('value',this.get('value') - this.get('increment_by')); 
		},
		
		value: function() {
			return this.get('value');
		}
		
	});
	
	return progressBar;
	
});