'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the whitewaterAdventuresApp
 */
angular.module('app')
.controller('appController', ['$scope', function ($scope) {
    $scope.state = "unauthorized";

    $scope.signIn = function () {
        $scope.state = 'authorized';
    };
}])
