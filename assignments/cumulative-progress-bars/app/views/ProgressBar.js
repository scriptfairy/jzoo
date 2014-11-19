define([

    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Template
    'text!./ProgressBar.html'
    
], 

function(

	Backbone, $, _,
	template
	
){
	
	var ProgressBar = Backbone.View.extend({
		
		template: _.template(template),

		events: {
			
			'click .btn-plus': 'clickButtonPlus',
			'click .btn-minus': 'clickButtonMinus'
		},
		
		initialize: function() {
			this.render();
		},
		
		render: function() {
			
			var html = this.template();
			this.$el.html(html);
		},
		
		clickButtonPlus: function() {
			this.model.increment();
			this.updateProgressBar();
		},
		
		clickButtonMinus: function() {
			this.model.decrement();
			this.updateProgressBar();
		},
		
		updateProgressBar: function() {
			var value = this.model.value();
			this.$('.progress-bar').css('width',value+'%');
		}
	});
	
	return ProgressBar;
});