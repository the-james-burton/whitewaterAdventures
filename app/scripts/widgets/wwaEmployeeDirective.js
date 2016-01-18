"use strict";

angular.module('app').directive('wwaEmployee',
    ['dataService',
    function (dataService) {
        return {
            templateUrl: 'views/wwaEmployeeTemplate.html',
            link: function (scope, el, attrs) {
                scope.selectedLocation = null;
                dataService.getEmployee(scope.item.widgetSettings.id)
                .then(function (data) {
                    scope.selectedEmployee = data;
                });
            }
        };
    }]);
