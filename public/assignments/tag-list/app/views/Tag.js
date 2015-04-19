define([

    // Libs
    'backbone',
    'jquery',
    'underscore',
    'bootstrap',
    
    // Templates
    'text!./Tag.html'
    
], 
function(
	
	Backbone, $, _, Bootstrap,
	template
	
){
	
	var Tag = Backbone.View.extend({
		
		template: _.template(template),
		
		className: 'tag-container',
		
		events : {
			'click .close' : 'closeClick'
		},
		
		initialize: function() {
			this.render();
		},
		
		render: function() {
			var html = this.template({model: this.model});
			this.$el.html(html);
		},
		
		closeClick: function() {
			this.model.destroy();
			this.close();
		},
		
		close: function() {
			this.off();
			this.remove();
		}
	});
	
	return Tag;
});