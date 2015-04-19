define([

    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Template
    'text!./QuestionView.html'
            
], 
function(

	Backbone, $, _,
	template
	
){
	
	var QuestionView = Backbone.View.extend({
		
		template: _.template(template),
		
		events: {
			
			'click input[name=option]': 'clickRadio' 
			
		},
	
		initialize: function(options) {
			this.quiz = options.quiz;
			this.render();
			this.RadionButtonSelectedValueSet('option', this.quiz.getCurrentQuestion().get('userAnswer'));
		},
		
		render: function() {
			this.$el.text('Question View');
			var html = this.template({quiz: this.quiz});
			this.$el.html(html);
		},
		
		RadionButtonSelectedValueSet: function(name, SelectdValue) {
			this.$('input[name="' + name+ '"][value="' + SelectdValue + '"]').prop('checked', true);
		},
		
		clickRadio: function(e) {
			var value = $(e.currentTarget).val();
			this.quiz.getCurrentQuestion().set('userAnswer',value);
		},
		
		close: function() {
			this.off();
			this.remove();
		}
	});
	
	return QuestionView;
});