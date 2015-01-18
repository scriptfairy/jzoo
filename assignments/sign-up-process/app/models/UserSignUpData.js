define([

    // Libs 
    'backbone',
    'jquery',
    'underscore'
    
], function(
		
	Backbone, $, _
	
){
	
	var UserSignUpData = Backbone.Model.extend({
		
		defaults: {
			username: '',
			email: '',
			plan: '',
			payment: ''
		},
		
		initialize: function() {
		  this.signUpStepsLength = 4;
	    this.signUpSteps = ['signup','pricing','payment','complete'];
	    this.currentStepIndex = 0;
	    this.pricingMap = {
	          'mini':'Mini Plan',
	          'standard':'Standard Plan',
	          'advanced':'Advanced Plan'
	    } ;

	    this.paymentMap = {
	        'paypal':'PayPal',
	        'creditcard':'Credit Card'
	    } ;
		  
		},
		
    getCurrentStep: function() {
      return this.signUpSteps[this.currentStepIndex];
    },
    
    goToNext: function() {
      if(this.hasNextStep()) {
        this.currentStepIndex++;
      }
      
      this.trigger('statechange');
    },
    
    goToPrevious: function() {
      if(this.hasPreviousStep()) {
        this.currentStepIndex--;
      }
      this.trigger('statechange');
    },

    getPlan: function() {
      return this.pricingMap[this.get('plan')];
    },
    
    getPayment: function() {
      return this.paymentMap[this.get('payment')];
    },

    hasNextStep: function() {
      return this.currentStepIndex < this.signUpStepsLength - 1;
    },
    
    hasPreviousStep: function() {
      return this.currentStepIndex > 0;
    }
    
	});
	
	return UserSignUpData;
	
});