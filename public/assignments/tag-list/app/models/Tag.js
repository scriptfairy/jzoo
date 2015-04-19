define([
    
    // Libs
    'backbone'
    
    
], function(

	Backbone
){
	
	var Tag = Backbone.Model.extend({
		
		defaults : {
			'label' : ''
		}
		
	});
	
	return Tag;
});