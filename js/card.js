(function () {
  'use strict';

  angular
  .module('dental')
  .directive('dentalCard', dentalCard);

  function dentalCard(){
    const directive = {
      restrict: 'E',
      templateUrl: '/partials/card.html',
    }
    return directive;
  };

})()
