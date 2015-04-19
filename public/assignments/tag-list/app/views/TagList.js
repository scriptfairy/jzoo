define([

    'backbone',
    'jquery',
    'underscore',
    
    // Views
    './Tag'
], 
function(

	Backbone, $, _,
	TagView

){

	var TagList = Backbone.View.extend({
		
		
		initialize: function(options){

			this.listenTo(this.collection,'add',this.newInputTagAdded);
		},
		
		newInputTagAdded: function(newTag) {
			
			var tagView = new TagView({model:newTag});
			this.$el.append(tagView.$el);
		}
	});
	
	return TagList;
});