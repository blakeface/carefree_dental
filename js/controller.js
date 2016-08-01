(function () {
  'use strict';

  angular
  .module('dental')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = [];
  function MainCtrl() {
    const vm = this;
    
    console.log('hi');
  }
})()
