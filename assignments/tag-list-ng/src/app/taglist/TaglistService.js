(function(){
  
  'use strict';
  
  angular
    .module('taglist')
    .factory('TaglistService', TaglistService);
  
  TaglistService.$inject = ['$q', 'TaglistCollection', 'TaglistResource'];
  
  function TaglistService($q, taglistCollection, TaglistResource) {
    
   
    var service = {

      getTags: function() {
        var collectionDefer = $q.defer();
        var arrayDefer = TaglistResource.getTags();
        arrayDefer.then(function(tagsArr){
          taglistCollection.addAll(tagsArr);
          collectionDefer.resolve(taglistCollection);
        });
        return collectionDefer.promise;
      },
      
      newTag: function(text) {
        return {text:text};
      }
        
    };
    
    return service;
    
  }
  
})();