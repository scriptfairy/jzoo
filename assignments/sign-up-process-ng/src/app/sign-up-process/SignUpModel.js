(function(){
  
  'use strict';
  
  function SignUpModel() {
    this.signUpSteps = ['signup','pricing','payment','complete'];
    this.currentStepIndex = 0;
    this.username = null;
    this.email = null;
    this.plan = null;
    this.payment = null;

    this.pricingMap = {
          'mini':'Mini Plan',
          'standard':'Standard Plan',
          'advanced':'Advanced Plan'
    } ;

    this.paymentMap = {
        'paypal':'PayPal',
        'creditcard':'Credit Card'
    } ;
  }

  angular.extend(SignUpModel.prototype,{

    getCurrentStep: function() {
      return this.signUpSteps[this.currentStepIndex];
    },
    
    goToNext: function() {
      if(this.hasNextStep()) {
        this.currentStepIndex++;
      }
    },
    
    goToPrevious: function() {
      if(this.hasPreviousStep()) {
        this.currentStepIndex--;
      }
    } ,
    
    hasNextStep: function() {
      return this.currentStepIndex < this.signUpSteps.length - 1;
    },
    
    hasPreviousStep: function() {
      return this.currentStepIndex > 0;
    },
    
    getPlan: function() {
      return this.pricingMap[this.plan];
    },
    
    getPayment: function() {
      return this.paymentMap[this.payment];
    }
  
  });
 
  var signUpModel = new SignUpModel();

  angular
  .module('signUp')
  .value('signUpModel', signUpModel);
  
})();