(function(){
  
  'use strict';
  
  angular
    .module('taglist')
    .controller('TaglistController', TaglistController);

  TaglistController.$inject = ['$scope','TaglistService'];

  function TaglistController($scope,TaglistService){
    
    var KEY_CODE_ENTER = 13;

    var tagCollection;
    
    function init() {

      var tagsDefer = TaglistService.getTags();
      tagsDefer.then(function(theTagCollection){
        tagCollection = theTagCollection;
        updateTags();
      });
      
      $scope.newTodo = '';
      
    }

    function updateTags() {
        $scope.tags = tagCollection.all();
      }
    
    function addNewTag(text) {
        var tag = TaglistService.newTag(text);
        tagCollection.add(tag);
        updateTags();
    }

    this.onDeleteClick = function(tag) {
        tagCollection.remove(tag);
        updateTags();
      };
    
    this.onNewTagKeypress = function(e) {
    	if(e.keyCode === 13) {
    		addNewTag($scope.newTag);
    		$scope.newTag = '';
    	}
    }
    
    this.isTagCollectionEmpty = function() {
        return tagCollection.size() === 0;
    }
    
    
    init();
    
  }

})();
