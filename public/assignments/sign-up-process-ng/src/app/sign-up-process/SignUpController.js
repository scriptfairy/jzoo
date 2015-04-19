(function(){
  
  'use strict';
  
  angular
    .module('signUp')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$scope','$state','signUpModel'];

  function SignUpController($scope,$state,signUpModel){
    
    $scope.signUpModel = signUpModel;
    
    this.goToPreviousStep = function() {
      signUpModel.goToPrevious();
      $scope.currentStep = signUpModel.getCurrentStep();
      $state.go($scope.currentStep);
      
    };
    
    this.goToNextStep = function() {
      signUpModel.goToNext();
      $scope.currentStep = signUpModel.getCurrentStep();
      $state.go($scope.currentStep);
    };
    
    this.setPlan = function(plan) {
      $scope.signUpModel.plan = plan;
    };
    
    this.getPlanClass = function(plan) {
      return  $scope.signUpModel.plan === plan ? 'selected' : '';
    };

    this.setPayment = function(payment) {
      $scope.signUpModel.payment = payment;
    };
    
    this.getPaymentClass = function(payment) {
      return  $scope.signUpModel.payment === payment ? 'selected' : '';
    };

    this.getStepClass = function(step) {
      return $scope.currentStep === step ? 'selected' : '';
    };
    
    function init() {
      $scope.currentStep = signUpModel.getCurrentStep();
    };
    
    init();
    
  }

})();
