define([

    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Template
    'text!./ControlsView.html'
    
], 
function(

	Backbone, $, _,
	template

){
	
	var Controllers = Backbone.View.extend({
		
		template: _.template(template),

		events: {
			
			'click .btn-next' : 'onClickNext',
			'click .btn-back' : 'onClickBack',
			'click .btn-finish' : 'onClickFinish',
			'click .btn-start-again' : 'onClickStart'
			
		},
		
		initialize: function(options) {
			
			this.quiz = options.quiz;
			this.render();
			this.renderControls();
		},
		
		render: function() {
			var html = this.template();
			this.$el.html(html);
		},
		
		renderControls: function() {

			this.$('.btn').hide();

			if(this.quiz.isOnFirstQueston()) {
				this.$('.btn-next').show();
				return;
			}
			
			if(this.quiz.isOnLastQuestion()) {
				this.$('.btn-back').show();
				this.$('.btn-finish').show();
				return;
			}
			
			if(this.quiz.isFinished()) {
				this.$('.btn-start-again').show();
				return;
			}
			
			this.$('.btn-next').show();
			this.$('.btn-back').show();
			
		},
		
		onClickNext: function() {
			
			this.quiz.gotoNextQuestion();
			this.renderControls();
			
		},

		onClickBack: function() {
			
			this.quiz.gotoPreviousQuestion();
			this.renderControls();
			
		},
		
		onClickFinish: function() {
			
			this.quiz.gotoNextQuestion();
			this.renderControls();
		},
		
		onClickStart: function() {
			
			this.quiz.start();
			this.renderControls();
		}
		
	});
	
	return Controllers;
});