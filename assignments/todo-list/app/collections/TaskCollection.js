define([
        
    // Libs
    'backbone',
    
    // Models
    'models/Task'
        
        
], 
function(

	Backbone,
	Task
){
	
	var TaskCollection = Backbone.Collection.extend({
		
		model: Task
		
	});
	
	return TaskCollection;
	
});