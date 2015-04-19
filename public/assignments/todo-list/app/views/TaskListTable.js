define([

    // Libs
    'backbone',
    'jquery',
    'underscore',
    
    // Views
    './TaskListTableRow'
    
],

function(
	
	Backbone, $, _,
	TaskListTableRow

){

	var TaskListTable = Backbone.View.extend({
	
		tagName: 'table',
		
		className: 'table',
		
		initialize: function(options){
			
			this.render();
			
			this.listenTo(this.collection,'add',this.onAddTask);

		},
		
		render: function() {
			
			this.$tbody = $('<tbody>');
			this.$el.append(this.$tbody);
		},
		
		onAddTask: function(newTask) {
			var row = new TaskListTableRow({model:newTask});
			this.$tbody.append(row.$el);
		}
		
	});
	
	return TaskListTable;
	
});