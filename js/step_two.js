(function () {
  'use strict';

  angular
  .module('dental')
  .directive('stepTwo', stepTwo);

  function stepTwo(){
    const directive = {
      scope: '=',
      restrict: "E",
      templateUrl: '/partials/step_two.html',
      controller: Controller,
      controllerAs: 'vm',
      bindToController: true,
    }
    return directive;
  };

  Controller.$inject = [];
  function Controller() {
    const vm = this;
  };


})()
