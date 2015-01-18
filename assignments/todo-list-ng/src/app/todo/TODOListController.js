(function(){
  
  'use strict';
  
  angular
    .module('todo')
    .controller('TODOListController', TODOListController);

  TODOListController.$inject = ['$scope', 'TODOService'];

  function TODOListController($scope, TODOService){
    
    var KEY_CODE_ENTER = 13;

    var todoCollection;
    
    function init() {

      var todosDefer = TODOService.getTodos();
      todosDefer.then(function(theTodoCollection){
        todoCollection = theTodoCollection;
        updateTodos();
      });
      
      $scope.newTodo = '';
      
    }

    function updateTodos() {
      $scope.todos = todoCollection.all();
    }
    
    function addTodo(text) {
      var todo = TODOService.newTodo(text);
      todoCollection.add(todo);
      updateTodos();
    }
    
    this.isTodoCollectionEmpty = function() {
      return todoCollection.size() === 0;
    };

    this.getRowClass = function(todo) {
      return todo.isComplete ? 'is-done' : '';
    };
    
    this.onDeleteClick = function(todo) {
      todoCollection.remove(todo);
      updateTodos();
    };
    
    this.onNewTodoKeypress = function(e) {
      if (e.keyCode === KEY_CODE_ENTER) {
        addTodo( $scope.newTodo );
        $scope.newTodo = '';
      }
    };
    
    init();
    
  }

})();
