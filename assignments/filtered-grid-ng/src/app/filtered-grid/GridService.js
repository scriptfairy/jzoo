(function(){
  
  'use strict';
  
  angular
    .module('grid')
    .factory('GridService', GridService);
  
  GridService.$inject = ['GridResource'];
  
  function GridService(GridResource) {
    
   
    var service = {
        
      cache: {},
        
      getImages: function() {
        if (!this.cache.images) {
          this.cache.images = GridResource.getImages(); 
        }
        return this.cache.images;
      }
      
    };
    
    return service;
    
  }
  
})();