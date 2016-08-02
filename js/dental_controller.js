(function () {
  'use strict';

  angular
  .module('dental')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'DentalFactory', '$log'];
  function MainCtrl($scope, DentalFactory, $log) {
    const vm = this;
    let patients = 0;
    
    vm.numberOfPeople = 10;
    vm.getNumberOfPeople = function (num) {
      return new Array(num);
    }
    vm.selectNumberOfPeople = function (i) {
      DentalFactory.setNumberOfPeople(i);
    }
    vm.services = ['Oral Exam', 'Cleaning', 'Fillings', 'X-Rays', 'Root Canal', 'Crown', 'Upper Denture', 'Braces'];
    patients = DentalFactory.getNumberOfPeople();

    $scope.$watch(function(){
      return DentalFactory.getNumberOfPeople();
    }, function(newValue, oldValue){
      patients = newValue;
      vm.getNumberOfPatients(patients)
    });
    vm.getNumberOfPatients = function (num) {
      return new Array(num)
    }

  };


})()
