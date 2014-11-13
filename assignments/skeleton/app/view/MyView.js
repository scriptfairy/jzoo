define([

    // Libs
    'jquery',
    'underscore',
    'backbone',
    
    // Template
    'text!./MyView.html'
    
], function(
		
	$, _, Backbone,
	template
	
){

	var MyView = Backbone.View.extend({
		
		template: _.template(template),
		
		initialize: function() {
			this.render();
		},

		render: function() {
			var html = this.template();
			this.$el.html(html);
		}

	});

	return MyView;
	
});

