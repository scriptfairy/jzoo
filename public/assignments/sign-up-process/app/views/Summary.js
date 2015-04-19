define([

    // Libs
    'jquery',
    'underscore',
    'backbone',
    
    // Template
    'text!./Summary.html'
    
], function(
		
	$, _, Backbone,
	template
		
){

	var SummaryView = Backbone.View.extend({
		
		template: _.template(template),

		className: 'summary-form',

		initialize: function(options) {
      this.userData = options.userData;
			this.render();
		},

		render: function() {
			var html = this.template({userData:this.userData});
			this.$el.html(html);
		},
		
    close: function() {
      this.off();
      this.remove();
    }

	});

	return SummaryView;
	
});

