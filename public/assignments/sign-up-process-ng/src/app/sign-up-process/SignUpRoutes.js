(function(){
  
  'use strict';
  
  angular
    .module('signUp')
    .config(SignUpRoutes);
  
  SignUpRoutes.$inject = ['$stateProvider','$urlRouterProvider'];
  
  function SignUpRoutes($stateProvider,$urlRouterProvider){

    // For any unmatched url, redirect to /signup
    $urlRouterProvider.otherwise("/signup"); 
    
    $stateProvider
      .state('signup',{
        url:'/signup',
        templateUrl: 'app/sign-up-process/templates/signUp.html',
        controller: 'SignUpController',
        controllerAs: 'signUpController'
      })
      .state('pricing',{
        url:'/pricing',
        templateUrl: 'app/sign-up-process/templates/signUp.html',
        controller: 'SignUpController',
        controllerAs: 'signUpController'
      })
      .state('payment',{
        url:'/payment',
        templateUrl: 'app/sign-up-process/templates/signUp.html',
        controller: 'SignUpController',
        controllerAs: 'signUpController'
      })
      .state('complete',{
        url:'/complete',
        templateUrl: 'app/sign-up-process/templates/signUp.html',
        controller: 'SignUpController',
        controllerAs: 'signUpController'
      });
  }

})();

