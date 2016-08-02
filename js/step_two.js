(function () {
  'use strict';

  angular
  .module('dental')
  .directive('dentalStepTwo', stepTwo);

  function stepTwo(){
    const directive = {
      scope: {
        vm: '=',
      },
      restrict: 'E',
      templateUrl: '/partials/step_two.html',
      controller: Controller,
      controllerAs: 'vm',
      bindToController: true,
    }
    return directive;
  };

  Controller.$inject = ['DentalFactory', '$scope', '$log'];
  function Controller(DentalFactory, $scope, $log) {
    const vm = this;

    vm.services = ['Oral Exam', 'Cleaning', 'Fillings', 'X-Rays', 'Root Canal', 'Crown', 'Upper Denture', 'Braces'];
    let patients = DentalFactory.getNumberOfPeople();

    $scope.$watch(function(){
      return DentalFactory.getNumberOfPeople();
    }, function(newValue, oldValue){
      patients = newValue;
      $log.info(patients);
    });


  };
})()
