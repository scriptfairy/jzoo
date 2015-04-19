(function(){
  
  'use strict';
  
  angular
    .module('taglist')
    .config(TaglistRoutes);
  
  TaglistRoutes.$inject = ['$stateProvider'];
  
  function TaglistRoutes($stateProvider){
    
    $stateProvider
      .state('taglist',{
        url:'',
        templateUrl: 'templates/taglist.html',
        controller: 'TaglistController',
        controllerAs: 'taglistController'
      });
    
  }

})();
