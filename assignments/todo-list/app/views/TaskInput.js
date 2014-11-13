define([
    
    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Template
    'text!./TaskInput.html',
    
    // Models
    'models/Task'
],

function(
	
	Backbone, $, _,
	template,
	Task
	
){
	var TaskInput = Backbone.View.extend({
		
		template : _.template(template),
		
		events : {
			'keypress .task-input' : 'inputReturnClick'
		},
		
		initialize: function(options){
			
			this.render();
		},
		
		render: function(){
			
			var html = this.template();
			
			this.$el.html(html);
			this.setFocus();
		},
		
		setFocus: function() {
			var that = this;
			// This may not work in all browsers. This is like setTimeout
			_.defer(function(){
				that.$('.task-input').focus();
			});
			
		},
		
		inputReturnClick: function(e) {
			if (e.keyCode == 13) {
				var $inputTask = $(e.target);
				var newTaskName = $.trim($inputTask.val());
				
				if(newTaskName.length > 0) {
					// Create new task model
					this.addNewTask(newTaskName);
				}
				
				$inputTask.val('');
			}
		},
		
		addNewTask: function(newTaskName) {
			var task = new Task({name: newTaskName});
			this.collection.add(task);
		}
		
	});
	
	return TaskInput;
	
});