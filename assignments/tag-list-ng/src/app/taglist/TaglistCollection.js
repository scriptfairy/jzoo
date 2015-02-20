(function(){
  
  'use strict';

  angular
    .module('taglist')
    .factory('TaglistCollection', TaglistCollection);

  TaglistCollection.$inject = ['$collection'];
  
  function TaglistCollection($collection){
    var instance = $collection.getInstance();
    return instance;
  }
  
})();

