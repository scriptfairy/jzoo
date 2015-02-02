(function(){
  
  'use strict';
  
  angular
    .module('player')
    .factory('PlayerService', PlayerServiceFactory);
  
  PlayerServiceFactory.$inject = ['$q', 'PlayerResource','PlayerModel'];
  
  function PlayerServiceFactory($q, PlayerResource,PlayerModel) {
    
   
    var PlayerService = {
        
      tracks : null,
      playerModel : null,
      
      getTracks: function() {
        
        var that = this;
        var defer = $q.defer(); // create deferred object
        
        if(this.tracks) {
          defer.resolve(this.tracks); // immediately resolve it
        }
        else {
          var trackPromise = PlayerResource.getTracks();
          trackPromise.then(function(tracks){
            that.tracks = tracks;
            defer.resolve(that.tracks); 
          });
        }
        return defer.promise; // and then return the promise
      },
      
      getPlayerModel: function() {
        var that = this;
        var defer = $q.defer();
        if(this.playerModel) {
          defer.resolve(this.playerModel);
        }
        else {
          this.getTracks()
            .then(function(tracks){
              that.playerModel = new PlayerModel();
              that.playerModel.addTracks(tracks);
              defer.resolve(that.playerModel);
            }); 
        }
        return defer.promise;
      }
      
    };
    
    return PlayerService;
    
  }
  
})();