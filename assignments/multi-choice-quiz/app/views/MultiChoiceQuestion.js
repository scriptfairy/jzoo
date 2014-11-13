define([

    // Libs
    'backbone',
    'jquery',
    'underscore',
    'text!./MultiChoiceQuestion.html'
            
], 
function(

	Backbone, $, _,
	template
	
){
	
	var MultiChoiceQuestion = Backbone.View.extend({
		
		template: _.template(template),
		
		initialize: function() {
			this.render();
		},
		
		render: function() {
			
			var html = this.template({model: this.model});
			this.$el.html(html);
		}
	});
	
	return MultiChoiceQuestion;
});