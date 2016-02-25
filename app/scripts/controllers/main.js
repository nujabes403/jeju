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
    $scope.currentSlide=0;
    $scope.moveRight = function(){
        if($scope.currentSlide != 3){
            $scope.currentSlide++;
        }
    };
    $scope.moveLeft = function(){
        if($scope.currentSlide != 0){
            $scope.currentSlide--;
        }
    }
  });
