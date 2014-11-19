define([

    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Template
    'text!./ProgressBarTotal.html'
    
], 

function(

	Backbone, $, _,
	template
	
){
	
	var ProgressBar = Backbone.View.extend({
		
		template: _.template(template),

		initialize: function() {
			this.value = 0;
			this.render();
			this.listenTo(this.collection,'change',this.updateProgressBar);
		},
		
		render: function() {
			
			var html = this.template();
			this.$el.html(html);
		},
		
		updateProgressBar: function() {

			var value = (this.collection.getValue()) / this.collection.length;
			
			this.$('.progress-bar').css('width',value+'%');
			
		}
	});
	
	return ProgressBar;
});