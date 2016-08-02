(function () {
  'use strict';

  angular
  .module('dental')
  .directive('dentalStepOne', stepOne);

  function stepOne(){
    const directive = {
      scope: {
        vm: '=',
      },
      restrict: 'E',
      templateUrl: '/partials/step_one.html',
      controller: Controller,
      controllerAs: 'vm',
      bindToController: true,
    }
    return directive;
  };

  Controller.$inject = ['DentalFactory'];
  function Controller(DentalFactory) {
    const vm = this;
    let patients = 0;

    vm.numberOfPeople = 10;
    vm.getNumberOfPeople = function (num) {
      return new Array(num);
    }
    vm.selectNumberOfPeople = function (i) {
      DentalFactory.setNumberOfPeople(i);
    }

  };


})()
