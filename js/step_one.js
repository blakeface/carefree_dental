(function () {
  'use strict';

  angular
  .module('dental')
  .directive('stepOne', stepOne);

  function stepOne(){
    const directive = {
      scope: '=',
      restrict: "E",
      templateUrl: '/partials/step_one.html',
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
