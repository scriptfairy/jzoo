define([

    // Libs
    'jquery',
    'underscore',
    'backbone',
    
    // Template
    'text!./SignUP.html'
    
], function(
		
	$, _, Backbone,
	template
		
){

	var SignUpView = Backbone.View.extend({
		
		template: _.template(template),
		
		className: 'sign-up-form',
		
		initialize: function(options) {
		  this.userData = options.userData;
			this.render();
		},

		render: function() {
			var html = this.template({data: this.userData});
			this.$el.html(html);
		},

    saveUserData: function(){
        this.userData.set('username',this.$('.username').val());
        this.userData.set('email',this.$('.email').val());
    },
    
    close: function() {
      this.off();
      this.remove();
    }
    
	});

	return SignUpView;
	
});

