(function(){
  
  'use strict';

  angular
    .module('todo')
    .factory('TODOCollection', TODOCollection);

  TODOCollection.$inject = ['$collection'];
  
  function TODOCollection($collection){
    var instance = $collection.getInstance();
    return instance;
  }
  
})();

