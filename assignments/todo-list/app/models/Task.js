define([

    // Libs
    'backbone'
    
], 
function(
		
	Backbone
	
){
	
	var Task = Backbone.Model.extend({
		
		defaults : {
			
			name: '',
			isDone: false
			
		},
	
		toggle: function() {
			this.set({isDone: !this.get("isDone")});
		}
		
	});
	
	return Task;
	
});
