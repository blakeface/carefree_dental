(function () {
  'use strict';

  angular
  .module('dental')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope'];
  function MainCtrl($scope) {
    const vm = this;

    vm.maxNumOfPeople = 10;
    vm.createArray = function (n) {
      return new Array(n);
    }

    vm.selectNumberOfPeople = function (num) {
      vm.tableRows = [];
      for (var i = 0; i < num+1; i++) {
        vm.tableRows[i] = {
          annualCost: 0,
        }
      }
    }

    vm.services = ['Oral Exam', 'Cleaning', 'Fillings', 'X-Rays', 'Root Canal', 'Crown', 'Upper Denture', 'Braces'];

  };
})()
