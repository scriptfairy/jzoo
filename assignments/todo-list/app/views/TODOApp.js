define([

    // Libs
    'jquery',
    'underscore',
    'backbone',
    
    // Template
    'text!./TODOApp.html',
    
    // Views
    './TaskInput',
    './TaskListTable',
    
    // Collections
    'collections/TaskCollection'
    
], function(
		
	$, _, Backbone,
	template,
	TaskInput, TaskListTable,
	TaskCollection
	
){

	var TODOApp = Backbone.View.extend({
		
		template: _.template(template),
		
		initialize: function() {
			this.render();
		},

		render: function() {
			var html = this.template();
			this.$el.html(html);
			
			this.taskCollection = new TaskCollection();
			this.renderTaskInputView();
			this.renderTaskListView();

		},
		
		renderTaskInputView: function() {
			
			var view = new TaskInput({collection: this.taskCollection});
			this.$('.task-input-container').append(view.$el);
		},
		
		renderTaskListView: function() {
			
			var view = new TaskListTable({collection: this.taskCollection});
			this.$('.task-list-container').append(view.$el);

		}
		
	});

	return TODOApp;
	
});

