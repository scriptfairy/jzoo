define([
    
    // Libs
    'backbone',
    
    // Models
    'models/Tag'

], function(
	
	Backbone,
	Tag

){
	
	var Tags = Backbone.Collection.extend({
		model: Tag
	});
	
	return Tags;
});