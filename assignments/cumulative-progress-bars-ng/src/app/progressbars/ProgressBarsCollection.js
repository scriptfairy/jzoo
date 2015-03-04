(function(){
  
  'use strict';

  angular
    .module('progressBars')
    .factory('ProgressBarsCollection', ProgressBarsCollection);

  ProgressBarsCollection.$inject = ['$collection'];
  
  function ProgressBarsCollection($collection){
    var instance = $collection.getInstance();
    return instance;
  }
  
})();

