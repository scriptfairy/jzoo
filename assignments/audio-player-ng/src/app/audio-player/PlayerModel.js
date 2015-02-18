(function(){
  
  'use strict';

  angular
    .module('player')
    .factory('PlayerModel', PlayerModelFactory);
  
  PlayerModelFactory.$inject = ['$interval'];
  
  function PlayerModelFactory($interval) {
    
    function PlayerModel() {
      this.tracks = [];
      this.isPaused = false;
      this.status = 'play';
      this.currentTrackIndex = 0;
      this.durationInSeconds = 0;
      this.durationFormatted = '';
      this.percentage = 0;
    
      var that = this;
      this.tickInterval = $interval(function(){
        that.tick();
      }, 1000);
      
    }
  
    angular.extend(PlayerModel.prototype,{
      
      tick: function() {
        if (this.isPaused) {
          return;
        }
        this.durationInSeconds++;
        this.updateDurationFormatted();
        this.updatePercentage();
      },
      
      updateDurationFormatted: function() {
        var minutes = Math.floor(this.durationInSeconds / 60);
        var seconds = this.durationInSeconds - minutes * 60;
        seconds = seconds < 10 ? '0' + seconds : seconds; 
        this.durationFormatted = minutes + ':' + seconds;
      },

      updatePercentage: function() {
        var track = this.getCurrentTrack();
        if(this.durationInSeconds <= track.duration) {
          this.percentage = (this.durationInSeconds / track.duration) * 100;
        } 
        else {
          this.gotoNextTrack();        
          this.refresh();
        }
      },
      
      refresh: function() {
        this.durationInSeconds = 0;
        this.durationFormatted = '';
        this.percentage = 0;
        
      },
      
      moveForward: function() {
        this.gotoNextTrack();        
        this.refresh();
      },

      moveBackword: function() {
        this.gotoPreviousTrack();        
        this.refresh();
      },

      gotoNextTrack: function() {
        this.currentTrackIndex = (this.currentTrackIndex === this.tracks.length - 1) ? 0 : this.currentTrackIndex+1; 
      },

      gotoPreviousTrack: function() {
        this.currentTrackIndex = (this.currentTrackIndex === 0) ? this.tracks.length - 1 : this.currentTrackIndex-1; 
      },
      
      addTracks: function(tracks) {
        var that = this;
        angular.forEach(tracks,function(track){
          that.addTrack(track);
        });
      },
      
      addTrack: function(track) {
        this.tracks.push(track);
      },
  
      getTrackCount: function() {
        
        return this.tracks.length;
      },
  
      getCurrentTrack: function() {
        return this.tracks[this.currentTrackIndex];
      },
     
      start: function() {
        this.currentTrackIndex = 0;
      }
      
    });

    return PlayerModel;
    
  };
  

  
})();