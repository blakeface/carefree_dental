(function () {
  'use strict';

  angular
  .module('dental')
  .directive('dentalCard', dentalCard)
  .directive('dentalStepOne', stepOne)
  .directive('dentalStepTwo', stepTwo);

  function dentalCard(){
    const directive = {
      restrict: 'E',
      templateUrl: '/partials/dental_card.html',
    }
    return directive;
  };

  function stepOne(){
    const directive = {
      restrict: 'E',
      templateUrl: '/partials/dental_step_one.html',
      controller: 'MainCtrl',
      controllerAs: 'vm',
      bindToController: true,
    }
    return directive;
  };

  function stepTwo(){
    const directive = {
      restrict: 'E',
      templateUrl: '/partials/dental_step_two.html',
      controller: 'MainCtrl',
      controllerAs: 'vm',
      bindToController: true,
    }
    return directive;
  };

})()
