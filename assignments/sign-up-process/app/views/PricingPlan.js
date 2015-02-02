define([

    // Libs
    'jquery',
    'underscore',
    'backbone',
    
    // Template
    'text!./PricingPlan.html'
    
], function(
		
	$, _, Backbone,
	template
		
){

	var PricingPlanView = Backbone.View.extend({
		
		template: _.template(template),
		
		events: {
		  'click .select-cell': 'clickPlan'
		},
		
		className: 'pricing-plan-form',

		initialize: function(options) {
      this.userData = options.userData;
			this.render();
		},

		render: function() {
			var html = this.template();
			this.$el.html(html);
			this.updateView();
		},

		clickPlan: function(e) {
		  var plan = $(e.currentTarget).data('plan');
		  this.userData.set('plan',plan);
		  this.updateView();
		},
		
		updateView: function() {
		  
		  var $mini = this.$('.mini');
		  var $standard = this.$('.standard');
		  var $advanced = this.$('.advanced');

		  $mini[ this.userData.get('plan') === 'mini' ? 'addClass' : 'removeClass'  ]('selected');
		  $standard[ this.userData.get('plan') === 'standard' ? 'addClass' : 'removeClass'  ]('selected');
		  $advanced[ this.userData.get('plan') === 'advanced' ? 'addClass' : 'removeClass'  ]('selected');
		},
		
		close: function() {
      this.off();
      this.remove();
    }
		
	});

	return PricingPlanView;
	
});

