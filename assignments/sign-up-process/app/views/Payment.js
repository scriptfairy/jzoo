define([

    // Libs
    'jquery',
    'underscore',
    'backbone',
    
    // Template
    'text!./Payment.html'
    
], function(
		
	$, _, Backbone,
	template
		
){

	var PaymentView = Backbone.View.extend({
		
		template: _.template(template),

    events: {
      'click .select-cell': 'clickPayment'
    },
		
		className: 'payment-form',

		initialize: function(options) {
      this.userData = options.userData;
			this.render();
		},

		render: function() {
      var html = this.template();
      this.$el.html(html);
      this.updateView();
		},

		clickPayment: function(e) {
      var payment = $(e.currentTarget).data('payment');
      this.userData.set('payment',payment);
      this.updateView();
    },

    updateView: function() {
      
      var $paypal = this.$('.paypal');
      var $creditcard = this.$('.creditcard');

      $paypal[ this.userData.get('payment') === 'paypal' ? 'addClass' : 'removeClass'  ]('selected');
      $creditcard[ this.userData.get('payment') === 'creditcard' ? 'addClass' : 'removeClass'  ]('selected');
    },
    
    close: function() {
      this.off();
      this.remove();
    }
	
		
	});

	return PaymentView;
	
});

