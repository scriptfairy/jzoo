define([

    // Libs
    'jquery',
    'underscore',
    'backbone',
    
    
    // Template
    'text!./progressBarApp.html',
    
    // Views
    'views/ProgressBar',
    'views/ProgressBarTotal',
    
    // Models
    'models/ProgressBar',
    'models/ProgressBars'
    
], function(
		
	$, _, Backbone,
	template,
	ProgressBarView, ProgressBarTotalView,
	ProgressBarModel, ProgressBarsCollection
	
	
){

	var MyView = Backbone.View.extend({
		
		template: _.template(template),
		
		initialize: function(options) {
			this.progressBarCount = options.progressBarCount;
			this.progressBars = [];
			this.render();
			this.renderProgressBars();
		},

		render: function() {
			var html = this.template();
			this.$el.html(html);
		},
		
		renderProgressBars: function() {
			
			this.progressBarsCollection = new ProgressBarsCollection();
			
			for(var i=0;i<this.progressBarCount;i++) {
				
				var progressBarModel = new ProgressBarModel();
				this.progressBarsCollection.add(progressBarModel);
				var progressBarView = new ProgressBarView({model: progressBarModel});
				this.progressBars.push(progressBarView);
				this.$('.progress-bars-container').append(progressBarView.$el);
			};
			
			this.progressBarTotalView = new ProgressBarTotalView({collection: this.progressBarsCollection});
			this.$('.prgress-bar-total-container').append(this.progressBarTotalView.$el);
		}
		
	});

	return MyView;
	
});

