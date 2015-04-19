define([

    // Libs
    'jquery',
    'underscore',
    'backbone',
    
    // Template
    'text!./SignUpApp.html',
    
    //Views
    './FourSteps',
    './SignUp',
    './PricingPlan',
    './Payment',
    './Summary',
    
    // Models
    'models/UserSignUpData'
    
], function(
		
	$, _, Backbone,
	template,
	FourSteps, SignUp, PricingPlan, Payment, Summary,
	UserSignUpData
		
){

	var SignUpAppView = Backbone.View.extend({
		
		template: _.template(template),

    events: {
      
      'click .btn-next' : 'onClickNext',
      'click .btn-back' : 'onClickBack'
    },
		
		initialize: function() {
		  this.userData = new UserSignUpData();
			this.render();
		},

		render: function() {
			var html = this.template();
			this.$el.html(html);
			this.renderFourSteps();
			this.renderCurrentView();
		},
		
		renderCurrentView: function() {
		  if(this.userData.getCurrentStep() === 'signup') {
	      this.renderSignUp();
		  }
		  else if (this.userData.getCurrentStep() === 'pricing') {
		    this.renderPricingPlan();
		  }
      else if (this.userData.getCurrentStep() === 'payment') {
        this.renderPayment();
      }
		  
      else if (this.userData.getCurrentStep() === 'complete') {
        this.renderComplete();
      }
      this.updateButtons();
		},
		
		renderFourSteps: function() {
			var view = new FourSteps({userData:this.userData});
			this.$('.four-steps-container').append(view.$el);
		},
		
		renderSignUp: function() {
		  this.closeCurrentView();
			this.currentStepView = new SignUp({userData: this.userData});
			this.$('.forms-container').append(this.currentStepView.$el);
		},
		
		renderPricingPlan: function() {
      this.closeCurrentView();
			this.currentStepView = new PricingPlan({userData: this.userData});
			this.$('.forms-container').append(this.currentStepView.$el);
		},
		
		renderPayment: function() {
      this.closeCurrentView();
			this.currentStepView = new Payment({userData: this.userData});
			this.$('.forms-container').append(this.currentStepView.$el);
		},
		
		renderComplete: function() {
      this.closeCurrentView();
      this.currentStepView = new Summary({userData: this.userData});
      this.$('.forms-container').append(this.currentStepView.$el);
		},
		
		closeCurrentView: function() {
      if(this.currentStepView) {
        this.currentStepView.close();
      }
		},
		
		updateButtons: function() {
		  var $previous = this.$('.btn-back');
      var $next = this.$('.btn-next');
      $previous[ this.userData.getCurrentStep() !== 'signup' ? 'show' : 'hide'  ]();
      $next[ this.userData.getCurrentStep() !== 'complete' ? 'show' : 'hide'  ]();
		},

		onClickNext: function() {
		  if(this.userData.getCurrentStep() === 'signup') {
		    this.currentStepView.saveUserData();
		  }
      this.userData.goToNext();
      this.renderCurrentView();
    },

    onClickBack: function() {
      if(this.userData.getCurrentStep() === 'signup') {
        this.currentStepView.saveUserData();
      }
      this.userData.goToPrevious();
      this.renderCurrentView();
    }
    

		
	});

	return SignUpAppView;
	
});

