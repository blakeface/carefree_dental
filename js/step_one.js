(function () {
  'use strict';

  angular
  .module('dental')
  .directive('dentalStepOne', stepOne);

  function stepOne(){
    const directive = {
      scope: '=',
      restrict: 'E',
      templateUrl: '/partials/step_one.html',
      controller: Controller,
      controllerAs: 'vm',
      bindToController: true,
    }
    return directive;
  };

  Controller.$inject = ['$scope'];
  function Controller($scope) {
    const vm = this;

    vm.faces = ['hi', 'bye'];
    vm.testing = 'hiiii';
  };


})()
