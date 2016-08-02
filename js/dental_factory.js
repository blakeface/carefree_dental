(function () {
  'use strict';

  angular
  .module('dental')
  .factory('DentalFactory', DentalFactory);

  function DentalFactory() {
    let patients = 0;
    return {

      setNumberOfPeople: function (i) {
        patients = i;
      },
      getNumberOfPeople: function () {
        return patients;
      },

    }
  }
})()
