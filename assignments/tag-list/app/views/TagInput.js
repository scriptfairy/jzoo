define([
   
    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Template
    'text!./TagInput.html',
    
    // Models
    'models/Tag'
  
], 
function(
	
	Backbone, $, _,
	template,
	Tag

){
	
	var TagInput = Backbone.View.extend({
		
		template: _.template(template),
		
		events: {
			'keypress .tag-input-new' : 'addOnEnter'
		},

		initialize: function() {
			
			this.render();
		},
		
		render: function() {
			var html = this.template();
			this.$el.html(html);
		},
		
		addOnEnter: function(e) {
			if (e.keyCode === 13) {
				this.addNewTag();
			}
		},
		
		addNewTag: function() {
			
			var $input = this.$('.tag-input-new');
			var value = $.trim($input.val());

			if(value) {
				var tag = new Tag({label: value});
				this.collection.add(tag);
			}
			
			$input.val('');
		}
	});
	
	return TagInput;
	
});