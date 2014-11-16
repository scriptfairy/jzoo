define([

    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Template
    'text!./ResultView.html'
    
], 
function(

	Backbone, $, _,
	template

){
	
	var ResultView = Backbone.View.extend({
		
		template: _.template(template),
		
		initialize: function(options) {
			this.quiz = options.quiz;
			this.render();
		},
		
		render: function() {
			
			var html = this.template({quiz:this.quiz});
			this.$el.html(html);
		},
		
		
		
		close: function() {
			
			this.off();
			this.remove();
		}
	
	});
	
	return ResultView;
	
});