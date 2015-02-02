define([

    // Libs
    'jquery',
    'underscore',
    'backbone',
    
    // Template
    'text!./FourSteps.html'
    
], function(
		
	$, _, Backbone,
	template
		
){

	var FourStepsView = Backbone.View.extend({
		
		template: _.template(template),
		
		initialize: function(options) {
		  this.userData = options.userData;
			this.render();
		},

		render: function() {
			var html = this.template();
			this.$el.html(html);
			this.highlightCurrentStep();
			this.listenTo(this.userData,'statechange',this.highlightCurrentStep);
		},
		
		highlightCurrentStep: function() {
		  var $step1 = this.$('.step-one');		  
      var $step2 = this.$('.step-two');     
      var $step3 = this.$('.step-three');     

		  $step1[ this.userData.getCurrentStep() === 'signup' ? 'addClass' : 'removeClass'  ]('selected');
      $step2[ this.userData.getCurrentStep() === 'pricing' ? 'addClass' : 'removeClass'  ]('selected');
      $step3[ this.userData.getCurrentStep() === 'payment' ? 'addClass' : 'removeClass'  ]('selected');
		}
		
	});

	return FourStepsView;
	
});

