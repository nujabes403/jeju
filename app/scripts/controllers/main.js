'use strict';

/**
 * @ngdoc function
 * @name jejuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jejuApp
 */
angular.module('jejuApp')
  .controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.onSwipeRight = function(){
        window.alert('GOOD!');
        console.log('NICE!');
    };
  });
