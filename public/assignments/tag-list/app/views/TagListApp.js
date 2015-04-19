define([

    // Libs
    'jquery',
    'underscore',
    'backbone',
    
    // Template
    'text!./TagListApp.html',
    
    // models
    'models/Tag',
    
    // collections
    'collections/Tags',
    
    // views
    './TagInput',
    './TagList'
    
], function(
		
	$, _, Backbone,
	template,
	Tag, Tags,
	TagInput, TagList
	
){

	var TagListApp = Backbone.View.extend({
		
		template: _.template(template),
		
		initialize: function() {
			this.tags = new Tags();
			this.render();
			this.renderTagInput();
			this.renderTagList();
		},

		render: function() {
			var html = this.template();
			this.$el.html(html);
		},
		
		renderTagInput: function() {
			
			this.tagInputView = new TagInput({collection: this.tags}); 
			this.$('.tag-input-container').empty().append(this.tagInputView.$el);
		},
		
		renderTagList: function() {
			this.tagList = new TagList({collection: this.tags});
			this.$('.tag-list-containder').empty().append(this.tagList.$el);
		}

	});

	return TagListApp;
	
});

