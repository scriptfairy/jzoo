define([

    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Template
    'text!./TaskListTableRow.html'
],function(
	BackBone, $, _,
	template
){
	
	var TaskListTableRow = Backbone.View.extend({
	
		template: _.template(template),
		
		tagName: 'tr',
		
		events: {
			'click .done-checkbox' : 'isDoneClick',
			'click .delete-link' : 'deleteLinkClick'
		},
		
		initialize: function() {
			this.render();
			this.listenTo(this.model,'change:isDone',this.markTaskToggle);
		},
		
		render: function() {
			var html = this.template({model: this.model});
			
			this.$el.html(html);
		},
	
		isDoneClick: function(e) {
			this.model.toggle();
		},
		
		markTaskToggle: function() {
			if(this.model.get('isDone')) {
				this.$('.task-name-cell').addClass('is-done');
			}
			else {
				this.$('.task-name-cell').removeClass('is-done');
			}
		},
		
		deleteLinkClick: function(e) {
			e.preventDefault();
			this.model.destroy();
			this.close();
		},
		
		close: function() {
			this.off();
			this.remove();
		}
	});
	
	return TaskListTableRow;
});