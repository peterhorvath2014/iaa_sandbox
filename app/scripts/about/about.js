'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workspaceApp
 */
angular.module('iaaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
