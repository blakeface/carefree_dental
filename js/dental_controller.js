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
          annualSavings: 0,
        }
      }
    }

    vm.services = [
      {
        name: 'Oral Exam',
        savings: 60,
      },
      {
        name: 'Cleaning',
        savings: 60,
      },
      {
        name: 'Fillings',
        savings: 60,
      },
      {
        name: 'X-Rays',
        savings: 60,
      },
      {
        name: 'Root Canal',
        savings: 60,
      },
      {
        name: 'Crown',
        savings: 60,
      },
      {
        name: 'Upper Denture',
        savings: 60,
      },
      {
        name: 'Braces',
        savings: 60,
      },
    ];

  };
})()
